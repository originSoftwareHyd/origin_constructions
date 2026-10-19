import { Inter } from 'next/font/google'
import './globals.css'
import { siteData } from '../data/siteData'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const { brand, seo } = siteData

export const metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${brand.name} Hyderabad`
  },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: brand.name,
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  category: 'Construction',
  alternates: {
    canonical: `${seo.siteUrl}/`
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${seo.siteUrl}/`,
    title: seo.title,
    description: seo.description,
    siteName: brand.name
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description
  },
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad, Telangana',
    'geo.position': '17.3616;78.4110',
    ICBM: '17.3616, 78.4110'
  },
  icons: {
    icon: '/logo/origin%20softwares%20favicon%20.png',
    shortcut: '/logo/origin%20softwares%20favicon%20.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="font-sans">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
