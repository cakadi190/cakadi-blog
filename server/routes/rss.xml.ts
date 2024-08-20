import { defineEventHandler } from 'h3';
import { serverQueryContent } from '#content/server'
import { Feed } from 'feed'

export default defineEventHandler(async (event) => {
  const feed = new Feed({
    id: '01',
    title: 'Blog RSS Feed',
    description: 'RSS Feed untuk Blog',
    link: 'https://blog.cakadi.id/rss.xml',
    language: 'en',
    favicon: 'https://blog.cakadi.id/favicon.ico',
    copyright: `All rights reserved ${new Date().getFullYear()}, Catatan Cak Adi`
  })

  const articles = await serverQueryContent(event).sort({ createdAt: -1 }).find()

  articles.forEach((article: any) => {
    console.log(article)
    if(!article._path.includes('page')) {
      feed.addItem({
        title: String(article.title),
        id: String(article.slug),
        link: `https://blog.cakadi.id/${article._path.replace('/articles/', '')}`,
        description: article.description ? String(article.description) : '',
        // content: article.body ? String(article.body) : '',
        date: new Date(article.created_at),
        author: [
          {
            name: String(article.author),
            link: `https://blog.cakadi.id/author/${article.authorSlug}`
          }
        ]
      })
    }
  })

  event.node.res.setHeader('Content-Type', 'application/xml')
  return feed.rss2()
})
