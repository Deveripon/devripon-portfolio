"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored junior developers and established coding standards",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with product team to define technical requirements",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    period: "2020 - 2022",
    description: [
      "Built responsive web applications using React and TypeScript",
      "Optimized application performance resulting in 40% faster load times",
      "Worked closely with UX designers to implement pixel-perfect designs",
      "Integrated third-party APIs and payment processing systems",
    ],
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: [
      "Developed and maintained company website and internal tools",
      "Participated in agile development process and daily standups",
      "Learned modern web technologies and best practices",
      "Contributed to open-source projects and technical documentation",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    location: "California, USA",
    period: "2015 - 2019",
    description: [
      "Graduated Magna Cum Laude with 3.8 GPA",
      "Specialized in Software Engineering and Web Development",
      "Active member of Computer Science Society",
      "Completed capstone project on machine learning applications",
    ],
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    school: "Code Academy",
    location: "Online",
    period: "2018",
    description: [
      "Intensive 6-month program covering modern web technologies",
      "Built 10+ projects using React, Node.js, and databases",
      "Learned agile development methodologies",
      "Graduated in top 10% of cohort",
    ],
  },
]

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
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
              Resume
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            My professional journey and educational background in software development.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-black hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-100 dark:hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
            <TabsTrigger value="experience" className="data-[state=active]:bg-white dark:data-[state=active]:bg-black">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-white dark:data-[state=active]:bg-black">
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-800/50 hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span className="font-medium">{exp.company}</span>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-800/50 hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{edu.degree}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span className="font-medium">{edu.school}</span>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {edu.description.map((item, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
