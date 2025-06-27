"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Innovations Inc.",
    content:
      "Working with this developer was an absolute pleasure. They delivered high-quality code on time and exceeded our expectations. Their attention to detail and problem-solving skills are exceptional.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartUp Ventures",
    content:
      "One of the most talented developers I've worked with. They have a deep understanding of modern web technologies and always suggest the best solutions for complex problems.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "Creative Agency",
    content:
      "The collaboration was seamless. They perfectly translated our designs into pixel-perfect, responsive web applications. Communication was excellent throughout the project.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "David Thompson",
    role: "Founder",
    company: "E-commerce Solutions",
    content:
      "Delivered a robust e-commerce platform that handles thousands of transactions daily. The code quality is outstanding and the performance optimizations made a huge difference.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Lisa Wang",
    role: "Project Manager",
    company: "Digital Solutions Ltd.",
    content:
      "Professional, reliable, and incredibly skilled. They took ownership of the project and delivered results that exceeded our business goals. Highly recommended!",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "James Wilson",
    role: "Technical Lead",
    company: "Innovation Labs",
    content:
      "Exceptional technical skills combined with great communication. They helped us modernize our legacy system and the results speak for themselves. A true professional.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
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
              What Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what some of my clients have to say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-800/50 hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-300 dark:text-gray-600" />
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-6">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gray-200 dark:bg-gray-700">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
