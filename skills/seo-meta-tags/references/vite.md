# Vite Metadata Reference

## Source Files

- `vite/index.html` — Static `<head>` template (same placeholder pattern as HTML boilerplate)
- `vite/SEO.tsx` — React dynamic SEO component using `react-helmet-async`
- `vite/SEO.vue` — Vue 3 dynamic SEO component using `@unhead/vue`

## Static Meta Tags (`index.html`)

Identical structure to the HTML boilerplate but Vite-specific:

- Uses `/vite.svg` as the default icon
- Body contains `<div id="app">` mount point and `<script type="module" src="/src/main.ts">`
- Supports Vite env variable injection at build time via `vite-plugin-html`

Tag ordering follows the same convention as the HTML reference: essential → theme → robots → primary → favicons → Open Graph → Twitter → JSON-LD.

### Build-Time Injection with `vite-plugin-html`

```bash
npm install vite-plugin-html -D
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'My Site',
          description: 'My site description',
          ogImage: 'https://example.com/og-image.jpg',
        },
      },
    }),
  ],
})
```

Then in `index.html`:

```html
<title><%= title %></title>
<meta name="description" content="<%= description %>" />
<meta property="og:image" content="<%= ogImage %>" />
```

### Environment Variables

Use Vite env vars for values shared across the app:

```bash
# .env
VITE_SITE_NAME=My Awesome Site
VITE_SITE_URL=https://example.com
VITE_TWITTER_HANDLE=@mysite
VITE_OG_IMAGE=https://example.com/og-default.jpg
```

Access via `import.meta.env.VITE_SITE_NAME` in components.

---

## React SEO Component (`SEO.tsx`)

### React Dependencies

```bash
npm install react-helmet-async
```

### Provider Setup (required once)

```tsx
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
```

### React Props API

```typescript
interface SEOProps {
  title?: string          // default: 'Default Site Title'
  description?: string    // default: 'Default site description'
  keywords?: string[]     // default: []
  author?: string         // default: 'Author Name'
  url?: string            // default: 'https://example.com'
  image?: string          // default: 'https://example.com/og-image.jpg'
  imageAlt?: string       // default: 'Site image'
  siteName?: string       // default: 'Site Name'
  twitterHandle?: string  // default: '@sitehandle'
  type?: 'website' | 'article' | 'product' | 'profile'  // default: 'website'
  publishedTime?: string  // only used when type='article'
  modifiedTime?: string   // only used when type='article'
  canonical?: string      // falls back to url if not provided
}
```

### What the React Component Emits

The `<SEO>` component renders these tags inside `<Helmet>`:

- `<title>` + `<meta name="title">`
- `<meta name="description">`
- `<meta name="keywords">` (only when array is non-empty)
- `<meta name="author">`
- `<link rel="canonical">`
- Full Open Graph set (`og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:image:alt`, `og:site_name`, `og:locale`)
- Article time tags (conditional on `type === 'article'`)
- Full Twitter Card set (`twitter:card`, `twitter:url`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`, `twitter:site`, `twitter:creator`)

### React Usage Examples

**Static page:**

```tsx
<SEO
  title="Home - My Site"
  description="Welcome to my website"
  keywords={['react', 'vite', 'typescript']}
  url="https://example.com"
  image="https://example.com/home-og.jpg"
/>
```

**Dynamic blog post with React Router:**

```tsx
function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => { fetchPost(slug).then(setPost) }, [slug])

  if (!post) return <div>Loading...</div>

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags}
        url={`https://example.com/blog/${slug}`}
        image={post.coverImage}
        type="article"
        publishedTime={post.publishedAt}
        modifiedTime={post.updatedAt}
      />
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  )
}
```

**With environment variables:**

```tsx
<SEO
  siteName={import.meta.env.VITE_SITE_NAME}
  url={import.meta.env.VITE_SITE_URL}
  twitterHandle={import.meta.env.VITE_TWITTER_HANDLE}
  image={import.meta.env.VITE_OG_IMAGE}
/>
```

---

## Vue 3 SEO Component (`SEO.vue`)

### Vue Dependencies

```bash
npm install @unhead/vue
```

### Plugin Setup (required once)

```typescript
// src/main.ts
import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'

const app = createApp(App)
const head = createHead()
app.use(head)
app.mount('#app')
```

### Vue Props API

Same interface as React, using Vue `withDefaults`:

```typescript
interface SEOProps {
  title?: string          // default: 'Default Site Title'
  description?: string    // default: 'Default site description'
  keywords?: string[]     // default: []
  author?: string         // default: 'Author Name'
  url?: string            // default: 'https://example.com'
  image?: string          // default: 'https://example.com/og-image.jpg'
  imageAlt?: string       // default: 'Site image'
  siteName?: string       // default: 'Site Name'
  twitterHandle?: string  // default: '@sitehandle'
  type?: 'website' | 'article' | 'product' | 'profile'  // default: 'website'
  publishedTime?: string
  modifiedTime?: string
  canonical?: string      // falls back to url if not provided
}
```

### What the Vue Component Emits

Uses `useHead()` composable to set:

- `title`
- Meta array: `title`, `description`, `keywords` (conditional), `author`, full OG set, article time tags (conditional), full Twitter set
- Link array: `canonical`
- Template renders `<slot />` only — no visible DOM output

### Vue Usage Examples

**Static page:**

```vue
<template>
  <SEO
    title="Home - My Site"
    description="Welcome to my website"
    :keywords="['vue', 'vite', 'typescript']"
    url="https://example.com"
    image="https://example.com/home-og.jpg"
  />
  <div><h1>Content</h1></div>
</template>
```

**Dynamic blog post with Vue Router:**

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SEO from './components/SEO.vue'

const route = useRoute()
const post = ref(null)
onMounted(async () => { post.value = await fetchPost(route.params.slug) })
</script>

<template>
  <div v-if="post">
    <SEO
      :title="post.title"
      :description="post.excerpt"
      :keywords="post.tags"
      :url="`https://example.com/blog/${route.params.slug}`"
      :image="post.coverImage"
      type="article"
      :published-time="post.publishedAt"
      :modified-time="post.updatedAt"
    />
    <article>
      <h1>{{ post.title }}</h1>
      <div v-html="post.content"></div>
    </article>
  </div>
</template>
```

**With environment variables:**

```vue
<SEO
  :site-name="import.meta.env.VITE_SITE_NAME"
  :url="import.meta.env.VITE_SITE_URL"
  :twitter-handle="import.meta.env.VITE_TWITTER_HANDLE"
  :image="import.meta.env.VITE_OG_IMAGE"
/>
```

---

## JSON-LD Structured Data

The `vite/index.html` template includes a JSON-LD block identical to the HTML boilerplate:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "{{SCHEMA_TYPE}}",
  "name": "{{PAGE_TITLE}}",
  "description": "{{PAGE_DESCRIPTION}}",
  "url": "{{PAGE_URL}}",
  "image": {
    "@type": "ImageObject",
    "url": "{{SCHEMA_IMAGE_URL}}",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Person",
    "name": "{{AUTHOR_NAME}}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "{{PUBLISHER_NAME}}",
    "logo": {
      "@type": "ImageObject",
      "url": "{{PUBLISHER_LOGO_URL}}"
    }
  }
}
</script>
```

For dynamic JSON-LD in React, inject a `<script>` tag via Helmet:

```tsx
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { "@type": "Person", name: post.author },
    })}
  </script>
</Helmet>
```

For Vue, use `useHead()` with a script entry:

```typescript
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: props.title,
      datePublished: props.publishedTime,
    }),
  }],
})
```

Note: The `SEO.tsx` and `SEO.vue` components do not emit JSON-LD — add it separately when structured data is needed.

## Rules

- Keep component props API stable when updating `SEO.tsx` or `SEO.vue` — do not remove or rename existing props without a migration note.
- Ensure emitted metadata includes both Open Graph and Twitter fields whenever equivalents exist.
- Keep sensible defaults in component props so the component is safe to use with minimal configuration.
- The Vue component uses `<slot />` in its template — it renders no visible DOM on its own.
- Static tags in `vite/index.html` are faster than dynamic component tags; prefer static for values that never change per-route.

## Alternative Libraries

| Framework | Recommended | Alternatives |
| --- | --- | --- |
| React | `react-helmet-async` | `react-meta-tags` |
| Vue 3 | `@unhead/vue` | `@vueuse/head` |
| Vue 2 | `vue-meta` | — |
