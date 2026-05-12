'use client';

import { useState } from 'react';

const services = [
  { id: 'sauna', label: 'Sauna privatif', price: 0, included: true },
  { id: 'balneo', label: 'Baignoire balnéo (64 jets)', price: 0, included: true },
  { id: 'petit-dejeuner', label: 'Petit-déjeuner gourmet', price: 35 },
  { id: 'panier-gourmand', label: 'Panier gourmand', price: 45 },
  { id: 'bougies', label: 'Mise en ambiance (bougies, pétales)', price: 25 },
  { id: 'huiles-essentielles', label: 'Kit huiles essentielles spa', price: 15 },
  { id: 'vin', label: 'Sélection vin & champagne', price: 35 },
  { id: 'fleurs', label: 'Composition florale', price: 40 },
  { id: 'massage', label: 'Massage deux personnes (1h)', price: 120 },
];

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
    services: [] as string[],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter(s => s !== id)
        : [...prev.services, id],
    }));
  };

  const calculateTotal = () => {
    return services
      .filter(s => !s.included && formData.services.includes(s.id))
      .reduce((sum, s) => sum + s.price, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl font-semibold text-text mb-4">Demande envoyée !</h2>
          <p className="text-muted mb-8">
            Merci pour votre demande de réservation. Nous vous recontacterons sous 24h pour confirmer votre séjour et discuter de vos envies.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-secondary"
          >
            Nouvelle demande
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Personnalisez</span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-text mt-3 mb-4">
            Votre Séjour sur Mesure
          </h1>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-6" />
          <p className="text-muted max-w-xl mx-auto">
            Créez l'escapade romantique parfaite en ajoutant des services optionnels à votre séjour
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="font-serif text-xl font-semibold text-text mb-6">Informations</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Marie Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="marie@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Téléphone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-text mb-6">Dates & Nombre de personnes</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Date souhaitée</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Heure d'arrivée</label>
                  <select
                    value={formData.time}
                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="">Sélectionner</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Nombre de personnes</label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="2">2 personnes</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-xl font-semibold text-text mb-6">Services optionnels</h2>
            <p className="text-muted text-sm mb-6">Sélectionnez les services que vous souhaitez ajouter à votre séjour</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map(service => (
                <label
                  key={service.id}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.services.includes(service.id)
                      ? 'border-primary bg-primary/5'
                      : 'border-primary/10 hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service.id)}
                      onChange={() => toggleService(service.id)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                      formData.services.includes(service.id)
                        ? 'border-primary bg-primary'
                        : 'border-primary/30'
                    }`}>
                      {formData.services.includes(service.id) && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`${formData.services.includes(service.id) ? 'text-text' : 'text-muted'}`}>
                      {service.label}
                    </span>
                    {service.included && (
                      <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">Inclus</span>
                    )}
                  </div>
                  <span className="font-semibold text-text">
                    {service.included ? 'Offert' : `+${service.price}€`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-text mb-2">Message / Demandes spéciales</label>
            <textarea
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              placeholder="Précisez vos souhaits particuliers..."
            />
          </div>

          <div className="border-t border-primary/10 pt-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-muted text-sm">Services optionnels</span>
                <p className="font-serif text-2xl font-semibold text-text">
                  +{calculateTotal()}€
                </p>
              </div>
              <button
                type="submit"
                className="btn-primary text-lg px-10 py-4"
              >
                Envoyer ma demande
              </button>
            </div>
            <p className="text-muted text-xs text-center">
              Nous vous recontacterons pour confirmer la disponibilité et vous envoyer un lien de paiement sécurisé.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}