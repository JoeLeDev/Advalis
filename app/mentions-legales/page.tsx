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
              Le site <strong>advalis-conseil.fr</strong> est édité par :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Raison sociale :</strong> Advalis Conseil</li>
              <li><strong>Forme juridique :</strong> Société par actions simplifiée (SAS)</li>
              <li><strong>Capital social :</strong> [Montant du capital]</li>
              <li><strong>Siège social :</strong> [Adresse complète]</li>
              <li><strong>RCS :</strong> [Numéro RCS]</li>
              <li><strong>SIRET :</strong> [Numéro SIRET]</li>
              <li><strong>Code APE :</strong> [Code APE]</li>
              <li><strong>TVA intracommunautaire :</strong> [Numéro TVA]</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">2. Directeur de la publication</h2>
            <p className="text-gray-700 mb-6">
              Le directeur de la publication est Réginald Delucien, en qualité de directeur général.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">3. Hébergement</h2>
            <p>
              Le site est hébergé par :
            </p>
            <ul>
              <li><strong>Hébergeur :</strong> Vercel</li>
              <li><strong>Adresse :</strong> 50 Vercoe Road, London, N15 6PS, United Kingdom</li>
              <li><strong>Téléphone :</strong> +44 20 3514 9946</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">5. Collecte et traitement des données personnelles</h2>
            <p>
              Les informations recueillies sur ce site font l&apos;objet d&apos;un traitement informatique destiné à répondre à vos demandes de contact. Les données sont conservées pendant 13 mois et sont destinées à advalis-conseil.fr.
            </p>
            <p>
              Conformément à la loi &quot;informatique et libertés&quot; du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données vous concernant.
            </p>
            <p>
              Pour exercer ce droit, contactez-nous à : <a href="mailto:contact@advalis-conseil.fr" className="text-primary hover:underline">contact@advalis-conseil.fr</a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">6. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer votre expérience de navigation. En continuant à naviguer sur ce site, vous acceptez l&apos;utilisation de cookies conformément à notre politique de confidentialité.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">7. Responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l&apos;année, mais peut toutefois contenir des inexactitudes ou des omissions.
            </p>
            <p>
              Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l&apos;adresse contact@advalis-conseil.fr, en décrivant le problème de la manière la plus précise possible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">8. Droit applicable</h2>
            <p>
              Tout litige en relation avec l&apos;utilisation du site advalis-conseil.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de melun.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">9. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
            </p>
            <ul>
              <li><strong>Email :</strong> <a href="mailto:contact@advalis-conseil.fr" className="text-primary hover:underline">contact@advalis-conseil.fr</a></li>
              <li><strong>Téléphone :</strong> +33 6 75 56 37 33</li>
              <li><strong>Adresse :</strong> [Adresse complète]</li>
            </ul>

            <p className="text-sm text-muted-foreground mt-8">
              <em>Dernière mise à jour : 19 octobre 2025</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
