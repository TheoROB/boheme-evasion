'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/experience', label: 'L\'Expérience' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/bons-cadeaux', label: 'Bons cadeaux' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-text/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-serif text-2xl font-semibold text-white">
            Bohème <span className="text-secondary italic">Évasion</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/reservation" className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all">
              Réserver
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 cursor-pointer"
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

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-2 space-y-1 bg-text/95">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium text-white/70 hover:text-secondary transition-colors border-b border-white/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservation"
            onClick={() => setIsOpen(false)}
            className="block py-3 mt-2 text-center bg-primary text-white rounded-lg font-medium"
          >
            Réserver
          </Link>
        </div>
      </div>
    </nav>
  );
}