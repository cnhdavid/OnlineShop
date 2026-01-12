'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Isabella Chen',
    role: 'Fashion Editor',
    content:
      'ATELIER has redefined what luxury means to me. Each piece is a work of art, meticulously crafted with an attention to detail that is simply unparalleled.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Laurent',
    role: 'Creative Director',
    content:
      'The quality is exceptional. These are investment pieces that will last a lifetime. The minimalist aesthetic perfectly captures contemporary elegance.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sofia Andersson',
    role: 'Architect',
    content:
      'I appreciate the thoughtful design and sustainable approach. ATELIER proves that luxury and responsibility can coexist beautifully.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-luxury-white-soft py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-label mb-4 inline-block uppercase tracking-[0.2em] text-luxury-gray-mid">
            Testimonials
          </span>
          <h2 className="font-serif text-display-sm md:text-display-md text-luxury-black">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="flex flex-col border border-luxury-gray-whisper bg-luxury-white p-8"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-luxury-black text-luxury-black"
                  />
                ))}
              </div>
              <p className="text-body-md mb-8 flex-1 text-luxury-gray-mid">
                "{testimonial.content}"
              </p>
              <div className="border-t border-luxury-gray-whisper pt-6">
                <p className="font-serif text-heading-md mb-1 text-luxury-black">
                  {testimonial.name}
                </p>
                <p className="text-body-sm uppercase tracking-[0.15em] text-luxury-gray-mid">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
