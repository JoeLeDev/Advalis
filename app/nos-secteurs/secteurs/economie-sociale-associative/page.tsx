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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-advalis-heading font-bold mb-4">
                Comment nous accompagnons nos clients
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Structurer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    La gouvernance, les statuts et les procédures internes pour une organisation solide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Sécuriser</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    La gestion financière et la conformité réglementaire pour éviter les risques.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Accompagner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    La préparation des dossiers de subvention et bilans pour maximiser vos chances.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Former</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les dirigeants et bénévoles à une gestion claire et durable pour l'autonomie.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <blockquote className="border-l-4 border-purple-500 pl-6 italic text-lg max-w-3xl mx-auto">
                "La rigueur ne tue pas l'élan associatif ; elle le rend crédible."
              </blockquote>
            </div>
          </section>

          {/* Nos capacités */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-advalis-heading font-bold mb-4">
                Nos capacités
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">1. Gouvernance & statuts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Aide à la rédaction, révision et conformité des documents fondateurs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2. Suivi comptable simplifié</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Outils clairs pour suivre les flux, budgets et bilans.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">3. Financements & subventions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Accompagnement dans le montage et le suivi des dossiers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">4. Formation & autonomie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sensibilisation des dirigeants à la gestion, aux responsabilités et aux obligations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Approche */}
          <section className="mb-16">
            <div className="bg-muted/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-advalis-heading font-bold mb-4">
                Un cadre au service du sens
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                Nous croyons que l'impact passe par la solidité.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                    Découvrir nos savoir-faire
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
