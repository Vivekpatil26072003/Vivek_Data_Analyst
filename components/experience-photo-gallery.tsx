'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { ImageIcon } from 'lucide-react'
import type { ExperienceImage } from '@/data/experiences'

type ExperiencePhotoGalleryProps = {
  images: ExperienceImage[]
  company: string
}

const JHEX_FALLBACK_IMAGES: ExperienceImage[] = [
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
]

function getGalleryImages(images: ExperienceImage[], company: string) {
  if (images.length > 0) {
    return images
  }

  if (company.toLowerCase().includes('jhex')) {
    return JHEX_FALLBACK_IMAGES
  }

  return []
}

export function ExperiencePhotoGallery({ images, company }: ExperiencePhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const galleryImages = useMemo(() => getGalleryImages(images, company), [images, company])

  if (galleryImages.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-secondary/30 p-10 text-center">
        <ImageIcon className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
        <p className="font-medium text-foreground">No photos uploaded yet</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Add images to showcase your journey at {company}.
        </p>
      </div>
    )
  }

  const selectedImage = galleryImages[selectedIndex] ?? galleryImages[0]

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
          />
        </div>
        {selectedImage.caption && (
          <p className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
            {selectedImage.caption}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-[4/3] overflow-hidden rounded-lg border transition-all ${
              index === selectedIndex
                ? 'border-accent ring-2 ring-accent/40'
                : 'border-border hover:border-accent/60'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="200px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
