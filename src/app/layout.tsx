import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Inter, Outfit, Caveat, Bodoni_Moda } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/components/i18n-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })
const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni" })


export const metadata: Metadata = {
  title: "Matías Saavedra – Desarrollador de Software",
  description:
    "Portfolio profesional de Matías Saavedra. Desarrollador Full Stack especializado en Java, Node.js, React, Next.js y tecnologías modernas.",
  keywords: ["desarrollador", "full stack", "frontend", "backend", "react", "nextjs", "javascript", "typescript", "java", "sql", "mysql", "postgresql", "node.js"],
  authors: [{ name: "Matías Saavedra" }],
  openGraph: {
    title: "Matías Saavedra – Desarrollador de Software",
    description: "Portfolio profesional de desarrollador Full Stack",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${caveat.variable} ${bodoni.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <I18nProvider>
            {children}
          </I18nProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}