'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Logo } from '@/components/logo'

// Configuration des liens - une seule source de vérité
const navLinks = [
  { href: '/nos-expertises', label: 'Savoir-faire' },
  { href: '/nos-secteurs', label: 'Secteurs d\'intervention' },
  { href: '/articles', label: 'Inspirations' },
  { href: '/nous-decouvrir', label: 'Nous découvrir' },
  { href: '/foire-a-question', label: 'FAQ' },
  { href: '/contact', label: 'Contact' }
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Logo variant="full" />

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="sm"
              className="w-full bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg transition-all"
            >
              Échangeons
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
