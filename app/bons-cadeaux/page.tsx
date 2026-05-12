'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const montants = [50, 100, 150, 200, 250, 300];

const options = [
  { id: 'bougies', label: 'Mise en ambiance (bougies, pétales)', price: 25 },
  { id: 'petit-dejeuner', label: 'Petit-déjeuner gourmet', price: 35 },
  { id: 'panier', label: 'Panier gourmand', price: 45 },
  { id: 'champagne', label: 'Sélection champagne', price: 55 },
  { id: 'massage', label: 'Massage deux personnes (1h)', price: 120 },
];

export default function BonsCadeaux() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalOptions = options
    .filter(o => selectedOptions.includes(o.id))
    .reduce((sum, o) => sum + o.price, 0);

  const total = selectedAmount ? selectedAmount + totalOptions : parseInt(customAmount) || 0;

  const toggleOption = (id: string) => {
    setSelectedOptions(prev =>
      prev.includes(id) ? prev.filter(o => o !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl font-semibold text-text mb-4">Bon cadeau envoyé !</h2>
          <p className="text-muted mb-8">
            Un email de confirmation vient de vous être envoyé. Le bon cadeau sera automatiquement envoyé au destinataire par email.
          </p>
          <Link href="/" className="btn-primary">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Bons cadeaux</span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-text mt-3 mb-4">
            Offrez l'évasion
          </h1>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-6" />
          <p className="text-muted max-w-xl mx-auto">
            Un cadeau original et inoubliable : une escapade romantique avec accès spa privatif
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-card p-8 md:p-12">
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-text mb-6">1. Choisissez le montant</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                {montants.map(montant => (
                  <button
                    key={montant}
                    type="button"
                    onClick={() => { setSelectedAmount(montant); setCustomAmount(''); }}
                    className={`py-4 rounded-xl font-semibold transition-all cursor-pointer ${
                      selectedAmount === montant
                        ? 'bg-primary text-white'
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                  >
                    {montant}€
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">Montant personnalisé :</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                  placeholder="Autre montant"
                  className="w-full pl-44 pr-4 py-4 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted">€</span>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-text mb-6">2. Ajoutez des options (optionnel)</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {options.map(opt => (
                  <label key={opt.id} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedOptions.includes(opt.id) ? 'border-primary bg-primary/5' : 'border-primary/10 hover:border-primary/30'}`}>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" checked={selectedOptions.includes(opt.id)} onChange={() => toggleOption(opt.id)} className="sr-only" />
                      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${selectedOptions.includes(opt.id) ? 'border-primary bg-primary' : 'border-primary/30'}`}>
                        {selectedOptions.includes(opt.id) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <span className={selectedOptions.includes(opt.id) ? 'text-text' : 'text-muted'}>{opt.label}</span>
                    </div>
                    <span className="font-semibold text-text">+{opt.price}€</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-text mb-6">3. Vos coordonnées</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Prénom</label>
                  <input type="text" required value={formData.prenom} onChange={e => setFormData({ ...formData, prenom: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Marie" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Nom</label>
                  <input type="text" required value={formData.nom} onChange={e => setFormData({ ...formData, nom: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Dupont" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-text mb-2">Email</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="marie@email.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-text mb-2">Message personnalisé (optionnel)</label>
                  <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={3} className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Un petit mot pour accompagner le cadeau..." />
                </div>
              </div>
            </div>

            <div className="border-t border-primary/10 pt-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-muted text-sm">Total</span>
                  <p className="font-serif text-3xl font-semibold text-text">{total}€</p>
                </div>
                <button type="submit" className="btn-primary text-lg px-10 py-4">
                  Acheter le bon cadeau
                </button>
              </div>
              <p className="text-muted text-xs text-center">
                Le bon cadeau sera envoyé automatiquement par email au destinataire. Paiement sécurisé par carte bancaire.
              </p>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}