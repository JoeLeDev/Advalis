import { PageBanner } from '@/components/page-banner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Target, FileText, BarChart3, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function EconomieSocialeAssociativePage() {
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Économie sociale & associative"
        subtitle="Structurer l'engagement sans l'alourdir"
        description="Les associations et structures à impact social portent des missions essentielles, mais elles évoluent dans un environnement administratif dense et souvent déroutant."
        backgroundImage="/images/banners/Secteurs_Advalis.jpg"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Introduction */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Les obligations s'empilent : subventions, bilans, gouvernance, contrôles… autant de démarches 
                qui détournent les dirigeants bénévoles de leur cœur de mission.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong>Advalis</strong> aide à professionnaliser la gestion sans perdre l'esprit du projet.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                Nous mettons de l'ordre, de la méthode et de la clarté au service d'organisations 
                qui agissent pour le bien commun.
              </p>
            </div>
          </section>

          {/* Comment nous accompagnons */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Comment nous accompagnons nos clients</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Structurer</strong> la gouvernance, les statuts et les procédures internes.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Sécuriser</strong> la gestion financière et la conformité réglementaire.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Accompagner</strong> la préparation des dossiers de subvention et bilans.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Former</strong> les dirigeants et bénévoles à une gestion claire et durable.
              </p>
              <blockquote className="border-l-4 border-purple-500 pl-6 italic text-lg mb-8">
                "La rigueur ne tue pas l'élan associatif ; elle le rend crédible."
              </blockquote>
            </div>
          </section>

          {/* Nos capacités */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Nos capacités</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>1. Gouvernance & statuts</strong><br/>
                Aide à la rédaction, révision et conformité des documents fondateurs.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>2. Suivi comptable simplifié</strong><br/>
                Outils clairs pour suivre les flux, budgets et bilans.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>3. Financements & subventions</strong><br/>
                Accompagnement dans le montage et le suivi des dossiers.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>4. Formation & autonomie</strong><br/>
                Sensibilisation des dirigeants à la gestion, aux responsabilités et aux obligations.
              </p>
            </div>
          </section>

          {/* Approche */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Un cadre au service du sens</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nous croyons que l'impact passe par la solidité.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Advalis aide les associations à renforcer leurs bases pour étendre leur portée.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-advalis-heading font-bold mb-4">
                Prêt à structurer votre engagement ?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Échangeons sur votre situation et découvrons ensemble comment Advalis peut vous accompagner 
                dans la structuration et la professionnalisation de votre structure associative.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Échangeons ensemble
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/nos-expertises">
                    Découvrir nos expertises
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
