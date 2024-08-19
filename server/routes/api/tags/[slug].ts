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
      (item.tags ?? []).map((tag: string) => [
        slugify(tag), // Key untuk map
        {
          name: tag,
          slug: slugify(tag),
          image: `/images/tags/${slugify(tag)}.png`,
          thumb: `/images/category/${slugify(tag)}-thumb.png`,
        },
      ])
    )
  );

  const computedTags = Array.from(tagMap.values());

  // Filter berdasarkan slug jika slug ada dalam URL
  const filteredTag = slug
    ? computedTags.find((tag: any) => tag.slug === slug)
    : computedTags[0]; // Mengambil tag pertama jika tidak ada slug
  
  setResponseStatus(event, filteredTag ? 200 : 404, "Tag Not Found")

  const { res } = event.node;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    data: filteredTag || null,
    message: filteredTag ? 'Success' : 'Tag not found',
    success: !!filteredTag,
  }));
});