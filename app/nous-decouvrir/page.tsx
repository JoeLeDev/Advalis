import { PageBanner } from '@/components/page-banner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Target, Users, CheckCircle, Eye, Building2, Zap, Shield } from 'lucide-react'
import { getActiveSecteurs } from '@/config/secteurs'
import { expertises } from '@/config/expertises'

export default function NousDecouvrirPage() {
  // Calculer les données une seule fois
  const activeSecteurs = getActiveSecteurs()
  
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Nous découvrir"
        subtitle="Clarifier, structurer et apaiser le quotidien de ceux qui construisent les territoires."
        description=""
        backgroundImage="/images/banners/Nous_decouvrir.jpg"
      />

      {/* Pourquoi Advalis existe */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
                Pourquoi Advalis existe
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Trop d&apos;indépendants, de TPE et d&apos;associations avancent seuls, dans la confusion, le stress ou le manque de structure.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Ils doivent gérer l&apos;administratif, organiser leur activité, prendre des décisions et porter la charge mentale… souvent sans soutien réel.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Le conseil traditionnel s&apos;adresse surtout aux grandes entreprises.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Les petites structures, elles, doivent se débrouiller : retards, documents dispersés, manque de visibilité, surcharge.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 my-8">
                <p className="text-lg font-medium text-foreground text-center mb-4">
                  Chez Advalis, nous croyons que l&apos;accompagnement ne doit pas être un luxe.
                </p>
                <p className="text-lg font-medium text-foreground text-center mb-2">
                  <strong>Chaque entrepreneur mérite de la clarté, un cadre et un soutien fiable.</strong>
                </p>
                <p className="text-center text-muted-foreground">
                  Quel que soit son niveau, ses moyens ou son point de départ.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                Advalis est né de ce constat :
              </p>
              
              <p className="text-lg leading-relaxed mb-6 italic">
                les petites structures ont besoin d&apos;un accompagnement sérieux, humain, accessible — pas d&apos;un jargon ou d&apos;une usine à gaz.
              </p>
              
              <div className="bg-primary/10 rounded-lg p-6 my-8 border-l-4 border-primary">
                <p className="text-lg font-semibold text-foreground">
                  Notre mission :
                </p>
                <p className="text-lg font-bold text-foreground mt-2">
                  clarifier, structurer et apaiser le quotidien de ceux qui construisent les territoires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Notre engagement
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Clarté</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rendre visible ce qui est flou.<br />
                  Éclairer ce qui bloque.<br />
                  Mettre des mots là où tout semble confus.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Organiser ce qui s&apos;éparpille : tâches, outils, responsabilités, priorités.<br />
                  Créer un cadre simple, durable et réaliste.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Des solutions concrètes, applicables immédiatement.<br />
                  L&apos;objectif n&apos;est pas d&apos;assister, mais de <strong>rendre autonome</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Accessibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un accompagnement sérieux, mais pensé pour les petites structures.<br />
                  Sans jargon, sans complexe, sans prix inaccessibles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
                Notre approche
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed mb-6 text-center">
                Nous travaillons avec une méthode simple et éprouvée :
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="p-6">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-xl">1</span>
                    </div>
                    <CardTitle className="text-xl">Diagnostiquer</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprendre la situation réelle, identifier les urgences, les blocages et les risques.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-xl">2</span>
                    </div>
                    <CardTitle className="text-xl">Structurer</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Construire un cadre solide : outils, priorités, organisation, process simples.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-xl">3</span>
                    </div>
                    <CardTitle className="text-xl">Piloter</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Mettre en place des repères lisibles pour avancer sans surcharge.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-xl">4</span>
                    </div>
                    <CardTitle className="text-xl">Accompagner</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Soutenir, ajuster et guider jusqu&apos;à la stabilité complète.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground italic">
                Une approche humaine, exigeante, et parfaitement adaptée aux entrepreneurs de terrain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos savoir-faire */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Nos savoir-faire
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nos savoir-faire pour accompagner votre structure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {expertises.map((expertise) => (
              <Card key={expertise.id} className="expertise-card">
                <CardHeader>
                  <CardTitle className="text-lg">{expertise.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {expertise.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="group bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <Link href="/nos-expertises" className="flex items-center justify-center">
                Découvrir nos savoir-faire en détail
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nos secteurs de référence */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Nos secteurs de référence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous accompagnons ceux qui font vivre les territoires
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {activeSecteurs.map((secteur) => (
              <Link key={secteur.id} href={`/nos-secteurs#${secteur.slug}`}>
                <Card className="text-center p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${secteur.color} rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-sm">{secteur.icon}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{secteur.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {secteur.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="group bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <Link href="/nos-secteurs" className="flex items-center justify-center">
                Découvrir nos savoir-faire
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Notre raison d&apos;être */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
                Notre raison d&apos;être
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Nous existons pour ceux qui n&apos;ont jamais eu d&apos;accompagnement adapté :
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                les indépendants, artisans, restaurateurs, associations, petites entreprises, jeunes projets…
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Des personnes capables, motivées, talentueuses, mais trop souvent <strong>seules</strong> face à la complexité du quotidien.
              </p>

              <div className="bg-primary/10 rounded-lg p-6 my-8 border-l-4 border-primary">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Notre rôle est de rendre les choses simples, claires et maîtrisables.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  De vous permettre d&apos;avancer avec confiance, sans surcharge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qui suis-je ? */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
                Qui suis-je ?
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Je suis <strong>Réginald DELUCIEN</strong>, fondateur d&apos;Advalis Conseil.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                J&apos;ai travaillé auprès d&apos;entrepreneurs, d&apos;associations et de dirigeants de petites structures.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Partout, j&apos;ai vu la même réalité :
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                des personnes engagées, mais freinées par le manque de clarté, l&apos;administratif, la désorganisation, ou l&apos;absence de soutien extérieur.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 my-8">
                <p className="text-lg font-medium text-foreground text-center mb-4">
                  C&apos;est pour eux qu&apos;Advalis existe.
                </p>
                <p className="text-lg font-medium text-foreground text-center mb-2">
                  Mon approche est directe, humaine et pragmatique :
                </p>
                <p className="text-center text-lg font-bold text-primary">
                  Clarté. Structure. Impact.
                </p>
                <p className="text-center text-muted-foreground mt-4">
                  Pas de jargon.<br />
                  Pas de complexité inutile.<br />
                  Juste ce qu&apos;il faut pour transformer votre situation et vous permettre d&apos;avancer sereinement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre engagement envers vous */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
                Notre engagement envers vous
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">Vous parler vrai</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">Vous rendre les choses simples</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">Vous aider sans vous infantiliser</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">Vous accompagner avec loyauté et exigence</p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">Vous permettre d&apos;être autonome, pas dépendant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travailler avec Advalis */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
                Travailler avec Advalis, c&apos;est…
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">reprendre le contrôle de son activité</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">réduire drastiquement sa charge mentale</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">savoir exactement quoi faire et dans quel ordre</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">retrouver du temps et de la sérénité</p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">poser des bases solides pour durer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary/10 rounded-2xl p-12 mb-8 border-l-4 border-primary">
              <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4 text-foreground">
                Ensemble, clarifions. Structurons. Avançons.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform duration-300" asChild>
                <Link href="/contact">
                  Échangeons sur votre projet
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
        </div>
      </section>
    </div>
  )
}