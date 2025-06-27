import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechSolutions Inc.",
    period: "2022 - Present",
    description:
      "Lead development of enterprise web applications using React, Next.js, and Node.js. Mentored junior developers and implemented best practices for code quality and performance.",
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Innovations",
    period: "2021 - 2022",
    description:
      "Developed and maintained multiple client projects using modern JavaScript frameworks. Collaborated with design teams to implement pixel-perfect user interfaces.",
  },
  {
    title: "Frontend Developer",
    company: "StartupHub",
    period: "2020 - 2021",
    description:
      "Built responsive web applications using React and TypeScript. Worked closely with UX designers to create intuitive user experiences.",
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2016 - 2020",
    description: "Graduated with honors. Focused on software engineering, algorithms, and web technologies.",
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "CodeAcademy Pro",
    period: "2020",
    description: "Intensive 6-month program covering modern web development technologies and best practices.",
  },
]

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Resume</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            My professional journey and educational background in web development.
          </p>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-background dark:bg-black text-foreground flex items-center space-x-2 px-8 py-3"
            data-cursor-hover
          >
            <Download className="h-4 w-4" />
            <span>Download Full Resume</span>
          </HoverBorderGradient>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-medium text-foreground">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-medium text-foreground">{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.period}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
