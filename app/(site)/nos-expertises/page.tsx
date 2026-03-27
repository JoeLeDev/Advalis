import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import Link from 'next/link'
import { ArrowRight, Target, Building2, Users, TrendingUp, Lightbulb, BarChart3, FileText } from 'lucide-react'
import { expertises } from '@/config/expertises'
import Image from 'next/image'

export default function NosExpertisesPage() {
  // Icônes pour chaque expertise
  const expertiseIcons = [Target, Building2, Lightbulb, FileText, BarChart3]
  
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Savoir-faire"
        subtitle="Un accompagnement sur-mesure pour structurer, piloter et développer votre activité"
        description="Nous vous accompagnons avec exigence, clarté et loyauté pour faire grandir ce qui mérite de durer."
        backgroundImage="/images/banners/Expertises_Advalis.jpg"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">

          {/* Expertises Grid */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <p className="text-center text-2xl mb-8 italic">
              Nos services sont conçus pour répondre aux défis quotidiens des indépendants, TPE et associations : surcharge, désorganisation, manque de clarté, décisions difficiles, administratif envahissant.

              Notre objectif :

              transformer votre fonctionnement pour vous permettre d’avancer avec sérénité, efficacité et stabilité.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {expertises.map((expertise, index) => {
                  const IconComponent = expertiseIcons[index] || Target
                  return (
                    <Card key={expertise.id} className="expertise-card h-full flex flex-col">
                      <CardHeader className="flex-grow">
                        <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                          {expertise.image ? (
                            <Image 
                              src={expertise.image} 
                              alt={expertise.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="h-8 w-8 text-primary" />
                            </div>
                          )}
                        </div>
                        <CardTitle>{expertise.title}</CardTitle>
                        <CardDescription>
                          {expertise.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <Button
                          asChild
                          className="group w-full bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                          <Link href={`/nos-expertises/${expertise.id}`} className="flex items-center justify-center">
                            En savoir plus
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>
        </div>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-advalis-heading font-bold mb-4">
              Comment pouvons-nous vous accompagner ?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Chaque projet est unique. Contactez-nous pour échanger sur vos enjeux
              et découvrir comment nos expertises peuvent répondre à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="group bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <Link href="/contact" className="flex items-center justify-center">
                  Échangeons
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="group bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <Link href="/nos-secteurs" className="flex items-center justify-center">
                  Découvrir nos secteurs d&apos;activité
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          </div>
        </section>
        </div>
      </div>
  )
}
