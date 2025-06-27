"use client"
import type React from "react"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
}

export function CTAButton({
  children,
  className,
  containerClassName,
  onClick,
  href,
  target,
  rel,
  size = "md",
  fullWidth = false,
  ...props
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3 text-base",
  }

  const content = (
    <HoverBorderGradient
      containerClassName={cn("rounded-full", fullWidth && "w-full", containerClassName)}
      as={href ? "a" : "button"}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "bg-background dark:bg-black text-foreground flex items-center justify-center space-x-2 font-medium transition-all duration-300",
        sizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
      data-cursor-hover
      {...props}
    >
      {children}
    </HoverBorderGradient>
  )

  return content
}
