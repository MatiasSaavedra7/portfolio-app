"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 p-2 transition-colors"
        aria-label="Close"
      >
        <X className="h-5 w-5 text-white" />
      </button>

      <div
        className="relative max-w-[90vw] max-h-[90vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>
    </div>
  )
}
