import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Briefcase, Calendar, MapPin } from 'lucide-react'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ExperiencePhotoGallery } from '@/components/experience-photo-gallery'
import { JourneyHoverGallery } from '@/components/journey-hover-gallery'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  experiences,
  getAllExperienceSlugs,
  getExperienceBySlug,
} from '@/data/experiences'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllExperienceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const experience = getExperienceBySlug(slug)

  if (!experience) {
    return { title: 'Experience Not Found | Vivek Patil' }
  }

  return {
    title: `${experience.company} | Vivek Patil`,
    description: experience.summary,
  }
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const experience = getExperienceBySlug(slug)

  if (!experience) {
    notFound()
  }

  if (slug === 'jhex-consulting') {
    return (
      <JourneyHoverGallery
        company={experience.company}
        role={experience.role}
        period={experience.period}
        location={experience.location}
        summary={experience.summary}
        journey={experience.journey}
        images={experience.images}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-8 -ml-2 text-muted-foreground hover:text-accent">
            <Link href="/#experience">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Experience
            </Link>
          </Button>

          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
              <Briefcase className="h-4 w-4" />
              Professional Journey
            </div>
            <h1 className="mb-3 text-4xl font-bold text-balance sm:text-5xl">{experience.company}</h1>
            <p className="mb-4 text-xl text-accent">{experience.role}</p>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{experience.summary}</p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {experience.period}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {experience.location}
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">My Journey</h2>
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-accent to-accent/20 sm:left-8" />
              <div className="space-y-6">
                {experience.journey.map((milestone, index) => (
                  <div key={milestone.title} className="relative pl-16 sm:pl-24">
                    <div className="absolute left-0 top-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent bg-background">
                      <span className="text-xs font-bold text-accent">{index + 1}</span>
                    </div>
                    <Card className="border border-border p-5">
                      <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                        {milestone.period && (
                          <p className="text-sm text-accent">{milestone.period}</p>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Work Highlights</h2>
            <Card className="border border-border p-6">
              <ul className="space-y-3">
                {experience.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 text-accent">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Performance Metrics</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {experience.achievements.map((achievement) => (
                <Card key={achievement} className="border border-accent/20 bg-accent/5 p-4">
                  <p className="text-sm font-mono text-accent">{achievement.split(':')[0]}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{achievement.split(':')[1]}</p>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {experience.tools.map((tool) => (
                <Badge key={tool} variant="secondary">
                  {tool}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">Photos</h2>
            <ExperiencePhotoGallery images={experience.images} company={experience.company} />
          </section>

          <div className="mt-12 border-t border-border pt-8">
            <h3 className="mb-4 text-lg font-semibold">Other Experience</h3>
            <div className="flex flex-wrap gap-3">
              {experiences
                .filter((exp) => exp.slug !== experience.slug)
                .map((exp) => (
                  <Button key={exp.slug} asChild variant="outline">
                    <Link href={`/experience/${exp.slug}`}>{exp.company}</Link>
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
