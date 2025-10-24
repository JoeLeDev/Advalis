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

  // Utilisation des objets centralisés pour les expertises
  const expertiseData = expertises.map((expertise, index) => ({
    icon: [Target, Building2, Lightbulb, FileText, BarChart3][index] || Target,
    category: expertise.title.split(' ')[0] + " & " + expertise.title.split(' ')[2],
    title: expertise.title,
    description: expertise.description,
    image: expertise.image,
    tags: expertise.title.split(' ').slice(0, 3),
    link: `/nos-expertises/${expertise.title.toLowerCase().replace(/\s+/g, '-')}`,
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

  // Récupération dynamique des articles
  const featuredArticles = getPublishedArticles().slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <PageBanner
        title=" Advalis Conseil"
        subtitle="Clarifier pour décider. Structurer pour durer."
        description="Advalis Conseil accompagne les dirigeants à structurer et piloter leur activité pour renforcer la performance et la stabilité de leur organisation."
        backgroundImage="/images/banners/Acceuil_Advalis.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 text-white">
          <Button size="lg" variant="secondary" asChild className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 group bg-transparent hover:bg-transparent text-white">
            <Link href="/nous-decouvrir">
              Découvrir notre vision
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
                    <Button variant="outline" asChild className="w-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
                      <Link href={`/articles/${article.slug}`}>
                        Lire l&apos;article
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
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
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors shadow-sm"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors shadow-sm"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
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
                        <span key={index} className="px-3 py-1 bg-transparent border border-gray-300 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" asChild className="w-fit">
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
              Nos secteurs d&apos;intervention
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous accompagnons des acteurs issus de secteurs variés :
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {getActiveSecteurs().map((secteur, index) => (
              <Card key={secteur.id} className="expertise-card">
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
            <Button size="lg" variant="outline" asChild className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
              <Link href="/nos-secteurs">
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
              <Button size="lg" variant="outline" asChild className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
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
