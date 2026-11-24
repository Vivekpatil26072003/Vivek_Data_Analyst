'use client'

import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse-subtle" />
        {/* Floating data dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-accent rounded-full opacity-35 animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Location badge */}
        <div className="inline-block mb-6">
          <div className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-foreground">
            📍 Vadodara, Gujarat · +91 63516 81472
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
          Vivek Patil
        </h1>

        {/* Role subtitle */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-6 animate-fade-in-up animation-delay-100">
          Junior Data Analyst
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
          Junior Data Analyst specializing in Power BI dashboards, SQL data extraction, and business reporting. Transforming data into actionable insights for data-driven decision making.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-300">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            asChild
          >
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 bg-transparent"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-400">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-secondary hover:text-accent"
            asChild
          >
            <a href="https://linkedin.com/in/VivekPatil0088" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-secondary hover:text-accent"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-secondary hover:text-accent"
            asChild
          >
            <a href="mailto:vivekpatil0088@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  )
}
