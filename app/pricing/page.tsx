import { stripe } from "@/lib/stripe";
import { CheckoutButton } from "@/components/checkout-button";
import { PageBanner } from "@/components/page-banner";

export default async function PricingPage() {
  // Récupérer tous les produits Stripe actifs
  const prices = await stripe.prices.list({
    active: true,
    expand: ["data.product"],
  });

  // Filtrer pour exclure les baskets (vous pouvez ajuster le filtre selon vos besoins)
  const filteredPrices = prices.data.filter((price) => {
    const product = price.product as any;
    return product && !product.name.toLowerCase().includes('basket');
  });
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <PageBanner 
        title="Choisissez la formule qui vous correspond"
        subtitle="Que vous lanciez votre activité ou que vous ayez besoin d'un coup de pouce ponctuel, nos packs sont pensés pour s'adapter à votre réalité."
        backgroundImage="/images/banners/placeholder.svg"
      />

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrices.map((price, index) => {
              const product = price.product as any;
              const amount = (price.unit_amount || 0) / 100;
              const currency = price.currency?.toUpperCase() || 'EUR';

              return (
                <div 
                  key={price.id} 
                  className={`bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg hover-lift hover-glow animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-blue-600 text-white p-6">
                    <h2 className="text-2xl font-bold text-center">{product.name}</h2>
                  </div>

                  <div className="p-6">
                    <div className="text-center mb-6">
                      <p className="text-3xl font-bold text-blue-600 mb-2 animate-pulse-slow">
                        {amount} {currency}
                      </p>
                      {product.description && (
                        <p className="text-gray-600 italic">{product.description}</p>
                      )}
                    </div>

                    <div className="text-center mb-6">
                      <CheckoutButton
                        priceId={price.id}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                      >
                        👉 Choisir ce pack
                      </CheckoutButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Témoignages</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center hover-lift p-6 rounded-lg transition-all duration-300 animate-fade-in-up animation-delay-100">
              <div className="text-4xl mb-4 animate-float">👤</div>
              <h3 className="font-bold mb-2">Léo M. - Développeur indépendant</h3>
              <p className="text-gray-600 italic">
                "J'avais du mal à suivre mes factures et mes revenus. Aujourd'hui j'ai un vrai tableau clair de ce que je gagne, je peux anticiper."
              </p>
            </div>

            <div className="text-center hover-lift p-6 rounded-lg transition-all duration-300 animate-fade-in-up animation-delay-200">
              <div className="text-4xl mb-4 animate-float animation-delay-100">👤</div>
              <h3 className="font-bold mb-2">Nadia E. - Coach bien-être</h3>
              <p className="text-gray-600 italic">
                "On a posé ensemble un vrai plan de développement. Je peux enfin envisager de recruter quelqu'un."
              </p>
            </div>

            <div className="text-center hover-lift p-6 rounded-lg transition-all duration-300 animate-fade-in-up animation-delay-300">
              <div className="text-4xl mb-4 animate-float animation-delay-200">👤</div>
              <h3 className="font-bold mb-2">Sonia T. - Présidente d'association</h3>
              <p className="text-gray-600 italic">
                "Les papiers, c'était mon cauchemar. Maintenant je les reçois, je les envoie à Eitan, et c'est réglé."
              </p>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 text-center">
            Témoignages représentatifs, basés sur les situations réellement accompagnées. Les prénoms ont été modifiés à des fins de confidentialité.
          </p>
        </div>
      </section>

      {/* Quick Question */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Une question rapide ?</h2>
          <p className="text-xl text-gray-600 mb-4">Besoin d'un coup de pouce sans engagement ?</p>
          <p className="mb-4">✍️ Écris-moi sur WhatsApp ou réserve un appel.</p>
          
          <div className="text-left max-w-md mx-auto mb-8">
            <ul className="space-y-2">
              <li>• Moins de 15 min : gratuit</li>
              <li>• Au-delà : la formule la plus adaptée (Starter, Essentiel ou Zen)</li>
            </ul>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span>🎯</span>
            <p>Chez Advalis, vous payez pour une vraie valeur, pas pour des réponses automatiques.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
