import { PageBanner } from '@/components/page-banner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Target, Users, CheckCircle } from 'lucide-react'
import { getActiveSecteurs } from '@/config/secteurs'
import { expertises } from '@/config/expertises'

export default function NousDecouvrirPage() {
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Ce qui nous anime"
        subtitle="La clarté comme point de départ."
        description="Nous marchons à vos côtés, pour apporter clarté, structure et confiance dans votre gestion."
        backgroundImage="/images/banners/Nous_decouvrir.jpg"
      />

      {/* Notre raison d&apos;être */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
                Notre raison d&apos;être
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-foreground my-8 font-medium">
                &quot;Chez Advalis, nous croyons que la clarté est la première forme de sérénité.&quot;
              </blockquote>
              
              <p className="text-lg leading-relaxed mb-6">
                Trop d&apos;entrepreneurs et d&apos;associations avancent avec de bonnes intentions, mais dans la confusion : démarches floues, règles changeantes, manque de structure. Ce désordre invisible finit par freiner leur élan, voire leur confiance.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Notre mission est simple : <strong>rendre l&apos;organisation claire, fluide et maîtrisable</strong>.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Nous accompagnons les structures de proximité – indépendants, porteurs de projet, associations – à retrouver une direction, un système, une vision.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 my-8">
                <p className="text-lg font-medium text-foreground text-center mb-4">
                  Structurer, c&apos;est apaiser. Clarifier, c&apos;est libérer.
                </p>
                <p className="text-center text-muted-foreground">
                  Derrière chaque dossier, il y a une personne, une histoire, un cap à retrouver.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                <strong>Advalis</strong> est né de cette conviction : le conseil peut être humain, rigoureux et accessible à la fois.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Nous apportons les outils, la méthode et le regard extérieur qui permettent de reprendre confiance dans sa gestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Notre approche
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Clarté</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rendre lisible ce qui est flou. Parler le même langage que le client.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Organiser ce qui s&apos;éparpille.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transformer l&apos;effort en mouvement.
                </p>
              </CardContent>
            </Card>
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
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300" asChild>
              <Link href="/nos-expertises">
                Découvrir nos savoir-faire en détail
                <ArrowRight className="ml-2 h-5 w-5" />
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
            {getActiveSecteurs().map((secteur) => (
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
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300" asChild>
              <Link href="/nos-secteurs">
                Découvrir nos savoir-faire
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
                Notre engagement
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Chez <strong>Advalis</strong>, nous nous engageons à être <strong>plus qu&apos;un cabinet de conseil</strong> : un <strong>allié de terrain</strong>, fiable et impliqué, au service des dirigeants qui veulent avancer sereinement.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Notre promesse est simple : <strong>vous accompagner avec exigence, clarté et loyauté</strong>, sans jamais vous perdre dans le jargon ou les formules creuses.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Nous croyons que le conseil ne doit pas être un luxe réservé aux grandes structures, mais un <strong>levier accessible</strong> à ceux qui font vivre les territoires — artisans, restaurateurs, associations, indépendants, porteurs de projet.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 my-8">
                <h3 className="font-semibold text-xl mb-4 text-foreground">Nous travaillons selon quatre principes constants :</h3>
                <ol className="space-y-3 list-none">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">1.</span>
                    <div>
                      <strong className="text-foreground">Transparence totale</strong> — sur nos méthodes, nos tarifs et nos limites.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">2.</span>
                    <div>
                      <strong className="text-foreground">Proximité réelle</strong> — un contact humain, disponible et à l&apos;écoute.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">3.</span>
                    <div>
                      <strong className="text-foreground">Rigueur professionnelle</strong> — chaque accompagnement repose sur des bases solides, documentées et cohérentes.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">4.</span>
                    <div>
                      <strong className="text-foreground">Progression durable</strong> — notre but n&apos;est pas de vous assister, mais de vous rendre autonome, structuré et confiant.
                    </div>
                  </li>
                </ol>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-foreground">
                En d&apos;autres termes, nous ne faisons pas à votre place :
                nous <strong>marchons à vos côtés</strong>, jusqu&apos;à ce que vous puissiez avancer sans nous.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* En résumé */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-8 text-foreground">
              En résumé
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="leading-relaxed text-foreground">
                Advalis, c&apos;est le lien entre la rigueur d&apos;un cabinet et la réalité d&apos;un entrepreneur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform duration-300" asChild>
                <Link href="/contact">
                  Échangeons sur votre projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300" asChild>
                <Link href="/nos-expertises">
                  Découvrir nos savoir-faire
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}