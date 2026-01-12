'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { getTotalItems, openCart } = useCartStore()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'New Arrivals', href: '/products' },
    { label: 'Women', href: '/products?category=Women' },
    { label: 'Men', href: '/products?category=Men' },
    { label: 'Accessories', href: '/products?category=Accessories' },
    { label: 'Editorial', href: '/editorial' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-luxury-black/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative flex h-20 items-center justify-between lg:h-24">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="luxury-focus z-10 flex items-center gap-2 text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            <nav className="hidden flex-1 items-center gap-8 lg:flex">
              {menuItems.slice(0, 2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-body-sm luxury-focus whitespace-nowrap uppercase tracking-[0.15em] text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/"
              className="font-serif text-heading-lg luxury-focus absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-luxury-white transition-opacity duration-300 hover:opacity-70"
            >
              ATELIER
            </Link>

            <nav className="hidden flex-1 items-center justify-end gap-8 lg:flex">
              {menuItems.slice(2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-body-sm luxury-focus whitespace-nowrap uppercase tracking-[0.15em] text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="z-10 flex items-center gap-4 lg:gap-6">
              <button
                className="luxury-focus text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={openCart}
                className="luxury-focus relative text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center bg-luxury-white text-[10px] font-medium text-luxury-black">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-luxury-black/80 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="fixed left-0 top-0 z-[70] h-full w-full bg-luxury-black sm:w-96"
            >
              <div className="flex h-full flex-col p-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="luxury-focus mb-12 self-end text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>

                <nav className="flex flex-col gap-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="font-serif text-heading-lg luxury-focus block text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
