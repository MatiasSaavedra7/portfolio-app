import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/HeroSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import EducationSection from "@/components/sections/EducationSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}
