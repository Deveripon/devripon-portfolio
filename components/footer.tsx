"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex justify-center">
            <ThemeToggle />
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Your Name
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">© 2024 All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
