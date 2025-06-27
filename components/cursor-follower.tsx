"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("button, a, [role='button']")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart)
      el.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 mix-blend-difference hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isVisible ? (isHovering ? 1.5 : 1) : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      <div className="w-full h-full bg-white rounded-full" />
    </motion.div>
  )
}
