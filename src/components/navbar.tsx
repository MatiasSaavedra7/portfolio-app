"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useI18n } from "@/components/i18n-context"

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "mx-4 mt-3 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Logo */}
        <div className="mr-4 flex flex-1">
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              MS
            </span>
            <span className="hidden sm:block font-semibold text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Matías Saavedra
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="ml-2 px-3 py-1.5 text-xs font-semibold rounded-lg border border-border/60 bg-muted/30 hover:bg-muted/70 text-muted-foreground hover:text-foreground transition-all duration-200"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-1 ml-auto">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-border/60 bg-muted/30 hover:bg-muted/70 text-muted-foreground hover:text-foreground transition-all duration-200"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}