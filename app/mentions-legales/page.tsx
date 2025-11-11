import { PageBanner } from '@/components/page-banner'

export default function MentionsLegalesPage() {
  return (
    <div className="flex flex-col">
      <PageBanner
        title="Mentions légales"
        subtitle="Informations légales et conditions d'utilisation du site"
        backgroundImage="/images/banners/Mentions.jpg"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">1. Éditeur du site</h2>
            <p className="text-gray-700 mb-4">
              Le présent site <strong>https://www.advalis.fr</strong> est édité par :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Raison sociale :</strong> Advalis Conseil</li>
              <li><strong>Forme juridique :</strong> Entreprise individuelle</li>
              <li><strong>SIREN :</strong> 797540382</li>
              <li><strong>Siège social :</strong> 60 rue François 1er, 75008 PARIS</li>
              <li><strong>Responsable de la publication :</strong> Réginald DELUCIEN</li>
              <li><strong>📧 Contact :</strong> <a href="mailto:contact@advalis.fr" className="text-primary hover:underline">contact@advalis.fr</a></li>
              <li><strong>📞 Téléphone :</strong> 01 85 09 72 43</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">2. Hébergement</h2>
            <p className="text-gray-700 mb-4">
              Le site est hébergé par :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Hébergeur :</strong> Hostinger International Ltd.</li>
              <li><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
              <li><strong>Site web :</strong> <a href="https://www.hostinger.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.hostinger.fr</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">3. Activité</h2>
            <p className="text-gray-700 mb-6">
              Advalis Conseil accompagne les indépendants, micro-entrepreneurs, associations et petites structures dans la gestion administrative, financière et stratégique de leur activité.
            </p>
            <p className="text-gray-700 mb-6">
              Les prestations proposées ne constituent ni une activité d'expertise comptable, ni un conseil juridique réservé aux professionnels habilités.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">5. Données personnelles (RGPD)</h2>
            <p className="text-gray-700 mb-4">
              Advalis Conseil s'engage à ce que la collecte et le traitement des données personnelles soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la loi « Informatique et Libertés ».
            </p>
            <p className="text-gray-700 mb-4">
              Les données collectées via les formulaires (contact, prise de rendez-vous, Google Forms, etc.) sont utilisées uniquement pour :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>répondre aux demandes des utilisateurs,</li>
              <li>assurer le suivi des prestations et la relation client,</li>
              <li>transmettre des informations relatives aux offres Advalis.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Aucune donnée n'est vendue, échangée ou transmise à des tiers sans consentement.
            </p>
            <p className="text-gray-700 mb-6">
              Vous pouvez exercer vos droits d'accès, de rectification, d'opposition et de suppression en écrivant à :<br/>
              📧 <a href="mailto:contact@advalis.fr" className="text-primary hover:underline">contact@advalis.fr</a><br/>
              ou par courrier à : 60 rue François 1er, 75008 PARIS
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">6. Cookies</h2>
            <p className="text-gray-700 mb-6">
              Le site peut être amené à déposer de petits fichiers texte (cookies) sur votre appareil pour améliorer votre expérience de navigation.<br/>
              Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">7. Limitation de responsabilité</h2>
            <p className="text-gray-700 mb-6">
              Advalis Conseil met tout en œuvre pour assurer la fiabilité et la mise à jour des informations diffusées sur le site.<br/>
              Cependant, la responsabilité de l'éditeur ne saurait être engagée en cas d'erreurs, d'omissions ou d'indisponibilité temporaire du service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">8. Droit applicable</h2>
            <p className="text-gray-700 mb-6">
              Les présentes mentions légales sont régies par le droit français.<br/>
              Tout litige relatif à l'utilisation du site sera soumis à la compétence des tribunaux français.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">9. Contact</h2>
            <p className="text-gray-700 mb-4">
              📞 Contact / 📩 <a href="mailto:contact@advalis.fr" className="text-primary hover:underline">contact@advalis.fr</a>
            </p>

            <p className="text-sm text-muted-foreground mt-8">
              <p>Dernière mise à jour : 27 octobre 2025</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
