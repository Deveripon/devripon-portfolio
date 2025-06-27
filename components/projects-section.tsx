"use client"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600&q=80",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600&q=80",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization and automated reporting.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600&q=80",
    tech: ["Next.js", "Chart.js", "Tailwind CSS", "API Integration"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Learning Management System",
    description: "Educational platform with course management, video streaming, progress tracking, and certification.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600&q=80",
    tech: ["React", "Node.js", "MongoDB", "AWS S3", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative">
      <div className="absolute inset-0 gradient-bg" />

      <div className="container px-4 md:px-6 relative z-10">
        <div ref={titleRef} className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            <span className="bg-gradient-to-r from-gradient-purple via-gradient-blue to-gradient-emerald bg-clip-text text-transparent animate-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Cutting-edge applications built with{" "}
            <span className="bg-gradient-to-r from-gradient-blue to-gradient-purple bg-clip-text text-transparent font-semibold">
              modern technologies
            </span>{" "}
            and futuristic design principles.
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-card/50 backdrop-blur-sm relative group/card border hover:shadow-2xl hover:shadow-gradient-blue/[0.1] border-border w-auto sm:w-[30rem] h-auto rounded-xl p-6 cta-gradient-border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold bg-gradient-to-r from-gradient-blue to-gradient-purple bg-clip-text text-transparent"
                >
                  {project.title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-muted-foreground text-sm max-w-sm mt-2">
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    height="600"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.title}
                  />
                </CardItem>
                <CardItem translateZ="50" className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`text-xs transition-all duration-300 hover:scale-105 ${
                          techIndex % 3 === 0
                            ? "border-gradient-blue/30 hover:border-gradient-blue hover:bg-gradient-blue/10 hover:text-gradient-blue"
                            : techIndex % 3 === 1
                              ? "border-gradient-purple/30 hover:border-gradient-purple hover:bg-gradient-purple/10 hover:text-gradient-purple"
                              : "border-gradient-emerald/30 hover:border-gradient-emerald hover:bg-gradient-emerald/10 hover:text-gradient-emerald"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem translateZ={20} as="div" className="inline-block">
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className="bg-background/80 backdrop-blur-sm text-foreground flex items-center space-x-2 px-4 py-2 text-xs font-bold hover:glow-blue transition-all duration-300"
                      data-cursor-hover
                    >
                      <ExternalLink className="h-4 w-4" />
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </HoverBorderGradient>
                  </CardItem>
                  <CardItem translateZ={20} as="div" className="inline-block">
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className="bg-background/80 backdrop-blur-sm text-foreground flex items-center space-x-2 px-4 py-2 text-xs font-bold hover:glow-purple transition-all duration-300"
                      data-cursor-hover
                    >
                      <Github className="h-4 w-4" />
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </HoverBorderGradient>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  )
}
