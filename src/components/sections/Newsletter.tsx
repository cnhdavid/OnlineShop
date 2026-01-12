'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="bg-luxury-black py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="font-serif text-display-sm md:text-display-md mb-6 text-luxury-white">
              Join Our World
            </h2>
            <p className="text-body-lg mb-12 text-luxury-gray-light">
              Subscribe to receive exclusive access to new collections, private
              sales, and editorial content delivered to your inbox.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="mx-auto max-w-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="text-body-md flex-1 border-b border-luxury-gray-dark bg-transparent px-0 py-4 text-luxury-white placeholder:text-luxury-gray-mid focus:border-luxury-white focus:outline-none"
                required
              />
              <button
                type="submit"
                className="group flex items-center justify-center gap-3 border border-luxury-white px-8 py-4 text-body-md uppercase tracking-[0.15em] text-luxury-white transition-all duration-500 hover:bg-luxury-white hover:text-luxury-black sm:w-auto"
              >
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </button>
            </div>
            <p className="text-body-sm mt-6 text-luxury-gray-light">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-luxury-gray-dark pt-12"
          >
            <div className="text-center">
              <p className="font-serif text-heading-md mb-2 text-luxury-white">
                50K+
              </p>
              <p className="text-body-sm uppercase tracking-[0.15em] text-luxury-gray-light">
                Subscribers
              </p>
            </div>
            <div className="h-12 w-px bg-luxury-gray-dark" />
            <div className="text-center">
              <p className="font-serif text-heading-md mb-2 text-luxury-white">
                Weekly
              </p>
              <p className="text-body-sm uppercase tracking-[0.15em] text-luxury-gray-light">
                Updates
              </p>
            </div>
            <div className="h-12 w-px bg-luxury-gray-dark" />
            <div className="text-center">
              <p className="font-serif text-heading-md mb-2 text-luxury-white">
                Exclusive
              </p>
              <p className="text-body-sm uppercase tracking-[0.15em] text-luxury-gray-light">
                Access
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
