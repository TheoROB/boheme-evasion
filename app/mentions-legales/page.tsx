import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <main className="pt-20">
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Légal</span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-text mt-3 mb-4">
            Mentions Légales
          </h1>
          <div className="w-16 h-px bg-primary/40 mb-6" />
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-text mb-4">1. Éditeur du site</h2>
            <div className="text-muted space-y-2">
              <p><strong>Bohème Évasion</strong></p>
              <p>Armentières, France</p>
              <p>Email : contact@boheme-evasion.com</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-text mb-4">2. Hébergement</h2>
            <p className="text-muted">
              Le site est hébergé par un prestataire professionnel assurant la sécurité et la fiabilité des données.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-text mb-4">3. Propriété intellectuelle</h2>
            <p className="text-muted">
              L'ensemble du contenu présent sur ce site (textes, images, vidéos, logo) est protégé par le droit d'auteur. 
              Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-text mb-4">4. Protection des données personnelles</h2>
            <p className="text-muted mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), nous collectons uniquement 
              les données strictement nécessaires à la gestion des réservations.
            </p>
            <h3 className="font-serif text-xl font-semibold text-text mb-3">Données collectées :</h3>
            <ul className="text-muted list-disc list-inside space-y-2 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Dates de séjour</li>
              <li>Services optionnels sélectionnés</li>
            </ul>
            <h3 className="font-serif text-xl font-semibold text-text mb-3">Utilisation des données :</h3>
            <ul className="text-muted list-disc list-inside space-y-2 mb-4">
              <li>Gestion des réservations</li>
              <li>Communication avec les clients</li>
              <li>Envoi d'emails transactionnels (confirmations, rappels)</li>
            </ul>
            <h3 className="font-serif text-xl font-semibold text-text mb-3">Vos droits :</h3>
            <p className="text-muted">
              Vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos données 
              en nous contactant à l'adresse : contact@boheme-evasion.com
            </p>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-text mb-4">5. Cookies</h2>
            <p className="text-muted">
              Ce site n'utilise que les cookies strictement nécessaires à son fonctionnement. 
              Aucun cookie de tracking ou publicitaire n'est utilisé.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-text mb-4">6. Réservation et paiement</h2>
            <p className="text-muted">
              Les réservations sont confirmées après validation et paiement. Les conditions d'annulation 
              sont communiquées lors du processus de réservation.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-text mb-4">7. Responsabilité</h2>
            <p className="text-muted">
              Bohème Évasion ne saurait être tenue responsable des dommages résultant de l'utilisation 
              du site ou de l'interruption de service.
            </p>
          </div>

          <div className="border-t border-primary/10 pt-8">
            <Link href="/contact" className="text-primary hover:underline">
              Une question ? Contactez-nous →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}