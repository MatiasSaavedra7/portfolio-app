import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Matias Saavedra - Desarrollador de Software",
  description:
    "Portfolio profesional de desarrollador Full Stack especializado Node.js, React.js, Next.js y tecnologías modernas.",
  keywords: ["desarrollador", "full stack", "react", "nextjs", "javascript", "typescript", "java", "sql", "mysql", "postgresql"],
  authors: [{ name: "Matias Saavedra" }],
  openGraph: {
    title: "Matias Saavedra - Desarrollador de Software",
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}