import type { Metadata } from 'next'

/**
 * Dynamic Metadata Generation Example
 * 
 * Use this pattern when you need to generate metadata dynamically based on
 * page content, URL parameters, or data fetched from an API/database.
 * 
 * Place this in your page.tsx file (e.g., app/blog/[slug]/page.tsx)
 */

// Example: Blog Post Page with Dynamic Metadata
interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: PageProps,
): Promise<Metadata> {
  // Fetch data based on the slug
  const post = await fetchBlogPost(params.slug)
  
  // If post not found, return basic metadata
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }
  
  const publishedTime = post.publishedAt.toISOString()
  const modifiedTime = post.updatedAt.toISOString()
  
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name, url: post.author.url }],
    keywords: post.tags,
    
    // Open Graph
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://example.com/blog/${params.slug}`,
      siteName: 'My Blog',
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime,
      modifiedTime,
      authors: [post.author.name],
      tags: post.tags,
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      site: '@yourblog',
      creator: `@${post.author.twitter}`,
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    
    // Canonical URL
    alternates: {
      canonical: `https://example.com/blog/${params.slug}`,
    },
  }
}

// Mock fetch function (replace with your actual data fetching)
async function fetchBlogPost(slug: string) {
  // This is a placeholder - replace with your actual API call or database query
  // Example: const response = await fetch(`https://api.example.com/posts/${slug}`)
  // const post = await response.json()
  
  return {
    title: 'Example Blog Post Title',
    excerpt: 'This is a brief description of the blog post...',
    coverImage: 'https://example.com/images/blog-cover.jpg',
    publishedAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
    author: {
      name: 'John Doe',
      url: 'https://example.com/author/john-doe',
      twitter: 'johndoe',
    },
    tags: ['web development', 'nextjs', 'react'],
  }
}

export default function BlogPostPage({ params }: PageProps) {
  return (
    <article>
      <h1>Blog Post Content</h1>
      {/* Your page content */}
    </article>
  )
}
