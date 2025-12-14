import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import Link from 'next/link'
import { ArrowRight, Quote, CheckCircle, Clock, AlertCircle, FileStack, Shield, FolderTree, FileCheck, Settings, Handshake, Eye, TrendingUp, Rocket, RefreshCw, Zap, Laptop } from 'lucide-react'
import { expertises, getExpertiseById } from '@/config/expertises'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface ExpertisePageProps {
  params: {
    id: string
  }
}

export default function ExpertisePage({ params }: ExpertisePageProps) {
  const expertise = getExpertiseById(params.id)
  
  if (!expertise || !expertise.content) {
    notFound()
  }

  const { content } = expertise

  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title={expertise.title}
        subtitle={expertise.subtitle}
        description={expertise.description}
        backgroundImage={expertise.image}
      />

      <div className="py-20">
        <div className="container mx-auto px-4">

          {/* Présentation générale */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-advalis-heading font-bold mb-8 text-center">
                Présentation générale
              </h2>
              <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
                <p>{content.presentation}</p>
              </div>
            </div>
          </section>

          {/* Nos interventions */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-6xl mx-auto">
              {content.interventions.some(i => i.title === "Quand faire appel à nous ?") ? (
                <>
                  {/* Quand faire appel à nous */}
                  <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-12 text-center">
                      Quand faire appel à nous ?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {content.interventions
                        .filter(i => i.title === "Quand faire appel à nous ?")
                        .map((intervention, index) => (
                          <Card key={index} className="text-center">
                            <CardHeader>
                              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-foreground">{index + 1}</span>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <CardDescription className="text-sm text-muted-foreground">
                                {intervention.description}
                              </CardDescription>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>

                  {/* Ce que nous faisons */}
                  <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-12 text-center">
                      Ce que nous faisons
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {content.interventions
                        .filter(i => i.title === "Ce que nous faisons")
                        .map((intervention, index) => (
                          <Card key={index} className="text-center">
                            <CardHeader>
                              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-foreground">{index + 1}</span>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <CardDescription className="text-sm text-muted-foreground">
                                {intervention.description}
                              </CardDescription>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-advalis-heading font-bold mb-12 text-center">
                    Nos interventions
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {content.interventions.map((intervention, index) => (
                      <Card key={index} className="text-center">
                        <CardHeader>
                          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-foreground">{index + 1}</span>
                          </div>
                          <CardTitle className="text-lg font-bold">{intervention.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm text-muted-foreground">
                            {intervention.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Notre approche */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-advalis-heading font-bold mb-8 text-center">
                Notre approche
              </h2>
              <div className="bg-muted/50 rounded-lg p-8">
                <blockquote className="text-xl font-medium text-center mb-6 italic">
                  <Quote className="inline-block w-6 h-6 mr-2 text-primary" />
                  {content.approach.quote}
                </blockquote>
                <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
                  <p>{content.approach.description}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Le résultat */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-advalis-heading font-bold mb-8 text-center">
                Vous obtenez :
              </h2>
              <div className="text-center mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  {content.result.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="text-lg font-medium text-primary">
                  {content.result.summary}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl font-advalis-heading font-bold mb-4">
                    {content.cta.title}
                  </CardTitle>
                  <CardDescription className="text-lg mb-6">
                    {content.cta.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="lg" asChild>
                    <Link href={content.cta.buttonLink}>
                      {content.cta.buttonText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Navigation vers autres expertises */}
          <section className="py-16 border-t">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-advalis-heading font-bold mb-8 text-center">
                Découvrez nos autres expertises
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertises
                  .filter(e => e.id !== expertise.id)
                  .slice(0, 3)
                  .map((otherExpertise) => (
                    <Card key={otherExpertise.id} className="expertise-card">
                      <CardHeader>
                        <div className="w-full h-32 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                          {otherExpertise.image ? (
                            <Image 
                              src={otherExpertise.image} 
                              alt={otherExpertise.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <span className="text-primary font-bold">A</span>
                            </div>
                          )}
                        </div>
                        <CardTitle className="text-lg">{otherExpertise.title}</CardTitle>
                        <CardDescription>
                          {otherExpertise.subtitle || otherExpertise.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          asChild
                          className="group w-full bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                          <Link href={`/nos-expertises/${otherExpertise.id}`} className="flex items-center justify-center">
                            En savoir plus
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

// Génération des métadonnées pour le SEO
export async function generateMetadata({ params }: ExpertisePageProps) {
  const expertise = getExpertiseById(params.id)
  
  if (!expertise) {
    return {
      title: 'Expertise non trouvée',
    }
  }

  return {
    title: `${expertise.title} - Advalis Conseil`,
    description: expertise.subtitle || expertise.description,
  }
}

// Génération des pages statiques
export async function generateStaticParams() {
  return expertises.map((expertise) => ({
    id: expertise.id,
  }))
}
