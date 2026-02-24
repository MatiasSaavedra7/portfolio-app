"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Download, Send } from "lucide-react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/i18n-context"

export default function HeroSection() {
  const { t } = useI18n()

  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-20 pb-16"
      style={{
        background:
          "radial-gradient(ellipse at 70% 50%, hsl(var(--primary)/0.08) 0%, transparent 60%), hsl(var(--background))",
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left – Text */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-muted/30 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              Santiago del Estero, Argentina
            </div>

            <div>
              <p className="text-muted-foreground text-sm font-medium mb-2 uppercase tracking-widest">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                  Matías Saavedra
                </span>{" "}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-muted-foreground mt-2">
                {t.hero.role}
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              {t.hero.about}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="rounded-xl shadow-lg shadow-primary/20">
                <Link href="#contact">
                  <Send className="mr-2 h-4 w-4" />
                  {t.hero.contactBtn}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-xl bg-transparent"
              >
                <Link href="/CV-MatiasSaavedra.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  {t.hero.downloadCV}
                </Link>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-1">
              {[
                { href: "https://github.com/MatiasSaavedra7", icon: <Github className="h-5 w-5" />, label: "GitHub" },
                { href: "https://linkedin.com/in/saavedramatias", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                { href: "mailto:matiassaavedra1995@gmail.com", icon: <Mail className="h-5 w-5" />, label: "Email" },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  aria-label={s.label}
                  className="p-2 rounded-xl border border-border/60 bg-muted/30 hover:bg-muted/70 text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right – Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{
                  background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
                  transform: "scale(1.2)",
                }}
              />
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full p-1 bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Matías Saavedra"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
