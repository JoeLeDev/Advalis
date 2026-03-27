"use client";

import { useState } from "react";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqItems } from "@/config/faq";

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Effet escargot : calculer le délai d'animation pour chaque élément
  const getAnimationDelay = (index: number) => {
    return index * 100; // 100ms de délai entre chaque élément
  };


  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <PageBanner 
        title="Foire aux questions"
        subtitle="Toutes les réponses à vos questions sur nos services et nos secteurs d'activité"
        backgroundImage="/images/banners/FAQ_Advalis.jpg"
      />

      {/* FAQ Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-0">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-6 px-0 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 group"
                >
                  <h2 className="text-xl font-bold text-gray-800 pr-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.question}
                  </h2>
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openItem === index 
                        ? 'bg-blue-100 text-blue-600 scale-110' 
                        : 'bg-gray-100 text-gray-600 hover:scale-105 hover:bg-blue-50'
                    }`}>
                      {openItem === index ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openItem === index && (
                  <div className="pb-6 pr-12 transition-all duration-300 ease-in-out">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}