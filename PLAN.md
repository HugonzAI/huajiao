# 花胶电商网站 / Flower Jelly Shop — Implementation Plan

## Overview

A bilingual (Chinese default, English toggle) premium e-commerce website for selling 花胶 (fish maw), built with:
- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** for styling
- **next-intl** for i18n (Chinese/English)
- **React Context** for cart state
- Static product data (no backend needed initially)

---

## 1. Project Structure

```
huajiao/
├── public/
│   └── images/
│       ├── hero/
│       │   └── hero-bg.jpg
│       └── products/
│           └── *.jpg
│
├── messages/
│   ├── zh.json         ← Chinese translations (default)
│   └── en.json         ← English translations
│
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx          ← Root layout with providers
│   │       ├── page.tsx            ← Home page
│   │       ├── products/
│   │       │   ├── page.tsx        ← Product catalog
│   │       │   └── [slug]/
│   │       │       └── page.tsx    ← Product detail
│   │       ├── cart/
│   │       │   └── page.tsx        ← Cart page
│   │       └── checkout/
│   │           ├── page.tsx        ← Checkout form
│   │           └── success/
│   │               └── page.tsx    ← Order confirmation
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── LanguageToggle.tsx
│   │   ├── home/
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── BrandStory.tsx
│   │   │   └── QualityPillars.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── ProductFilter.tsx
│   │   ├── product-detail/
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── ProductInfo.tsx
│   │   │   ├── AddToCartButton.tsx
│   │   │   ├── ProductDescription.tsx
│   │   │   └── RelatedProducts.tsx
│   │   ├── cart/
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   │   └── EmptyCart.tsx
│   │   ├── checkout/
│   │   │   ├── CheckoutForm.tsx
│   │   │   ├── DeliveryFields.tsx
│   │   │   └── OrderSummary.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── GradeBadge.tsx
│   │       ├── QuantitySelector.tsx
│   │       └── Divider.tsx
│   │
│   ├── context/
│   │   └── CartContext.tsx
│   │
│   ├── data/
│   │   └── products.ts             ← Static product catalog (8+ products)
│   │
│   ├── types/
│   │   ├── product.ts
│   │   └── cart.ts
│   │
│   ├── lib/
│   │   ├── utils.ts                ← formatPrice, cn()
│   │   └── constants.ts
│   │
│   └── middleware.ts               ← next-intl locale routing
│
├── i18n.ts
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 2. Data Model

### Product

```typescript
type ProductGrade = 'AAA' | 'AA' | 'A' | 'B';
type ProductCategory = 'dried' | 'processed' | 'gift-set';
type ProductOrigin = 'philippines' | 'indonesia' | 'india' | 'south-africa';

interface Product {
  id: string;
  slug: string;
  grade: ProductGrade;
  category: ProductCategory;
  origin: ProductOrigin;
  weightGrams: number;
  priceHKD: number;
  images: string[];
  inStock: boolean;
  isFeatured: boolean;
  translations: {
    zh: { name; shortDescription; description; preparationNotes; tags }
    en: { name; shortDescription; description; preparationNotes; tags }
  };
}
```

### Product Catalog (8 products)

| Slug | Grade | Category | Weight | Price HKD |
|---|---|---|---|---|
| aaa-philippines-large | AAA | dried | 500g | 2,980 |
| aaa-philippines-medium | AAA | dried | 250g | 1,580 |
| aa-indonesia-large | AA | dried | 500g | 1,880 |
| aa-indonesia-medium | AA | dried | 250g | 980 |
| a-india-large | A | dried | 500g | 1,280 |
| b-south-africa-bulk | B | dried | 1000g | 1,480 |
| gift-classic | AAA | gift-set | 300g | 2,200 |
| processed-ready | AA | processed | 200g | 680 |

---

## 3. i18n Approach

- **URL-based locale**: `/zh/...` and `/en/...` (Chinese is default, root redirects to `/zh`)
- **`src/middleware.ts`**: `createMiddleware({ locales: ['zh', 'en'], defaultLocale: 'zh' })`
- **`i18n.ts`**: `getRequestConfig` loads `messages/{locale}.json`
- **`LanguageToggle`**: swaps locale prefix in current pathname via `router.push`

Translation namespaces: `nav`, `home`, `products`, `cart`, `checkout`, `grades`, `categories`

---

## 4. Key Pages

### Home (`/`)
1. `HeroBanner` — full-viewport hero, elegant serif headline, CTA → products
2. `FeaturedProducts` — 3 featured product cards
3. `BrandStory` — two-column: brand narrative + image
4. `QualityPillars` — 4-icon grid (sourcing, processing, grades, trust)

### Products (`/products`)
- Filter by grade + category (URL search params, bookmarkable)
- Responsive grid: 1 col mobile → 2 tablet → 3 desktop

### Product Detail (`/products/[slug]`)
- `generateStaticParams` for SSG
- Gallery, info panel (grade badge, origin, weight, price, quantity), tabbed description, related products

### Cart (`/cart`)
- Line items with quantity controls + remove
- Summary with free-shipping threshold (HKD 500)

### Checkout (`/checkout`)
- Delivery form (name, phone, email, address, district, city)
- Order summary panel
- On submit → clears cart → redirects to `/checkout/success`
- No real payment (note: "Bank Transfer / Delivery Payment")

---

## 5. Design System

### Color Palette (Tailwind extend)

```
gold-500: #c9972a   ← primary CTA
gold-300: #e8c56a   ← hover/accents
cream:    #fdf6e3   ← page background
ink:      #1a1208   ← primary text
```

### Typography
- `Noto Serif SC` — headings (Chinese + Latin)
- `Noto Sans SC` — body text

### Grade Badge Colors
- AAA = deep gold
- AA = warm amber
- A = soft brown
- B = muted tan

---

## 6. Implementation Steps

1. **Bootstrap** — `create-next-app`, install `next-intl`, `clsx`, `tailwind-merge`
2. **i18n setup** — middleware, `i18n.ts`, `zh.json`, `en.json`, `[locale]` folder structure
3. **Types + Data** — `product.ts`, `cart.ts`, `products.ts` (8 products with full translations)
4. **Utilities** — `formatPrice()`, `cn()`, grade color constants
5. **Cart Context** — `useReducer`, `localStorage` persistence, `CartProvider`
6. **Layout Shell** — Header (logo + nav + cart badge + language toggle), Footer
7. **UI Primitives** — Button, Badge, GradeBadge, QuantitySelector, Divider
8. **Home Page** — HeroBanner, FeaturedProducts, BrandStory, QualityPillars
9. **Products Page** — ProductFilter, ProductGrid, ProductCard
10. **Product Detail** — Gallery, Info, AddToCartButton, Description tabs, RelatedProducts
11. **Cart Page** — CartItem, CartSummary, EmptyCart
12. **Checkout Pages** — CheckoutForm, DeliveryFields, OrderSummary, Success page
13. **Polish** — responsive QA, loading skeletons, 404 page, SEO metadata, accessibility

---

## 7. Key Technical Decisions

| Decision | Rationale |
|---|---|
| Locale in URL path | SSG-friendly, SEO-friendly, shareable |
| Static `.ts` product data | No backend needed; easy to swap with CMS/API later |
| `localStorage` cart | Persists across refreshes, no login required |
| `generateStaticParams` on detail pages | Full SSG for fast premium UX |
| URL params for filters | Bookmarkable filter state |
| No payment integration | Out of scope; form submits to success page only |
