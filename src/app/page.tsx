import { HeroSection } from '@/components/sections/HeroSection'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { FeaturedCollection } from '@/components/sections/FeaturedCollection'
import { BrandStory } from '@/components/sections/BrandStory'
import { EditorialSection } from '@/components/sections/EditorialSection'
import { Testimonials } from '@/components/sections/Testimonials'
import { Newsletter } from '@/components/sections/Newsletter'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductGrid />
      <FeaturedCollection />
      <BrandStory />
      <EditorialSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}
