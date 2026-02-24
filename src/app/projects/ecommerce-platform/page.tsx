import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Check, ShoppingCart, Shield, LayoutDashboard, Smartphone } from "lucide-react"
import { Github } from "lucide-react"

const tech = [
  "Node.js",
  "Express.js",
  "React",
  "JavaScript",
  "MySQL",
  "Sequelize",
  "Figma",
]

const achievements = [
  "Desarrollo de aplicación E-commerce completa utilizando Node.js, Express.js y Sequelize como ORM.",
  "Construcción de Dashboard administrativo con React consumiendo APIs REST propias.",
  "Implementación de validaciones de formularios, carga de imágenes y persistencia de datos en MySQL.",
  "Prototipado de interfaces en Figma previo a la implementación del front-end.",
  "Desarrollo de sistema de autenticación y gestión de sesiones de usuario.",
  "Implementación de carrito de compras con persistencia y gestión de inventario.",
]

const AchievementItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-4">
    <Check className="h-6 w-6 mt-1 flex-shrink-0 text-blue-500" />
    <p className="text-muted-foreground">{children}</p>
  </li>
)

export default function Ecommerce() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Top bar */}
      <div className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Portfolio
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="bg-transparent">
            <Link href="https://github.com/MatiasSaavedra7/grupo_4_vinoteca" target="_blank">
              <Github className="h-4 w-4 mr-2" />
              Ver repositorio
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Venner – Wine E-commerce
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plataforma de comercio electrónico completa para la venta de vinos, con dashboard administrativo,
              carrito de compras y autenticación de usuarios.
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/e-commerce/e-commerce.jpg"
              alt="Venner E-commerce"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {tech.map((t) => (
              <Badge key={t} variant="secondary" className="px-4 py-2">{t}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                <CardTitle>Carrito de Compras</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gestión completa del carrito con persistencia de datos y actualización en tiempo real.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto text-green-500 mb-4" />
                <CardTitle>Autenticación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sistema de registro, inicio de sesión y gestión de sesiones de usuario.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <LayoutDashboard className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                <CardTitle>Panel Admin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dashboard administrativo con React para gestionar productos, pedidos y usuarios.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Smartphone className="w-12 h-12 mx-auto text-teal-500 mb-4" />
                <CardTitle>Diseño Responsivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Experiencia optimizada para todos los dispositivos y tamaños de pantalla.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Responsabilidades y Logros</h2>
          <Card>
            <CardContent className="p-6 sm:p-8">
              <ul className="space-y-6">
                {achievements.map((a, i) => <AchievementItem key={i}>{a}</AchievementItem>)}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}