# ATELIER — Luxury E-Commerce Platform

A high-end, YSL-inspired online shop built with Next.js 14, featuring sophisticated animations, smooth scrolling, and a minimalist monochrome aesthetic.

## 🎨 Design Philosophy

- **Color Palette**: Strictly monochrome (Deep Black, Crisp White, nuanced Grayscale)
- **Style**: Minimalist, avant-garde, and artistic with high-contrast layouts
- **Typography**: Didot/Bodoni serif for headings, Inter sans-serif for body text
- **Grid**: Asymmetrical masonry grid inspired by fashion editorials
- **Animations**: Buttery smooth scrolling with sophisticated micro-interactions

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React

### Features
- ✨ Smooth, buttery scrolling (Lenis)
- 🎭 Sophisticated micro-interactions
- 📱 Mobile-first responsive design
- ⚡ Lightning-fast load times
- 🛒 Minimalist slide-out cart
- 🖼️ Parallax effects on scroll
- 🎨 Image hover transitions
- 🌊 Fade-in animations on scroll

## 📁 Project Structure

```
OnlineShop/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts
│   │   ├── page.tsx             # Homepage
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── cart/
│   │   │   └── Cart.tsx         # Slide-out shopping cart
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Navigation header
│   │   │   └── Footer.tsx       # Site footer
│   │   ├── product/
│   │   │   └── ProductCard.tsx  # Product card with hover effects
│   │   ├── providers/
│   │   │   └── SmoothScrollProvider.tsx  # Lenis smooth scroll
│   │   └── sections/
│   │       ├── HeroSection.tsx       # Hero with parallax
│   │       ├── ProductGrid.tsx       # Masonry product grid
│   │       └── EditorialSection.tsx  # Editorial content
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── types/
│   │   └── product.ts           # TypeScript types
│   └── fonts/                   # Custom font files (Didot)
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies

```

## 🎯 Key Components

### HeroSection
- Full-screen hero with parallax image
- Animated typography with staggered reveals
- Scroll indicator with animated line
- Responsive layout with mobile optimization

### ProductGrid
- Asymmetrical masonry grid layout
- Fade-up animations on scroll
- Variable grid spans for editorial feel
- Responsive breakpoints

### ProductCard
- Image swap on hover
- Smooth scale transitions
- Add-to-cart button reveal
- Category labels

### SmoothScrollProvider
- Lenis integration for buttery scrolling
- Custom easing functions
- Optimized for performance

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

The app will be available at `http://localhost:3000`

## 📦 Dependencies

### Core
- `next`: ^14.2.0
- `react`: ^18.3.1
- `typescript`: ^5.3.0

### UI & Styling
- `tailwindcss`: ^3.4.0
- `framer-motion`: ^11.0.0
- `lucide-react`: ^0.344.0

### Utilities
- `lenis`: ^1.0.42
- `clsx`: ^2.1.0
- `tailwind-merge`: ^2.2.0

## 🎨 Tailwind Configuration

The project uses a custom Tailwind configuration with:

- **Luxury color palette**: 8 monochrome shades
- **Custom typography scale**: Display, heading, body, and label sizes
- **Serif & sans-serif fonts**: CSS variables for font families
- **Custom animations**: Fade-in, fade-up, scale-in, slide-left
- **Luxury easing functions**: Custom cubic-bezier curves

## 🔮 Future Enhancements

- [ ] Product detail pages
- [ ] Shopping cart functionality
- [ ] Checkout flow
- [ ] User authentication
- [ ] Wishlist feature
- [ ] Product filtering & search
- [ ] Backend integration (Shopify/Medusa/Stripe)
- [ ] CMS integration for content management
- [ ] Performance optimizations (ISR, SSG)

## 📝 Notes

- Font files (Didot) need to be added to `src/fonts/` directory
- Replace placeholder images with actual product photography
- Configure environment variables for backend integration
- Optimize images for production (WebP/AVIF)

## 🎭 Design Inspiration

This project draws inspiration from luxury fashion houses like:
- Yves Saint Laurent (YSL)
- Balenciaga
- Saint Laurent Paris
- The Row

## 📄 License

Private project - All rights reserved

---

Built with ♥ by a luxury e-commerce specialist
