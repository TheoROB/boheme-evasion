import Image from 'next/image';

const aboutImage = '/photos/WhatsApp Image 2026-04-30 at 16.23.56 (5).jpeg';

export default function About() {
  return (
    <section id="apropos" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
              <Image
                src={aboutImage}
                alt="Bohème Évasion - Vue d'ensemble"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-cta text-white p-6 rounded-2xl shadow-soft hidden md:block">
              <p className="font-serif text-3xl font-bold">100%</p>
              <p className="text-sm text-white/80">Privatif</p>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">À propos</span>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text mt-3 mb-4">
                Un lieu pensé pour se retrouver
              </h2>
              <div className="w-16 h-px bg-primary/40 mb-8" />
            </div>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Le logement est un <strong className="text-text">cocon privatif</strong> entièrement dédié à la détente et au bien-être. Il se compose d'un espace principal avec un lit king size, un coin salon, et un accès direct à l'espace spa.
              </p>
              <p>
                Vous profitez d'un <strong className="text-text">espace bien-être privatif</strong> avec sauna et baignoire balnéo (64 jets hydro massants) conçu pour un moment de relaxation à deux.
              </p>
              <p>
                Le logement dispose également d'une <strong className="text-text">cuisine entièrement équipée</strong>, d'un espace repas, d'une salle de bain avec double douche, ainsi que d'une terrasse pour profiter de l'extérieur.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-primary/10">
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">20 min</p>
                <p className="text-sm text-muted">de Lille</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">64</p>
                <p className="text-sm text-muted">jets balnéo</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">2</p>
                <p className="text-sm text-muted">personnes max</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}