'use client'

import { motion } from 'framer-motion'

export function BrandStory() {
  return (
    <section className="bg-luxury-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-label mb-6 inline-block uppercase tracking-[0.2em] text-luxury-gray-mid">
              Our Philosophy
            </span>
            <h2 className="font-serif text-display-sm md:text-display-md mb-8 text-luxury-black">
              Where Art Meets
              <br />
              <span className="italic">Craftsmanship</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            <p className="text-body-lg text-luxury-gray-mid">
              ATELIER was founded on the belief that true luxury lies in the
              details. Each piece in our collection is a testament to the
              marriage of traditional craftsmanship and contemporary design.
            </p>
            <p className="text-body-lg text-luxury-gray-mid">
              We work exclusively with artisans who share our commitment to
              excellence, using only the finest materials sourced from around
              the world. Every stitch, every seam, every silhouette is
              considered with meticulous care.
            </p>
            <p className="text-body-lg text-luxury-gray-mid">
              Our vision is simple: to create timeless pieces that transcend
              trends, garments that become part of your story, worn and
              cherished for years to come.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="mt-12 grid gap-8 md:grid-cols-3"
          >
            <div className="border-t border-luxury-gray-whisper pt-6">
              <p className="font-serif text-heading-lg mb-2 text-luxury-black">
                1976
              </p>
              <p className="text-body-sm uppercase tracking-[0.15em] text-luxury-gray-mid">
                Founded
              </p>
            </div>
            <div className="border-t border-luxury-gray-whisper pt-6">
              <p className="font-serif text-heading-lg mb-2 text-luxury-black">
                12
              </p>
              <p className="text-body-sm uppercase tracking-[0.15em] text-luxury-gray-mid">
                Ateliers Worldwide
              </p>
            </div>
            <div className="border-t border-luxury-gray-whisper pt-6">
              <p className="font-serif text-heading-lg mb-2 text-luxury-black">
                100%
              </p>
              <p className="text-body-sm uppercase tracking-[0.15em] text-luxury-gray-mid">
                Sustainable Materials
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
