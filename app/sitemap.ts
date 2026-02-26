import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/utils/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteMetadata.siteUrl
  const posts = await getAllFilesFrontMatter('blog')

  const blogRoutes = posts.flatMap((post) => [
    {
      url: `${siteUrl}/en/blog/${post.slug}`,
      lastModified: post.date || new Date().toISOString().split('T')[0],
    },
    {
      url: `${siteUrl}/vn/blog/${post.slug}`,
      lastModified: post.date || new Date().toISOString().split('T')[0],
    },
  ])

  const productSlugs = ['polkadot-agent-kit', 'speedgrowth-ai']
  const productRoutes = productSlugs.flatMap((slug) => [
    {
      url: `${siteUrl}/en/products/${slug}`,
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      url: `${siteUrl}/vn/products/${slug}`,
      lastModified: new Date().toISOString().split('T')[0],
    },
  ])

  const routes = ['', 'en', 'vn', 'en/blog', 'vn/blog', 'en/products', 'vn/products'].map(
    (route) => ({
      url: `${siteUrl}/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  )

  return [...routes, ...blogRoutes, ...productRoutes]
}
