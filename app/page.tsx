'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import Link from 'next/link'
import { ArrowRight, Target, Building2, FileText, Users, Lightbulb, UtensilsCrossed, ShoppingBag, Heart, Palette, Briefcase, Store, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const expertiseData = [
    {
      icon: Target,
      category: "Création & Développement",
      title: "Accompagnement à la création & au développement",
      description: "De l'idée au lancement : structurer votre projet, valider votre modèle et construire les bases solides pour démarrer. Nous vous accompagnons dans chaque étape de votre aventure entrepreneuriale.",
      tags: ["Business Plan", "Statut Juridique", "Prévisionnel"],
      link: "/nos-expertises/creation-developpement",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Building2,
      category: "Structuration & Relance",
      title: "Structuration & relance d'activité",
      description: "Clarifier, organiser et relancer : remettre de l'ordre, retrouver de la visibilité et repartir sur des bases saines. Nous vous aidons à retrouver le cap et la sérénité.",
      tags: ["Diagnostic", "Réorganisation", "Redressement"],
      link: "/nos-expertises/structuration-relance",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: Lightbulb,
      category: "Digital & Outils",
      title: "Conseil digital & outils de gestion",
      description: "Choisir et déployer les bons outils pour gagner en efficacité, sans se perdre dans la technologie. Nous vous guidons vers une digitalisation pertinente et mesurable.",
      tags: ["Audit Digital", "Formation", "Automatisation"],
      link: "/nos-expertises/conseil-digital",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: FileText,
      category: "Administratif & Conformité",
      title: "Gestion administrative & conformité",
      description: "Sécuriser les démarches et fiabiliser le suivi. Nous vous accompagnons pour une gestion administrative rigoureuse et conforme à la réglementation.",
      tags: ["Conformité", "Processus", "Formation"],
      link: "/nos-expertises/gestion-administrative-conformite",
      bgColor: "from-orange-50 to-orange-100"
    },
    {
      icon: BarChart3,
      category: "Financier & Pilotage",
      title: "Organisation financière & pilotage",
      description: "Donner de la visibilité et du sens aux chiffres. Nous vous aidons à mettre en place un pilotage financier efficace et des tableaux de bord pertinents.",
      tags: ["Tableaux de bord", "Analyse", "Performance"],
      link: "/nos-expertises/organisation-financiere-pilotage",
      bgColor: "from-indigo-50 to-indigo-100"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % expertiseData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + expertiseData.length) % expertiseData.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentExpertise = expertiseData[currentSlide]
  const IconComponent = currentExpertise.icon

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <PageBanner
        title="Advalis"
        subtitle="Clarifier pour décider. Structurer pour durer."
        description="Advalis Conseil accompagne les dirigeants et structures locales dans la maîtrise de leurs fondations administratives et financières, pour renforcer leur performance et leur stabilité."
        backgroundImage="/images/banners/placeholder.svg"
      >
        <div className="flex flex-col sm:flex-row gap-4 text-white">
          <Button size="lg" variant="secondary" asChild className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 group">
            <Link href="#vision">
              Découvrir notre vision
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </PageBanner>

      {/* Notre Vision Section */}
      <section id="vision" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-8">
              Notre vision
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Notre conviction</strong><br/>
                Nous croyons qu'une structure claire précède toute croissance solide. Advalis aide les entrepreneurs, associations et petites organisations à poser les bases administratives, financières et organisationnelles indispensables à leur développement.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Notre ambition :</strong> rendre la gestion accessible, lisible et durable pour tous les acteurs du tissu économique local.
              </p>
            </div>
          </div>
        </div>
      </section>


    {/* Articles Section */}
    <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Nos inspirations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Regards, analyses et réflexions sur la gestion, la structure et la performance organisationnelle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="expertise-card">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-blue-500/50" />
                </div>
                <CardTitle className="text-lg">
                  Avant d'aller plus vite, allez plus clair
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
                  <Link href="/articles/clarte-structurelle">
                    Lire l'article
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="expertise-card">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-green-500/50" />
                </div>
                <CardTitle className="text-lg">
                  Relancer une activité sans s'épuiser
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
                  <Link href="/articles/relancer-activite">
                    Lire l'article
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="expertise-card">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-purple-500/50" />
                </div>
                <CardTitle className="text-lg">
                  Entrepreneur, pas magicien
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
                  <Link href="/articles/entrepreneur-pas-magicien">
                    Lire l'article
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
              <Link href="/articles">
                Voir toutes nos inspirations
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Nos Expertises Section - Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Nos expertises métiers
            </h2>
          </div>
          
          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main Carousel Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                {/* Left side - Image/Icon */}
                <div className={`relative bg-gradient-to-br ${currentExpertise.bgColor} flex items-center justify-center p-8 transition-all duration-500`}>
                  <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-primary" />
                  </div>
                  {/* Navigation arrows */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-white" />
                  </button>
                </div>

                {/* Right side - Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4 w-fit">
                    {currentExpertise.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {currentExpertise.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {currentExpertise.description}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Services inclus :</p>
                    <div className="flex flex-wrap gap-2">
                      {currentExpertise.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-black text-white text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-fit">
                    <Link href={currentExpertise.link}>
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {expertiseData.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-black' : 'bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
              <Link href="/nos-expertises">
                Découvrir toutes nos expertises
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nos Secteurs de Référence Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Nos secteurs d'intervention
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous accompagnons des acteurs issus de secteurs variés :
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Services & conseil</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Store className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Commerce & distribution</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <UtensilsCrossed className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Restauration & artisanat</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Économie sociale & associative</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Bien-être & santé</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Culture, création & production</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
              <Link href="/nos-secteurs">
                Découvrir nos secteurs d'intervention
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Prêt à transformer votre organisation ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour échanger sur vos enjeux et découvrir comment nous pouvons vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
                <Link href="/contact">
                  Échangeons
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
                <Link href="/nos-expertises">
                  Découvrir nos expertises
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
