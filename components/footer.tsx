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
            <Button
              size="sm"
              className="group bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
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
                <li> 
                <Link href="/mentions-legales" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mentions légales
                </Link>
                </li>
                <li>  
                <Link href="/politique-confidentialite" className="text-muted-foreground hover:text-foreground transition-colors">
                  Politique de confidentialité
                </Link>
                </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm transition-colors hover:text-foreground"> <Link href="mailto:contact@advalis.fr">contact@advalis.fr</Link></span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground transition-colors hover:text-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm transition-colors hover:text-foreground"> <Link href="tel:0185097243">01 85 09 72 43</Link></span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col justify-center text-center items-center ">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Advalis. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground">
            Développé par{' '}
            <a
              href="https://joe-labs.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              JoeLabs
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
