import { siteData } from '../data/siteData'

export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteData.seo.siteUrl}/sitemap.xml`,
    host: siteData.seo.siteUrl
  }
}
