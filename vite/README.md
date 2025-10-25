# Vite Meta Tag Configuration

Complete metadata setup for Vite projects (React, Vue, and other frameworks).

## Features

- Static meta tags in `index.html`
- Dynamic meta tag components for React and Vue
- SEO optimization
- Open Graph and Twitter Card support
- TypeScript support
- Theme color with dark/light mode
- Favicon and icon management
- Easy copy-paste implementation

## Files Included

- `index.html` - Base HTML template with static meta tags
- `SEO.tsx` - React component for dynamic meta tags (using react-helmet-async)
- `SEO.vue` - Vue 3 component for dynamic meta tags (using @unhead/vue)

## Quick Start

### Option 1: Static Meta Tags (Basic Setup)

Copy the `<head>` section from `index.html` into your Vite project's `index.html` file and replace the placeholder values.

### Option 2: Dynamic Meta Tags (React)

1. **Install Dependencies:**
```bash
npm install react-helmet-async
```

2. **Setup HelmetProvider in your main.tsx:**
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
```

3. **Copy the SEO component:**
Copy `SEO.tsx` to your `src/components/` directory.

4. **Use in your pages:**
```tsx
import { SEO } from './components/SEO'

function HomePage() {
  return (
    <>
      <SEO
        title="Home - My Site"
        description="Welcome to my website"
        keywords={['react', 'vite', 'typescript']}
        url="https://example.com"
        image="https://example.com/og-image.jpg"
      />
      <div>Your page content</div>
    </>
  )
}
```

### Option 3: Dynamic Meta Tags (Vue)

1. **Install Dependencies:**
```bash
npm install @unhead/vue
```

2. **Setup in your main.ts:**
```ts
import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)
const head = createHead()

app.use(head)
app.mount('#app')
```

3. **Copy the SEO component:**
Copy `SEO.vue` to your `src/components/` directory.

4. **Use in your pages:**
```vue
<script setup lang="ts">
import SEO from './components/SEO.vue'
</script>

<template>
  <SEO
    title="Home - My Site"
    description="Welcome to my website"
    :keywords="['vue', 'vite', 'typescript']"
    url="https://example.com"
    image="https://example.com/og-image.jpg"
  />
  
  <div>
    <h1>Your page content</h1>
  </div>
</template>
```

## Configuration Guide

### Static Meta Tags (index.html)

Replace these placeholders in `index.html`:

- `{{PAGE_TITLE}}` - Your page title
- `{{PAGE_DESCRIPTION}}` - Your page description
- `{{KEYWORDS}}` - Comma-separated keywords
- `{{AUTHOR_NAME}}` - Content author name
- `{{PAGE_URL}}` - Your page URL
- `{{CANONICAL_URL}}` - Canonical URL
- `{{THEME_COLOR}}` - Theme color (hex code)
- `{{THEME_COLOR_LIGHT}}` - Light mode theme color
- `{{THEME_COLOR_DARK}}` - Dark mode theme color
- `{{OG_TITLE}}` - Open Graph title
- `{{OG_DESCRIPTION}}` - Open Graph description
- `{{OG_IMAGE_URL}}` - Open Graph image URL (1200x630px)
- `{{OG_IMAGE_ALT}}` - Open Graph image alt text
- `{{SITE_NAME}}` - Your site name
- `{{TWITTER_TITLE}}` - Twitter card title
- `{{TWITTER_DESCRIPTION}}` - Twitter card description
- `{{TWITTER_IMAGE_URL}}` - Twitter image URL
- `{{TWITTER_IMAGE_ALT}}` - Twitter image alt text
- `{{TWITTER_HANDLE}}` - Your Twitter handle (e.g., @username)
- `{{TWITTER_CREATOR_HANDLE}}` - Creator's Twitter handle
- `{{SCHEMA_TYPE}}` - Schema.org type (e.g., WebSite, Article)
- `{{SCHEMA_IMAGE_URL}}` - Schema.org image URL
- `{{PUBLISHER_NAME}}` - Publisher name
- `{{PUBLISHER_LOGO_URL}}` - Publisher logo URL

### Dynamic Meta Tags (React/Vue)

Use the component props to set metadata dynamically:

```tsx
// React Example
<SEO
  title="Blog Post Title"
  description="This is a blog post about..."
  keywords={['react', 'vite', 'blog']}
  author="John Doe"
  url="https://example.com/blog/post-slug"
  image="https://example.com/images/blog-post.jpg"
  imageAlt="Blog post cover image"
  siteName="My Blog"
  twitterHandle="@myblog"
  type="article"
  publishedTime="2024-01-15T00:00:00Z"
  modifiedTime="2024-01-20T00:00:00Z"
  canonical="https://example.com/blog/post-slug"
/>
```

```vue
<!-- Vue Example -->
<SEO
  title="Blog Post Title"
  description="This is a blog post about..."
  :keywords="['vue', 'vite', 'blog']"
  author="John Doe"
  url="https://example.com/blog/post-slug"
  image="https://example.com/images/blog-post.jpg"
  image-alt="Blog post cover image"
  site-name="My Blog"
  twitter-handle="@myblog"
  type="article"
  published-time="2024-01-15T00:00:00Z"
  modified-time="2024-01-20T00:00:00Z"
  canonical="https://example.com/blog/post-slug"
/>
```

## Advanced Usage

### Per-Route Meta Tags (React Router)

```tsx
import { SEO } from './components/SEO'

function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetchPost(slug).then(setPost)
  }, [slug])

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
      />
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  )
}
```

### Per-Route Meta Tags (Vue Router)

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SEO from './components/SEO.vue'

const route = useRoute()
const post = ref(null)

onMounted(async () => {
  post.value = await fetchPost(route.params.slug)
})
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
    />
    <article>
      <h1>{{ post.title }}</h1>
      <div v-html="post.content"></div>
    </article>
  </div>
</template>
```

### Environment Variables

Use Vite's environment variables for consistent values across your app:

**.env**
```bash
VITE_SITE_NAME=My Awesome Site
VITE_SITE_URL=https://example.com
VITE_TWITTER_HANDLE=@mysite
VITE_OG_IMAGE=https://example.com/og-default.jpg
```

**Usage in React:**
```tsx
<SEO
  siteName={import.meta.env.VITE_SITE_NAME}
  url={import.meta.env.VITE_SITE_URL}
  twitterHandle={import.meta.env.VITE_TWITTER_HANDLE}
  image={import.meta.env.VITE_OG_IMAGE}
/>
```

**Usage in Vue:**
```vue
<SEO
  :site-name="import.meta.env.VITE_SITE_NAME"
  :url="import.meta.env.VITE_SITE_URL"
  :twitter-handle="import.meta.env.VITE_TWITTER_HANDLE"
  :image="import.meta.env.VITE_OG_IMAGE"
/>
```

## Vite Plugin for SEO

For static site generation, consider using `vite-plugin-html` to inject metadata at build time:

```bash
npm install vite-plugin-html -D
```

**vite.config.ts:**
```ts
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

**index.html:**
```html
<title><%= title %></title>
<meta name="description" content="<%= description %>" />
<meta property="og:image" content="<%= ogImage %>" />
```

## Testing Your Metadata

After implementing, test your metadata with these tools:

1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Open Graph Check**: https://www.opengraph.xyz/

## Best Practices

1. **Title Length**: Keep titles under 60 characters
2. **Description Length**: Keep descriptions between 150-160 characters
3. **Image Dimensions**: Use 1200x630px for social media images
4. **Image Format**: Use JPG or PNG, keep file size under 1MB
5. **Keywords**: Use 5-10 relevant keywords maximum
6. **Canonical URLs**: Always set canonical URLs to avoid duplicate content
7. **Dynamic Updates**: Use the React/Vue components for dynamic content
8. **Performance**: Static meta tags in `index.html` are faster than dynamic

## Alternative Libraries

### React
- **react-helmet-async** (Recommended) - Async version of react-helmet
- **next-seo** - If migrating to Next.js later
- **react-meta-tags** - Simple alternative

### Vue
- **@unhead/vue** (Recommended) - Modern head management for Vue
- **@vueuse/head** - Composable alternative
- **vue-meta** - For Vue 2 projects

## Migration Notes

### From Create React App
CRA projects can directly use the React setup. Simply follow the React installation steps.

### From Vue CLI
Vue CLI projects can use the Vue setup. Install @unhead/vue and follow the Vue installation steps.

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [react-helmet-async](https://github.com/staylor/react-helmet-async)
- [@unhead/vue](https://unhead.unjs.io/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Schema.org](https://schema.org/)
