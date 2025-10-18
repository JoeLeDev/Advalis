"use client";

import { CheckoutButton } from "./checkout-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Gratuit",
    price: "0€",
    period: "/mois",
    description: "Parfait pour commencer",
    features: [
      "Jusqu'à 3 projets",
      "1 Go de stockage",
      "Support communautaire",
      "Fonctionnalités de base",
    ],
    priceId: null,
    popular: false,
  },
  {
    name: "Pro",
    price: "29€",
    period: "/mois",
    description: "Pour les professionnels",
    features: [
      "Projets illimités",
      "50 Go de stockage",
      "Support prioritaire",
      "Fonctionnalités avancées",
      "Analyses détaillées",
      "Intégrations tierces",
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO,
    popular: true,
  },
  {
    name: "Entreprise",
    price: "99€",
    period: "/mois",
    description: "Pour les grandes équipes",
    features: [
      "Tout du plan Pro",
      "Stockage illimité",
      "Support dédié 24/7",
      "SLA garantis",
      "Formation personnalisée",
      "Gestionnaire de compte",
      "API personnalisée",
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_ENTERPRISE,
    popular: false,
  },
];

export function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {pricingPlans.map((plan) => (
        <Card
          key={plan.name}
          className={`relative ${
            plan.popular ? "border-primary shadow-lg scale-105" : ""
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                Populaire
              </span>
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-2xl">{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            {plan.priceId ? (
              <CheckoutButton priceId={plan.priceId} />
            ) : (
              <button className="w-full py-2 px-4 border border-input rounded-md hover:bg-accent transition-colors">
                Plan actuel
              </button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

