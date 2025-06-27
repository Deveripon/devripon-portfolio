"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, product management, and order processing.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps using multiple weather APIs.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Vue.js", "Chart.js", "Weather API", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative digital
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-white/50 dark:bg-black/50 relative group/card backdrop-blur-sm border-gray-200/50 dark:border-gray-800/50 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border hover:shadow-2xl transition-all duration-300">
                  <CardItem translateZ="50" className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mb-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
                    />
                  </CardItem>
                  <CardItem translateZ="50" className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardItem>
                  <div className="flex justify-between items-center">
                    <CardItem
                      translateZ={20}
                      as={Button}
                      variant="outline"
                      size="sm"
                      className="border-gray-300 dark:border-gray-700"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Button}
                      size="sm"
                      className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-black hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-100 dark:hover:to-gray-300"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
