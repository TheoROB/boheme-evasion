const infos = [
  {
    title: 'Accès des voyageurs',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    content: "Les voyageurs ont accès à l'ensemble du logement en toute autonomie grâce à un système d'entrée flexible. Vous profitez de l'intégralité de l'espace : logement, espace bien-être privatif, terrasse et équipements. Le logement est totalement privé, sans espaces partagés.",
  },
  {
    title: 'Règles de la maison',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    content: "Merci de respecter le logement afin de garantir une expérience agréable pour tous :\n\n• Logement non-fumeur\n• Capacité maximale de voyageurs à respecter\n• Utilisation de la baignoire balnéo et du sauna dans le respect des consignes fournies",
  },
  {
    title: 'Idéal pour',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    content: "Le logement est destiné à des séjours paisibles, principalement pour des couples en recherche de détente et de bien-être. Un lieu pensé pour se retrouver, se détendre et profiter d'un moment à deux.",
  },
];

export default function PracticalInfo() {
  return (
    <section id="infos" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Pratique</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text mt-3 mb-4">
            Informations Pratiques
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-6" />
          <p className="text-muted max-w-xl mx-auto">
            Tout ce qu'il faut savoir avant de réserver
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {infos.map((info, index) => (
            <div key={index} className="card">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 text-primary flex items-center justify-center mb-5">
                {info.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-text mb-3">{info.title}</h3>
              <p className="text-muted text-sm leading-relaxed whitespace-pre-line">{info.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted mb-6 font-serif text-lg italic">Prêt à vous évader ?</p>
          <a
            href="/reservation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-12 py-5"
          >
            <span>Réserver</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}