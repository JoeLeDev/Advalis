'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Logo } from '@/components/logo'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Logo variant="full" />

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/nos-expertises" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Savoir-faire
          </Link>
          <Link 
            href="/nos-secteurs" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Secteurs d&apos;intervention
          </Link>
          <Link 
            href="/articles" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Inspirations
          </Link>
          <Link 
            href="/nous-decouvrir" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Nous découvrir
          </Link>
          <Link 
            href="/foire-a-question" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
          Contact
          </Link>
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
            <Link 
              href="/nos-expertises" 
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos expertises
            </Link>
            <Link 
              href="/nos-secteurs" 
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos secteurs
            </Link>
            <Link 
              href="/articles" 
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </Link>
            <Link 
              href="/faq" 
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button variant="outline" size="sm" className="w-full">
              Échangeons
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
