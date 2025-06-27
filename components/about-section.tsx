"use client"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { FlipWords } from "@/components/ui/flip-words"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Prisma",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Express.js",
  "PostgreSQL",
  "Git",
  "Docker",
  "AWS",
  "GraphQL",
  "Redux",
  "Socket.io",
]

const words = ["innovative", "scalable", "modern", "cutting-edge"]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        },
      )

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        },
      )

      // Skills animation
      gsap.fromTo(
        skillsRef.current?.children || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 90%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 relative gradient-bg">
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div ref={imageRef} className="flex justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-card/80 backdrop-blur-sm">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80"
                    alt="Professional developer portrait"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="floating-orb absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-gradient-blue/30 to-gradient-purple/30 rounded-full blur-xl animate-pulse-glow" />
                <div className="floating-orb absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-gradient-purple/30 to-gradient-emerald/30 rounded-full blur-xl animate-pulse-glow" />
                <div
                  className="absolute top-1/2 -right-8 w-4 h-4 border-2 border-gradient-blue rotate-45 animate-spin"
                  style={{ animationDuration: "8s" }}
                />
              </div>
            </BackgroundGradient>
          </div>

          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                <span className="bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-emerald bg-clip-text text-transparent animate-gradient">
                  About Me
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate{" "}
                  <span className="bg-gradient-to-r from-gradient-blue to-gradient-purple bg-clip-text text-transparent font-semibold">
                    Full-Stack JavaScript Developer
                  </span>{" "}
                  with over 3 years of experience building
                  <FlipWords
                    words={words}
                    className="bg-gradient-to-r from-gradient-emerald to-gradient-blue bg-clip-text text-transparent font-semibold"
                  />{" "}
                  web applications.
                </p>
                <p>
                  My journey in web development started with a curiosity about how websites work, and it has evolved
                  into a deep passion for crafting exceptional{" "}
                  <span className="bg-gradient-to-r from-gradient-purple to-gradient-emerald bg-clip-text text-transparent font-semibold">
                    digital experiences
                  </span>
                  . I love working with cutting-edge technologies and continuously learning new skills.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to{" "}
                  <span className="bg-gradient-to-r from-gradient-emerald to-gradient-blue bg-clip-text text-transparent font-semibold">
                    open-source projects
                  </span>
                  , writing technical blogs, or exploring the latest trends in web development.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-gradient-blue to-gradient-purple bg-clip-text text-transparent">
                Skills & Technologies
              </h3>
              <div ref={skillsRef} className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`text-sm py-2 px-4 bg-card/50 backdrop-blur-sm border transition-all duration-300 hover:scale-105 cursor-pointer ${
                      index % 3 === 0
                        ? "border-gradient-blue/30 hover:border-gradient-blue hover:bg-gradient-blue/10 hover:text-gradient-blue hover:glow-blue"
                        : index % 3 === 1
                          ? "border-gradient-purple/30 hover:border-gradient-purple hover:bg-gradient-purple/10 hover:text-gradient-purple hover:glow-purple"
                          : "border-gradient-emerald/30 hover:border-gradient-emerald hover:bg-gradient-emerald/10 hover:text-gradient-emerald hover:glow-emerald"
                    }`}
                    data-cursor-hover
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
