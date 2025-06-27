import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export function Footer() {
  return (
    <footer className="bg-background dark:bg-cyber-darker border-t border-border relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-5" />

      <div className="container px-4 md:px-6 py-12 relative z-10">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-6">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="a"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 dark:bg-black/80 backdrop-blur-sm text-foreground flex items-center justify-center w-12 h-12"
              data-cursor-hover
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-neon-cyan transition-colors" />
              <span className="sr-only">GitHub</span>
            </HoverBorderGradient>

            <HoverBorderGradient
              containerClassName="rounded-full"
              as="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 dark:bg-black/80 backdrop-blur-sm text-foreground flex items-center justify-center w-12 h-12"
              data-cursor-hover
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-neon-purple transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </HoverBorderGradient>

            <HoverBorderGradient
              containerClassName="rounded-full"
              as="a"
              href="mailto:ripon@example.com"
              className="bg-background/80 dark:bg-black/80 backdrop-blur-sm text-foreground flex items-center justify-center w-12 h-12"
              data-cursor-hover
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-neon-green transition-colors" />
              <span className="sr-only">Email</span>
            </HoverBorderGradient>
          </div>

          <div className="text-center space-y-2">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} <span className="text-neon-cyan font-semibold">Shahadat Hussain Ripon</span>.
              All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Crafted with <Heart className="h-4 w-4 text-neon-pink fill-current animate-pulse" /> using{" "}
              <span className="text-neon-cyan">Next.js</span> & <span className="text-neon-purple">Tailwind CSS</span>
            </p>
          </div>

          {/* Floating Tech Elements */}
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
          <div
            className="absolute top-4 right-4 w-3 h-3 border border-neon-purple rotate-45 animate-spin"
            style={{ animationDuration: "10s" }}
          />
        </div>
      </div>
    </footer>
  )
}
