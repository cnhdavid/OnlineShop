'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function FeaturedCollection() {
  return (
    <section className="relative overflow-hidden bg-luxury-black py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col justify-center"
          >
            <span className="text-label mb-4 uppercase tracking-[0.2em] text-luxury-gray-light">
              Featured Collection
            </span>
            <h2 className="font-serif text-display-sm md:text-display-md mb-6 text-luxury-white">
              Midnight
              <br />
              <span className="italic">Essence</span>
            </h2>
            <p className="text-body-lg mb-8 max-w-lg text-luxury-gray-light">
              A curated selection of pieces that embody the quiet sophistication
              of twilight hours. Each garment is crafted to capture the essence
              of modern elegance, where shadow meets light.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <button className="group flex items-center justify-center gap-3 border border-luxury-white px-8 py-4 text-body-md uppercase tracking-[0.15em] text-luxury-white transition-all duration-500 hover:bg-luxury-white hover:text-luxury-black">
                <span>Explore Collection</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </button>
              <button className="text-body-md border-b border-luxury-gray-light pb-1 uppercase tracking-[0.15em] text-luxury-gray-light transition-all duration-300 hover:border-luxury-white hover:text-luxury-white">
                View Lookbook
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=1887&auto=format&fit=crop"
                alt="Midnight Essence Collection"
                fill
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-label mb-2 uppercase tracking-[0.2em] text-luxury-white">
                    Limited Edition
                  </p>
                  <p className="font-serif text-heading-md text-luxury-white">
                    24 Pieces
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-label mb-2 uppercase tracking-[0.2em] text-luxury-white">
                    Starting From
                  </p>
                  <p className="font-serif text-heading-md text-luxury-white">
                    $890
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
