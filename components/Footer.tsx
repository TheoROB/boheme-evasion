export default function Footer() {
  return (
    <footer className="bg-text text-white/80 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-3xl font-semibold text-white mb-4">Bohème Évasion</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Cocon privatif romantique avec spa, sauna et baignoire balnéo à Armentières, à 20 minutes de Lille.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <nav className="space-y-3">
              <a href="#decouvrir" className="block text-sm text-white/60 hover:text-secondary transition-colors cursor-pointer">Équipements</a>
              <a href="#galerie" className="block text-sm text-white/60 hover:text-secondary transition-colors cursor-pointer">Galerie</a>
              <a href="#apropos" className="block text-sm text-white/60 hover:text-secondary transition-colors cursor-pointer">À propos</a>
              <a href="#infos" className="block text-sm text-white/60 hover:text-secondary transition-colors cursor-pointer">Infos pratiques</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Réservation</h4>
            <a
              href="/reservation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-white/60 hover:text-secondary transition-colors cursor-pointer group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Réserver maintenant
            </a>
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