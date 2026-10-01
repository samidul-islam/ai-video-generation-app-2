import type { Metadata } from 'next'
import Link from 'next/link'
import { Plus } from 'lucide-react'

import { ProjectGrid } from '@/components/projects/project-grid'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Your generated videos and render history.',
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Every scene you have rendered, newest first.</p>
        </div>
        <Link href="/" className={buttonVariants()}>
          <Plus aria-hidden="true" />
          New scene
        </Link>
      </div>
      <ProjectGrid />
    </main>
  )
}
