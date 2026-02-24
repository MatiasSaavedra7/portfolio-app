"use client"

import { Calendar, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/components/i18n-context"
import experienceData from "@/data/experience.json"
import type { ExperienceEntry } from "@/types"

const data = experienceData as ExperienceEntry[]

export default function ExperienceSection() {
  const { t, lang } = useI18n()

  return (
    <section id="experience" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">{t.experience.title}</h2>

        <div className="space-y-8">
          {data.map((exp, i) => (
            <Card key={i} className="overflow-hidden border-border/60">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <CardTitle className="text-xl">
                      {lang === "es" ? exp.titleEs : exp.titleEn}
                    </CardTitle>
                    <p className="text-base font-semibold text-blue-500 mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground shrink-0 bg-muted/40 px-3 py-1.5 rounded-lg">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{lang === "es" ? exp.periodEs : exp.periodEn}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {exp.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {(lang === "es" ? exp.bulletsEs : exp.bulletsEn).map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <ChevronRight className="h-4 w-4 mt-0.5 shrink-0 text-blue-500" />
                      <span className="text-sm text-muted-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
