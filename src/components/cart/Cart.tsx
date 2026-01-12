'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { formatPrice } from '@/lib/utils'

export function Cart() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice } = useCartStore()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-luxury-black/60 backdrop-blur-md"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed right-0 top-0 z-[90] h-full w-full bg-luxury-white shadow-2xl sm:w-[480px]"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-luxury-gray-whisper p-6">
                <h2 className="font-serif text-heading-md text-luxury-black">
                  Shopping Bag ({items.length})
                </h2>
                <button
                  onClick={closeCart}
                  className="luxury-focus text-luxury-black transition-colors duration-300 hover:text-luxury-gray-mid"
                  aria-label="Close cart"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {items.length === 0 ? (
                <div className="flex flex-1 flex-col items-center justify-center p-6">
                  <ShoppingBag className="mb-4 h-16 w-16 text-luxury-gray-light" />
                  <p className="text-body-md mb-6 text-luxury-gray-mid">
                    Your shopping bag is empty
                  </p>
                  <Link
                    href="/products"
                    onClick={closeCart}
                    className="border border-luxury-black px-8 py-3 text-body-sm uppercase tracking-[0.15em] text-luxury-black transition-all duration-300 hover:bg-luxury-black hover:text-luxury-white"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-6">
                      {items.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 100 }}
                          className="flex gap-4"
                        >
                          <div className="relative h-32 w-24 flex-shrink-0 overflow-hidden bg-luxury-gray-whisper">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="flex flex-1 flex-col">
                            <div className="mb-2 flex items-start justify-between">
                              <div>
                                <h3 className="font-serif text-body-lg text-luxury-black">
                                  {item.name}
                                </h3>
                                <p className="text-body-sm text-luxury-gray-mid">
                                  {item.material}
                                </p>
                                <p className="text-body-sm text-luxury-gray-mid">
                                  Size: {item.selectedSize}
                                </p>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-luxury-gray-mid transition-colors duration-300 hover:text-luxury-black"
                                aria-label="Remove item"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>

                            <div className="mt-auto flex items-center justify-between">
                              <div className="flex items-center gap-3 border border-luxury-gray-whisper">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-2 text-luxury-black transition-colors duration-300 hover:bg-luxury-gray-whisper"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="text-body-sm w-8 text-center text-luxury-black">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-2 text-luxury-black transition-colors duration-300 hover:bg-luxury-gray-whisper"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                              <span className="font-serif text-body-lg text-luxury-black">
                                {formatPrice(item.price * item.quantity)}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-luxury-gray-whisper p-6">
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-body-md text-luxury-gray-mid">
                          Subtotal
                        </span>
                        <span className="text-body-md text-luxury-black">
                          {formatPrice(getTotalPrice())}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-body-md text-luxury-gray-mid">
                          Shipping
                        </span>
                        <span className="text-body-sm text-luxury-gray-mid">
                          Calculated at checkout
                        </span>
                      </div>
                      <div className="border-t border-luxury-gray-whisper pt-3">
                        <div className="flex items-center justify-between">
                          <span className="text-body-lg font-medium text-luxury-black">
                            Total
                          </span>
                          <span className="font-serif text-heading-md text-luxury-black">
                            {formatPrice(getTotalPrice())}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="text-body-md mb-3 w-full bg-luxury-black py-4 uppercase tracking-[0.15em] text-luxury-white transition-all duration-300 hover:bg-luxury-black-soft">
                      Checkout
                    </button>
                    <Link
                      href="/products"
                      onClick={closeCart}
                      className="text-body-sm block text-center uppercase tracking-[0.15em] text-luxury-gray-mid transition-colors duration-300 hover:text-luxury-black"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
