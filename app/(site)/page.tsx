'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import Link from 'next/link'
import { ArrowRight, Target, Building2, FileText, Users, Lightbulb, UtensilsCrossed, ShoppingBag, Heart, Palette, Briefcase, Store, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { expertises } from '@/config/expertises'
import { getActiveSecteurs } from '@/config/secteurs'
import { getPublishedArticles } from '@/config/articles'
import Image from 'next/image'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Calculer les données une seule fois
  const activeSecteurs = getActiveSecteurs()
  const featuredArticles = getPublishedArticles().slice(0, 3)

  // Utilisation des objets centralisés pour les expertises
  const expertiseData = expertises.map((expertise, index) => ({
    icon: [Target, Building2, Lightbulb, FileText, BarChart3][index] || Target,
    badge: expertise.badge || expertise.title.split(' ').filter((word) => word !== '&')[0],
    title: expertise.title,
    description: expertise.description,
    image: expertise.image,
    tags: expertise.title
      .split(' ')
      .filter((word) => word !== '&')
      .slice(0, 3),
    link: `/nos-expertises/${expertise.id}`,
    bgColor: ["from-blue-50 to-blue-100", "from-green-50 to-green-100", "from-purple-50 to-purple-100", "from-orange-50 to-orange-100", "from-indigo-50 to-indigo-100"][index] || "from-blue-50 to-blue-100"
  }))

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

  const methodSteps = [
    {
      title: "Diagnostiquer",
      description: " Nous identifions ce qui vous fait perdre du temps : tâches dispersées, urgences récurrentes, risques, zones floues et blocages organisationnels.",
      icon: BarChart3,
    },
    {
      title: "Structurer",
      description: " Nous créons un cadre solide : outils simples, priorités claires, répartition des rôles, flux de travail cohérents.",
      icon: Building2,
    },
    {
      title: "Piloter",
      description: " Nous mettons en place des repères visuels et indicateurs lisibles pour vous permettre de suivre votre activité sans surcharge mentale.",
      icon: FileText,
    },
    {
      title: "Accompagner",
      description: " Nous restons à vos côtés jusqu’à votre autonomie complète : un suivi humain, souple et orienté résultats. ",
      icon: Users,
    },
  ]

  const keyFigures = [
    { value: "40+", label: " situations de gestion, d’organisation et d’administratif analysées" },
    { value: "1", label: " méthode claire et éprouvée pour avancer rapidement sans complexité" },
    { value: "3", label: " années d’expérience terrain au service des petites structures" },
  ]

  const testimonials = [
    {
      quote:
        "Un regard lucide et humain qui nous a permis de remettre de l’ordre tout en gardant le rythme.",
      author: "Mélanie B.",
      role: "Fondatrice d’une association culturelle",
    },
    {
      quote:
        "Advalis a transformé nos obligations en repères clairs. Nous avons retrouvé du temps et de la visibilité.",
      author: "David R.",
      role: "Dirigeant d’une PME de services",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <PageBanner
        title=" Advalis Conseil"
        subtitle="Clarifier pour décider. Structurer pour durer."
        description=" Advalis Conseil accompagne les indépendants, TPE et associations qui manquent de temps, de clarté et de structure, et qui veulent reprendre le contrôle de leur activité sans complexité."
        backgroundImage="/images/banners/Acceuil_Advalis.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 text-white">
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <Link href="/nous-decouvrir">
              Découvrir notre vision
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            size="lg"
            className="group bg-accentWarm text-accentWarm-foreground border-transparent hover:bg-accentWarm/90 hover:-translate-y-1 hover:shadow-lg transition-all"
            asChild
          >
            <Link href="/contact">
              Prendre rendez-vous
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </PageBanner>


    {/* Articles Section */}
    <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Inspirations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Regards, analyses et réflexions sur la gestion, la structure et la performance organisationnelle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => {
              const gradientColors = [
                "from-blue-100 to-blue-200",
                "from-green-100 to-green-200", 
                "from-purple-100 to-purple-200"
              ]
              const textColors = [
                "text-blue-500/50",
                "text-green-500/50",
                "text-purple-500/50"
              ]
              
              return (
                <Card key={article.id} className="expertise-card h-full flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                      {article.backgroundImage ? (
                        <Image 
                          src={article.backgroundImage} 
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${gradientColors[index]} flex items-center justify-center`}>
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-lg">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                   <CardContent className="mt-auto">
                    <Button
                      asChild
                      className="group w-full bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
                    >
                      <Link href={`/articles/${article.slug}`} className="flex items-center justify-center">
                        Lire l&apos;article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="group bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <Link href="/articles" className="flex items-center justify-center">
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
              Nos savoir-faire
            </h2>
          </div>
          
          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main Carousel Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                {/* Left side - Image/Icon */}
                <div className={`relative bg-gradient-to-br ${currentExpertise.bgColor} flex items-center justify-center transition-all duration-500`}>
                  {currentExpertise.image ? (
                    <div className="w-full h-full relative">
                      <Image 
                        src={currentExpertise.image} 
                        alt={currentExpertise.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <IconComponent className="h-16 w-16 text-primary" />
                      </div>
                    </div>
                  )}
                  {/* Navigation arrows */}
                  <button
                    onClick={prevSlide}
                    className="group absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/80 backdrop-blur-sm w-10 h-10 flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-white"
                    aria-label="Expertise précédente"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700 transition-transform group-hover:-translate-x-0.5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="group absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/80 backdrop-blur-sm w-10 h-10 flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-white"
                    aria-label="Expertise suivante"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

                {/* Right side - Content */}
                <div className="p-8 flex flex-col justify-start gap-4">
                  <div className="inline-flex items-center px-3 py-1 bg-accentSoft text-accentSoft-foreground text-sm font-semibold rounded-full shadow-sm w-fit">
                    {currentExpertise.badge}
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
                        <span key={index} className="px-3 py-1 bg-transparent border border-gray-300 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    asChild
                    className="group w-full bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <Link href={currentExpertise.link} className="flex items-center justify-center">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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

      {/* Notre méthode */}
      <section className="py-24 bg-accentSoft/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4 text-accentSoft-foreground">
              Notre méthode d’accompagnement
            </h2>
            <p className="text-lg text-accentSoft-foreground/80 max-w-3xl mx-auto">
              Un parcours simple et rigoureux pour transformer vos obligations en leviers de confiance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {methodSteps.map((step, index) => {
              const StepIcon = step.icon
              return (
                <Card
                  key={step.title}
                  className="h-full border-none bg-white/90 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-accentSoft text-accentSoft-foreground flex items-center justify-center shadow-sm">
                      <StepIcon className="h-6 w-6" />
                    </div>
                    <div className="text-sm uppercase tracking-wider text-muted-foreground">Étape {index + 1}</div>
                    <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-white border border-border/70 rounded-3xl shadow-xl p-12">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-primary/70 mb-2">Confiance & impact</p>
              <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold">Quelques repères concrets</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keyFigures.map((item) => (
                <div
                  key={item.label}
                  className="text-center px-6 py-8 rounded-2xl bg-accentSoft/30 border border-accentSoft/40"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{item.value}</div>
                  <p className="text-muted-foreground text-base">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 bg-accentWarm/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4 text-accentWarm-foreground">
              Ils parlent de nous
            </h2>
            <p className="text-lg text-accentWarm-foreground/80 max-w-3xl mx-auto">
              Des dirigeants, associations et structures de terrain qui ont retrouvé clarté, méthode et sérénité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item) => (
              <Card
                key={item.author}
                className="h-full bg-white/90 shadow-lg border-none p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">“{item.quote}”</p>
                <div>
                  <p className="font-semibold text-foreground">{item.author}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
 
      {/* Nos Secteurs de Référence Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Nos secteurs d&apos;intervention
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous accompagnons des acteurs issus de secteurs variés :
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {activeSecteurs.map((secteur, index) => (
              <Card
                key={secteur.id}
                className="expertise-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${secteur.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{secteur.icon}</span>
                  </div>
                  <CardTitle className="text-lg">{secteur.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="group bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <Link href="/nos-secteurs" className="flex items-center justify-center">
                Découvrir nos secteurs d&apos;intervention
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
              <Button
                size="lg"
                asChild
                className="group bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <Link href="/contact" className="flex items-center">
                  Échangeons
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
                asChild
              >
                <Link href="/nos-expertises" className="flex items-center">
                  Découvrir nos savoir-faire
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
