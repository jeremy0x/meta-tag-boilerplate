# Next.js Metadata Reference

## Source Files

- `nextjs/metadata.ts` — Complete static Metadata object for `app/layout.tsx` or `app/page.tsx`
- `nextjs/dynamic-metadata-example.tsx` — `generateMetadata` pattern for content-driven pages

## Static Metadata (`metadata.ts`)

Use for pages where all values are known at build time. Export from `app/layout.tsx` (site-wide) or any `page.tsx` (route-specific).

### Full Object Structure

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Title with template for child pages
  title: {
    default: '{{SITE_NAME}}',
    template: '%s | {{SITE_NAME}}',
  },
  description: '{{PAGE_DESCRIPTION}}',
  applicationName: '{{SITE_NAME}}',

  // Authors & attribution
  authors: [{ name: '{{AUTHOR_NAME}}', url: '{{AUTHOR_URL}}' }],
  generator: 'Next.js',
  keywords: ['{{KEYWORD_1}}', '{{KEYWORD_2}}', '{{KEYWORD_3}}'],
  referrer: 'origin-when-cross-origin',
  creator: '{{CREATOR_NAME}}',
  publisher: '{{PUBLISHER_NAME}}',

  // Theme
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '{{THEME_COLOR_LIGHT}}' },
    { media: '(prefers-color-scheme: dark)', color: '{{THEME_COLOR_DARK}}' },
  ],
  colorScheme: 'light dark',

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
  manifest: '/site.webmanifest',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '{{PAGE_URL}}',
    siteName: '{{SITE_NAME}}',
    title: '{{OG_TITLE}}',
    description: '{{OG_DESCRIPTION}}',
    images: [{
      url: '{{OG_IMAGE_URL}}',
      width: 1200,
      height: 630,
      alt: '{{OG_IMAGE_ALT}}',
    }],
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

  // Verification
  verification: {
    google: '{{GOOGLE_VERIFICATION_CODE}}',
    yandex: '{{YANDEX_VERIFICATION_CODE}}',
    other: {
      'facebook-domain-verification': '{{FACEBOOK_VERIFICATION_CODE}}',
    },
  },

  // Internationalization & canonical
  alternates: {
    canonical: '{{CANONICAL_URL}}',
    languages: {
      'en-US': '{{EN_URL}}',
      'es-ES': '{{ES_URL}}',
    },
  },

  category: '{{CATEGORY}}',
}
```

### Title Template

Root layout sets the template; child pages set only the page-specific part:

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: { default: 'My Site', template: '%s | My Site' },
}

// app/about/page.tsx — renders as "About | My Site"
export const metadata: Metadata = { title: 'About' }
```

### Page-Level Override

Child pages can override any field. Unset fields inherit from the nearest parent layout.

```typescript
// app/blog/page.tsx
export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest posts.',
  openGraph: { images: ['/blog-og.jpg'] },
}
```

## Dynamic Metadata (`generateMetadata`)

Use only when metadata depends on route params, search params, or fetched data.

```typescript
import type { Metadata } from 'next'

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await fetchBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name, url: post.author.url }],
    keywords: post.tags,

    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://example.com/blog/${params.slug}`,
      siteName: 'My Blog',
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.publishedAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: [post.author.name],
      tags: post.tags,
    },

    twitter: {
      card: 'summary_large_image',
      site: '@yourblog',
      creator: `@${post.author.twitter}`,
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },

    alternates: {
      canonical: `https://example.com/blog/${params.slug}`,
    },
  }
}
```

Always include a fallback return for missing data (see `if (!post)` above).

## File-Based Metadata

Next.js also supports metadata via special files placed in any route segment's directory:

| File | Purpose |
| --- | --- |
| `favicon.ico` | Auto-served favicon (place in `app/`) |
| `icon.png` / `icon.svg` | App icon |
| `apple-icon.png` | Apple touch icon |
| `opengraph-image.jpg` | Auto-used as OG image for that route segment |
| `twitter-image.jpg` | Auto-used as Twitter image |

### `robots.ts`

```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/private/' },
    sitemap: 'https://example.com/sitemap.xml',
  }
}
```

### `sitemap.ts`

```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://example.com', lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
    { url: 'https://example.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
```

## Open Graph Type Variants

### Article (Blog Post)

```typescript
openGraph: {
  type: 'article',
  publishedTime: '2024-01-15T00:00:00.000Z',
  modifiedTime: '2024-01-20T00:00:00.000Z',
  authors: ['Author Name'],
  tags: ['web development', 'nextjs'],
}
```

### Product

```typescript
openGraph: {
  type: 'product',
  // price and availability are not in Next.js types; use JSON-LD for product structured data
}
```

## Additional Metadata Fields

These fields in `metadata.ts` are less commonly changed but should be preserved:

| Field | Value | Purpose |
| --- | --- | --- |
| `applicationName` | `'{{SITE_NAME}}'` | Used in web app manifests and browser UI |
| `referrer` | `'origin-when-cross-origin'` | Controls Referer header sent on navigation |
| `colorScheme` | `'light dark'` | Tells browser which color schemes the page supports |
| `generator` | `'Next.js'` | Identifies the framework (optional, cosmetic) |
| `category` | `'{{CATEGORY}}'` | Free-text content category (e.g. `'technology'`, `'finance'`) |

## Search Engine Verification

```typescript
verification: {
  google: process.env.GOOGLE_VERIFICATION || '',
  yandex: process.env.YANDEX_VERIFICATION || '',
  other: {
    'facebook-domain-verification': process.env.FB_VERIFICATION || '',
  },
}
```

Never hardcode verification codes in open-source repos. Use environment variables or a `.env.local` file.

## Rules

- Prefer typed `Metadata` objects for static pages.
- Use `generateMetadata` only when route data is dynamic.
- Preserve inherited metadata behavior — child pages extend, not replace, parent metadata unless explicitly overriding.
- Always include a title template in the root layout.
- Keep `verification` codes out of version control for open-source repos (use env vars).
- JSON-LD structured data should be added via a `<script>` tag in the page component, not in the Metadata object (Next.js Metadata API does not have a JSON-LD field).
- Preserve `referrer`, `colorScheme`, and `applicationName` when editing — they are easy to accidentally delete.
