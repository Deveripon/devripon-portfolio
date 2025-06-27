"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Spotlight } from "@/components/ui/spotlight"

const words = ["Developer", "Designer", "Creator", "Innovator"]

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <div className="space-y-4">
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                Hi, I'm a
              </span>
              <br />
              <FlipWords
                words={words}
                className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent"
              />
            </motion.h1>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <TextGenerateEffect
              words="I craft beautiful, functional, and user-centered digital experiences that make a difference. Let's build something amazing together."
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-black hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-100 dark:hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => {
                const projectsSection = document.getElementById("projects")
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/20 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
