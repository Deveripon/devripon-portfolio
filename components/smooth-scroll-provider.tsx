"use client"

import type React from "react"

import { useEffect } from "react"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Simple smooth scrolling behavior
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement
      const href = target.getAttribute("href")

      if (href && href.startsWith("#")) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return <>{children}</>
}
