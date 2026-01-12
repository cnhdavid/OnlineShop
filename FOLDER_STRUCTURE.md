# 📁 Complete Folder Structure

This document outlines the complete folder structure for the luxury e-commerce platform.

```
OnlineShop/
│
├── 📄 Configuration Files
│   ├── package.json                    # Dependencies and scripts
│   ├── tsconfig.json                   # TypeScript configuration
│   ├── next.config.js                  # Next.js configuration
│   ├── tailwind.config.ts              # Tailwind CSS configuration
│   ├── postcss.config.js               # PostCSS configuration
│   ├── .gitignore                      # Git ignore rules
│   ├── .env.example                    # Environment variables template
│   ├── README.md                       # Project documentation
│   └── FOLDER_STRUCTURE.md             # This file
│
├── 📂 src/
│   │
│   ├── 📂 app/                         # Next.js App Router
│   │   ├── layout.tsx                  # Root layout (fonts, providers)
│   │   ├── page.tsx                    # Homepage
│   │   ├── globals.css                 # Global styles & Tailwind
│   │   │
│   │   ├── 📂 (routes)/                # Route groups (future)
│   │   │   ├── 📂 products/
│   │   │   │   ├── page.tsx            # Products listing
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx        # Product detail
│   │   │   ├── 📂 collections/
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx        # Collection page
│   │   │   ├── 📂 about/
│   │   │   │   └── page.tsx            # About page
│   │   │   └── 📂 contact/
│   │   │       └── page.tsx            # Contact page
│   │   │
│   │   └── 📂 api/                     # API routes (future)
│   │       ├── 📂 cart/
│   │       ├── 📂 checkout/
│   │       └── 📂 products/
│   │
│   ├── 📂 components/
│   │   │
│   │   ├── 📂 cart/
│   │   │   ├── Cart.tsx                # Slide-out cart component
│   │   │   ├── CartItem.tsx            # Individual cart item (future)
│   │   │   └── CartSummary.tsx         # Cart totals (future)
│   │   │
│   │   ├── 📂 layout/
│   │   │   ├── Header.tsx              # Main navigation header
│   │   │   ├── Footer.tsx              # Site footer
│   │   │   ├── MobileMenu.tsx          # Mobile navigation (future)
│   │   │   └── Breadcrumbs.tsx         # Breadcrumb navigation (future)
│   │   │
│   │   ├── 📂 product/
│   │   │   ├── ProductCard.tsx         # Product card with hover effects
│   │   │   ├── ProductGallery.tsx      # Product image gallery (future)
│   │   │   ├── ProductInfo.tsx         # Product details (future)
│   │   │   └── SizeSelector.tsx        # Size selection (future)
│   │   │
│   │   ├── 📂 sections/
│   │   │   ├── HeroSection.tsx         # Homepage hero with parallax
│   │   │   ├── ProductGrid.tsx         # Masonry product grid
│   │   │   ├── EditorialSection.tsx    # Editorial content section
│   │   │   ├── FeaturedCollection.tsx  # Featured collection (future)
│   │   │   └── Newsletter.tsx          # Newsletter signup (future)
│   │   │
│   │   ├── 📂 providers/
│   │   │   ├── SmoothScrollProvider.tsx # Lenis smooth scroll
│   │   │   ├── CartProvider.tsx        # Cart state management (future)
│   │   │   └── ThemeProvider.tsx       # Theme context (future)
│   │   │
│   │   └── 📂 ui/                      # Reusable UI components (future)
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       └── Loader.tsx
│   │
│   ├── 📂 lib/
│   │   ├── utils.ts                    # Utility functions (cn, formatPrice)
│   │   ├── constants.ts                # App constants (future)
│   │   └── 📂 api/                     # API client functions (future)
│   │       ├── products.ts
│   │       ├── cart.ts
│   │       └── checkout.ts
│   │
│   ├── 📂 types/
│   │   ├── product.ts                  # Product & CartItem types
│   │   ├── cart.ts                     # Cart types (future)
│   │   └── user.ts                     # User types (future)
│   │
│   ├── 📂 hooks/                       # Custom React hooks (future)
│   │   ├── useCart.ts
│   │   ├── useScroll.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── 📂 styles/                      # Additional styles (future)
│   │   └── animations.css
│   │
│   └── 📂 fonts/                       # Custom font files
│       ├── didot-regular.woff2         # Didot Regular (to be added)
│       └── didot-bold.woff2            # Didot Bold (to be added)
│
├── 📂 public/                          # Static assets
│   ├── 📂 images/
│   │   ├── 📂 products/
│   │   ├── 📂 hero/
│   │   └── 📂 editorial/
│   ├── favicon.ico
│   ├── logo.svg
│   └── manifest.json
│
└── 📂 .next/                           # Next.js build output (gitignored)

```

## 📋 Component Hierarchy

```
App
├── SmoothScrollProvider
│   ├── Header
│   │   ├── Navigation
│   │   └── MobileMenu
│   │
│   ├── Main Content
│   │   ├── HeroSection
│   │   ├── ProductGrid
│   │   │   └── ProductCard[]
│   │   ├── EditorialSection
│   │   └── Other Sections
│   │
│   ├── Footer
│   │   ├── FooterLinks
│   │   └── SocialLinks
│   │
│   └── Cart (Slide-out)
│       ├── CartItem[]
│       └── CartSummary
```

## 🎯 File Naming Conventions

- **Components**: PascalCase (e.g., `ProductCard.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Types**: camelCase (e.g., `product.ts`)
- **Routes**: lowercase with hyphens (e.g., `about-us/`)
- **CSS**: kebab-case (e.g., `globals.css`)

## 📝 Notes

- Files marked with **(future)** are placeholders for upcoming features
- All component files use TypeScript (`.tsx`)
- Utility files use TypeScript (`.ts`)
- Follow the established patterns when adding new files
- Keep components small and focused on a single responsibility
- Use the `@/` alias for imports (configured in `tsconfig.json`)

## 🔄 Import Aliases

```typescript
// Configured in tsconfig.json
"@/*": ["./src/*"]

// Usage examples:
import { cn } from '@/lib/utils'
import { Product } from '@/types/product'
import { Header } from '@/components/layout/Header'
```
