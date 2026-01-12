export interface LuxuryProduct {
  id: string
  name: string
  description: string
  price: number
  category: string
  images: string[]
  hoverImage?: string
  sizes: string[]
  material: string
  composition?: string
  careInstructions?: string
  madeIn?: string
  inStock: boolean
  gridSpan?: string
  slug: string
}

export interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  image: string
  quantity: number
  selectedSize: string
  material: string
}

export type Product = LuxuryProduct
