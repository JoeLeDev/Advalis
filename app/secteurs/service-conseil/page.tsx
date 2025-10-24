import { PageBanner } from '@/components/page-banner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Briefcase, Target, FileText, BarChart3, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServiceConseilPage() {
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Service & conseil"
        subtitle="Retrouver de la clarté dans la complexité"
        description="Le secteur des services et du conseil connaît une accélération constante : exigences accrues, attentes clients multiples, pression sur la réactivité et surcharge administrative."
        backgroundImage="/images/banners/Secteurs_Advalis.jpg"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Introduction */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Dans ce contexte, beaucoup de structures — indépendants, cabinets, formateurs, consultants — 
                peinent à maintenir un cadre de gestion fluide.
              </p>
              <p className="text-lg text-muted-foreground">
                La charge mentale augmente, les repères s'effritent, et le temps consacré à l'organisation 
                devient une contrainte plutôt qu'un levier.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                Chez <strong>Advalis</strong>, nous accompagnons ces dirigeants à reprendre le contrôle sur leurs bases : 
                une gestion claire, des priorités nettes et un pilotage lucide.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                Notre approche ne vise pas à transformer une activité en usine à process, mais à lui redonner 
                la stabilité dont elle a besoin pour croître sereinement.
              </p>
            </div>
          </section>

          {/* Comment nous accompagnons */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Comment nous accompagnons nos clients</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nous intervenons auprès des structures de conseil, de formation ou de prestation de services 
                pour remettre de la cohérence entre la vision, la gestion et le quotidien.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nos accompagnements reposent sur quatre piliers :
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Structurer</strong> les fondamentaux : contrats, échéances, facturation, obligations sociales et fiscales.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Clarifier</strong> la rentabilité : comprendre où se créent réellement les marges, anticiper les fluctuations d'activité.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Outiller</strong> le pilotage : mettre en place des outils de suivi simples, lisibles, accessibles au quotidien.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Accompagner</strong> le dirigeant : donner du recul, du discernement et une méthode pour avancer sans subir la pression.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-6 italic text-lg mb-8">
                "Chez Advalis, structurer n'est pas une contrainte : c'est une manière d'apporter du calme dans le mouvement."
              </blockquote>
            </div>
          </section>

          {/* Nos capacités */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Nos capacités</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>1. Pilotage & clarté</strong><br/>
                Mettre en lumière les chiffres qui comptent, identifier les indicateurs utiles et construire un suivi financier sans jargon.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>2. Organisation & efficacité</strong><br/>
                Optimiser les process internes, répartir les rôles et créer un cadre de travail fluide, adapté aux rythmes de l'équipe.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>3. Conformité & obligations</strong><br/>
                Sécuriser les démarches : URSSAF, TVA, impôts, contrats, déclarations. Anticiper plutôt que subir.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>4. Accompagnement du dirigeant</strong><br/>
                Faire le lien entre gestion, posture et stratégie : avancer avec lucidité et équilibre.
              </p>
            </div>
          </section>

          {/* Citation */}
          <section className="mb-16">
            <div className="text-center">
              <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl max-w-4xl mx-auto">
                "Une activité bien structurée ne tue pas la liberté, elle la rend durable."
              </blockquote>
              <p className="text-sm text-muted-foreground mt-4">— Advalis Conseil</p>
            </div>
          </section>

          {/* Approche */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Une approche sur-mesure et réaliste</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Advalis n'impose pas de modèle figé. Chaque accompagnement part d'un diagnostic concret : 
                où en êtes-vous vraiment, et que faut-il ajuster d'abord ?
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nous croyons qu'une entreprise, même de petite taille, mérite le même niveau d'attention 
                et de méthode qu'un grand groupe — sans perdre son authenticité.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Parce qu'au fond, <strong>bien gérer, c'est aussi mieux respirer.</strong>
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-advalis-heading font-bold mb-4">
                Prêt à retrouver votre clarté ?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Échangeons sur votre situation et découvrons ensemble comment Advalis peut vous accompagner 
                dans la structuration et l'optimisation de votre activité de service ou de conseil.
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
