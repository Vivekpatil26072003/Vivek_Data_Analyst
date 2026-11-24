import Link from 'next/link'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function ExperienceNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold">Experience not found</h1>
          <p className="mb-6 text-muted-foreground">
            The company page you are looking for does not exist.
          </p>
          <Button asChild>
            <Link href="/#experience">Back to Experience</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
