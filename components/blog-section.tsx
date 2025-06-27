"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for structuring and scaling React applications for enterprise-level projects.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    image: "/placeholder.svg?height=200&width=400",
    slug: "building-scalable-react-applications",
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging technologies and trends that will shape the future of web development.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=400",
    slug: "future-of-web-development",
  },
  {
    title: "Mastering TypeScript in 2024",
    excerpt: "A comprehensive guide to advanced TypeScript features and patterns for modern development.",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "TypeScript",
    image: "/placeholder.svg?height=200&width=400",
    slug: "mastering-typescript-2024",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Latest Blog Posts
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology, and the industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-800/50 hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
