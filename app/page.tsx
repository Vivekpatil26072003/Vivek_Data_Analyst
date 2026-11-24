import { Navigation } from '@/components/nav'
import { HeroSection } from '@/components/hero'
import { AboutSection } from '@/components/about'
import { SkillsSection } from '@/components/skills'
import { ProjectsSection } from '@/components/projects'
import { AnalyticsShowcase } from '@/components/analytics-showcase'
import { ExperienceSection } from '@/components/experience'
import { EducationSection } from '@/components/education'
import { ContactSection } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AnalyticsShowcase />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
