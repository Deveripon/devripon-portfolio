"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed top-4 right-4 z-50">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="bg-background/80 dark:bg-black/80 backdrop-blur-sm text-foreground flex items-center justify-center w-10 h-10"
        data-cursor-hover
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-neon-cyan" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-neon-purple" />
        <span className="sr-only">Toggle theme</span>
      </HoverBorderGradient>
    </div>
  )
}
