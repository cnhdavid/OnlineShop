'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { ChevronLeft, Heart, Share2 } from 'lucide-react'
import { LuxuryProduct } from '@/types/product'
import { useCartStore } from '@/store/cartStore'
import { formatPrice } from '@/lib/utils'
import productsData from '@/data/products.json'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { addItem } = useCartStore()
  
  const product = (productsData as LuxuryProduct[]).find(
    (p) => p.slug === params.slug
  )

  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-luxury-white">
        <div className="text-center">
          <h1 className="font-serif text-display-sm mb-4 text-luxury-black">
            Product Not Found
          </h1>
          <button
            onClick={() => router.push('/products')}
            className="border border-luxury-black px-8 py-3 text-body-sm uppercase tracking-[0.15em] text-luxury-black transition-all duration-300 hover:bg-luxury-black hover:text-luxury-white"
          >
            Back to Collection
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      selectedSize,
      material: product.material,
    })
  }

  return (
    <div className="min-h-screen bg-luxury-white pt-20">
      <div className="container mx-auto px-6 py-8 lg:px-12">
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-body-sm uppercase tracking-[0.15em] text-luxury-gray-mid transition-colors duration-300 hover:text-luxury-black"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
            <div className="mb-4 aspect-[3/4] w-full overflow-hidden bg-luxury-gray-whisper">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-full w-full"
              >
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  quality={90}
                  priority
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[3/4] overflow-hidden bg-luxury-gray-whisper transition-all duration-300 ${
                    selectedImage === index
                      ? 'ring-2 ring-luxury-black'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    width={200}
                    height={267}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="mb-8">
                <span className="text-label mb-4 block uppercase tracking-[0.15em] text-luxury-gray-mid">
                  {product.category}
                </span>
                <h1 className="font-serif text-display-sm mb-4 text-luxury-black">
                  {product.name}
                </h1>
                <p className="font-serif text-heading-xl text-luxury-black">
                  {formatPrice(product.price)}
                </p>
              </div>

              <div className="mb-8 border-t border-luxury-gray-whisper pt-8">
                <p className="text-body-lg mb-6 leading-relaxed text-luxury-gray-mid">
                  {product.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-body-md mb-4 font-medium uppercase tracking-[0.15em] text-luxury-black">
                  Select Size
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border py-3 text-body-sm uppercase tracking-[0.15em] transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-luxury-black bg-luxury-black text-luxury-white'
                          : 'border-luxury-gray-whisper text-luxury-black hover:border-luxury-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8 flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="text-body-md flex-1 bg-luxury-black py-4 uppercase tracking-[0.15em] text-luxury-white transition-all duration-300 hover:bg-luxury-black-soft disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {product.inStock ? 'Add to Bag' : 'Sold Out'}
                </button>
                <button
                  className="border border-luxury-gray-whisper p-4 text-luxury-black transition-all duration-300 hover:border-luxury-black"
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-5 w-5" />
                </button>
                <button
                  className="border border-luxury-gray-whisper p-4 text-luxury-black transition-all duration-300 hover:border-luxury-black"
                  aria-label="Share"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-6 border-t border-luxury-gray-whisper pt-8">
                <div>
                  <h3 className="text-body-md mb-2 font-medium uppercase tracking-[0.15em] text-luxury-black">
                    Material
                  </h3>
                  <p className="text-body-md text-luxury-gray-mid">{product.material}</p>
                </div>

                {product.composition && (
                  <div>
                    <h3 className="text-body-md mb-2 font-medium uppercase tracking-[0.15em] text-luxury-black">
                      Composition
                    </h3>
                    <p className="text-body-md text-luxury-gray-mid">{product.composition}</p>
                  </div>
                )}

                {product.careInstructions && (
                  <div>
                    <h3 className="text-body-md mb-2 font-medium uppercase tracking-[0.15em] text-luxury-black">
                      Care Instructions
                    </h3>
                    <p className="text-body-md text-luxury-gray-mid">
                      {product.careInstructions}
                    </p>
                  </div>
                )}

                {product.madeIn && (
                  <div>
                    <h3 className="text-body-md mb-2 font-medium uppercase tracking-[0.15em] text-luxury-black">
                      Made In
                    </h3>
                    <p className="text-body-md text-luxury-gray-mid">{product.madeIn}</p>
                  </div>
                )}
              </div>

              <div className="mt-8 border-t border-luxury-gray-whisper pt-8">
                <details className="group">
                  <summary className="text-body-md flex cursor-pointer items-center justify-between font-medium uppercase tracking-[0.15em] text-luxury-black">
                    Shipping & Returns
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      ↓
                    </span>
                  </summary>
                  <div className="text-body-md mt-4 space-y-3 text-luxury-gray-mid">
                    <p>Free shipping on orders over $500.</p>
                    <p>Standard delivery: 5-7 business days.</p>
                    <p>Express delivery: 2-3 business days.</p>
                    <p>Returns accepted within 30 days of purchase.</p>
                  </div>
                </details>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
