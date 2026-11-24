export type ExperienceImage = {
  src: string
  alt: string
  caption?: string
}

export type JourneyMilestone = {
  title: string
  period?: string
  description: string
}

export type Experience = {
  slug: string
  role: string
  company: string
  period: string
  location: string
  summary: string
  responsibilities: string[]
  achievements: string[]
  tools: string[]
  journey: JourneyMilestone[]
  images: ExperienceImage[]
}

export const experiences: Experience[] = [
  {
    slug: 'shankar-packaging',
    role: 'Junior Executive – Digitization (Data Analyst)',
    company: 'Shankar Packagings',
    period: 'Mar 2026 – Present',
    location: 'Vadodara, Gujarat',
    summary:
      'Supported packaging operations with data-driven reporting, production analytics, and inventory insights to improve efficiency and decision-making.',
    responsibilities: [
      'Built Excel and Power BI reports to track production output, machine utilization, and daily packaging targets',
      'Analyzed inventory and raw material consumption data to reduce wastage and stock discrepancies',
      'Created automated dashboards for management to monitor order fulfillment and dispatch timelines',
      'Performed data cleaning and validation on production logs collected from shop-floor systems',
      'Prepared weekly and monthly performance summaries for operations and sales teams',
      'Collaborated with warehouse and production teams to align reporting with on-ground workflows',
      'Supported ad-hoc analysis for cost optimization, batch tracking, and supplier performance',
      'Documented reporting standards and helped standardize KPI definitions across departments',
    ],
    achievements: [
      'Reporting Efficiency: Automated recurring production reports',
      'Inventory Accuracy: Improved stock tracking visibility',
      'Operations Support: Faster decision-making for dispatch planning',
    ],
    tools: ['Excel', 'Power BI', 'Power Query', 'SQL', 'Python', 'Google Sheets'],
    journey: [
      {
        title: 'Learning the Operations',
        period: 'Mar – Apr 2026',
        description:
          'Started by understanding packaging workflows, production lines, inventory movement, and the key metrics leadership tracked on a daily basis.',
      },
      {
        title: 'Building Core Reports',
        period: 'May – Aug 2026',
        description:
          'Developed recurring production and inventory reports, cleaned operational data, and introduced dashboard views for faster operational reviews.',
      },
      {
        title: 'Scaling Analytics Support',
        period: 'Sep 2026 – Present',
        description:
          'Expanded reporting to dispatch planning, supplier tracking, and management summaries while working closely with warehouse and production teams.',
      },
    ],
    images: [
      {
        src: '/companies/shankar-packaging/photo-1.jpeg',
        alt: 'Shankar Packagings workspace',
        caption: 'Workspace at Shankar Packagings',
      },
      {
        src: '/companies/shankar-packaging/photo-2.jpeg',
        alt: 'Production reporting dashboard',
        caption: 'Production reporting dashboard',
      },
      {
        src: '/companies/shankar-packaging/photo-3.jpeg',
        alt: 'Team collaboration session',
        caption: 'Collaborating with the operations team',
      },
    ],
  },
  {
    slug: 'jhex-consulting',
    role: 'Junior Data Analyst – Technical Department',
    company: 'JHEx Consulting LLP',
    period: 'Nov 2025 – Mar 2026',
    location: 'Ahmedabad',
    summary:
      'Building interactive Power BI dashboards, performing data transformations with Power Query, and supporting business reporting through SQL and Python analysis.',
    responsibilities: [
      'Developed and maintained interactive Power BI dashboards for internal and business reporting',
      'Performed data cleaning and transformation using Power Query on complex datasets',
      'Created basic DAX measures to support KPIs and business metrics visualization',
      'Extracted, validated, and analyzed data from MySQL databases using SQL queries and joins',
      'Supported Excel-based analysis and ad-hoc reporting requirements',
      'Occasionally worked with Python (Pandas, NumPy) for basic data analysis tasks',
      'Assisted with Google Analytics reporting and interpretation when required',
      'Collaborated with technical and business teams to ensure data accuracy and consistency',
      'Delivered timely analysis during night-shift operations while following data security standards',
      'Gained exposure to Microsoft Power Platform concepts for business process automation',
    ],
    achievements: [
      'Data Security: High confidentiality standards maintained',
      'Reliability: Night-shift operations expertise',
      'Analytics: Multi-source data integration and transformation',
    ],
    tools: ['Power BI', 'Power Query', 'DAX', 'MySQL', 'SQL', 'Python', 'Excel', 'Google Analytics'],
    journey: [
      {
        title: 'Onboarding & Data Foundations',
        period: 'Nov 2025',
        description:
          'Joined the technical department and got familiar with internal data sources, reporting workflows, and data security standards across night-shift operations.',
      },
      {
        title: 'Dashboard Development',
        period: 'Dec 2025 – Jan 2026',
        description:
          'Started building and maintaining Power BI dashboards for business reporting, applying Power Query transformations and DAX measures for KPI tracking.',
      },
      {
        title: 'SQL & Cross-Team Collaboration',
        period: 'Feb – Mar 2026',
        description:
          'Expanded work into MySQL data extraction, ad-hoc Excel analysis, and Python-based tasks while collaborating with business teams to improve reporting accuracy.',
      },
    ],
    images: [
      {
        src: '/companies/jhex-consulting/photo-1.jpg',
        alt: 'JHEX Consulting workspace',
        caption: 'JHEX Consulting workspace',
      },
      {
        src: '/companies/jhex-consulting/photo-2.jpg',
        alt: 'JHEX Consulting team collaboration',
        caption: 'Team collaboration at JHEX Consulting',
      },
      {
        src: '/companies/jhex-consulting/photo-3.jpg',
        alt: 'JHEX Consulting analytics setup',
        caption: 'Analytics setup at JHEX Consulting',
      },
      {
        src: '/companies/jhex-consulting/photo-4.jpg',
        alt: 'JHEX Consulting meeting space',
        caption: 'Meeting space at JHEX Consulting',
      },
      {
        src: '/companies/jhex-consulting/photo-5.jpg',
        alt: 'JHEX Consulting desk area',
        caption: 'Desk area at JHEX Consulting',
      },
      {
        src: '/companies/jhex-consulting/photo-6.jpg',
        alt: 'JHEX Consulting team snapshot',
        caption: 'Team snapshot at JHEX Consulting',
      },
    ],
  },
]

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((exp) => exp.slug === slug)
}

export function getAllExperienceSlugs(): string[] {
  return experiences.map((exp) => exp.slug)
}
