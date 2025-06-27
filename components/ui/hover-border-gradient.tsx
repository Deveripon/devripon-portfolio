"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT"

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType
    containerClassName?: string
    className?: string
    duration?: number
    clockwise?: boolean
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false)
  const [direction, setDirection] = useState<Direction>("TOP")

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    setHovered(true)
  }

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    setHovered(false)
  }

  return (
    <Tag
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex rounded-full border content-center bg-background/20 hover:bg-background/10 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName,
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-foreground z-10 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-[inherit]",
          className,
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn("flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]")}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered ? [movingMap[direction], movingMap[direction]] : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-background/80 backdrop-blur-sm absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  )
}

const movingMap: Record<Direction, string> = {
  TOP: "radial-gradient(20.7% 50% at 50% 0%, #3b82f6 0%, rgba(59, 130, 246, 0) 100%)",
  LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #8b5cf6 0%, rgba(139, 92, 246, 0) 100%)",
  BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #10b981 0%, rgba(16, 185, 129, 0) 100%)",
  RIGHT: "radial-gradient(16.2% 41.199999999999996% at 100% 50%, #ec4899 0%, rgba(236, 72, 153, 0) 100%)",
}
