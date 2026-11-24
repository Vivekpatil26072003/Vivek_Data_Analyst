import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { CursorProvider } from '@/components/cursor-provider'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vivek Patil | Junior Data Analyst | Power BI | SQL',
  description: 'Junior Data Analyst specializing in Power BI dashboards, SQL data extraction, and business reporting. Based in Vadodara, Gujarat. Explore dashboards, case studies, and analytics projects.',
  generator: 'v0.app',
  keywords: ['Data Analyst', 'Power BI', 'SQL', 'Excel', 'Analytics', 'Dashboard', 'Business Intelligence'],
  openGraph: {
    title: 'Vivek Patil | Junior Data Analyst Portfolio',
    description: 'Professional portfolio showcasing Power BI dashboards, SQL expertise, and data-driven insights.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CursorProvider />
        {children}
      </body>
    </html>
  )
}
