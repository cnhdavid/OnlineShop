import { LuxuryProduct } from '@/types/product'
import productsData from '@/data/products.json'

export function getAllProducts(): LuxuryProduct[] {
  return productsData as LuxuryProduct[]
}

export function getProductBySlug(slug: string): LuxuryProduct | undefined {
  const products = getAllProducts()
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): LuxuryProduct[] {
  const products = getAllProducts()
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(limit: number = 6): LuxuryProduct[] {
  const products = getAllProducts()
  return products.slice(0, limit)
}
