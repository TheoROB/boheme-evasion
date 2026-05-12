import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const heroImage = '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (5).jpeg';

const inclusions = [
  { icon: '🛏️', title: 'Lit King Size', desc: 'Literie premium pour des nuits paisibles' },
  { icon: '🛁', title: 'Baignoire Balnéo', desc: '64 jets hydro massants à deux' },
  { icon: '🧖', title: 'Sauna Privatif', desc: 'Moment de détente en toute intimité' },
  { icon: '🚿', title: 'Double Douche', desc: 'Espace spa complet' },
  { icon: '🍳', title: 'Cuisine Équipée', desc: 'Réfrigérateur, plaques, cafetière, ustensiles' },
  { icon: '🧺', title: 'Lave-linge / Sèche-linge', desc: 'Pour les longs séjours' },
  { icon: '📺', title: 'TV & WiFi', desc: 'Divertissement et connectivité' },
  { icon: '🌿', title: 'Terrasse Privative', desc: 'Espace extérieur pour profiter' },
];

const attentions = [
  'Draps et linges de bain fournis',
  'Produits d\'hygiène corporelle',
  'Thé et café à volonté',
  'Accès autonome 24h/24',
  'Stationnement gratuit',
];

export default function Experience() {
  return (
    <main className="pt-20">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src={heroImage} alt="Bohème Évasion" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-text/70 via-text/30 to-transparent" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-secondary font-medium">Découvrez</span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mt-3 mb-4">
            L'Expérience
          </h1>
          <div className="w-16 h-px bg-secondary/60 mx-auto mb-6" />
          <p className="text-lg text-white/80">
            Un cocon romantique où chaque détail a été pensé pour votre bien-être
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Prestations incluses</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text mt-3 mb-4">
              Tout est prévu
            </h2>
            <div className="w-16 h-px bg-primary/40 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusions.map((item, index) => (
              <div key={index} className="card text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg font-semibold text-text mb-1">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Ambiance</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text mt-3 mb-6">
                Une atmosphère chaleureuse et cocooning
              </h2>
              <div className="w-16 h-px bg-primary/40 mb-8" />
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  L'espace a été conçu pour créer une ambiance intime et romantique. 
                  Chaque élément de décoration a été choisi avec soin pour évoquer la douceur de vivre et le calme absolu.
                </p>
                <p>
                  Éclairage d'ambiance tamisé,tons chauds et naturels, matériaux nobles... 
                  Un écrin de sérénité où le temps s'arrête.
                </p>
                <p>
                  La terrasse privative prolonge l'espace de vie vers l'extérieur, 
                  offrant un lieu supplémentaire pour buller sous les étoiles.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Petites attentions</span>
              <h3 className="font-serif text-2xl font-semibold text-text">
                Les détails qui font la différence
              </h3>
              <div className="w-16 h-px bg-primary/40 mb-8" />
              <ul className="space-y-3">
                {attentions.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/galerie" className="btn-primary">
                  Voir la galerie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text mb-4">
            Prêt à vivre l'expérience ?
          </h2>
          <p className="text-muted mb-8">
            Réservez votre séjour et laissez-vous transporter
          </p>
          <Link href="/reservation" className="btn-primary text-lg px-10 py-5">
            Réserver maintenant
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  );
}