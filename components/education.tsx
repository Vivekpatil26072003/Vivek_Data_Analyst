'use client'

import { Award, BookOpen, Trophy } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Information Technology',
    institution: 'Parul University',
    year: '2021 – 2025',
    cgpa: '6.61/10',
    highlights: 'Strong foundation in data structures, databases, and software engineering',
  },
]

const certifications = [
  {
    title: 'Data Science for Everyone',
    issuer: 'Reliance Foundation (Skilling Academy)',
    year: '2024',
    description: 'Comprehensive data science fundamentals and analytics concepts',
  },
  {
    title: 'Power BI Webinar Attendee',
    issuer: 'Parul University',
    year: '2024',
    description: 'Advanced Power BI features, dashboarding, and data visualization',
  },
  {
    title: 'Hackathon Participant',
    issuer: 'myOnsite Healthcare',
    year: '2024',
    description: 'Participation Certificate - Healthcare data analytics challenge',
  },
]

const hackathons = [
  {
    title: 'myOnsite Healthcare Hackathon',
    organization: 'Parul University',
    achievement: 'Participant',
    description: 'Healthcare data analytics challenge - Exposure to real-world industry problems',
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground">
            Continuous learning and professional development in data analytics and business intelligence.
          </p>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 group">
            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            Formal Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{edu.degree}</h4>
                    <p className="text-lg text-accent font-semibold group-hover:brightness-125 transition-all">{edu.field}</p>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono text-accent font-semibold text-lg">{edu.cgpa}</p>
                    <p className="text-xs text-muted-foreground">CGPA</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{edu.highlights}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-foreground mb-2">Year of Graduation</p>
                  <Badge variant="outline">{edu.year}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 group">
            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
              <Award className="w-6 h-6 text-accent" />
            </div>
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 75}ms` }}>
                <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-1">{cert.title}</h4>
                <p className="text-sm text-accent font-semibold mb-2 group-hover:brightness-125 transition-all">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mb-3">{cert.description}</p>
                <Badge variant="secondary" className="group-hover:bg-accent/30 transition-colors">{cert.year}</Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 group">
            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
              <Trophy className="w-6 h-6 text-accent" />
            </div>
            Hackathons & Competitions
          </h3>
          <div className="space-y-4">
            {hackathons.map((hackathon, index) => (
              <Card key={index} className="p-6 border border-border bg-gradient-to-r from-accent/5 to-transparent hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{hackathon.title}</h4>
                    <p className="text-sm text-muted-foreground">{hackathon.organization}</p>
                    <p className="text-sm text-muted-foreground mt-2">{hackathon.description}</p>
                  </div>
                  <Badge className="bg-accent text-accent-foreground font-semibold px-3 py-1 text-sm whitespace-nowrap">
                    {hackathon.achievement}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
