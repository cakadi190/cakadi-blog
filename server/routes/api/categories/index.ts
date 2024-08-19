import { defineEventHandler } from 'h3';
import { serverQueryContent } from '#content/server';
import { slugify } from '~/utils/url';

export default defineEventHandler(async (event) => {
  const data = await serverQueryContent(event).find();

  const tagSet = new Set(
    data.flatMap((item: any) =>
      (item.category ?? []).map((category: string) => ({
        name: category,
        slug: slugify(category),
        image: `/images/category/${slugify(category)}.png`,
        thumb: `/images/category/${slugify(category)}-thumb.png`,
      }))
    )
  );

  const computedCategories = Array.from(tagSet);

  const { res } = event.node;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    data: computedCategories,
    success: !!computedCategories,
    message: computedCategories ? 'Success' : 'Tag not found',
  }));
});
