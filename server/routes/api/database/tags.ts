import { defineEventHandler } from 'h3';
import { serverQueryContent } from '#content/server';
import { slugify } from '~/utils/url';

export default defineEventHandler(async (event) => {
  const data = await serverQueryContent(event).find();

  const tagSet = new Set(
    data.flatMap((item: any) =>
      (item.tags ?? []).map((tag: string) => ({
        name: tag,
        slug: slugify(tag),
        image: `${slugify(tag)}.png`,
        thumb: `/images/category/${slugify(tag)}-thumb.png`,
      }))
    )
  );

  const computedTags = Array.from(tagSet);

  const { res } = event.node;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(computedTags));
});
