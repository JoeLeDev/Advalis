"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Contactez-nous</h2>
          <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
            Une question ? Un besoin spécifique ? On vous répond sous 24h.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulaire de diagnostic */}
          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-left">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4 animate-float">📋</div>
              <h3 className="text-2xl font-bold mb-2">Formulaire de diagnostic</h3>
              <p className="text-gray-600">
                Pour mieux comprendre votre situation et vous orienter vers la solution la plus adaptée.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span>Remplissage en 2 minutes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span>Informations confidentielles</span>
              </div>
            </div>

            <Button 
              onClick={() => setShowForm(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            >
              Remplir le formulaire
            </Button>
          </div>

          {/* Contact direct */}
          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-right">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4 animate-float">💬</div>
              <h3 className="text-2xl font-bold mb-2">Contact direct</h3>
              <p className="text-gray-600">
                Pour une question rapide ou un échange plus personnel.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-blue-500">📱</span>
                <span>WhatsApp : Réponse rapide</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">📧</span>
                <span>Email : contact@advalis.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">⏰</span>
                <span>Disponible du lundi au vendredi</span>
              </div>
            </div>

            <a 
              href="https://bit.ly/44ePnAO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="group w-full bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all py-3"
              >
                <span className="flex items-center justify-center">
                  💬 Écrire sur WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </a>
          </div>
        </div>

        {/* Message de confirmation personnalisé */}
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200 animate-fade-in-up">
          <div className="text-center">
            <h4 className="text-lg font-bold text-blue-800 mb-2">Merci pour votre réponse !</h4>
            <p className="text-blue-700 mb-4">
              On revient vers vous dans les 24h. Vous pouvez aussi nous écrire directement sur WhatsApp si besoin : 
              <a
                href="https://bit.ly/44ePnAO"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                https://bit.ly/44ePnAO
              </a>
            </p>
            <p className="text-sm text-blue-600">– L&apos;équipe ADVALIS</p>
          </div>
        </div>

        {/* Formulaire Google Forms (affiché conditionnellement) */}
        {showForm && (
          <div className="mt-8 animate-scale-in">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold">📋 Formulaire de diagnostic Advalis</h4>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-600 mb-6">
                Pour mieux comprendre votre situation et vous orienter vers la solution la plus adaptée à votre activité.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Informations générales</strong>
                </p>
                <div className="space-y-3 text-sm">
                  <p>• Nom et prénom</p>
                  <p>• Type d&apos;activité (auto-entrepreneur, création, société, association, etc.)</p>
                  <p>• Activité principale</p>
                  <p>• Régime fiscal actuel</p>
                  <p>• Chiffre d&apos;affaires moyen par mois</p>
                  <p>• Suivi comptable existant</p>
                </div>
                
                <p className="text-sm text-gray-600 mt-4 mb-2">
                  <strong>Vos besoins</strong>
                </p>
                <div className="space-y-2 text-sm">
                  <p>• Principales difficultés (suivi, justificatifs, déclarations, trésorerie, etc.)</p>
                  <p>• Relances ou erreurs administratives</p>
                  <p>• Mode de contact préféré</p>
                  <p>• Créneau de disponibilité</p>
                </div>
              </div>

              <div className="text-center">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd-wKMq5lMsqhA3Q306I54P0jaLEoltyknRr5hkb47YH7D2dQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                    Ouvrir le formulaire Google Forms
                  </Button>
                </a>
                <p className="text-xs text-gray-500 mt-2">
                  Le formulaire s&apos;ouvrira dans un nouvel onglet
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
