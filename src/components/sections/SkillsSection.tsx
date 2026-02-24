"use client"

import { Card } from "@/components/ui/card"
import { useI18n } from "@/components/i18n-context"
import skillsData from "@/data/skills.json"
import type { SkillRow } from "@/types"

const data = skillsData as SkillRow[]

export default function SkillsSection() {
  const { t, lang } = useI18n()

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">{t.skills.title}</h2>

        <Card className="overflow-hidden border-border/60">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/40">
                  <th className="text-left px-6 py-4 font-semibold">{t.skills.category}</th>
                  <th className="text-left px-6 py-4 font-semibold">{t.skills.technologies}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border/40 last:border-0 hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-blue-500 whitespace-nowrap">
                      {lang === "es" ? row.categoryEs : row.categoryEn}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  )
}
