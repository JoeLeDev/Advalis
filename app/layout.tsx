import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '../styles/globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://advalis.fr'),
  title: 'Advalis - Cabinet de conseil privé',
  description: 'Cabinet de conseil privé pour entrepreneurs et associations. Nous vous accompagnons dans votre transformation et votre croissance.',
  keywords: 'conseil, entrepreneur, association, transformation, croissance, stratégie',
  authors: [{ name: 'Advalis' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Advalis - Cabinet de conseil privé',
    description: 'Cabinet de conseil privé pour entrepreneurs et associations',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="font-advalis antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
