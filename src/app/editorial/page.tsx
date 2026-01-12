'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EditorialPage() {
  return (
    <div className="min-h-screen bg-luxury-white pt-24">
      <div className="container mx-auto px-6 py-16 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <h1 className="font-serif text-display-md mb-6 text-luxury-black">
            Editorial
          </h1>
          <p className="text-body-lg mx-auto mb-12 max-w-2xl text-luxury-gray-mid">
            Coming Soon — A curated collection of stories, inspiration, and insights from the world of luxury fashion.
          </p>
          <Link
            href="/products"
            className="inline-block border border-luxury-black px-10 py-4 text-body-sm uppercase tracking-[0.15em] text-luxury-black transition-all duration-300 hover:bg-luxury-black hover:text-luxury-white"
          >
            Explore Collection
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
