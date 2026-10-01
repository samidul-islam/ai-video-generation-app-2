import { Studio } from '@/components/studio/studio'
import { VideoGallery } from '@/components/studio/video-gallery'

export default function StudioPage() {
  return (
    <main className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary)_28%,transparent),transparent_65%)]"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-4 pb-16 pt-16 md:px-6 md:pt-24">
        <Studio />
        <VideoGallery />
      </div>
    </main>
  )
}
