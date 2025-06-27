import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { FloatingNavbar } from "@/components/floating-navbar"
import { CursorFollower } from "@/components/cursor-follower"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Modern Developer Portfolio",
  description: "A modern, responsive developer portfolio built with Next.js and Tailwind CSS",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScrollProvider>
            <FloatingNavbar />
            <CursorFollower />
            {children}
            <Toaster />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
