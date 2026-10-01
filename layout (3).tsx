import { AuthGate } from '@/components/auth/auth-gate'
import { SiteHeader } from '@/components/site-header'

export const metadata = { title: 'Admin — Chobi Studio' }

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGate requireAdmin>
      <SiteHeader />
      {children}
    </AuthGate>
  )
}
