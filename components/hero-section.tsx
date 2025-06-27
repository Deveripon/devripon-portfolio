"use client"
import { Download, Mail, Zap } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const words =
  "Crafting the future of web with cutting-edge technologies. I build scalable applications that push the boundaries of what's possible in the digital realm."

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline()

      tl.fromTo(titleRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.8",
        )
        .fromTo(
          buttonsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          imageRef.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.4",
        )

      // Floating orbs animation
      gsap.to(".floating-orb", {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background antialiased bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="emerald" />

      {/* Sophisticated Floating Orbs */}
      <div className="floating-orb absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-gradient-blue/20 to-gradient-purple/20 rounded-full blur-xl animate-pulse-glow" />
      <div className="floating-orb absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-gradient-purple/20 to-gradient-emerald/20 rounded-full blur-xl animate-pulse-glow" />
      <div className="floating-orb absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-gradient-emerald/20 to-gradient-blue/20 rounded-full blur-xl animate-pulse-glow" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div ref={contentRef} className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 ref={titleRef} className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <span className="bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-emerald bg-clip-text text-transparent animate-gradient text-glow">
                  Shahadat Hussain Ripon
                </span>
              </h1>

              <div ref={subtitleRef} className="relative">
                <p className="text-xl md:text-2xl bg-gradient-to-r from-gradient-blue to-gradient-purple bg-clip-text text-transparent font-medium animate-pulse-glow">
                  Full-Stack JavaScript Developer
                </p>
                <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-gradient-blue to-transparent animate-pulse-glow" />
              </div>

              <div className="mx-auto lg:mx-0 max-w-[600px]">
                <TextGenerateEffect words={words} className="text-muted-foreground md:text-lg leading-relaxed" />
              </div>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-background/80 backdrop-blur-sm text-foreground flex items-center space-x-2 px-8 py-3 hover:glow-blue transition-all duration-300"
                data-cursor-hover
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
                <Zap className="h-4 w-4" />
              </HoverBorderGradient>

              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-background/80 backdrop-blur-sm text-foreground flex items-center space-x-2 px-8 py-3 hover:glow-purple transition-all duration-300"
                data-cursor-hover
              >
                <Mail className="h-4 w-4" />
                <span>Hire Me</span>
              </HoverBorderGradient>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-2xl overflow-hidden cta-gradient-border">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=800&q=80"
                  alt="Developer coding workspace with multiple monitors"
                  width={500}
                  height={400}
                  className="w-full h-[400px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-blue/20 via-transparent to-gradient-purple/20" />
              </div>

              {/* Floating Tech Elements */}
              <div className="floating-orb absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-gradient-blue/30 to-gradient-purple/30 rounded-full blur-xl animate-pulse-glow" />
              <div className="floating-orb absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-gradient-purple/30 to-gradient-emerald/30 rounded-full blur-xl animate-pulse-glow" />
              <div
                className="absolute top-1/2 -right-8 w-4 h-4 border-2 border-gradient-blue rotate-45 animate-spin"
                style={{ animationDuration: "8s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
