'use client'

import { ArrowRight, BarChart3, Database, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    title: 'Sales Performance Dashboard',
    description: 'Interactive Power BI dashboard tracking quarterly sales, regional performance, and product trends.',
    tools: ['Power BI', 'DAX', 'SQL'],
    kpis: ['Revenue Growth: +23%', 'Top Region: North', 'Products Tracked: 45'],
    businessProblem: 'Sales team needed real-time visibility into performance metrics across regions.',
    icon: BarChart3,
  },
  {
    id: 2,
    title: 'Customer Analytics Deep Dive',
    description: 'Comprehensive SQL-driven analysis of customer behavior, segmentation, and lifetime value calculations.',
    tools: ['MySQL', 'Excel', 'Looker Studio'],
    kpis: ['CLV Increase: +18%', 'Segments: 5', 'Data Points: 150K+'],
    businessProblem: 'Marketing team lacked clarity on customer segments for targeted campaigns.',
    icon: Database,
  },
  {
    id: 3,
    title: 'Website Traffic Analytics',
    description: 'Google Analytics implementation and monthly reporting for website performance and user engagement.',
    tools: ['Google Analytics', 'Looker Studio', 'Excel'],
    kpis: ['Monthly Users: 45K', 'Conversion: 3.2%', 'Bounce Rate: -8%'],
    businessProblem: 'No structured tracking of website performance and user behavior metrics.',
    icon: TrendingUp,
  },
  {
    id: 4,
    title: 'Inventory Management Report',
    description: 'Excel-based inventory analysis with automated dashboards and forecasting models.',
    tools: ['Excel', 'Power Query', 'Python'],
    kpis: ['Stock Accuracy: 98%', 'Forecast Error: -5%', 'SKUs: 1200+'],
    businessProblem: 'Manual inventory tracking was causing stockouts and overstocking issues.',
    icon: BarChart3,
  },
]

interface ProjectCardProps {
  project: typeof projects[0]
}

function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon
  return (
    <Card className="group relative overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-accent/20 cursor-pointer">
      {/* Background accent with animation */}
      <div className="absolute -inset-full bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />

      <div className="p-6 flex flex-col h-full relative z-10">
        {/* Icon with hover animation */}
        <div className="inline-flex w-fit">
          <Icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Business Problem */}
        <div className="mb-4 p-3 bg-secondary/50 rounded border border-border">
          <p className="text-xs font-semibold text-foreground mb-1">Business Problem</p>
          <p className="text-xs text-muted-foreground">{project.businessProblem}</p>
        </div>

        {/* KPIs */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-foreground mb-2">Key Metrics</p>
          <div className="flex flex-wrap gap-2">
            {project.kpis.map((kpi) => (
              <Badge key={kpi} variant="secondary" className="text-xs">
                {kpi}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-foreground mb-2">Tools Used</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="outline" className="text-xs">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Button
          variant="ghost"
          size="sm"
          className="w-full mt-auto text-accent hover:bg-accent/10 group/btn"
        >
          View Case Study
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of dashboards and analytics projects that showcase data-driven decision making.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center p-8 bg-secondary/30 rounded-lg border border-border">
          <p className="text-lg text-foreground mb-4">
            Interested in learning more about specific projects?
          </p>
          <Button asChild>
            <a href="mailto:your@email.com">Request Full Case Studies</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
