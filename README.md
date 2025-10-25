# Meta Tag Boilerplate  `<meta />`

Modern, framework-agnostic meta tag boilerplates for SEO and social media optimization. Ready-to-use configurations for HTML, Next.js, and Vite projects.

## 🚀 Features

- ✅ **Multiple Frameworks**: HTML, Next.js (App Router), and Vite (React/Vue)
- ✅ **SEO Optimized**: Complete meta tags for search engines
- ✅ **Social Media Ready**: Open Graph and Twitter Card support
- ✅ **Copy-Paste Ready**: Easy to integrate into your projects
- ✅ **TypeScript Support**: Fully typed for Next.js and Vite
- ✅ **Modern Best Practices**: Updated for 2024+ standards
- ✅ **Schema.org Structured Data**: JSON-LD support for rich results
- ✅ **Dark Mode Support**: Theme color configuration for light/dark modes

## 📚 Quick Navigation

Choose your framework:

### [📄 HTML](./html/)
Traditional HTML setup for static websites or any web project.
- Static meta tags
- Comprehensive head setup
- Works with any backend or static site generator

[→ View HTML Documentation](./html/README.md)

### [⚡ Next.js](./nextjs/)
Modern setup using Next.js 13+ App Router Metadata API.
- Type-safe metadata configuration
- Static and dynamic metadata support
- Built-in SEO optimization

[→ View Next.js Documentation](./nextjs/README.md)

### [⚡ Vite](./vite/)
Setup for Vite projects (React, Vue, and other frameworks).
- Static and dynamic meta tags
- React and Vue components included
- Environment variable support

[→ View Vite Documentation](./vite/README.md)

## 🎯 Quick Start

1. **Choose your framework** from the options above
2. **Navigate to the framework folder**
3. **Follow the README** in that folder for detailed instructions
4. **Copy the boilerplate** into your project
5. **Replace placeholders** with your actual values

## 📦 What's Included

### HTML
- `index.html` - Complete HTML boilerplate with modern meta tags
- `README.md` - Detailed documentation and best practices

### Next.js
- `metadata.ts` - Complete metadata configuration for App Router
- `dynamic-metadata-example.tsx` - Example of dynamic metadata generation
- `README.md` - Comprehensive guide with examples

### Vite
- `index.html` - Base HTML template with static meta tags
- `SEO.tsx` - React component for dynamic meta tags
- `SEO.vue` - Vue 3 component for dynamic meta tags
- `README.md` - Setup guide for both React and Vue

## 🔑 Key Meta Tags Included

All boilerplates include:

| Category | Meta Tags |
| --- | --- |
| **Essential** | charset, viewport, title, description, keywords |
| **SEO** | robots, canonical, author, keywords |
| **Theme** | theme-color (with dark/light mode support) |
| **Open Graph** | type, url, title, description, image, site_name |
| **Twitter** | card, title, description, image, site, creator |
| **Icons** | favicon, apple-touch-icon, manifest |
| **Structured Data** | JSON-LD schema markup |
| **i18n** | hreflang alternate links |

## 💡 Usage Examples

### HTML
```html
<!-- Just copy and paste into your HTML <head> -->
<title>My Awesome Website</title>
<meta name="description" content="Welcome to my website" />
```

### Next.js
```typescript
// app/layout.tsx or app/page.tsx
export const metadata: Metadata = {
  title: 'My Awesome Website',
  description: 'Welcome to my website',
  // ... more configuration
}
```

### Vite + React
```tsx
import { SEO } from './components/SEO'

function HomePage() {
  return (
    <>
      <SEO
        title="My Awesome Website"
        description="Welcome to my website"
      />
      <div>Content</div>
    </>
  )
}
```

### Vite + Vue
```vue
<template>
  <SEO
    title="My Awesome Website"
    description="Welcome to my website"
  />
  <div>Content</div>
</template>
```

## 🖼️ Image Recommendations

### Social Media Images (Open Graph / Twitter)
- **Dimensions**: 1200 x 630 pixels
- **Aspect Ratio**: 1.91:1
- **Format**: JPG or PNG
- **File Size**: Under 1MB
- **Alt Text**: Always provide descriptive alt text

### Favicons
Use these tools to generate favicons:
- [favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

## 🧪 Testing Your Metadata

Validate your implementation with these tools:

- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
- **Schema Markup Validator**: https://validator.schema.org/
- **Open Graph Check**: https://www.opengraph.xyz/

## 📖 Best Practices

1. **Title**: Keep under 60 characters to avoid truncation
2. **Description**: 150-160 characters is optimal
3. **Images**: Always use high-quality images (1200x630px)
4. **Canonical URLs**: Specify to avoid duplicate content issues
5. **Mobile**: Test on mobile devices
6. **Accessibility**: Include alt text for all images
7. **Performance**: Optimize images and use appropriate formats

## 🔄 Migration Guide

### From Old HTML Boilerplate
1. Choose your framework (HTML, Next.js, or Vite)
2. Follow the Quick Start guide for that framework
3. Update your placeholder values

### From Other Solutions
- **From react-helmet**: Use Vite + React setup
- **From vue-meta**: Use Vite + Vue setup
- **From next-seo**: Use Next.js setup (built-in metadata API is better)

## 📚 Resources

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search/docs)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

Feel free to use and modify the code for your own projects. If you found this repository helpful, please consider giving it a star!

---

**Made with ❤️ for the web development community**
