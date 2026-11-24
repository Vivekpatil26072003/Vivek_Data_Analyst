'use client'

import { BarChart3, TrendingUp, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'

const highlights = [
  {
    icon: BarChart3,
    title: 'Power BI Dashboards',
    description: 'Built interactive dashboards with DAX formulas for KPI tracking and business metrics visualization.',
  },
  {
    icon: TrendingUp,
    title: 'SQL Analytics',
    description: 'Extracted, transformed, and analyzed data from multiple sources using complex SQL queries.',
  },
  {
    icon: Zap,
    title: 'Business Insights',
    description: 'Generated actionable insights from data analysis to support strategic decision-making.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a Junior Data Analyst specializing in Power BI dashboards, SQL data extraction, and business reporting. Currently at Shankar Packagings, and previously at JHEx Consulting LLP, I transform raw data using Power Query, create interactive dashboards with DAX measures, and extract complex data from MySQL databases. With hands-on experience across analytics tools and databases, I'm committed to supporting data-driven decision making and continuous skill development.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={item.title}
                className="p-6 border border-border hover:border-accent/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Experience snapshot */}
        <div className="bg-secondary/50 rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">Key Achievements</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">Dashboards Created</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground">SQL Queries Written</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">8+</div>
              <p className="text-muted-foreground">Data Sources Handled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
