import { defineEventHandler } from 'h3';
import { generateSitemap } from '../../utils/sitemap.ts';
import { serverQueryContent } from '#content/server';

export default defineEventHandler(async (event) => {
  const data = await serverQueryContent(event).find();

  // Buat rute untuk setiap item data
  const routes = data.sort(
		(a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
	).map(item => {
    const url = item._path ? item._path.replace(/^pages/, 'page').replace(/^articles/, 'artikel') : '/';
    return {
      url,
      changefreq: 'yearly',
      priority: 0.5,
      lastmod: item.updated_at
    };
  }).filter(route => route.url.startsWith('/page'));

  const sitemap = generateSitemap(routes);

  event.node.res.setHeader('Content-Type', 'application/xml');
  event.node.res.end(sitemap);
});
