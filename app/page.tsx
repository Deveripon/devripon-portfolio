import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResumeSection } from "@/components/resume-section"
import { BlogSection } from "@/components/blog-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
