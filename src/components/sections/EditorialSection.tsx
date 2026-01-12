'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function EditorialSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section ref={containerRef} className="bg-luxury-black py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="font-serif text-display-sm md:text-display-md mb-6 text-luxury-white">
              Editorial
            </h2>
            <p className="text-body-lg mb-8 text-luxury-gray-light">
              Explore the intersection of art and fashion through our curated
              visual narratives. Each collection tells a story of contemporary
              elegance.
            </p>
            <button className="text-body-sm border-b border-luxury-white pb-1 uppercase tracking-[0.15em] text-luxury-white transition-all duration-300 hover:border-luxury-gray-light hover:text-luxury-gray-light">
              View All Stories
            </button>
          </motion.div>

          <motion.div
            style={{ y: y1 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop"
              alt="Editorial fashion"
              fill
              className="object-cover"
              quality={85}
            />
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <motion.div
            style={{ y: y2 }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop"
              alt="Fashion detail"
              fill
              className="object-cover"
              quality={85}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1770&auto=format&fit=crop"
              alt="Fashion portrait"
              fill
              className="object-cover"
              quality={85}
            />
          </motion.div>

          <motion.div
            style={{ y: y1 }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1770&auto=format&fit=crop"
              alt="Fashion scene"
              fill
              className="object-cover"
              quality={85}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
