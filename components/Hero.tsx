'use client';

import Image from 'next/image';

const videoSrc = '/photos/WhatsApp Video 2026-04-30 at 15.59.45.mp4';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
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
          <a
            href="/reservation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-5"
          >
            <span>Réserver</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#decouvrir" className="btn-secondary border-white/50 text-black hover:bg-white hover:text-text backdrop-blur-sm">
            Découvrir
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}