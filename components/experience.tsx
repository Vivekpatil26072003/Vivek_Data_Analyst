'use client'

import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/experiences'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Hands-on experience building analytics solutions and insights-driven reports.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/30" />

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.slug} className="relative pl-20 sm:pl-32 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Timeline dot with animation */}
                <div className="absolute left-0 top-2 w-9 h-9 bg-background border-2 border-accent rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300 group">
                  <div className="w-4 h-4 bg-accent rounded-full group-hover:animate-pulse-soft" />
                </div>

                {/* Experience card */}
                <Link href={`/experience/${exp.slug}`} className="block">
                  <Card className="p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 group cursor-pointer">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">{exp.role}</h3>
                        <p className="text-lg text-accent font-semibold group-hover:brightness-125 transition-all">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Location */}
                    <p className="text-sm text-muted-foreground mb-4">📍 {exp.location}</p>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{exp.summary}</p>

                    {/* Responsibilities preview */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.slice(0, 3).map((resp) => (
                          <li key={resp} className="text-sm text-muted-foreground flex items-start gap-3">
                            <span className="text-accent mt-1">▸</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.responsibilities.length > 3 && (
                        <p className="mt-2 text-xs text-muted-foreground">
                          +{exp.responsibilities.length - 3} more responsibilities
                        </p>
                      )}
                    </div>

                    {/* Achievements */}
                    <div className="mb-6 p-4 bg-accent/5 rounded border border-accent/20">
                      <h4 className="font-semibold text-foreground mb-3 text-sm">Performance Metrics</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {exp.achievements.map((achievement) => (
                          <div key={achievement}>
                            <p className="text-sm font-mono text-accent">{achievement.split(':')[0]}</p>
                            <p className="text-xs text-muted-foreground">{achievement.split(':')[1]}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-3 text-sm">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-accent">
                      View journey & photos
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
