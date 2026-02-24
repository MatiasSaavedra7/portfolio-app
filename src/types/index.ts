export interface ExperienceEntry {
  titleEs: string
  titleEn: string
  company: string
  periodEs: string
  periodEn: string
  bulletsEs: string[]
  bulletsEn: string[]
  tech: string[]
}

export interface EducationEntry {
  degreeEs: string
  degreeEn: string
  institution: string
  periodEs: string
  periodEn: string
  status: "ongoing" | "finished"
  descriptionEs: string
  descriptionEn: string
}

export interface Project {
  id?: string
  titleEs: string
  titleEn: string
  descriptionEs: string
  descriptionEn: string
  tech: string[]
  github: string
  demo?: string
  image?: string
  lang?: string
}

export interface ProjectsData {
  featured: Project[]
  other: Project[]
}

export interface SkillRow {
  categoryEs: string
  categoryEn: string
  tech: string
}
