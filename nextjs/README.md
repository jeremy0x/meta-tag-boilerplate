# Next.js Metadata Configuration

Complete metadata setup for Next.js App Router (Next.js 13+) using the built-in Metadata API.

## Features

- Type-safe metadata configuration
- Built-in SEO
- Static and dynamic metadata support
- Open Graph and Twitter Card support
- Automatic sitemap and robots.txt generation
- Internationalization support
- Search engine verification
- Theme color with dark/light mode
- Favicon and icon management

## Files Included

- `metadata.ts` - Complete static metadata configuration
- `dynamic-metadata-example.tsx` - Example of dynamic metadata generation

## Quick Start

### Option 1: Static Metadata (Recommended for most pages)

Copy the metadata configuration from `metadata.ts` into your `app/layout.tsx`:

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Website',
  description: 'My website description',
  // ... rest of the configuration
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Option 2: Dynamic Metadata (For content-driven pages)

Use `generateMetadata` function for pages that need dynamic content:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const data = await fetchData(params.id)
  
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [data.image],
    },
  }
}
```

See `dynamic-metadata-example.tsx` for a complete example.

## Configuration Guide

### Replace These Placeholders

#### Basic Information

```typescript
title: '{{SITE_NAME}}' // Your site name
description: '{{PAGE_DESCRIPTION}}' // Page description (150-160 chars)
applicationName: '{{SITE_NAME}}' // Application name
```

#### Authors & Creators

```typescript
authors: [{ name: '{{AUTHOR_NAME}}', url: '{{AUTHOR_URL}}' }]
creator: '{{CREATOR_NAME}}'
publisher: '{{PUBLISHER_NAME}}'
```

#### Theme Colors

```typescript
themeColor: [
  { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  { media: '(prefers-color-scheme: dark)', color: '#000000' },
]
```

#### Keywords

```typescript
keywords: ['nextjs', 'react', 'typescript', 'web development']
```

#### Open Graph

```typescript
openGraph: {
  type: 'website', // or 'article', 'book', 'profile', etc.
  url: 'https://example.com',
  siteName: 'My Site',
  title: 'Page Title',
  description: 'Page description',
  images: [{
    url: 'https://example.com/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Image description',
  }],
}
```

#### Twitter

```typescript
twitter: {
  card: 'summary_large_image',
  site: '@yoursite',
  creator: '@yourcreator',
  title: 'Twitter Title',
  description: 'Twitter description',
  images: ['https://example.com/twitter-image.jpg'],
}
```

#### Verification Codes

```typescript
verification: {
  google: 'your-google-verification-code',
  yandex: 'your-yandex-verification-code',
  other: {
    'facebook-domain-verification': 'your-facebook-verification-code',
  },
}
```

## Advanced Usage

### Page-Specific Metadata

You can override metadata in any page:

```typescript
// app/about/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our company',
}

export default function AboutPage() {
  return <div>About content</div>
}
```

### Metadata Template

Use templates in your root layout to automatically format child page titles:

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'My Website',
    template: '%s | My Website', // Child pages will use this template
  },
}

// app/blog/page.tsx
export const metadata: Metadata = {
  title: 'Blog', // Will render as "Blog | My Website"
}
```

### Extending Parent Metadata

Child pages can extend parent metadata:

```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: 'My Post', // Uses template from parent
    description: 'Post description',
    // Other metadata is inherited from parent
  }
}
```

## File-Based Metadata

Next.js also supports file-based metadata:

### favicon.ico, icon.png, apple-icon.png

Place these files in your `app/` directory for automatic favicon support.

### opengraph-image.jpg, twitter-image.jpg

Place these files in any route segment for automatic social media images.

### robots.txt

```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://example.com/sitemap.xml',
  }
}
```

### sitemap.xml

```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://example.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

## Testing Your Metadata

After implementing, test your metadata with these tools:

1. **Facebook Sharing Debugger**: <https://developers.facebook.com/tools/debug/>
2. **Twitter Card Validator**: <https://cards-dev.twitter.com/validator>
3. **LinkedIn Post Inspector**: <https://www.linkedin.com/post-inspector/>
4. **Google Rich Results Test**: <https://search.google.com/test/rich-results>

## Best Practices

1. **Title Length**: Keep titles under 60 characters
2. **Description Length**: Keep descriptions between 150-160 characters
3. **Image Dimensions**: Use 1200x630px for Open Graph images
4. **Image Format**: Use JPG or PNG, keep file size under 1MB
5. **Keywords**: Use 5-10 relevant keywords maximum
6. **Canonical URLs**: Always set canonical URLs to avoid duplicate content
7. **Mobile**: Test metadata on mobile devices
8. **Dynamic Content**: Use `generateMetadata` for content from CMS or database

## Common Metadata Types

### Website (Default)

```typescript
openGraph: {
  type: 'website',
  // ...
}
```

### Blog Article

```typescript
openGraph: {
  type: 'article',
  publishedTime: '2024-01-15T00:00:00.000Z',
  modifiedTime: '2024-01-20T00:00:00.000Z',
  authors: ['Author Name'],
  tags: ['web development', 'nextjs'],
  // ...
}
```

### Product Page

```typescript
openGraph: {
  type: 'product',
  price: {
    amount: '99.99',
    currency: 'USD',
  },
  availability: 'in stock',
  // ...
}
```

## Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js File-Based Metadata](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Schema.org Types](https://schema.org/docs/full.html)

## Migration from Pages Router

If you're migrating from Next.js Pages Router with `next-seo` or custom Head components:

**Before (Pages Router):**

```typescript
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>My Page</title>
        <meta name="description" content="Description" />
      </Head>
      <div>Content</div>
    </>
  )
}
```

**After (App Router):**

```typescript
export const metadata = {
  title: 'My Page',
  description: 'Description',
}

export default function Page() {
  return <div>Content</div>
}
```
