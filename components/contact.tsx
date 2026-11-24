'use client'

import React from "react"

import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to your backend
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    // Show success message (you can add toast notification here)
    alert('Thank you! I\'ll get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss data analytics opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Contact info cards */}
          <Card className="p-6 border border-border hover:border-accent/50 transition-colors group">
            <Mail className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <a
              href="mailto:vivekpatil0088@gmail.com"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              vivekpatil0088@gmail.com
            </a>
          </Card>

          <Card className="p-6 border border-border hover:border-accent/50 transition-colors group">
            <Phone className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <a
              href="tel:+916351681472"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              +91 63516 81472
            </a>
          </Card>

          <Card className="p-6 border border-border hover:border-accent/50 transition-colors group">
            <MapPin className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">Vadodara, Gujarat, India</p>
          </Card>
        </div>

        {/* Contact form and social */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="border-border focus:border-accent focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="border-border focus:border-accent focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, collaboration, etc."
                  required
                  className="border-border focus:border-accent focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  rows={5}
                  className="border-border focus:border-accent focus:ring-accent resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Send Message
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </Card>

          {/* Social and additional info */}
          <div className="flex flex-col justify-between">
            <Card className="p-8 border border-border mb-6">
              <h3 className="text-lg font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://linkedin.com/in/VivekPatil0088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded border border-border hover:bg-secondary/50 hover:border-accent transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">Professional profile</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded border border-border hover:bg-secondary/50 hover:border-accent transition-colors group"
                >
                  <Github className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">GitHub</p>
                    <p className="text-xs text-muted-foreground">Code repositories</p>
                  </div>
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-accent/5 border border-accent/20">
              <p className="text-sm text-foreground mb-2 font-semibold">Response Time</p>
              <p className="text-xs text-muted-foreground">
                I typically respond to inquiries within 24-48 hours.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
