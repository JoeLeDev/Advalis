import { PageBanner } from '@/components/page-banner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Target, FileText, BarChart3, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BienEtreSoinPage() {
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Professionnels du bien-être & du soin"
        subtitle="Clarifier pour apaiser"
        description="Les praticiens, coachs, thérapeutes ou professionnels du soin exercent des métiers tournés vers l'autre, mais souvent au détriment de leur propre équilibre."
        backgroundImage="/images/banners/Secteurs_Advalis.jpg"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Introduction */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Entre rendez-vous, facturation, cotisations et démarches, la gestion devient un fardeau.
              </p>
              <p className="text-lg text-muted-foreground">
                La sérénité qu'ils offrent aux autres, ils ne la retrouvent pas dans leur activité.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                <strong>Advalis</strong> apporte une structure bienveillante : une manière simple de gérer, 
                de planifier et de se sentir en paix avec l'administratif.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                L'objectif : que chaque professionnel puisse consacrer son énergie à ce qui compte vraiment.
              </p>
            </div>
          </section>

          {/* Comment nous accompagnons */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Comment nous accompagnons nos clients</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Simplifier</strong> les démarches et centraliser les informations.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Anticiper</strong> les cotisations et échéances sociales.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Créer</strong> un système de gestion fluide et rassurant.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Accompagner</strong> la croissance ou la réorientation.
              </p>
              <blockquote className="border-l-4 border-pink-500 pl-6 italic text-lg mb-8">
                "Un esprit apaisé naît d'une gestion claire."
              </blockquote>
            </div>
          </section>

          {/* Nos capacités */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Nos capacités</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>1. Organisation administrative</strong><br/>
                Création d'un espace clair pour tout centraliser.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>2. Suivi financier</strong><br/>
                Tableaux de bord, estimation des charges, prévision des flux.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>3. Conformité & obligations</strong><br/>
                Aide aux démarches URSSAF, fisc et statuts professionnels.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>4. Soutien du dirigeant</strong><br/>
                Suivi humain et personnalisé, selon le rythme de chacun.
              </p>
            </div>
          </section>

          {/* Approche */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Une gestion qui libère</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nous croyons qu'une activité ordonnée permet de mieux servir les autres.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Advalis accompagne chaque praticien avec respect, clarté et écoute.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-advalis-heading font-bold mb-4">
                Prêt à retrouver votre sérénité ?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Échangeons sur votre situation et découvrons ensemble comment Advalis peut vous accompagner 
                dans la clarification et la simplification de votre activité de bien-être.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Échangeons ensemble
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="group bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <Link href="/nos-expertises" className="flex items-center justify-center">
                    Découvrir nos savoir-faire
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
