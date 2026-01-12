'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import type { LuxuryProduct } from '@/types/product'
import { formatPrice } from '@/lib/utils'

interface ProductCardProps {
  product: LuxuryProduct
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        className="group relative h-full overflow-hidden bg-luxury-white"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="main-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  quality={85}
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.div>
            ) : (
              <motion.div
                key="hover-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.hoverImage || product.images[1] || product.images[0]}
                  alt={`${product.name} alternate view`}
                  fill
                  className="object-cover"
                  quality={85}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-luxury-black/20"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-luxury-black/80 to-transparent p-6"
          >
            <div className="flex items-end justify-between text-luxury-white">
              <div>
                <p className="text-body-sm mb-1 uppercase tracking-[0.15em] text-luxury-gray-light">
                  Price
                </p>
                <p className="font-serif text-heading-lg">{formatPrice(product.price)}</p>
              </div>
              <div className="text-right">
                <p className="text-body-sm mb-1 uppercase tracking-[0.15em] text-luxury-gray-light">
                  Sizes
                </p>
                <p className="text-body-md">{product.sizes.join(', ')}</p>
              </div>
            </div>
          </motion.div>

          <div className="absolute left-4 top-4">
            <span className="text-label bg-luxury-white px-3 py-1 uppercase tracking-[0.15em] text-luxury-black">
              {product.category}
            </span>
          </div>

          {!product.inStock && (
            <div className="absolute right-4 top-4">
              <span className="text-label bg-luxury-black px-3 py-1 uppercase tracking-[0.15em] text-luxury-white">
                Sold Out
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-heading-md mb-2 font-serif text-luxury-black transition-colors duration-300 group-hover:text-luxury-gray-mid">
            {product.name}
          </h3>
          <p className="text-body-sm line-clamp-2 font-sans text-luxury-gray-mid">
            {product.material}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}
