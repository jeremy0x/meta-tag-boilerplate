# HTML Meta Tag Reference

## Source File

`html/index.html` — Complete `<head>` boilerplate for static sites or any-backend projects.

## Structure

The `<head>` section is organized in this order:

1. Essential meta (`charset`, `viewport`, `X-UA-Compatible`)
2. Theme color (default + light/dark media queries)
3. SEO meta (`robots`, `googlebot`, `canonical`)
4. Primary meta (`title`, `description`, `keywords`, `author`)
5. Internationalization (`hreflang` alternates)
6. Favicons & manifest
7. Open Graph tags
8. Twitter Card tags
9. JSON-LD structured data
10. Performance hints (`preconnect`, `dns-prefetch`)

Preserve this ordering when editing.

## Complete Tag Reference

### Essential Meta

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

### Theme Color

```html
<meta name="theme-color" content="{{THEME_COLOR}}" />
<meta name="theme-color" media="(prefers-color-scheme: light)" content="{{THEME_COLOR_LIGHT}}" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="{{THEME_COLOR_DARK}}" />
```

### Robots & Canonical

```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="googlebot" content="index, follow" />
<link rel="canonical" href="{{CANONICAL_URL}}" />
```

### Primary Meta

```html
<title>{{PAGE_TITLE}}</title>
<meta name="title" content="{{PAGE_TITLE}}" />
<meta name="description" content="{{PAGE_DESCRIPTION}}" />
<meta name="keywords" content="{{KEYWORDS}}" />
<meta name="author" content="{{AUTHOR_NAME}}" />
```

### Internationalization

```html
<link rel="alternate" hreflang="en" href="{{ALTERNATE_EN_URL}}" />
<link rel="alternate" hreflang="x-default" href="{{ALTERNATE_DEFAULT_URL}}" />
```

Add more `hreflang` tags as needed. Each must point to an absolute URL.

### Favicons

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="{{FAVICON_32x32_URL}}" />
<link rel="icon" type="image/png" sizes="16x16" href="{{FAVICON_16x16_URL}}" />
<link rel="apple-touch-icon" sizes="180x180" href="{{APPLE_TOUCH_ICON_URL}}" />
<link rel="manifest" href="/site.webmanifest" />
```

### Open Graph

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="{{PAGE_URL}}" />
<meta property="og:title" content="{{OG_TITLE}}" />
<meta property="og:description" content="{{OG_DESCRIPTION}}" />
<meta property="og:image" content="{{OG_IMAGE_URL}}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="{{OG_IMAGE_ALT}}" />
<meta property="og:site_name" content="{{SITE_NAME}}" />
<meta property="og:locale" content="en_US" />
```

For article pages add:

```html
<meta property="og:type" content="article" />
<meta property="article:published_time" content="2024-01-15T00:00:00.000Z" />
<meta property="article:modified_time" content="2024-01-20T00:00:00.000Z" />
<meta property="article:author" content="Author Name" />
<meta property="article:tag" content="web development" />
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="{{PAGE_URL}}" />
<meta name="twitter:title" content="{{TWITTER_TITLE}}" />
<meta name="twitter:description" content="{{TWITTER_DESCRIPTION}}" />
<meta name="twitter:image" content="{{TWITTER_IMAGE_URL}}" />
<meta name="twitter:image:alt" content="{{TWITTER_IMAGE_ALT}}" />
<meta name="twitter:site" content="{{TWITTER_HANDLE}}" />
<meta name="twitter:creator" content="{{TWITTER_CREATOR_HANDLE}}" />
```

### JSON-LD Structured Data

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

#### Schema Type Examples

**WebSite** (home page):

```json
{ "@type": "WebSite", "potentialAction": { "@type": "SearchAction", "target": "https://example.com/search?q={search_term}", "query-input": "required name=search_term" } }
```

**Article** (blog post):

```json
{ "@type": "Article", "headline": "Post Title", "datePublished": "2024-01-15T00:00:00Z", "dateModified": "2024-01-20T00:00:00Z" }
```

**Organization** (about page):

```json
{ "@type": "Organization", "logo": "https://example.com/logo.png", "sameAs": ["https://twitter.com/example", "https://github.com/example"] }
```

### Performance Hints

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
```

Only include hints for domains actually used on the page.

## Rules

- Edit only tags inside `<head>` unless explicitly asked otherwise.
- Keep canonical and hreflang links aligned with provided URLs.
- Keep JSON-LD as valid JSON — validate before finishing.
- Preserve tag ordering as documented above.
- Number values like `og:image:width` remain as strings in HTML (`content="1200"`).
