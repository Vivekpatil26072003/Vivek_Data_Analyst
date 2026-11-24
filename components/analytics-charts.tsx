'use client'

import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const analyticsData = [
  { month: 'Jan', dashboards: 2, reports: 5, queries: 12 },
  { month: 'Feb', dashboards: 3, reports: 8, queries: 18 },
  { month: 'Mar', dashboards: 4, reports: 12, queries: 25 },
  { month: 'Apr', dashboards: 5, reports: 15, queries: 32 },
  { month: 'May', dashboards: 6, reports: 18, queries: 40 },
  { month: 'Jun', dashboards: 8, reports: 22, queries: 48 },
]

const skillProgressData = [
  { name: 'Power BI', value: 90, fill: '#10B981' },
  { name: 'SQL', value: 85, fill: '#059669' },
  { name: 'Excel', value: 90, fill: '#047857' },
  { name: 'Python', value: 65, fill: '#0d9488' },
  { name: 'DAX', value: 80, fill: '#14b8a6' },
]

export function AnalyticsLineChart() {
  return (
    <div className="w-full h-80 animate-fade-in-up">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={analyticsData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorDashboards" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
          <XAxis dataKey="month" stroke="rgba(31, 41, 55, 0.5)" />
          <YAxis stroke="rgba(31, 41, 55, 0.5)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(31, 41, 55, 0.9)',
              border: '1px solid #10B981',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            labelStyle={{ color: '#10B981' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="dashboards"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ fill: '#10B981', r: 5 }}
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="reports"
            stroke="#059669"
            strokeWidth={2}
            dot={{ fill: '#059669', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="queries"
            stroke="#0d9488"
            strokeWidth={2}
            dot={{ fill: '#0d9488', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function SkillProgressChart() {
  return (
    <div className="w-full h-80 animate-fade-in-up">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={skillProgressData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
          <XAxis dataKey="name" stroke="rgba(31, 41, 55, 0.5)" />
          <YAxis stroke="rgba(31, 41, 55, 0.5)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(31, 41, 55, 0.9)',
              border: '1px solid #10B981',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#10B981' }}
          />
          <Bar dataKey="value" fill="#10B981" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function ProjectTimelineChart() {
  const projectData = [
    { quarter: 'Q1', projects: 1, impact: 20 },
    { quarter: 'Q2', projects: 2, impact: 35 },
    { quarter: 'Q3', projects: 3, impact: 50 },
    { quarter: 'Q4', projects: 4, impact: 65 },
  ]

  return (
    <div className="w-full h-80 animate-fade-in-up">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={projectData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
          <XAxis dataKey="quarter" stroke="rgba(31, 41, 55, 0.5)" />
          <YAxis stroke="rgba(31, 41, 55, 0.5)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(31, 41, 55, 0.9)',
              border: '1px solid #10B981',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#10B981' }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="impact"
            stroke="#10B981"
            fillOpacity={1}
            fill="url(#colorProjects)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
