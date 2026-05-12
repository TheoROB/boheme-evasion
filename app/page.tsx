'use client';

import Image from 'next/image';
import Link from 'next/link';

const videoSrc = '/photos/WhatsApp Video 2026-04-30 at 15.59.45.mp4';
const heroImage = '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (5).jpeg';

const highlights = [
  { icon: '🧖', title: 'Sauna Privatif', desc: 'Détente en toute intimité' },
  { icon: '🛁', title: 'Baignoire Balnéo', desc: '64 jets hydro massants' },
  { icon: '🛏️', title: 'Lit King Size', desc: 'Confort optimal' },
  { icon: '🌿', title: 'Terrasse Privative', desc: 'Espace extérieur' },
];

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-text/50 via-text/30 to-text/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-text/20 to-transparent" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="inline-block mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-12 h-px bg-white/50" />
              <span className="text-xs uppercase tracking-[0.4em] text-secondary font-medium">Bienvenue chez</span>
              <span className="w-12 h-px bg-white/50" />
            </div>
          </div>
          <h1 className="font-serif text-7xl md:text-9xl font-bold mb-2 leading-none tracking-tight">
            Bohème
          </h1>
          <h1 className="font-serif text-5xl md:text-6xl font-light italic mb-6 tracking-wide">
            Évasion
          </h1>
          <div className="w-24 h-px bg-secondary/60 mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-light mb-4 text-white/90 font-serif italic">
            Cocon romantique pour une escapade à deux
          </p>
          <p className="text-base md:text-lg text-white/70 mb-12 max-w-xl mx-auto">
            Sauna privatif · Baignoire balnéo · Lit king size
            <br />
            <span className="text-secondary">Armentières, à 20 min de Lille</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservation" className="btn-primary text-lg px-10 py-5">
              <span>Réserver</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/experience" className="btn-secondary border-white/50 text-black hover:bg-white hover:text-text backdrop-blur-sm">
              Découvrir
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Les essentiels</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text mt-3 mb-4">
              Votre Cocon de Bien-être
            </h2>
            <div className="w-16 h-px bg-primary/40 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="card text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg font-semibold text-text mb-1">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
                <Image src={heroImage} alt="Bohème Évasion" fill className="object-cover" />
              </div>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">À propos</span>
              <h2 className="font-serif text-4xl font-semibold text-text mt-3 mb-4">
                Un lieu pensé pour se retrouver
              </h2>
              <div className="w-16 h-px bg-primary/40 mb-8" />
              <p className="text-muted leading-relaxed mb-6">
                Le logement est un cocon privatif entièrement dédié à la détente et au bien-être. 
                Un espace principal avec lit king size, coin salon, et accès direct à l'espace spa.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Cuisine équipée, salle de bain avec double douche, terrasse privative... 
                Tout est pensé pour offrir confort, intimité et une expérience idéale en couple.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/experience" className="btn-primary">
                  Découvrir l'expérience
                </Link>
                <Link href="/tarifs" className="btn-secondary">
                  Voir les tarifs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text mb-4">
            Envie d'une escapade romantique ?
          </h2>
          <p className="text-muted mb-8">
            Réservez votre séjour et créez des souvenirs inoubliables
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservation" className="btn-primary text-lg px-10 py-5">
              Réserver maintenant
            </Link>
            <Link href="/bons-cadeaux" className="btn-secondary">
              Offrir un bon cadeau
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}