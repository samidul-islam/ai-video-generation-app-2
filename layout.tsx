import { AuthGate } from '@/components/auth/auth-gate'
import { SiteHeader } from '@/components/site-header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGate>
      <SiteHeader />
      {children}
    </AuthGate>
  )
}
