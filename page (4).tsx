import { AdminPanel } from '@/components/admin/admin-panel'

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Admin panel</h1>
        <p className="text-sm text-muted-foreground">Manage users, pricing, API keys and the look of the app.</p>
      </div>
      <AdminPanel />
    </main>
  )
}
