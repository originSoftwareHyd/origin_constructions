import { Inter } from 'next/font/google'
import './globals.css'
import { siteData } from '../data/siteData'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  metadataBase: new URL('https://originconstruction.in'),
  title: {
    default: `${siteData.brand.name} — ${siteData.brand.tagline}`,
    template: `%s | ${siteData.brand.name}`
  },
  description: siteData.hero.description,
  keywords: [
    'Origin Construction',
    'construction',
    'interior designing',
    'renovations',
    'architectural design',
    'Hyderabad construction'
  ],
  alternates: {
    canonical: 'https://originconstruction.in/'
  },
  openGraph: {
    type: 'website',
    url: 'https://originconstruction.in/',
    title: `${siteData.brand.name} — ${siteData.brand.tagline}`,
    description: siteData.hero.description,
    siteName: siteData.brand.name
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteData.brand.name} — ${siteData.brand.tagline}`,
    description: siteData.hero.description
  },
  icons: {
    icon: '/logo/origin-mark.png',
    shortcut: '/logo/origin-mark.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
