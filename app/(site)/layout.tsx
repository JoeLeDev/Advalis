import { ReactNode } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
