'use client'

import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Code2, Database, BarChart3, FileJson, Cpu, Layers } from 'lucide-react'

const skillCategories = [
  {
    category: 'Analytics & BI',
    icon: BarChart3,
    skills: [
      { name: 'Power BI Desktop', level: 90, description: 'Dashboards, Reports, Visuals, interactive reports' },
      { name: 'Power Query', level: 85, description: 'Data Cleaning, Transformation, Merging' },
      { name: 'DAX', level: 80, description: 'Measures, Calculated Columns, data modeling' },
      { name: 'Data Modeling', level: 85, description: 'Relationships, cardinality, optimization' },
      { name: 'Google Analytics', level: 70, description: 'Basic Reporting & Analysis' },
    ],
  },
  {
    category: 'Databases & SQL',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 85, description: 'Joins, Subqueries, Views, Stored Procedures' },
      { name: 'SQL', level: 85, description: 'Complex queries, data extraction, analysis' },
      { name: 'Data Extraction', level: 80, description: 'Validation and analysis from multiple sources' },
    ],
  },
  {
    category: 'Data Analysis Tools',
    icon: FileJson,
    skills: [
      { name: 'Microsoft Excel', level: 90, description: 'Pivot Tables, XLOOKUP, Data Analysis' },
      { name: 'Google Colab', level: 70, description: 'Jupyter notebooks, Python data analysis' },
      { name: 'Kaggle', level: 75, description: 'Data exploration and analysis' },
    ],
  },
  {
    category: 'Programming (Analytical)',
    icon: Code2,
    skills: [
      { name: 'Python', level: 65, description: 'Pandas, NumPy – Basics for data analysis' },
    ],
  },
  {
    category: 'Microsoft Power Platform',
    icon: Cpu,
    skills: [
      { name: 'Power BI Service', level: 80, description: 'Publishing, Sharing, Dashboards' },
      { name: 'Power Apps', level: 60, description: 'Basic App Structure & Components' },
      { name: 'Power Automate', level: 60, description: 'Flows, Triggers, Actions – Conceptual' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: Layers,
    skills: [
      { name: 'Git/GitHub', level: 75, description: 'Version control and collaboration' },
      { name: 'Jupyter Notebook', level: 70, description: 'Python data analysis and exploration' },
      { name: 'Cursor', level: 75, description: 'Code editing and development' },
    ],
  },
]

interface SkillBarProps {
  name: string
  level: number
  description: string
}

function SkillBar({ name, level, description }: SkillBarProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="space-y-2 cursor-help group">
            <div className="flex justify-between items-center">
              <span className="font-medium text-foreground text-sm group-hover:text-accent transition-colors">{name}</span>
              <span className="text-xs text-muted-foreground group-hover:text-accent font-semibold transition-colors">{level}%</span>
            </div>
            <Progress value={level} className="h-2" />
          </div>
        </TooltipTrigger>
        <TooltipContent side="right" className="text-xs">
          {description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for data analysis, visualization, and insights generation.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <Card 
                key={category.category} 
                className="p-6 border border-border bg-background hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${idx * 75}ms` }}
              >
                <div className="flex items-center gap-3 mb-6 group">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{category.category}</h3>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      description={skill.description}
                    />
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
          <h3 className="text-lg font-semibold text-foreground mb-2">Always Learning</h3>
          <p className="text-muted-foreground">
            I'm continuously expanding my skill set. Currently exploring advanced DAX modeling, Python automation with pandas, and cloud data platforms.
          </p>
        </div>
      </div>
    </section>
  )
}
