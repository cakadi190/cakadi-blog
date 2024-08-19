import { defineEventHandler } from 'h3';
import { generateSitemap } from '../../utils/sitemap.js';
import { serverQueryContent } from '#content/server';

export default defineEventHandler(async (event) => {
	const data = await serverQueryContent(event).find();

	// Ekstrak kategori unik dan buat rutenya
	const routes = [...new Set(
		data.flatMap(item => item.category).filter(Boolean)
	)].map(category => ({
		url: `/kategori/${category.toLowerCase().replace(/\s+/g, '-')}`,
		changefreq: 'monthly',
		priority: 0.8,
		lastmod: data[0].updated_at,
	}));

	const sitemap = generateSitemap(routes);

	event.node.res.setHeader('Content-Type', 'application/xml');
	event.node.res.end(sitemap);
});
