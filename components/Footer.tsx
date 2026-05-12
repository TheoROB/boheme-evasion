import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-text text-white/80 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-3xl font-semibold text-white mb-4">
              Bohème <span className="text-secondary italic">Évasion</span>
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              Cocon privatif romantique avec spa, sauna et baignoire balnéo à Armentières, à 20 minutes de Lille.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-sm text-white/60 hover:text-secondary transition-colors">Accueil</Link>
              <Link href="/experience" className="block text-sm text-white/60 hover:text-secondary transition-colors">L'Expérience</Link>
              <Link href="/galerie" className="block text-sm text-white/60 hover:text-secondary transition-colors">Galerie</Link>
              <Link href="/tarifs" className="block text-sm text-white/60 hover:text-secondary transition-colors">Tarifs</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <nav className="space-y-3">
              <Link href="/reservation" className="block text-sm text-white/60 hover:text-secondary transition-colors">Réservation</Link>
              <Link href="/bons-cadeaux" className="block text-sm text-white/60 hover:text-secondary transition-colors">Bons cadeaux</Link>
              <Link href="/contact" className="block text-sm text-white/60 hover:text-secondary transition-colors">Contact</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Légal</h4>
            <nav className="space-y-3">
              <Link href="/mentions-legales" className="block text-sm text-white/60 hover:text-secondary transition-colors">Mentions légales</Link>
              <Link href="/mentions-legales#politique-confidentialite" className="block text-sm text-white/60 hover:text-secondary transition-colors">Politique de confidentialité</Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Bohème Évasion. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}