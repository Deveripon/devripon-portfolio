import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import Image from "next/image"

const blogPosts = [
  {
    title: "Building Scalable React Applications with TypeScript",
    description:
      "Learn best practices for structuring large React applications with TypeScript, including component patterns, state management, and testing strategies.",
    date: "2024-01-15",
    tags: ["React", "TypeScript", "Architecture"],
    slug: "building-scalable-react-applications",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600&q=80",
  },
  {
    title: "Next.js 14 App Router: Complete Guide",
    description:
      "Comprehensive guide to Next.js 14 App Router, covering server components, streaming, and the latest features for modern web development.",
    date: "2024-01-08",
    tags: ["Next.js", "React", "Web Development"],
    slug: "nextjs-14-app-router-guide",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600&q=80",
  },
  {
    title: "Database Design Patterns for Node.js Applications",
    description:
      "Explore different database design patterns and when to use them in Node.js applications, with examples using Prisma and MongoDB.",
    date: "2024-01-01",
    tags: ["Node.js", "Database", "Prisma"],
    slug: "database-design-patterns-nodejs",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600&q=80",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-muted/30 relative gradient-bg">
      <div className="absolute inset-0 tech-grid opacity-5" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            <span className="bg-gradient-to-r from-gradient-emerald via-gradient-blue to-gradient-purple bg-clip-text text-transparent animate-gradient">
              Latest Blog Posts
            </span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            I write about web development, sharing insights and tutorials on{" "}
            <span className="bg-gradient-to-r from-gradient-blue to-gradient-purple bg-clip-text text-transparent font-semibold">
              modern technologies
            </span>
            .
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-border cta-gradient-border"
            >
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={1000}
                  height={600}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <CardTitle className="text-xl leading-tight bg-gradient-to-r from-gradient-blue to-gradient-purple bg-clip-text text-transparent">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={`text-xs ${
                        tagIndex % 3 === 0
                          ? "bg-gradient-blue/10 text-gradient-blue border-gradient-blue/30"
                          : tagIndex % 3 === 1
                            ? "bg-gradient-purple/10 text-gradient-purple border-gradient-purple/30"
                            : "bg-gradient-emerald/10 text-gradient-emerald border-gradient-emerald/30"
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-background/80 backdrop-blur-sm text-foreground flex items-center space-x-2 px-4 py-2 text-sm font-medium hover:glow-blue transition-all duration-300"
                  data-cursor-hover
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </HoverBorderGradient>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
