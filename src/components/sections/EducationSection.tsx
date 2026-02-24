"use client"

import { Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/components/i18n-context"
import educationData from "@/data/education.json"
import type { EducationEntry } from "@/types"

const data = educationData as EducationEntry[]

const barColor: Record<EducationEntry["status"], string> = {
  ongoing: "linear-gradient(180deg, #3b82f6, #8b5cf6)",
  finished: "linear-gradient(180deg, #10b981, #059669)",
}

const badgeClass: Record<EducationEntry["status"], string> = {
  ongoing: "bg-blue-500/10 text-blue-400 border-blue-500/30 border",
  finished: "bg-green-500/10 text-green-400 border-green-500/30 border",
}

export default function EducationSection() {
  const { t, lang } = useI18n()

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">{t.education.title}</h2>

        <div className="space-y-6">
          {data.map((edu, i) => (
            <Card key={i} className="overflow-hidden border-border/60">
              <div className="flex">
                {/* Colored left bar */}
                <div className="w-1 shrink-0" style={{ background: barColor[edu.status] }} />

                <div className="flex-1">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <CardTitle className="text-lg">
                          {lang === "es" ? edu.degreeEs : edu.degreeEn}
                        </CardTitle>
                        <p className="text-sm font-medium text-blue-500 mt-1">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/40 px-2.5 py-1 rounded-lg">
                          <Calendar className="h-3 w-3" />
                          <span>{lang === "es" ? edu.periodEs : edu.periodEn}</span>
                        </div>
                        <Badge className={badgeClass[edu.status]}>
                          {t.education[edu.status]}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      {lang === "es" ? edu.descriptionEs : edu.descriptionEn}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
