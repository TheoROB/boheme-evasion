import Image from 'next/image';
import Link from 'next/link';

import About from '@/components/About';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const heroImage = '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (5).jpeg';

const benefits = [
  { icon: '💑', title: 'Romantique', desc: 'Un écrin d'amour et de sérénité pour deux' },
  { icon: '🧖', title: 'Privatif', desc: '100% de votre espace, sans contact avec d\'autres voyageurs' },
  { icon: '✨', title: 'Tout compris', desc: 'Sauna, balnéo, cuisine, terrasse... Tout est prévu' },
  { icon: '📍', title: 'Proche Lille', desc: 'À seulement 20 minutes de Lille, facile d\'accès' },
];

const stats = [
  { value: '100%', label: 'Privatif' },
  { value: '64', label: 'Jets balnéo' },
  { value: '20 min', label: 'De Lille' },
  { value: '5★', label: 'Avis clients' },
];

const testimonials = [
  {
    quote: "Un moment suspendu hors du temps. La baignoire balnéo est un vrai nuage, et le sauna une merveille.",
    name: "Sophie & Marc",
    date: "Février 2026"
  },
  {
    quote: "L'ambiance est incredible, les photos ne rendent pas justice au lieu. On reviendra c'est sûr !",
    name: "Julie & Thomas",
    date: "Janvier 2026"
  },
  {
    quote: "Le cadeau parfait pour notre anniversaire de mariage.部署 détail a été pensé avec amour.",
    name: "Marie & Pierre",
    date: "Décembre 2025"
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/photos/WhatsApp Video 2026-04-30 at 15.59.45.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-text/50 via-text/30 to-text/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-text/20 to-transparent" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-3">
              <span className="w-16 h-px bg-white/50" />
              <span className="text-xs uppercase tracking-[0.4em] text-secondary font-medium">Bienvenue chez</span>
              <span className="w-16 h-px bg-white/50" />
            </div>
          </div>
          
          <h1 className="font-serif text-8xl md:text-9xl font-bold mb-2 leading-none tracking-tight">
            Bohème
          </h1>
          <h1 className="font-serif text-5xl md:text-6xl font-light italic mb-8 tracking-wide">
            Évasion
          </h1>
          
          <div className="w-32 h-px bg-secondary/60 mx-auto mb-8" />
          
          <p className="text-2xl md:text-3xl font-light mb-4 text-white/90 font-serif italic">
            L'escapade romantique parfaite
          </p>
          <p className="text-base md:text-lg text-white/80 mb-12 max-w-xl mx-auto leading-relaxed">
            Sauna privatif · Baignoire balnéo · Lit king size · Terrasse
            <br />
            <span className="text-secondary font-medium">Armentières, à 20 min de Lille</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/reservation" className="btn-primary text-lg px-12 py-5">
              Réserver maintenant
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/experience" className="btn-secondary border-white/50 text-black hover:bg-white hover:text-text backdrop-blur-sm">
              Découvrir l'expérience
            </Link>
          </div>
          
          <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Pourquoi nous choisir</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text mt-3 mb-4">
              L'évasion parfaite à deux
            </h2>
            <div className="w-16 h-px bg-primary/40 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="card text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
                <Image src={heroImage} alt="Bohème Évasion" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-cta text-white p-6 rounded-2xl shadow-soft hidden md:block">
                <p className="font-serif text-3xl font-bold">2</p>
                <p className="text-sm text-white/80">personnes max</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">L'expérience</span>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text mt-3 mb-6">
                Un cocon dédié au bien-être
              </h2>
              <div className="w-16 h-px bg-primary/40 mb-8" />
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Le logement est un <strong className="text-text">cocon privatif</strong> entièrement dédié à la détente et au bien-être. Lit king size, coin salon, accès direct à l'espace spa.
                </p>
                <p>
                  <strong className="text-text">Espace bien-être</strong> avec sauna et baignoire balnéo (64 jets hydro massants) pour un moment de relaxation absolue.
                </p>
                <p>
                  Cuisine équipée, double douche, terrasse privative... Tout est pensé pour votre confort.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/experience" className="btn-primary">
                  En savoir plus
                </Link>
                <Link href="/galerie" className="btn-secondary">
                  Voir la galerie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />

      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Galerie</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text mt-3 mb-4">
              Découvrez les lieux
            </h2>
            <div className="w-16 h-px bg-primary/40 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (5).jpeg',
              '/photos/WhatsApp Image 2026-04-30 at 16.23.47.jpeg',
              '/photos/WhatsApp Image 2026-04-30 at 16.23.41.jpeg',
              '/photos/WhatsApp Image 2026-04-30 at 16.23.45.jpeg',
              '/photos/WhatsApp Image 2026-04-30 at 16.23.46.jpeg',
              '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (1).jpeg',
              '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (2).jpeg',
              '/photos/WhatsApp Image 2026-04-30 at 16.23.51.jpeg',
            ].map((src, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image src={src} alt={`Galerie ${index + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-text/0 group-hover:bg-text/30 transition-all duration-200" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/galerie" className="btn-secondary">
              Voir toute la galerie
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Tarifs</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text mt-3 mb-4">
              Des prix pour tous les budgets
            </h2>
            <div className="w-16 h-px bg-primary/40 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="font-serif text-xl font-semibold text-text mb-2">Escapade détente</h3>
              <p className="text-muted text-sm mb-4">1 nuit</p>
              <p className="font-serif text-4xl font-bold text-primary mb-6">199€</p>
              <ul className="text-muted text-sm space-y-2 mb-6">
                <li>✓ Chambre double</li>
                <li>✓ Accès spa privatif</li>
                <li>✓ Draps et serviettes</li>
              </ul>
              <Link href="/reservation" className="btn-primary w-full">Réserver</Link>
            </div>
            <div className="card text-center ring-2 ring-primary">
              <span className="inline-block px-4 py-1 bg-primary text-white text-xs uppercase tracking-wider rounded-full mb-4">Le plus prisé</span>
              <h3 className="font-serif text-xl font-semibold text-text mb-2">Week-end romantique</h3>
              <p className="text-muted text-sm mb-4">2 nuits</p>
              <p className="font-serif text-4xl font-bold text-primary mb-6">350€</p>
              <ul className="text-muted text-sm space-y-2 mb-6">
                <li>✓ 2 nuits en chambre double</li>
                <li>✓ Accès spa privatif</li>
                <li>✓ Draps et serviettes</li>
                <li>✓ Café et thé à volonté</li>
              </ul>
              <Link href="/reservation" className="btn-primary w-full">Réserver</Link>
            </div>
            <div className="card text-center">
              <h3 className="font-serif text-xl font-semibold text-text mb-2">Journée bien-être</h3>
              <p className="text-muted text-sm mb-4">8h - 20h</p>
              <p className="font-serif text-4xl font-bold text-primary mb-6">129€</p>
              <ul className="text-muted text-sm space-y-2 mb-6">
                <li>✓ Accès espace spa</li>
                <li>✓ Sauna + balnéo</li>
                <li>✓ Terrasse privative</li>
              </ul>
              <Link href="/reservation" className="btn-secondary w-full">Réserver</Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/tarifs" className="text-primary hover:underline">
              Voir tous les tarifs et options →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Témoignages</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text mt-3 mb-4">
              Ce que disent nos clients
            </h2>
            <div className="w-16 h-px bg-primary/40 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="card">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted italic mb-4">"{t.quote}"</p>
                <div className="border-t border-primary/10 pt-4">
                  <p className="font-semibold text-text">{t.name}</p>
                  <p className="text-sm text-muted">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-primary to-cta text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Offrez l'évasion à vos proches
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Un bon cadeau Bohème Évasion, c'est le cadeau parfait pour un anniversaire, une anniversary ou simplement pour faire plaisir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bons-cadeaux" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all">
              Acheter un bon cadeau
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}