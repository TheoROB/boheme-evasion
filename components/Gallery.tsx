'use client';

import Image from 'next/image';
import { useState } from 'react';

const photos = [
  { src: '/photos/WhatsApp Image 2026-04-30 at 15.59.42.jpeg', alt: 'Vue d\'ensemble du logement' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.05.jpeg', alt: 'Coin salon cosy' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.41.jpeg', alt: 'Espace bien-être' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.45.jpeg', alt: 'Terrasse privée' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.46.jpeg', alt: 'Cuisine équipée' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.46 (1).jpeg', alt: 'Salle de bain' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.47.jpeg', alt: 'Détente et confort' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.47 (1).jpeg', alt: 'Ambiance cocooning' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.47 (2).jpeg', alt: 'Moment en amoureux' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.47 (3).jpeg', alt: 'Espace nuit' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.47 (4).jpeg', alt: 'Lumière tamisée' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.51.jpeg', alt: 'Détail décoration' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.53.jpeg', alt: 'Ambiance bohème' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.56.jpeg', alt: 'Espace détente' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (1).jpeg', alt: 'Vue intérieure' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (2).jpeg', alt: 'Coin nuit' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (3).jpeg', alt: 'Salle de bain luxe' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (4).jpeg', alt: 'Équipements spa' },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="galerie" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Galerie Photos</h2>
        <p className="section-subtitle">
          Découvrez chaque recoin de votre futur cocon romantic
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-text/0 group-hover:bg-text/30 transition-all duration-200 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-text/95 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white cursor-pointer"
            onClick={() => setSelectedIndex(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {selectedIndex > 0 && (
            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-white cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex - 1); }}
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
              fill
              className="object-contain rounded-2xl"
            />
          </div>
          {selectedIndex < photos.length - 1 && (
            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex + 1); }}
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70">
            {selectedIndex + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
}