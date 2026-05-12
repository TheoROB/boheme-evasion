'use client';

import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/#decouvrir', label: 'Équipements' },
  { href: '/#galerie', label: 'Galerie' },
  { href: '/#apropos', label: 'À propos' },
  { href: '/reservation', label: 'Réserver', highlight: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-text/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="font-serif text-2xl font-semibold text-white">
            Bohème <span className="text-secondary italic">Évasion</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  link.highlight
                    ? 'bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary/90'
                    : 'text-white/70 hover:text-secondary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 cursor-pointer"
            aria-label="Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 space-y-2 bg-text/95">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-base font-medium transition-colors cursor-pointer border-b border-white/10 ${
                link.highlight
                  ? 'text-primary bg-white/5 rounded-lg px-4 mt-2 text-center'
                  : 'text-white/70 hover:text-secondary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}