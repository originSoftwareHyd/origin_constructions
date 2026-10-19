import { siteData } from '../data/siteData'

export const dynamic = 'force-static'

export default function sitemap() {
  return [
    {
      url: `${siteData.seo.siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    }
  ]
}
