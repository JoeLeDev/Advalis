import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <Logo variant="full" className="mb-4" />
            <p className="text-muted-foreground mb-6 max-w-md">
              Cabinet de conseil privé pour entrepreneurs et associations. 
              Nous vous accompagnons dans votre transformation et votre croissance.
            </p>
            <Link href="/contact">
            <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300">
             Échangeons sur votre projet
            </Button>
             </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nos-expertises" className="text-muted-foreground hover:text-foreground transition-colors">
                  Savoir-faire
                </Link>
              </li>
              <li>
                <Link href="/nos-secteurs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Secteurs d&apos;intervention
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inspirations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm"> <Link href="mailto:advalis.service@gmail.com">advalis.service@gmail.com</Link></span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm"> <Link href="tel:0185097243">01 85 09 72 43</Link></span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Advalis. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
