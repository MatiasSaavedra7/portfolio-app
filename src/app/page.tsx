import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, Calendar, Eye } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Java",
    "SQL",
    "React",
    "Next.js",
    "Node.js",
    "HTML/CSS",
    "Tailwind CSS",
    "Bootstrap",
    "MySQL",
    "PostgreSQL",
    "Git",
  ]

  const projects = [
    {
      id: "admin-dashboard",
      title: "Admin Dashboard",
      description: "Aplicación de administracion y gestion para un negocio de venta, alquiler, y servicio tecnico de maquinas impresoras, fotocopiadoras y multifuncion",
      tech: ["Node.js", "Express.js", "Socket.io", "MySQL", "AdminLTE"],
      github: "",
      demo: "",
      image: "/images/admin-dashboard/Inicio.png",
    },
    {
      id: "",
      title: "VENNER E-commerce",
      description:
        "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
      tech: ["Node.js", "Express.js", "React.js", "MySQL"],
      github: "https://github.com/MatiasSaavedra7/grupo_4_vinoteca",
      demo: "",
      image: "/images/e-commerce/e-commerce.jpg",
    },
    {
      id: "",
      title: "Next.js App Router",
      description:
        "Aplicacion web full-stack creada con Next.js",
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/MatiasSaavedra7/nextjs-dashboard",
      demo: "https://nextjs-dashboard-weld-one-3boa4gaukw.vercel.app/",
      image: "/images/nextjs-dashboard/dashboard.avif",
    },
  ]

  const experience = [
    {
      title: "Desarrollador Full Stack",
      company: "Freelance",
      period: "08/2024 - 02/2025",
      description: "Desarrollo de aplicacion web para la administracion de un negocio de ventas, alquiler, y service tecnico de maquinas impresoras, fotocopiadoras y multifuncion.",
    },
    {
      title: "Desarrollador Full Stack",
      company: "DigitalHouse",
      period: "08/2023 - 04/2024",
      description: "Desarrollo de un E-commerce como parte del trabajo final de graduacion",
    },
  ]

  const education = [
    {
      degree: "Tecnico Universitario en Programacion",
      institution: "Universidad Nacional de Santiago del Estero",
      period: "2023 - Presente",
      status: "En curso",
      description: "Formacion de alto nivel tecnologico para desempeñarse en tareas que requieran la aplicacion de tecnicas para el desarrollo de software y ejecutar tareas inherentes a la implementacion y el mantenimiento del mismo.",

    },
    {
      degree: "Desarrollador Full-Stack Node.js",
      institution: "DigitalHouse",
      period: "08/2023 - 04/2024",
      status: "Finalizado",
      description: "El curso de Programación Web Full Stack de Digital House te enseña a desarrollar sitios web completos, desde el frontend hasta el backend. Aprenderás HTML, CSS, JavaScript, React.js, bases de datos MySQL, Express.js y metodologías ágiles. Los objetivos incluyen dominar las bases de programación, comprender el ecosistema web, resolver problemas con autonomía y crear sitios web funcionales",
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Foto de perfil"
              width={150}
              height={150}
              className="rounded-full border-4 border-blue-500/20 shadow-2xl"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              ¡Hola! Soy
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Matias</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Desarrollador de Software, especializado en Node.js, apasionado por crear experiencias web increíbles.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Santiago del Estero, Argentina</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contáctame
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="shadow-lg hover:shadow-xl transition-shadow bg-transparent"
            >
              <Link href="/CV-MatiasSaavedra.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </Link>
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-muted transition-colors">
              <Link href="https://github.com/MatiasSaavedra7" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-muted transition-colors">
              <Link href="https://linkedin.com/in/saavedramatias" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-24 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre mí</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Soy un Desarrollador de Software con mas de un año de experiencia creando aplicaciones web modernas y
                eficientes. Me encanta resolver problemas complejos y aprender nuevas tecnologías.
              </p>
              <p className="text-lg text-muted-foreground">
                Mi enfoque está en crear experiencias de usuario eficientes y atractivas, mientras mantengo código limpio y
                escalable. Siempre busco las mejores prácticas y las últimas tendencias en desarrollo web.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Habilidades</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container px-4 py-24 mx-auto bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Educación</h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary" style={{ color: 'hsl(var(--primary))' }}>
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 md:min-w-[200px]">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {edu.period}
                      </div>
                      <Badge
                        variant={edu.status === "Finalizado" ? "default" : "secondary"}
                        className={
                          edu.status === "En curso"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : ""
                        }
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container px-4 py-24 mx-auto bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experiencia</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-lg">{exp.company}</CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container px-4 py-24 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg?height=200&width=300"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">

                    {/* Link al detalle del proyecto */}
                    { project.id && (
                      <Button variant="outline" size="sm" asChild className="bg-transparent">
                        <Link href={`/projects/${project.id}`}>
                          <Eye className="mr-1 h-4 w-4" /> Ver Detalles
                        </Link>
                      </Button>
                    )}

                    {/* Link al repositorio */}
                    { project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="mr-1 h-4 w-4" />
                          Código
                        </Link>
                      </Button>
                    )}

                    {/* Link al demo */}
                    { project.demo && (
                      <Button size="sm" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="mr-1 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24 mx-auto bg-muted/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">¡Trabajemos juntos!</h2>
          <p className="text-lg text-muted-foreground mb-8">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte a hacerlo realidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="mailto:matiassaavedra1995@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Enviar Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://linkedin.com/in/saavedramatias/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
