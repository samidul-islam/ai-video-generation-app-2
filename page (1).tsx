import type { Metadata } from 'next'

import { ProjectDetail } from '@/components/projects/project-detail'

export const metadata: Metadata = {
  title: 'Project',
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <ProjectDetail projectId={id} />
    </main>
  )
}
