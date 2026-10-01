import { Suspense } from 'react'

import { AuthForm } from '@/components/auth/auth-form'

export const metadata = { title: 'Sign in — Chobi Studio' }

export default function LoginPage() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4 py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary)_35%,transparent),transparent_65%)]"
      />
      <Suspense>
        <AuthForm />
      </Suspense>
    </main>
  )
}
