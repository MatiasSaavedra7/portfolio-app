"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/i18n-context"
import projectsData from "@/data/projects.json"
import type { ProjectsData } from "@/types"

const { featured, other } = projectsData as ProjectsData

/** Maps a programming language name to a Tailwind color class set */
const langColors: Record<string, string> = {
  TypeScript: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  JavaScript: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  Java: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  HTML: "bg-red-500/10 text-red-400 border-red-500/30",
  Python: "bg-green-500/10 text-green-400 border-green-500/30",
}

export default function ProjectsSection() {
  const { t, lang } = useI18n()

  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-3">{t.projects.title}</h2>
        <p className="text-center text-muted-foreground mb-12 text-sm">
          {lang === "es"
            ? "Una selección de proyectos personales y profesionales."
            : "A selection of personal and professional projects."}
        </p>

        {/* ── Featured ───────────────────────────────────────────── */}
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
          {t.projects.featured}
        </h3>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {featured.map((p, i) => (
            <Card
              key={i}
              className="overflow-hidden border-border/60 flex flex-col group hover:border-blue-500/40 transition-colors duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={p.image || "/placeholder.svg?height=200&width=400"}
                  alt={lang === "es" ? p.titleEs : p.titleEn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <CardContent className="flex flex-col flex-1 p-5 gap-3">
                <h4 className="font-bold text-lg">{lang === "es" ? p.titleEs : p.titleEn}</h4>
                <p className="text-sm text-muted-foreground flex-1">
                  {lang === "es" ? p.descriptionEs : p.descriptionEn}
                </p>
                <div className="flex flex-wrap gap-1">
                  {p.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {p.id && (
                    <Button variant="outline" size="sm" asChild className="bg-transparent rounded-lg">
                      <Link href={`/projects/${p.id}`}>
                        <Eye className="mr-1 h-3.5 w-3.5" />
                        {t.projects.viewDetails}
                      </Link>
                    </Button>
                  )}
                  {p.github && (
                    <Button variant="outline" size="sm" asChild className="bg-transparent rounded-lg">
                      <Link href={p.github} target="_blank">
                        <Github className="mr-1 h-3.5 w-3.5" />
                        {t.projects.viewRepo}
                      </Link>
                    </Button>
                  )}
                  {p.demo && (
                    <Button size="sm" asChild className="rounded-lg">
                      <Link href={p.demo} target="_blank">
                        <ExternalLink className="mr-1 h-3.5 w-3.5" />
                        {t.projects.viewDemo}
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ── Other Projects ─────────────────────────────────────── */}
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
          {t.projects.other}
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {other.map((p, i) => (
            <Card
              key={i}
              className="border-border/60 flex flex-col hover:border-violet-500/40 transition-colors duration-300 p-5 gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold text-base leading-tight">
                  {lang === "es" ? p.titleEs : p.titleEn}
                </h4>
                {p.lang && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border shrink-0 font-medium ${
                      langColors[p.lang] ?? "bg-muted text-muted-foreground border-border"
                    }`}
                  >
                    {p.lang}
                  </span>
                )}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                {lang === "es" ? p.descriptionEs : p.descriptionEn}
              </p>

              <div className="flex flex-wrap gap-1">
                {p.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <Link
                href={p.github}
                target="_blank"
                className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                {t.projects.viewRepo}
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
