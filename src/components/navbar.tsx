"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#education", label: "Educación" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto"}
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      
      {/* Mi Portfolio */}
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">Mi Portfolio</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">

            {/* Links */}
            {links.map((link, index) => {
              return (
                <Link
                  href={link.href}
                  key={index}
                  className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"  
                >
                  {link.label}
                </Link>
              )
            })}
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2 ml-auto">
            <ThemeToggle />

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border bg-background/95 backdrop-blur text-center">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}