import { CodePreview } from '~/components/code-preview'
import { HeroSection } from '~/components/hero-section'
import { Testimonials } from '~/components/testimonials'

export default function Page() {
  return (
    <>
      <HeroSection />
      <CodePreview />
      <Testimonials />
    </>
  )
}
