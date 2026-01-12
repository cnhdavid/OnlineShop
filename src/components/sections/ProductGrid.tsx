'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ProductCard } from '@/components/product/ProductCard'
import { getFeaturedProducts } from '@/lib/api/products'

const products = getFeaturedProducts(6)

export function ProductGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-luxury-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <h2 className="font-serif text-display-sm md:text-display-md mb-4 text-luxury-black">
              New Arrivals
            </h2>
            <p className="text-body-lg max-w-xl text-luxury-gray-mid">
              A selection of pieces that define contemporary luxury
            </p>
          </div>
          <Link
            href="/products"
            className="text-body-sm hidden border-b border-luxury-black pb-1 uppercase tracking-[0.15em] text-luxury-black transition-all duration-300 hover:border-luxury-gray-mid hover:text-luxury-gray-mid md:block"
          >
            View All
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={product.gridSpan}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
