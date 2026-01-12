'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  const footerLinks = {
    shop: [
      { label: 'New Arrivals', href: '/new' },
      { label: 'Women', href: '/women' },
      { label: 'Men', href: '/men' },
      { label: 'Accessories', href: '/accessories' },
    ],
    help: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Shipping', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
      { label: 'Size Guide', href: '/size-guide' },
    ],
    about: [
      { label: 'Our Story', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Press', href: '/press' },
    ],
  }

  return (
    <footer className="bg-luxury-black py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 grid gap-12 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-heading-lg mb-8 text-luxury-white">
              ATELIER
            </h3>
            <p className="text-body-sm mb-8 text-luxury-gray-light">
              Redefining luxury through minimalist design and timeless
              elegance.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com"
                className="luxury-focus text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                className="luxury-focus text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="luxury-focus text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-label mb-6 uppercase tracking-[0.15em] text-luxury-gray-light">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm luxury-focus text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-label mb-6 uppercase tracking-[0.15em] text-luxury-gray-light">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm luxury-focus text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-label mb-6 uppercase tracking-[0.15em] text-luxury-gray-light">
              About
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm luxury-focus text-luxury-white transition-colors duration-300 hover:text-luxury-gray-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-gray-dark pt-8">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="text-body-sm text-luxury-gray-light">
              © 2026 ATELIER. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-body-sm luxury-focus text-luxury-gray-light transition-colors duration-300 hover:text-luxury-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-body-sm luxury-focus text-luxury-gray-light transition-colors duration-300 hover:text-luxury-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
