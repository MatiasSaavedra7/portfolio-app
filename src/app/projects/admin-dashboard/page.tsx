import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/image-carousel"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, FilePen, Wrench, Smartphone } from "lucide-react"

const carouselImages = [
  {
    src: "/images/admin-dashboard/Inicio.png",
    alt: "Pagina Principal",
    title: "Pagina Principal",
    description: "Landing page con metricas principales",
    type: "screenshot" as const,
  },
  {
    src: "/images/admin-dashboard/Equipos.png",
    alt: "Tabla de Equipos",
    title: "Tabla de Equipos",
    description: "Pagina con la informacion de todos los equipos",
    type: "screenshot" as const,
  },
  {
    src: "/images/admin-dashboard/PerfilEquipo.png",
    alt: "Detalle de Equipo",
    title: "Detalle de Equipo",
    description: "Detalle del equipo, informacion clave, detalles de alquileres e historial del taller.",
    type: "screenshot" as const,
  },
  {
    src: "/images/admin-dashboard/InformeEquipoModal.png",
    alt: "Informe del Taller",
    title: "Informe del Taller",
    description: "Se puede ver un informe del historial a traves de un modal dentro de la pagina del detalle del equipo",
    type: "screenshot" as const,
  },
  {
    src: "/images/admin-dashboard/Clientes.png",
    alt: "Tabla de Clientes",
    title: "Tabla de Clientes",
    description: "Pagina con la informacion de todos los clientes",
    type: "screenshot" as const,
  },
  {
    src: "/images/admin-dashboard/PerfilCliente.png",
    alt: "Detalle del Cliente",
    title: "Detalle del Cliente",
    description: "Pagina con la informacion detallada de cada cliente, pudiendo ver los contratos activos y anteriores",
    type: "screenshot" as const,
  },
  {
    src: "/images/admin-dashboard/Alquileres.png",
    alt: "Tabla de Alquileres",
    title: "Tabla de Alquileres",
    description: "Pagina con la de cada contrato de alquiler",
    type: "screenshot" as const,
  },
  {
    src: "/images/admin-dashboard/Taller.png",
    alt: "Tabla de equipos en el taller",
    title: "Tabla de equipos en el taller",
    description: "Pagina donde se puede ver que equipos se encuentran en el taller y cual es su estado actual",
    type: "screenshot" as const,
  },
  
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Navbar /> */}

      {/* Breadcrumb */}
      {/* <div className="boreder-b bg-muted/30"> */}
      <div className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Portfolio
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Una aplicacion para la gestion de un negocio de venta, alquiler y service tecnico de maquinas fotocopiadoras, impresoras y multifuncion.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/admin-dashboard/Inicio.png"
              alt="Dashboard"
              fill
              className="object-cover"
            />
          </div>

          {/* Stack */}
          <div className=" flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-2">
              Node.js
            </Badge>
            
            <Badge variant="secondary" className="px-4 py-2">
              JavaScript
            </Badge>

            <Badge variant="secondary" className="px-4 py-2">
              Express.js
            </Badge>

            <Badge variant="secondary" className="px-4 py-2">
              HTML/CSS
            </Badge>

            <Badge variant="secondary" className="px-4 py-2">
              AdminLTE
            </Badge>

            <Badge variant="secondary" className="px-4 py-2">
              MySQL
            </Badge>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Caracteristicas Principales
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                <CardTitle>
                  Gestion de Usuarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sistema completo de autenticacion y perfiles de usuario.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <FilePen className="w-12 h-12 mx-auto text-green-500 mb-4" />
                <CardTitle>
                  Control de Alquileres
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gestion completa de los contratos de alquiler, incluyendo fechas, estados y detalles de los clientes y los equipos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wrench className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
                <CardTitle>
                  Taller
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ingreso y egreso de equipos al taller, tanto propios como de terceros, toda la informacion se almacena en la base de datos y es posible acceder al detalle de cada uno, creando un historial clinico completo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Smartphone className="w-12 h-12 mx-auto text-teal-600 mb-4" />
                <CardTitle>
                  Diseño Responsivo
                </CardTitle>
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

      {/* Carousel */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Galeria del Imagenes
          </h2>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>
      <Footer />
    </div>
  )
}