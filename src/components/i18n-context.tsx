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
      name: "Matías Saavedra",
      role: "Desarrollador de Software",
      // about:
      //   "Especializado en el diseño y construcción de aplicaciones web integrales; desde arquitecturas de servidor sólidas en Java y Node.js, hasta interfaces dinámicas con React y Next.js. Cuento con sólida base técnica en el diseño y desarrollo de bases de datos, lo que me permite estructurar soluciones eficientes y escalables desde el modelado de datos hasta la interfaz final.",
      about: "Estudiante de Programador Universitario en Universidad Nacional de Santiago del Estero, me especializo en la creacion de aplicaciones web. En el back-end desarrollo APIs con Node.js y Java. En el front-end construyo interfaces modernas y responsivas con React. Para la gestion de datos trabajo tanto con bases de datos SQL y NoSQL.\nMe gusta transformar ideas en productos digitales funcionales y estoy en constante aprendizaje de nuevas tecnologías y buenas prácticas de desarrollo. Actualmente estoy abierto a nuevos desafíos y oportunidades para seguir creciendo.",
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
      name: "Matías Saavedra",
      role: "Software Developer",
      about:
        "Computer Programming Student at Universidad Nacional de Santiago del Estero. I specialize in building web applications.\nOn the back-end I develop APIs with Node.js and Java. On the front-end I build modern and responsive interfaces with React. For data management I work with both SQL and NoSQL databases.\nI enjoy turning ideas into functional digital products and I’m constantly learning new technologies and development best practices. I’m currently open to new challenges and opportunities to keep growing.",
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
