'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-luxury-black"
    >
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop"
          alt="Luxury Fashion"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-luxury-black/40" />
      </motion.div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            style={{ y }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="mb-6"
            >
              <span className="text-label font-sans uppercase tracking-[0.2em] text-luxury-gray-light">
                Spring / Summer 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif text-display-md md:text-display-lg lg:text-display-xl mb-8 leading-none text-luxury-white"
            >
              The Art of
              <br />
              <span className="italic">Elegance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="text-body-lg mb-12 max-w-xl text-luxury-gray-light"
            >
              Discover a curated collection where minimalism meets
              avant-garde design. Each piece tells a story of timeless
              sophistication.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <button className="group relative overflow-hidden border border-luxury-white px-10 py-4 text-body-md font-sans uppercase tracking-[0.15em] text-luxury-white transition-all duration-500 hover:bg-luxury-white hover:text-luxury-black">
                <span className="relative z-10 flex items-center gap-3">
                  Explore Collection
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-luxury-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-label uppercase tracking-[0.2em] text-luxury-gray-light">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-12 w-[1px] bg-luxury-white/50"
          />
        </div>
      </motion.div>
    </section>
  )
}
