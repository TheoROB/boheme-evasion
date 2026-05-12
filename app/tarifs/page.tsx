import Link from 'next/link';
import Footer from '@/components/Footer';

const tarifs = [
  {
    title: 'Week-end romantique',
    duration: '2 nuits',
    price: '350',
    features: [
      '2 nuits en chambre double',
      'Accès espace bien-être (sauna + balnéo)',
      'Draps et linges de toilette',
      'Café et thé à volonté',
      'Parking gratuit',
    ],
    highlight: true,
  },
  {
    title: 'Escapade détente',
    duration: '1 nuit',
    price: '199',
    features: [
      '1 nuit en chambre double',
      'Accès espace bien-être (sauna + balnéo)',
      'Draps et linges de toilette',
      'Café et thé à volonté',
      'Parking gratuit',
    ],
    highlight: false,
  },
  {
    title: 'Journée bien-être',
    duration: '8h - 20h',
    price: '129',
    features: [
      'Accès journée espace bien-être',
      'Sauna et baignoire balnéo',
      'Terrasse privative',
      'Accès cuisine équipée',
      'Serviettes fournies',
    ],
    highlight: false,
  },
];

const supplements = [
  { name: 'Petit-déjeuner gourmet', price: '35' },
  { name: 'Panier gourmand', price: '45' },
  { name: 'Mise en ambiance (bougies, pétales)', price: '25' },
  { name: 'Kit huiles essentielles spa', price: '15' },
  { name: 'Sélection vin & champagne', price: '35' },
  { name: 'Composition florale', price: '40' },
  { name: 'Massage deux personnes (1h)', price: '120' },
];

export default function Tarifs() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Tarifs</span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-text mt-3 mb-4">
            Nos Tarifs
          </h1>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-6" />
          <p className="text-muted max-w-xl mx-auto">
            Des tarifs transparents pour une expérience inoubliable
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {tarifs.map((tarif, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 ${
                  tarif.highlight
                    ? 'bg-primary text-white shadow-card scale-105'
                    : 'bg-white text-text shadow-card'
                }`}
              >
                {tarif.highlight && (
                  <span className="inline-block px-4 py-1 bg-white/20 text-white text-xs uppercase tracking-wider rounded-full mb-4">
                    Le plus populaire
                  </span>
                )}
                <h3 className={`font-serif text-2xl font-semibold mb-2 ${tarif.highlight ? '' : 'text-text'}`}>
                  {tarif.title}
                </h3>
                <p className={`text-sm mb-6 ${tarif.highlight ? 'text-white/70' : 'text-muted'}`}>
                  {tarif.duration}
                </p>
                <div className="mb-6">
                  <span className="font-serif text-5xl font-bold">{tarif.price}€</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tarif.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tarif.highlight ? 'text-white/70' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={tarif.highlight ? 'text-white/90' : 'text-muted'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/reservation"
                  className={`block text-center py-3.5 rounded-full font-medium transition-all ${
                    tarif.highlight
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  Réserver
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
            <h2 className="font-serif text-3xl font-semibold text-text text-center mb-4">
              Services optionnels
            </h2>
            <p className="text-muted text-center mb-10">
              Personnalisez votre séjour avec nos prestations supplémentaires
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supplements.map((supp, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-primary/10">
                  <span className="text-text">{supp.name}</span>
                  <span className="font-semibold text-primary">+{supp.price}€</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
            <h2 className="font-serif text-3xl font-semibold text-text text-center mb-6">
              Tarifs dégressifs
            </h2>
            <div className="w-16 h-px bg-primary/40 mx-auto mb-8" />
            <div className="space-y-4 text-muted">
              <p>
                <strong className="text-text">Séjours longue durée :</strong> -10% à partir de 3 nuits consécutives
              </p>
              <p>
                <strong className="text-text">Réservation anticipée :</strong> -5% pour toute réservation effectuée 30 jours à l'avance
              </p>
              <p>
                <strong className="text-text">Hors saison :</strong> Tarifs réduits sur certaines périodes. Contactez-nous pour plus d'informations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Envie d'offrir une expérience ?
          </h2>
          <p className="text-white/80 mb-8">
            Optez pour un bon cadeau et faites plaisir à vos proches
          </p>
          <Link href="/bons-cadeaux" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all">
            Voir les bons cadeaux
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}