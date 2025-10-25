import type { Metadata } from 'next'

/**
 * Next.js Metadata Configuration
 * 
 * This is a complete metadata setup for Next.js App Router (Next.js 13+).
 * Copy this into your app/layout.tsx or app/page.tsx file.
 * 
 * Documentation: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: '{{SITE_NAME}}',
    template: '%s | {{SITE_NAME}}', // Template for child pages
  },
  description: '{{PAGE_DESCRIPTION}}',
  
  // Application Name
  applicationName: '{{SITE_NAME}}',
  
  // Authors
  authors: [
    { name: '{{AUTHOR_NAME}}', url: '{{AUTHOR_URL}}' },
  ],
  
  // Generator
  generator: 'Next.js',
  
  // Keywords
  keywords: ['{{KEYWORD_1}}', '{{KEYWORD_2}}', '{{KEYWORD_3}}'],
  
  // Referrer Policy
  referrer: 'origin-when-cross-origin',
  
  // Theme Color
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '{{THEME_COLOR_LIGHT}}' },
    { media: '(prefers-color-scheme: dark)', color: '{{THEME_COLOR_DARK}}' },
  ],
  
  // Color Scheme
  colorScheme: 'light dark',
  
  // Creator
  creator: '{{CREATOR_NAME}}',
  publisher: '{{PUBLISHER_NAME}}',
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '{{PAGE_URL}}',
    siteName: '{{SITE_NAME}}',
    title: '{{OG_TITLE}}',
    description: '{{OG_DESCRIPTION}}',
    images: [
      {
        url: '{{OG_IMAGE_URL}}',
        width: 1200,
        height: 630,
        alt: '{{OG_IMAGE_ALT}}',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    site: '{{TWITTER_HANDLE}}',
    creator: '{{TWITTER_CREATOR_HANDLE}}',
    title: '{{TWITTER_TITLE}}',
    description: '{{TWITTER_DESCRIPTION}}',
    images: ['{{TWITTER_IMAGE_URL}}'],
  },
  
  // Verification (for search engines and services)
  verification: {
    google: '{{GOOGLE_VERIFICATION_CODE}}',
    yandex: '{{YANDEX_VERIFICATION_CODE}}',
    other: {
      'facebook-domain-verification': '{{FACEBOOK_VERIFICATION_CODE}}',
    },
  },
  
  // Alternates (for internationalization and canonical URLs)
  alternates: {
    canonical: '{{CANONICAL_URL}}',
    languages: {
      'en-US': '{{EN_URL}}',
      'es-ES': '{{ES_URL}}',
      // Add more languages as needed
    },
  },
  
  // Category
  category: '{{CATEGORY}}',
}

/**
 * Example usage in app/layout.tsx:
 * 
 * import type { Metadata } from 'next'
 * import { Inter } from 'next/font/google'
 * import './globals.css'
 * 
 * const inter = Inter({ subsets: ['latin'] })
 * 
 * export const metadata: Metadata = {
 *   // ... paste the metadata configuration above
 * }
 * 
 * export default function RootLayout({
 *   children,
 * }: {
 *   children: React.ReactNode
 * }) {
 *   return (
 *     <html lang="en">
 *       <body className={inter.className}>{children}</body>
 *     </html>
 *   )
 * }
 */

/**
 * For dynamic metadata based on page content, use generateMetadata:
 * 
 * export async function generateMetadata({ params }): Promise<Metadata> {
 *   // Fetch data
 *   const data = await fetchData(params.id)
 *   
 *   return {
 *     title: data.title,
 *     description: data.description,
 *     openGraph: {
 *       images: [data.image],
 *     },
 *   }
 * }
 */
