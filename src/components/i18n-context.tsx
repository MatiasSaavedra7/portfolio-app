"use client"

import React, { createContext, useContext, useState } from "react"

type Lang = "es" | "en"

interface Translations {
  nav: {
    about: string
    experience: string
    education: string
    projects: string
    skills: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    role: string
    about: string
    location: string
    contactBtn: string
    downloadCV: string
  }
  experience: {
    title: string
    present: string
    responsibilities: string
  }
  education: {
    title: string
    ongoing: string
    finished: string
  }
  projects: {
    title: string
    viewDetails: string
    viewRepo: string
    viewDemo: string
    featured: string
    other: string
  }
  skills: {
    title: string
    category: string
    technologies: string
  }
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    message: string
    send: string
    or: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
  }
  footer: {
    madeBy: string
  }
}

const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      education: "Educación",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "¡Hola! Soy",
      name: "Matías Saavedra",
      role: "Desarrollador de Software",
      about:
        "Especializado en el diseño y construcción de aplicaciones web integrales; desde arquitecturas de servidor sólidas en Java y Node.js, hasta interfaces dinámicas con React y Next.js. Cuento con sólida base técnica en el diseño y desarrollo de bases de datos, lo que me permite estructurar soluciones eficientes y escalables desde el modelado de datos hasta la interfaz final.",
      location: "Santiago del Estero, Argentina",
      contactBtn: "Contáctame",
      downloadCV: "Descargar CV",
    },
    experience: {
      title: "Experiencia",
      present: "Presente",
      responsibilities: "Responsabilidades",
    },
    education: {
      title: "Educación",
      ongoing: "En curso",
      finished: "Finalizado",
    },
    projects: {
      title: "Proyectos",
      viewDetails: "Ver Detalles",
      viewRepo: "Repositorio",
      viewDemo: "Demo",
      featured: "Proyectos Destacados",
      other: "Otros proyectos",
    },
    skills: {
      title: "Habilidades Técnicas",
      category: "Categoría",
      technologies: "Tecnologías",
    },
    contact: {
      title: "¡Trabajemos juntos!",
      subtitle:
        "¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte a hacerlo realidad.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
      or: "o también en",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
    },
    footer: {
      madeBy: "Hecho con ❤️ por",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi! I'm",
      name: "Matías Saavedra",
      role: "Software Developer",
      about:
        "Specialized in designing and building full-stack web applications; from solid server architectures in Java and Node.js, to dynamic interfaces with React and Next.js. I have a strong technical background in database design and development, allowing me to structure efficient and scalable solutions from data modeling to the final interface.",
      location: "Santiago del Estero, Argentina",
      contactBtn: "Contact me",
      downloadCV: "Download CV",
    },
    experience: {
      title: "Experience",
      present: "Present",
      responsibilities: "Responsibilities",
    },
    education: {
      title: "Education",
      ongoing: "Ongoing",
      finished: "Completed",
    },
    projects: {
      title: "Projects",
      viewDetails: "View Details",
      viewRepo: "Repository",
      viewDemo: "Demo",
      featured: "Featured Projects",
      other: "Other projects",
    },
    skills: {
      title: "Technical Skills",
      category: "Category",
      technologies: "Technologies",
    },
    contact: {
      title: "Let's work together!",
      subtitle:
        "Do you have a project in mind? I'd love to hear about it and see how I can help you make it happen.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      or: "or find me on",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Tell me about your project...",
    },
    footer: {
      madeBy: "Made with ❤️ by",
    },
  },
}

interface I18nContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType>({
  lang: "es",
  setLang: () => {},
  t: translations.es,
})

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
