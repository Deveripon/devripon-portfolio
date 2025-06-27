"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
]

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing
            together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you're a company looking to
                hire, or you're a fellow developer wanting to collaborate, don't hesitate to reach out.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-800/50 hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center mr-4">
                            <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                            <a
                              href={info.href}
                              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-white/50 dark:bg-black/50 border-gray-200/50 dark:border-gray-800/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-white/50 dark:bg-black/50 border-gray-200/50 dark:border-gray-800/50"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/50 dark:bg-black/50 border-gray-200/50 dark:border-gray-800/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className="bg-white/50 dark:bg-black/50 border-gray-200/50 dark:border-gray-800/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-white/50 dark:bg-black/50 border-gray-200/50 dark:border-gray-800/50 resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-black hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-100 dark:hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
