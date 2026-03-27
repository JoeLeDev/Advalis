import { Playfair_Display } from 'next/font/google'
import { ReactNode } from 'react'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-kairos-display',
  display: 'swap',
})

export default function ActivationLayout({ children }: { children: ReactNode }) {
  return <div className={`${playfair.variable} font-sans`}>{children}</div>
}
