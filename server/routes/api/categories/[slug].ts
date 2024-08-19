import { defineEventHandler, H3Event, setResponseStatus } from 'h3';
import { serverQueryContent } from '#content/server';
import { slugify } from '~/utils/url';

// Definisikan interface untuk params
interface Params {
  slug?: string;
}

export default defineEventHandler(async (event: H3Event) => {
  // Cast params ke tipe yang kita definisikan
  const params = event.context.params as Params;
  const slug = params?.slug;

  const data = await serverQueryContent(event).find();

  // Menggunakan objek untuk menghindari duplikasi
  const tagMap = new Map(
    data.flatMap((item: any) =>
      (item.category ?? []).map((categories: string) => [
        slugify(categories), // Key untuk map
        {
          name: categories,
          slug: slugify(categories),
          image: `/images/categories/${slugify(categories)}.png`,
          thumb: `/images/categories/${slugify(categories)}-thumb.png`,
        },
      ])
    )
  );

  const computedCategories = Array.from(tagMap.values());

  // Filter berdasarkan slug jika slug ada dalam URL
  const filteredCategory = slug
    ? computedCategories.find((tag: any) => tag.slug === slug)
    : computedCategories[0]; // Mengambil tag pertama jika tidak ada slug
  
    setResponseStatus(event, filteredCategory ? 200 : 404, "Tag Not Found")

  const { res } = event.node;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    data: filteredCategory || null,
    message: filteredCategory ? 'Success' : 'Tag not found',
    success: !!filteredCategory,
  }));
});