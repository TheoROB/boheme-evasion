'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          <h2 className="font-serif text-3xl font-semibold text-text mb-4">Message envoyé !</h2>
          <p className="text-muted mb-8">
            Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="btn-secondary">
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Contact</span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-text mt-3 mb-4">
            Contactez-nous
          </h1>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-6" />
          <p className="text-muted max-w-xl mx-auto">
            Une question ? Un besoin particulier ? Nous sommes là pour vous aider
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-card p-8">
                <h2 className="font-serif text-2xl font-semibold text-text mb-6">Envoyez-nous un message</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Nom</label>
                      <input type="text" required value={formData.nom} onChange={e => setFormData({ ...formData, nom: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Votre nom" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Email</label>
                      <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="votre@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Téléphone</label>
                    <input type="tel" value={formData.telephone} onChange={e => setFormData({ ...formData, telephone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="06 12 34 56 78" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Sujet</label>
                    <select required value={formData.sujet} onChange={e => setFormData({ ...formData, sujet: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                      <option value="">Sélectionner un sujet</option>
                      <option value="reservation">Question sur une réservation</option>
                      <option value="disponibilites">Disponibilités</option>
                      <option value="tarifs">Informations tarifs</option>
                      <option value="services">Services supplémentaires</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Message</label>
                    <textarea required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Votre message..." />
                  </div>
                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-card p-8">
                <h2 className="font-serif text-2xl font-semibold text-text mb-6">Contact rapide</h2>
                <div className="space-y-4">
                  <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition-all cursor-pointer group">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm opacity-80">Contactez-nous directement</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-card overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40476.3278360365!2d2.877!3d50.683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQwJzU3LjIiTiAywrA1Mic0Ni4yIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Bohème Évasion"
                  className="w-full"
                />
              </div>

              <div className="bg-white rounded-3xl shadow-card p-8">
                <h2 className="font-serif text-2xl font-semibold text-text mb-6">Informations</h2>
                <div className="space-y-4 text-muted">
                  <p className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>Armentières, à 20 min de Lille</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Horaires : check-in à partir de 14h, check-out avant 12h</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>contact@boheme-evasion.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}