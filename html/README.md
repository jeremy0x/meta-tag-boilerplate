# HTML Meta Tag Boilerplate

A comprehensive HTML boilerplate with modern meta tags for SEO, social media, and web performance optimization.

## Features

- Essential meta tags (charset, viewport, X-UA-Compatible)
- Theme color with dark/light mode support
- Enhanced SEO tags (robots, canonical, author)
- Complete Open Graph tags for Facebook
- Twitter Card tags
- Schema.org structured data (JSON-LD)
- Favicon support (multiple sizes)
- Web manifest support
- Internationalization (hreflang)
- Performance optimization hints (preconnect, dns-prefetch)

## Usage

1. Copy the content of `index.html` to your HTML file's `<head>` section
2. Replace all placeholder values marked with `{{PLACEHOLDER_NAME}}`
3. Customize according to your needs

## Placeholder Values

Replace these placeholders with your actual values:

### Basic Information
- `{{PAGE_TITLE}}` - Your page title (60 characters max recommended)
- `{{PAGE_DESCRIPTION}}` - Your page description (155 characters max recommended)
- `{{PAGE_URL}}` - Your page's canonical URL
- `{{CANONICAL_URL}}` - Your page's canonical URL (usually same as PAGE_URL)
- `{{KEYWORDS}}` - Comma-separated keywords (optional, less important for modern SEO)
- `{{AUTHOR_NAME}}` - Content author name
- `{{PUBLISHER_NAME}}` - Publisher/organization name

### Theme Colors
- `{{THEME_COLOR}}` - Default theme color (hex color code, e.g., #4285f4)
- `{{THEME_COLOR_LIGHT}}` - Theme color for light mode
- `{{THEME_COLOR_DARK}}` - Theme color for dark mode

### Favicon URLs
- `{{FAVICON_32x32_URL}}` - Path to 32x32 favicon
- `{{FAVICON_16x16_URL}}` - Path to 16x16 favicon
- `{{APPLE_TOUCH_ICON_URL}}` - Path to 180x180 Apple touch icon

### Open Graph (Facebook)
- `{{OG_TITLE}}` - Title for social sharing (can be same as PAGE_TITLE)
- `{{OG_DESCRIPTION}}` - Description for social sharing
- `{{OG_IMAGE_URL}}` - Image URL (1200x630px recommended)
- `{{OG_IMAGE_ALT}}` - Alt text for the OG image
- `{{SITE_NAME}}` - Your website/brand name

### Twitter
- `{{TWITTER_TITLE}}` - Title for Twitter cards
- `{{TWITTER_DESCRIPTION}}` - Description for Twitter cards
- `{{TWITTER_IMAGE_URL}}` - Image URL for Twitter (1200x630px recommended)
- `{{TWITTER_IMAGE_ALT}}` - Alt text for Twitter image
- `{{TWITTER_HANDLE}}` - Your Twitter handle (e.g., @yourusername)
- `{{TWITTER_CREATOR_HANDLE}}` - Content creator's Twitter handle

### Internationalization
- `{{ALTERNATE_EN_URL}}` - URL for English version
- `{{ALTERNATE_DEFAULT_URL}}` - Default language version URL

### Structured Data
- `{{SCHEMA_TYPE}}` - Schema.org type (e.g., WebSite, Article, Organization)
- `{{SCHEMA_IMAGE_URL}}` - Image URL for structured data
- `{{PUBLISHER_LOGO_URL}}` - Publisher logo URL

## Image Recommendations

### Open Graph / Twitter Images
- **Dimensions**: 1200 x 630 pixels
- **Aspect Ratio**: 1.91:1
- **Format**: JPG or PNG
- **File Size**: Under 1MB
- **Alt Text**: Always provide descriptive alt text

### Favicons
Use a favicon generator for best results:
- [favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

## Example

```html
<!-- Replace placeholders with actual values -->
<title>My Awesome Website - Home</title>
<meta name="description" content="Welcome to my awesome website where we share amazing content about web development." />
<meta property="og:title" content="My Awesome Website - Home" />
<meta property="og:image" content="https://example.com/images/og-home.jpg" />
```

## Best Practices

1. **Title Tag**: Keep it under 60 characters to avoid truncation in search results
2. **Meta Description**: Keep it between 150-160 characters
3. **OG Image**: Always use high-quality images (1200x630px)
4. **Canonical URL**: Always specify to avoid duplicate content issues
5. **Schema Markup**: Use appropriate schema types for your content
6. **Testing**: Use these tools to validate your meta tags:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [Schema Markup Validator](https://validator.schema.org/)

## Resources

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search/docs)
