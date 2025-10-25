<script setup lang="ts">
/**
 * SEO Component for Vite + Vue 3
 * 
 * This component uses @unhead/vue (or @vueuse/head) for meta tag management.
 * 
 * Installation:
 * npm install @unhead/vue
 * 
 * Setup in main.ts:
 * import { createHead } from '@unhead/vue'
 * 
 * const app = createApp(App)
 * const head = createHead()
 * app.use(head)
 * app.mount('#app')
 */

import { useHead } from '@unhead/vue'

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

const props = withDefaults(defineProps<SEOProps>(), {
  title: 'Default Site Title',
  description: 'Default site description',
  keywords: () => [],
  author: 'Author Name',
  url: 'https://example.com',
  image: 'https://example.com/og-image.jpg',
  imageAlt: 'Site image',
  siteName: 'Site Name',
  twitterHandle: '@sitehandle',
  type: 'website',
})

const canonicalUrl = props.canonical || props.url

useHead({
  title: props.title,
  meta: [
    // Primary Meta Tags
    { name: 'title', content: props.title },
    { name: 'description', content: props.description },
    ...(props.keywords.length > 0 
      ? [{ name: 'keywords', content: props.keywords.join(', ') }] 
      : []
    ),
    { name: 'author', content: props.author },

    // Open Graph / Facebook
    { property: 'og:type', content: props.type },
    { property: 'og:url', content: props.url },
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:image', content: props.image },
    { property: 'og:image:alt', content: props.imageAlt },
    { property: 'og:site_name', content: props.siteName },
    { property: 'og:locale', content: 'en_US' },
    
    // Article specific meta tags
    ...(props.type === 'article' && props.publishedTime
      ? [{ property: 'article:published_time', content: props.publishedTime }]
      : []
    ),
    ...(props.type === 'article' && props.modifiedTime
      ? [{ property: 'article:modified_time', content: props.modifiedTime }]
      : []
    ),

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: props.url },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: props.image },
    { name: 'twitter:image:alt', content: props.imageAlt },
    { name: 'twitter:site', content: props.twitterHandle },
    { name: 'twitter:creator', content: props.twitterHandle },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})
</script>

<template>
  <!-- This component doesn't render anything visible -->
  <slot />
</template>

<!--
Example Usage:

<script setup lang="ts">
import SEO from './components/SEO.vue'
</script>

<template>
  <SEO
    title="Home - My Awesome Site"
    description="Welcome to my awesome website"
    :keywords="['vue', 'vite', 'typescript']"
    url="https://example.com"
    image="https://example.com/home-og.jpg"
  />
  
  <div>
    <h1>Your page content</h1>
  </div>
</template>

For a blog post:

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SEO from './components/SEO.vue'

const post = ref(null)

onMounted(async () => {
  // Fetch post data
  post.value = await fetchPost()
})
</script>

<template>
  <div v-if="post">
    <SEO
      :title="post.title"
      :description="post.excerpt"
      :keywords="post.tags"
      :url="`https://example.com/blog/${post.slug}`"
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
-->
