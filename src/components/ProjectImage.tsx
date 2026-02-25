"use client"

import Image from "next/image"
import { ZoomIn } from "lucide-react"

interface ProjectImageProps {
  src: string
  alt: string
  height?: string
  onOpen: (src: string, alt: string) => void
}

export default function ProjectImage({ src, alt, height = "h-48", onOpen }: ProjectImageProps) {
  return (
    <div
      className={`relative ${height} overflow-hidden cursor-zoom-in`}
      onClick={() => onOpen(src, alt)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
          <ZoomIn className="h-3.5 w-3.5" />
          {alt}
        </span>
      </div>
    </div>
  )
}
