'use client'

import { Card } from '@/components/ui/card'
import { AnalyticsLineChart, SkillProgressChart, ProjectTimelineChart } from './analytics-charts'
import { TrendingUp, BarChart3, Target } from 'lucide-react'

export function AnalyticsShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Analytics & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Visual representation of my data analysis skills, project progression, and technical proficiency.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer group">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground mb-2 text-sm">Total Projects</p>
                <p className="text-4xl font-bold text-accent group-hover:scale-110 transition-transform origin-left">8+</p>
              </div>
              <BarChart3 className="w-8 h-8 text-accent/50 group-hover:text-accent group-hover:scale-125 transition-all" />
            </div>
            <p className="text-xs text-muted-foreground mt-4">Power BI, SQL, Excel projects</p>
          </Card>

          <Card className="p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer group">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground mb-2 text-sm">SQL Queries Written</p>
                <p className="text-4xl font-bold text-accent group-hover:scale-110 transition-transform origin-left">40+</p>
              </div>
              <Target className="w-8 h-8 text-accent/50 group-hover:text-accent group-hover:scale-125 transition-all" />
            </div>
            <p className="text-xs text-muted-foreground mt-4">Complex queries & joins</p>
          </Card>

          <Card className="p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer group">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground mb-2 text-sm">Dashboards Created</p>
                <p className="text-4xl font-bold text-accent group-hover:scale-110 transition-transform origin-left">15+</p>
              </div>
              <TrendingUp className="w-8 h-8 text-accent/50 group-hover:text-accent group-hover:scale-125 transition-all" />
            </div>
            <p className="text-xs text-muted-foreground mt-4">Interactive Power BI reports</p>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chart 1: Progress Over Time */}
          <Card className="p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              Skill Development Timeline
            </h3>
            <AnalyticsLineChart />
          </Card>

          {/* Chart 2: Skill Levels */}
          <Card className="p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              Technical Proficiency
            </h3>
            <SkillProgressChart />
          </Card>

          {/* Chart 3: Project Impact */}
          <Card className="p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 lg:col-span-2">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              Project Impact Over Time
            </h3>
            <ProjectTimelineChart />
          </Card>
        </div>

        {/* Key Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[
            { label: 'Data Sources', value: '6+', icon: '🔄' },
            { label: 'Query Optimization', value: '40%', icon: '⚡' },
            { label: 'Report Accuracy', value: '99.2%', icon: '✓' },
            { label: 'On-time Delivery', value: '100%', icon: '⏱️' },
          ].map((achievement, idx) => (
            <Card
              key={idx}
              className="p-4 border border-border/50 hover:border-accent/50 transition-all duration-300 text-center group cursor-pointer"
            >
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">{achievement.icon}</div>
              <p className="text-2xl font-bold text-accent">{achievement.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{achievement.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
