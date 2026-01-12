# 🎨 Design System — ATELIER

Complete design system documentation for the luxury e-commerce platform.

## 🎭 Design Philosophy

**ATELIER** embodies the intersection of minimalism and avant-garde luxury, inspired by fashion houses like Yves Saint Laurent. Every element is crafted to evoke sophistication, elegance, and timeless beauty.

### Core Principles
1. **Minimalism**: Less is more — every element serves a purpose
2. **Contrast**: High-contrast black and white for dramatic impact
3. **Space**: Generous whitespace creates breathing room
4. **Motion**: Subtle, sophisticated animations enhance the experience
5. **Typography**: Serif for elegance, sans-serif for clarity

---

## 🎨 Color Palette

### Monochrome Luxury Scale

```css
/* Deep Blacks */
--luxury-black: #0A0A0A          /* Primary background */
--luxury-black-soft: #1A1A1A     /* Hover states, cards */

/* Grays */
--luxury-gray-dark: #2D2D2D      /* Borders, dividers */
--luxury-gray-mid: #6B6B6B       /* Secondary text */
--luxury-gray-light: #ABABAB     /* Tertiary text, labels */
--luxury-gray-whisper: #E5E5E5   /* Subtle borders */

/* Whites */
--luxury-white-soft: #F8F8F8     /* Backgrounds, cards */
--luxury-white: #FFFFFF          /* Primary text, highlights */
```

### Usage Guidelines

| Color | Use Case | Example |
|-------|----------|---------|
| `luxury-black` | Primary backgrounds, text on light | Hero section, footer |
| `luxury-black-soft` | Hover states, secondary surfaces | Button hover, cards |
| `luxury-gray-dark` | Borders, dividers | Header border, card edges |
| `luxury-gray-mid` | Secondary text, prices | Product prices, descriptions |
| `luxury-gray-light` | Tertiary text, labels | Category labels, captions |
| `luxury-white-soft` | Light backgrounds | Product grid section |
| `luxury-white` | Primary text on dark, highlights | Hero text, headings |

---

## ✍️ Typography

### Font Families

```css
/* Serif — Elegance & Drama */
font-family: var(--font-didot);
/* Fallback: Didot, Bodoni MT, serif */
/* Use for: Headings, hero text, product names */

/* Sans-Serif — Clarity & Modernity */
font-family: var(--font-inter);
/* Fallback: Inter, system-ui, sans-serif */
/* Use for: Body text, UI elements, labels */
```

### Type Scale

#### Display Sizes (Serif)
```css
display-xl: 8rem (128px)    /* Hero headlines */
display-lg: 6rem (96px)     /* Section headlines */
display-md: 4.5rem (72px)   /* Page titles */
display-sm: 3rem (48px)     /* Subsection titles */
```

#### Heading Sizes (Serif)
```css
heading-xl: 2.5rem (40px)   /* Card titles */
heading-lg: 2rem (32px)     /* Component headings */
heading-md: 1.5rem (24px)   /* Product names */
```

#### Body Sizes (Sans-Serif)
```css
body-lg: 1.125rem (18px)    /* Lead paragraphs */
body-md: 1rem (16px)        /* Body text */
body-sm: 0.875rem (14px)    /* Small text */
label: 0.75rem (12px)       /* Labels, captions */
```

### Typography Examples

```tsx
/* Hero Headline */
<h1 className="font-serif text-display-xl text-luxury-white">
  The Art of Elegance
</h1>

/* Section Title */
<h2 className="font-serif text-display-md text-luxury-black">
  New Arrivals
</h2>

/* Product Name */
<h3 className="font-serif text-heading-md text-luxury-black">
  Silk Blazer
</h3>

/* Body Text */
<p className="font-sans text-body-md text-luxury-gray-mid">
  Discover a curated collection...
</p>

/* Label */
<span className="font-sans text-label uppercase tracking-[0.15em]">
  Spring / Summer 2026
</span>
```

---

## 🎬 Animations & Motion

### Easing Functions

```css
/* Luxury Easing (Default) */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

/* Luxury In (Accelerating) */
transition-timing-function: cubic-bezier(0.4, 0, 1, 1);

/* Luxury Out (Decelerating) */
transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
```

### Animation Presets

```css
/* Fade In */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Fade Up */
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Scale In */
@keyframes scaleIn {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}

/* Slide Left */
@keyframes slideLeft {
  0% { opacity: 0; transform: translateX(30px); }
  100% { opacity: 1; transform: translateX(0); }
}
```

### Duration Guidelines

| Duration | Use Case |
|----------|----------|
| 200ms | Micro-interactions (hover, focus) |
| 300ms | Button states, small elements |
| 500ms | Modal open/close, drawer slides |
| 800ms | Page transitions, large elements |
| 1200ms | Hero animations, scroll effects |

### Framer Motion Examples

```tsx
/* Fade Up on Scroll */
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
>
  Content
</motion.div>

/* Hover Scale */
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
>
  Product Card
</motion.div>

/* Staggered Children */
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.1 } }
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
  ))}
</motion.div>
```

---

## 📐 Spacing System

### Scale
```css
0.25rem (4px)   → spacing-1
0.5rem (8px)    → spacing-2
0.75rem (12px)  → spacing-3
1rem (16px)     → spacing-4
1.5rem (24px)   → spacing-6
2rem (32px)     → spacing-8
3rem (48px)     → spacing-12
4rem (64px)     → spacing-16
6rem (96px)     → spacing-24
8rem (128px)    → spacing-32
```

### Custom Spacing
```css
4.5rem (72px)   → spacing-18
5.5rem (88px)   → spacing-22
6.5rem (104px)  → spacing-26
7.5rem (120px)  → spacing-30
```

---

## 🎯 Component Patterns

### Buttons

```tsx
/* Primary Button */
<button className="bg-luxury-black px-10 py-4 text-body-md uppercase tracking-[0.15em] text-luxury-white transition-all duration-300 hover:bg-luxury-black-soft">
  Explore Collection
</button>

/* Outline Button */
<button className="border border-luxury-white px-10 py-4 text-body-md uppercase tracking-[0.15em] text-luxury-white transition-all duration-500 hover:bg-luxury-white hover:text-luxury-black">
  Shop Now
</button>

/* Text Button */
<button className="border-b border-luxury-black pb-1 text-body-sm uppercase tracking-[0.15em] text-luxury-black transition-all duration-300 hover:border-luxury-gray-mid hover:text-luxury-gray-mid">
  View All
</button>
```

### Cards

```tsx
/* Product Card */
<div className="group relative overflow-hidden bg-luxury-white-soft transition-transform duration-400 hover:scale-102">
  <div className="relative aspect-[3/4]">
    <Image src={image} alt={name} fill />
  </div>
  <div className="p-6">
    <h3 className="font-serif text-heading-md">{name}</h3>
    <p className="font-sans text-body-md text-luxury-gray-mid">{price}</p>
  </div>
</div>
```

### Inputs

```tsx
/* Text Input */
<input 
  type="text"
  className="border-b border-luxury-gray-dark bg-transparent px-0 py-3 text-body-md text-luxury-black placeholder:text-luxury-gray-light focus:border-luxury-black focus:outline-none"
  placeholder="Email address"
/>
```

---

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Mobile-First Approach

```tsx
/* Mobile: Stack vertically */
<div className="flex flex-col gap-4">

/* Tablet+: Two columns */
<div className="flex flex-col gap-4 md:grid md:grid-cols-2">

/* Desktop+: Four columns */
<div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
```

---

## 🎨 Utility Classes

### Custom Utilities

```css
/* Text Balance */
.text-balance { text-wrap: balance; }

/* Luxury Gradient */
.luxury-gradient {
  background: linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.8) 100%);
}

/* Luxury Border */
.luxury-border { border: 1px solid rgba(45, 45, 45, 0.3); }

/* Luxury Hover */
.luxury-hover { transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1); }

/* Luxury Focus */
.luxury-focus {
  focus:outline-none 
  focus:ring-2 
  focus:ring-luxury-white/20 
  focus:ring-offset-2 
  focus:ring-offset-luxury-black
}
```

---

## ✨ Best Practices

### Do's ✅
- Use generous whitespace
- Maintain high contrast ratios
- Apply subtle animations (< 1s)
- Use uppercase for labels and buttons
- Implement smooth scrolling
- Optimize images (WebP/AVIF)
- Test on mobile devices

### Don'ts ❌
- Don't use colors outside the palette
- Don't mix font families within components
- Don't use aggressive animations
- Don't clutter the interface
- Don't ignore accessibility
- Don't forget hover states

---

## 🔍 Accessibility

- Maintain WCAG AA contrast ratios (4.5:1 minimum)
- Provide focus indicators for all interactive elements
- Use semantic HTML elements
- Include alt text for all images
- Support keyboard navigation
- Test with screen readers

---

**Design System Version**: 1.0.0  
**Last Updated**: January 2026
