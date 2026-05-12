'use client';

import Image from 'next/image';
import { useState } from 'react';
import Footer from '@/components/Footer';

const photos = [
  { src: '/photos/WhatsApp Image 2026-04-30 at 15.59.42.jpeg', alt: 'Vue d\'ensemble', category: 'espace' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.05.jpeg', alt: 'Coin salon', category: 'espace' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.56.jpeg', alt: 'Vue intérieure', category: 'espace' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (1).jpeg', alt: 'Coin nuit', category: 'chambre' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (2).jpeg', alt: 'Détente', category: 'chambre' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.47.jpeg', alt: 'Ambiance cosy', category: 'chambre' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.47 (1).jpeg', alt: 'Moment détente', category: 'spa' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.47 (2).jpeg', alt: 'Espace bien-être', category: 'spa' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.47 (3).jpeg', alt: 'Lumière tamisée', category: 'spa' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.47 (4).jpeg', alt: 'Ambiance spa', category: 'spa' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.41.jpeg', alt: 'Espace bien-être', category: 'spa' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.45.jpeg', alt: 'Terrasse', category: 'exterieur' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.46.jpeg', alt: 'Cuisine', category: 'exterieur' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.46 (1).jpeg', alt: 'Salle de bain', category: 'exterieur' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.51.jpeg', alt: 'Décoration', category: 'details' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.53.jpeg', alt: 'Ambiance bohème', category: 'details' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (3).jpeg', alt: 'Salle de bain luxe', category: 'details' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (4).jpeg', alt: 'Équipements spa', category: 'details' },
  { src: '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (5).jpeg', alt: 'Vue principale', category: 'details' },
];

const categories = [
  { id: 'all', label: 'Tout' },
  { id: 'espace', label: 'L\'espace' },
  { id: 'chambre', label: 'Chambre' },
  { id: 'spa', label: 'Espace Spa' },
  { id: 'exterieur', label: 'Extérieur' },
  { id: 'details', label: 'Détails' },
];

export default function Galerie() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(p => p.category === selectedCategory);

  return (
    <main className="pt-20">
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Galerie</span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-text mt-3 mb-4">
            Nos Photos
          </h1>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-6" />
          <p className="text-muted max-w-xl mx-auto">
            Découvrez chaque recoin de votre futur cocon romantique
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-muted hover:bg-primary/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo, index) => (
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
                <div className="absolute inset-0 bg-text/0 group-hover:bg-text/40 transition-all duration-200 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

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
              src={filteredPhotos[selectedIndex].src}
              alt={filteredPhotos[selectedIndex].alt}
              fill
              className="object-contain rounded-2xl"
            />
          </div>
          {selectedIndex < filteredPhotos.length - 1 && (
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
            {selectedIndex + 1} / {filteredPhotos.length}
          </p>
        </div>
      )}
    </main>
    <Footer />
  );
}