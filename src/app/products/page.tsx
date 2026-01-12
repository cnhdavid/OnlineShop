'use client'

import { Suspense, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { LuxuryProduct } from '@/types/product'
import { ProductCard } from '@/components/product/ProductCard'
import productsData from '@/data/products.json'

function ProductsContent() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const filteredProducts = useMemo(() => {
    const allProducts = productsData as LuxuryProduct[]
    if (!category) return allProducts
    return allProducts.filter((p) => p.category === category)
  }, [category])

  const title = category ? `${category} Collection` : 'All Products'
  const description = category
    ? `Explore our curated selection of ${category.toLowerCase()} pieces.`
    : 'Discover our curated selection of luxury pieces, each crafted with meticulous attention to detail and timeless design.'

  return (
    <div className="min-h-screen bg-luxury-white-soft pt-24">
      <div className="container mx-auto px-6 py-16 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16"
        >
          <h1 className="font-serif text-display-md mb-4 text-luxury-black">
            {title}
          </h1>
          <p className="text-body-lg max-w-2xl text-luxury-gray-mid">
            {description}
          </p>
          <p className="text-body-sm mt-2 uppercase tracking-[0.15em] text-luxury-gray-mid">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Item' : 'Items'}
          </p>
        </motion.div>

        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-body-lg text-luxury-gray-mid">
              No products found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className={product.gridSpan || 'col-span-1'}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-luxury-white-soft pt-24">
        <div className="container mx-auto px-6 py-16 lg:px-12">
          <div className="flex items-center justify-center py-32">
            <div className="text-center">
              <div className="mb-4 h-8 w-8 animate-spin rounded-full border-2 border-luxury-black border-t-transparent mx-auto"></div>
              <p className="text-body-md text-luxury-gray-mid">Loading products...</p>
            </div>
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
