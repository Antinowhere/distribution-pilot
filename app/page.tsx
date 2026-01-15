import { FloatingShapes } from '@/components/FloatingShapes'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ValueProps } from '@/components/ValueProps'
import { HowItWorks } from '@/components/HowItWorks'
import { BookingSection } from '@/components/BookingSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-glow">
      <FloatingShapes />
      <Header />
      <Hero />
      <ValueProps />
      <HowItWorks />
      <BookingSection />
      <Footer />
    </main>
  )
}
