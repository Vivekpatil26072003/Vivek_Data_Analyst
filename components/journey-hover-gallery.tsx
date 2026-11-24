'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from 'react'
import { ArrowLeft, MapPin, Calendar } from 'lucide-react'
import type { ExperienceImage, JourneyMilestone } from '@/data/experiences'

export type JourneyHoverGalleryProps = {
  company: string
  role: string
  period: string
  location: string
  summary: string
  journey: JourneyMilestone[]
  images: ExperienceImage[]
}

function getPhotosForMilestone(images: ExperienceImage[], milestoneIndex: number, total: number): ExperienceImage[] {
  const perMilestone = Math.ceil(images.length / total)
  const start = milestoneIndex * perMilestone
  return images.slice(start, start + perMilestone)
}

export function JourneyHoverGallery({
  company,
  role,
  period,
  location,
  summary,
  journey,
  images,
}: JourneyHoverGalleryProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [activePhoto, setActivePhoto] = useState(0)
  const [photoKey, setPhotoKey] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isScrollingProgrammatically = useRef(false)

  const milestonePhotos = journey.map((_, i) => getPhotosForMilestone(images, i, journey.length))
  const currentPhotos = milestonePhotos[activeStep] ?? []

  // IntersectionObserver: update activeStep as sections scroll into view
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sectionRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isScrollingProgrammatically.current) {
              setActiveStep(i)
              setActivePhoto(0)
              setPhotoKey(k => k + 1)
            }
          })
        },
        { threshold: 0.55 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [journey.length])

  // Scroll to section when step is clicked
  const goToStep = useCallback((index: number) => {
    const el = sectionRefs.current[index]
    if (!el) return
    isScrollingProgrammatically.current = true
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveStep(index)
    setActivePhoto(0)
    setPhotoKey(k => k + 1)
    setTimeout(() => { isScrollingProgrammatically.current = false }, 800)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        goToStep(Math.min(activeStep + 1, journey.length - 1))
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        goToStep(Math.max(activeStep - 1, 0))
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goToStep, activeStep, journey.length])

  return (
    <>
      <style>{`
        @keyframes bgFadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes contentIn {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes dotPing {
          0%   { transform: scale(1);   opacity: 1; }
          70%  { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes thumbIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineDraw {
          from { width: 0; opacity: 0; }
          to   { width: 2.5rem; opacity: 1; }
        }
        @keyframes pageIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .jg-root { animation: pageIn 0.5s cubic-bezier(0.4,0,0.2,1) both; }

        .jg-bg { animation: bgFadeIn 0.7s cubic-bezier(0.4,0,0.2,1) both; }

        .jg-content-enter { animation: contentIn 0.52s cubic-bezier(0.4,0,0.2,1) 0.06s both; }

        .jg-dot-active::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: hsl(var(--accent) / 0.3);
          animation: dotPing 1.5s cubic-bezier(0,0,0.2,1) infinite;
        }

        .jg-thumb-item {
          transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
        }
        .jg-thumb-item:hover { transform: translateY(-3px); }
        .jg-thumb-item.is-active {
          box-shadow: 0 0 0 2px hsl(var(--accent)), 0 4px 14px rgba(0,0,0,0.2);
          opacity: 1 !important;
        }
        .jg-thumb-item:not(.is-active) { opacity: 0.5; }

        .jg-stepper-dot {
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }

        .jg-accent-bar {
          animation: lineDraw 0.45s cubic-bezier(0.4,0,0.2,1) 0.1s both;
        }

        /* Scroll snap on the scroll container */
        .jg-scroll {
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          height: calc(100vh - 49px);
        }
        .jg-section {
          scroll-snap-align: start;
          height: calc(100vh - 49px);
          position: relative;
          overflow: hidden;
        }
      `}</style>

      <div className="jg-root flex min-h-screen flex-col bg-background text-foreground">

        {/* Sticky top bar */}
        <div className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
            <Link
              href="/#experience"
              className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {activeStep + 1} / {journey.length}
              </span>
              <div className="flex gap-1.5">
                {journey.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToStep(i)}
                    aria-label={`Go to step ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeStep ? 'w-5 bg-accent' : 'w-1.5 bg-border hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable stage */}
        <div ref={scrollContainerRef} className="jg-scroll flex-1">
          {journey.map((milestone, stepIndex) => {
            const stepPhotos = milestonePhotos[stepIndex] ?? []
            const isActive = activeStep === stepIndex
            const bgPhotoForSection = stepIndex === activeStep
              ? (stepPhotos[activePhoto] ?? stepPhotos[0])
              : stepPhotos[0]

            return (
              <div
                key={stepIndex}
                ref={el => { sectionRefs.current[stepIndex] = el }}
                className="jg-section"
              >
                {/* Full-bleed background photo */}
                {bgPhotoForSection?.src && (
                  <div
                    key={`bg-${stepIndex}-${stepIndex === activeStep ? activePhoto : 0}-${photoKey}`}
                    className="jg-bg absolute inset-0 z-0"
                  >
                    <Image
                      src={bgPhotoForSection.src}
                      alt=""
                      fill
                      className="object-cover blur-2xl scale-110 opacity-60"
                      sizes="100vw"
                      aria-hidden
                    />
                    <div className="absolute inset-0 flex items-center justify-end pr-[5%]">
                      <div className="relative h-[80%] w-[52%] max-w-2xl">
                        <Image
                          src={bgPhotoForSection.src}
                          alt={bgPhotoForSection.alt}
                          fill
                          className="object-contain drop-shadow-2xl"
                          sizes="(max-width: 768px) 90vw, 52vw"
                          priority={stepIndex === 0}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to right, hsl(var(--background)/0.97) 0%, hsl(var(--background)/0.90) 38%, hsl(var(--background)/0.55) 62%, hsl(var(--background)/0.10) 100%)',
                      }}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-36"
                      style={{ background: 'linear-gradient(to top, hsl(var(--background)/0.9), transparent)' }}
                    />
                  </div>
                )}

                {/* Fallback gradient when no photo */}
                {!bgPhotoForSection?.src && (
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      background:
                        'radial-gradient(ellipse at 70% 50%, hsl(var(--accent)/0.07) 0%, transparent 65%)',
                    }}
                  />
                )}

                {/* Left stepper rail */}
                <div className="absolute left-0 top-0 bottom-0 z-20 flex w-16 flex-col items-center justify-center sm:w-20">
                  {journey.map((_, si) => (
                    <div key={si} className="flex flex-col items-center">
                      {si > 0 && (
                        <div
                          className={`w-0.5 transition-all duration-500 ${
                            si <= activeStep ? 'h-8 bg-accent' : 'h-8 bg-border'
                          }`}
                        />
                      )}
                      <button
                        onClick={() => goToStep(si)}
                        aria-label={`Jump to milestone ${si + 1}`}
                        className={`jg-stepper-dot relative flex h-9 w-9 items-center justify-center rounded-full border-2 font-mono text-xs font-bold ${
                          si === activeStep
                            ? 'jg-dot-active border-accent bg-accent text-accent-foreground scale-110 shadow-lg'
                            : si < activeStep
                            ? 'border-accent bg-accent/15 text-accent hover:scale-105'
                            : 'border-border bg-background/80 text-muted-foreground hover:border-accent/60 hover:text-accent/80 hover:scale-105'
                        }`}
                      >
                        {si < activeStep ? (
                          <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          si + 1
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Text content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center pl-20 pr-4 sm:pl-24 sm:pr-8 lg:pl-28 lg:pr-16">
                  <div
                    key={`content-${stepIndex}-${photoKey}`}
                    className={`max-w-lg ${isActive ? 'jg-content-enter' : ''}`}
                  >
                    {stepIndex === 0 && (
                      <div className="mb-7">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          My Journey
                        </div>
                        <h1 className="mb-1 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                          {company}
                        </h1>
                        <p className="mb-3 text-sm font-medium text-accent">{role}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            {location}
                          </span>
                        </div>
                        <div className="mt-4 h-px w-52 bg-border" />
                      </div>
                    )}

                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      Step {stepIndex + 1} of {journey.length}
                    </p>

                    <div className={`mb-3 flex items-center gap-3 ${isActive ? 'jg-content-enter' : ''}`}>
                      <div className="jg-accent-bar h-0.5 flex-shrink-0 rounded-full bg-accent" />
                      <h2 className="text-2xl font-bold leading-snug sm:text-3xl">{milestone.title}</h2>
                    </div>

                    {milestone.period && (
                      <div className="mb-4 inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                        {milestone.period}
                      </div>
                    )}

                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {milestone.description}
                    </p>

                    {stepIndex === 0 && (
                      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground/70">
                        {summary}
                      </p>
                    )}

                    {stepIndex === 0 && (
                      <div className="mt-8 flex items-center gap-2">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
                          scroll to continue
                        </span>
                        <svg className="h-3 w-3 animate-bounce text-accent/60" viewBox="0 0 12 12" fill="none">
                          <path d="M6 2v8M3 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Thumbnail strip — bottom right, only for active section */}
                {isActive && stepPhotos.length > 0 && (
                  <div
                    key={`thumbs-${stepIndex}-${photoKey}`}
                    className="absolute bottom-8 right-6 z-20 flex flex-col items-end gap-2 sm:right-10"
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/70">
                      Photos
                    </p>
                    <div className="flex gap-2">
                      {stepPhotos.map((photo, pi) => (
                        <button
                          key={pi}
                          onClick={() => {
                            setActivePhoto(pi)
                            setPhotoKey(k => k + 1)
                          }}
                          style={{ animationDelay: `${pi * 60}ms` }}
                          className={`jg-thumb-item relative overflow-hidden rounded-lg border-2 ${
                            pi === activePhoto ? 'is-active border-accent' : 'border-border/50 hover:border-accent/50'
                          }`}
                          aria-label={`View photo ${pi + 1}`}
                        >
                          <div className="relative" style={{ height: '72px', width: '88px' }}>
                            {photo.src ? (
                              <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover"
                                sizes="96px"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-secondary">
                                <span className="font-mono text-[9px] text-muted-foreground">{pi + 1}</span>
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    {stepPhotos[activePhoto]?.caption && (
                      <p className="max-w-[210px] text-right font-mono text-[9px] leading-snug text-muted-foreground/55">
                        {stepPhotos[activePhoto].caption}
                      </p>
                    )}
                  </div>
                )}

                {/* Keyboard hint — bottom left, first section only */}
                {stepIndex === 0 && (
                  <div className="absolute bottom-4 left-20 z-20 hidden sm:block">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/35">
                      ↑ ↓ arrow keys also work
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
