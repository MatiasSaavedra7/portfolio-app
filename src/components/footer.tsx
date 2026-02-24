"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { useI18n } from "@/components/i18n-context"

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  const socials = [
    {
      href: "https://github.com/MatiasSaavedra7",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/saavedramatias",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:matiassaavedra1995@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
    },
  ]

  return (
    <footer className="border-t border-border/40 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social links */}
          <div className="flex gap-3">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-muted/30 hover:bg-muted/70 text-muted-foreground hover:text-foreground transition-all duration-200 text-sm"
              >
                {s.icon}
                <span>{s.label}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full max-w-xs bg-border/40" />

          {/* Made by */}
          <div className="text-center text-sm text-muted-foreground space-y-1">
            <p>
              {t.footer.madeBy}{" "}
              <Link
                href="https://github.com/MatiasSaavedra7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-medium"
              >
                Matías Saavedra
              </Link>
            </p>
            <p>
              {year}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}