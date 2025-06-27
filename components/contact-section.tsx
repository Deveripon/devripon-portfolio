"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import Image from "next/image"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        contentRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )

      gsap.fromTo(
        formRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-24 relative">
      {/* Tech Background */}
      <div className="absolute inset-0 tech-grid opacity-5" />
      <div className="absolute inset-0 gradient-bg" />

      <div className="container px-4 md:px-6 relative z-10">
        <div ref={titleRef} className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            <span className="bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-emerald bg-clip-text text-transparent animate-gradient">
              Get In Touch
            </span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Ready to build the{" "}
            <span className="bg-gradient-to-r from-gradient-blue to-gradient-purple bg-clip-text text-transparent font-semibold">
              future
            </span>{" "}
            together? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gradient-blue to-gradient-purple bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600&q=80"
                alt="Modern office workspace with communication tools"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gradient-blue/20 to-gradient-purple/20 rounded-lg" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-gradient-blue/50 transition-colors cta-gradient-border">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-blue/20 to-gradient-purple/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-gradient-blue" />
                </div>
                <div>
                  <div className="font-medium text-gradient-blue">Email</div>
                  <div className="text-muted-foreground">ripon@example.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-gradient-purple/50 transition-colors cta-gradient-border">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-purple/20 to-gradient-emerald/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-gradient-purple" />
                </div>
                <div>
                  <div className="font-medium text-gradient-purple">Phone</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-gradient-emerald/50 transition-colors cta-gradient-border">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-emerald/20 to-gradient-blue/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-gradient-emerald" />
                </div>
                <div>
                  <div className="font-medium text-gradient-emerald">Location</div>
                  <div className="text-muted-foreground">Dhaka, Bangladesh</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card ref={formRef} className="bg-card/50 backdrop-blur-sm border-border cta-gradient-border">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-gradient-blue to-gradient-purple bg-clip-text text-transparent">
                Send Message
              </CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gradient-blue">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-muted/50 border-border focus:border-gradient-blue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gradient-blue">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-muted/50 border-border focus:border-gradient-blue"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gradient-blue">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="Project inquiry"
                  className="bg-muted/50 border-border focus:border-gradient-blue"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gradient-blue">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="min-h-[120px] bg-muted/50 border-border focus:border-gradient-blue"
                />
              </div>
              <HoverBorderGradient
                containerClassName="rounded-full w-full"
                as="button"
                className="bg-background/80 backdrop-blur-sm text-foreground flex items-center justify-center space-x-2 px-8 py-3 w-full hover:glow-blue transition-all duration-300"
                data-cursor-hover
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </HoverBorderGradient>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
