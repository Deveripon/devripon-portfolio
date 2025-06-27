"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Rocket, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe Creative Suite, Prototyping",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Rocket,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Agile, Git, Team Leadership, Mentoring",
    color: "from-orange-500/20 to-red-500/20",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
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
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that bridge
            the gap between design and functionality. I love turning complex problems into simple, beautiful, and
            intuitive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-800/50 hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                    >
                      <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-800/50">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Let's Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or
              just want to chat about technology, I'd love to hear from you.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-black hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-100 dark:hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
