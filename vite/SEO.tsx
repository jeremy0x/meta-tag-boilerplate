import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * SEO Component for Vite + React
 * 
 * This component uses react-helmet-async for dynamic meta tag management.
 * 
 * Installation:
 * npm install react-helmet-async
 * 
 * Setup in main.tsx:
 * import { HelmetProvider } from 'react-helmet-async'
 * 
 * ReactDOM.createRoot(document.getElementById('root')!).render(
 *   <React.StrictMode>
 *     <HelmetProvider>
 *       <App />
 *     </HelmetProvider>
 *   </React.StrictMode>,
 * )
 */

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  author?: string
  url?: string
  image?: string
  imageAlt?: string
  siteName?: string
  twitterHandle?: string
  type?: 'website' | 'article' | 'product' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  canonical?: string
}

export function SEO({
  title = 'Default Site Title',
  description = 'Default site description',
  keywords = [],
  author = 'Author Name',
  url = 'https://example.com',
  image = 'https://example.com/og-image.jpg',
  imageAlt = 'Site image',
  siteName = 'Site Name',
  twitterHandle = '@sitehandle',
  type = 'website',
  publishedTime,
  modifiedTime,
  canonical,
}: SEOProps) {
  // Update document title as fallback
  useEffect(() => {
    document.title = title
  }, [title])

  const canonicalUrl = canonical || url

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta name="author" content={author} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
    </Helmet>
  )
}

/**
 * Example Usage:
 * 
 * import { SEO } from './components/SEO'
 * 
 * function HomePage() {
 *   return (
 *     <>
 *       <SEO
 *         title="Home - My Awesome Site"
 *         description="Welcome to my awesome website"
 *         keywords={['react', 'vite', 'typescript']}
 *         url="https://example.com"
 *         image="https://example.com/home-og.jpg"
 *       />
 *       <div>Your page content</div>
 *     </>
 *   )
 * }
 * 
 * function BlogPost({ post }) {
 *   return (
 *     <>
 *       <SEO
 *         title={post.title}
 *         description={post.excerpt}
 *         keywords={post.tags}
 *         url={`https://example.com/blog/${post.slug}`}
 *         image={post.coverImage}
 *         type="article"
 *         publishedTime={post.publishedAt}
 *         modifiedTime={post.updatedAt}
 *       />
 *       <article>
 *         <h1>{post.title}</h1>
 *         {post.content}
 *       </article>
 *     </>
 *   )
 * }
 */

/**
 * For TypeScript users, you can create a custom hook for commonly used metadata:
 */
export function useSEO(props: SEOProps) {
  return <SEO {...props} />
}
