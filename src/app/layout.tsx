import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { Header } from '@/components/layout/Header'
import { Cart } from '@/components/cart/Cart'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// const didot = localFont({
//   src: [
//     {
//       path: '../fonts/didot-regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/didot-bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-didot',
//   display: 'swap',
//   fallback: ['Didot', 'Bodoni MT', 'Georgia', 'serif'],
// })

export const metadata: Metadata = {
  title: 'ATELIER — Luxury Fashion',
  description: 'Discover the essence of avant-garde luxury',
  keywords: ['luxury fashion', 'haute couture', 'designer clothing'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-luxury-black text-luxury-white font-sans antialiased">
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Cart />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
