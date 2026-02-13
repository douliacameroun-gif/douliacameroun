
import React, { useState } from 'react';
import { Language } from '../types';

const ContactView: React.FC<{ lang: Language }> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);

  const texts = {
    title: lang === 'FR' ? "DEMANDE STRATÉGIQUE" : "STRATEGIC INQUIRY",
    sub: lang === 'FR' ? "Initialisez votre transformation IA" : "Initialize your AI transformation",
    labels: {
      name: lang === 'FR' ? "Nom & Prénom" : "Full Name",
      email: lang === 'FR' ? "Adresse E-mail" : "Email Address",
      role: lang === 'FR' ? "Votre rôle dans l'entreprise" : "Your role in the company",
      company: lang === 'FR' ? "Nom de l'entreprise" : "Company Name",
      website: lang === 'FR' ? "Site web (URL)" : "Company Website",
      size: lang === 'FR' ? "Taille de l'entreprise" : "Company Size",
      revenue: lang === 'FR' ? "Chiffre d'affaires annuel" : "Annual Revenue",
      budget: lang === 'FR' ? "Budget estimé du projet" : "Estimated Project Budget",
      service: lang === 'FR' ? "Service d'intérêt" : "Service of Interest",
      message: lang === 'FR' ? "Décrivez vos besoins IA" : "Describe your AI needs",
      send: lang === 'FR' ? "Transmettre le dossier" : "Submit Case",
      success: lang === 'FR' ? "Demande transmise avec succès." : "Request submitted successfully."
    },
    placeholders: {
      role: lang === 'FR' ? "Saisissez votre rôle" : "Enter your role",
      company: lang === 'FR' ? "Saisissez le nom" : "Enter name",
      website: lang === 'FR' ? "https://..." : "https://...",
      message: lang === 'FR' ? "Quels sont vos objectifs ?" : "What are your goals?"
    }
  };

  const options = {
    sizes: ["1-10", "11-50", "51-200", "201+"],
    revenues: ["< 50M FCFA", "50M - 250M FCFA", "250M - 1B FCFA", "> 1B FCFA"],
    budgets: ["< 1M FCFA", "1M - 5M FCFA", "5M - 15M FCFA", "> 15M FCFA"],
    services: [
      lang === 'FR' ? "Audit Stratégique" : "Strategic Audit",
      lang === 'FR' ? "Doulia Connect (WhatsApp)" : "Doulia Connect (WhatsApp)",
      lang === 'FR' ? "Doulia Process (Automatisation)" : "Doulia Process (Automation)",
      lang === 'FR' ? "Développement IA Sur Mesure" : "Custom AI Development",
      lang === 'FR' ? "Formation d'Équipes" : "Team Training"
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.dispatchEvent(new CustomEvent('open-chatbot', { 
      detail: { initialMessage: "J'ai envoyé mon formulaire de contact stratégique. Pouvez-vous confirmer la réception ?" } 
    }));
  };

  return (
    <div className="relative min-h-screen pt-40 pb-32 px-6 flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 bg-data-flow opacity-10 pointer-events-none"></div>
      
      <div className="max-w-3xl w-full relative z-10">
        <div className="text-center mb-12 animate-fade-in relative">
          <h2 className="text-4xl md:text-6xl font-tech font-bold text-white tracking-tighter uppercase gradient-text leading-none mb-4">
            {texts.title}
          </h2>
          <p className="text-white/40 font-tech uppercase tracking-[0.3em] text-[9px]">{texts.sub}</p>
        </div>

        {submitted ? (
          <div className="glass-card p-12 rounded-[40px] border-lime/30 text-center animate-pulse-slow">
            <div className="text-6xl mb-6">✅</div>
            <h3 className="text-2xl font-tech font-bold text-lime uppercase mb-4">{texts.labels.success}</h3>
            <p className="text-white/50 font-sans">Douly analyse votre dossier. Vous recevrez une réponse sous 24h.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 glass-card p-6 md:p-10 rounded-[35px] border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-lime/5 blur-3xl"></div>
            
            <div className="space-y-5">
              <div className="group">
                <label className="block text-[9px] font-tech font-bold text-white/40 uppercase tracking-widest mb-1.5 group-focus-within:text-lime transition-colors">
                  {texts.labels.name} <span className="text-lime">*</span>
                </label>
                <input required type="text" className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime/50 focus:ring-1 focus:ring-lime/30 outline-none transition-all font-sans text-sm" placeholder="Nom Complet" />
              </div>
              
              <div className="group">
                <label className="block text-[9px] font-tech font-bold text-white/40 uppercase tracking-widest mb-1.5 group-focus-within:text-lime transition-colors">
                  {texts.labels.email} <span className="text-lime">*</span>
                </label>
                <input required type="email" className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime/50 focus:ring-1 focus:ring-lime/30 outline-none transition-all font-sans text-sm" placeholder="contact@entreprise.com" />
              </div>

              <div className="group">
                <label className="block text-[9px] font-tech font-bold text-white/40 uppercase tracking-widest mb-1.5 group-focus-within:text-lime transition-colors">
                  {texts.labels.role} <span className="text-lime">*</span>
                </label>
                <input required type="text" className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime/50 focus:ring-1 focus:ring-lime/30 outline-none transition-all font-sans text-sm" placeholder={texts.placeholders.role} />
              </div>

              <div className="group">
                <label className="block text-[9px] font-tech font-bold text-white/40 uppercase tracking-widest mb-1.5 group-focus-within:text-lime transition-colors">
                  {texts.labels.company} <span className="text-lime">*</span>
                </label>
                <input required type="text" className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime/50 focus:ring-1 focus:ring-lime/30 outline-none transition-all font-sans text-sm" placeholder={texts.placeholders.company} />
              </div>

              <div className="group">
                <label className="block text-[9px] font-tech font-bold text-white/40 uppercase tracking-widest mb-1.5 group-focus-within:text-lime transition-colors">
                  {texts.labels.website}
                </label>
                <input type="url" className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime/50 focus:ring-1 focus:ring-lime/30 outline-none transition-all font-sans text-sm" placeholder={texts.placeholders.website} />
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-[9px] font-tech font-bold text-white/40 uppercase tracking-widest mb-1.5">
                    {texts.labels.size}
                  </label>
                  <select className="w-full bg-navy/50 border border-white/10 rounded-xl px-3 py-3 text-white focus:border-lime/50 outline-none font-sans text-sm appearance-none">
                    {options.sizes.map(s => <option key={s} className="bg-navy">{s}</option>)}
                  </select>
                </div>
                <div className="group">
                  <label className="block text-[9px] font-tech font-bold text-white/40 uppercase tracking-widest mb-1.5">
                    {texts.labels.revenue}
                  </label>
                  <select className="w-full bg-navy/50 border border-white/10 rounded-xl px-3 py-3 text-white focus:border-lime/50 outline-none font-sans text-sm appearance-none">
                    {options.revenues.map(r => <option key={r} className="bg-navy">{r}</option>)}
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="block text-[9px] font-tech font-bold text-white/40 uppercase tracking-widest mb-1.5">
                  {texts.labels.budget}
                </label>
                <select className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime/50 outline-none font-sans text-sm appearance-none">
                  {options.budgets.map(b => <option key={b} className="bg-navy">{b}</option>)}
                </select>
              </div>

              <div className="group">
                <label className="block text-[9px] font-tech font-bold text-white/40 uppercase tracking-widest mb-1.5">
                  {texts.labels.service}
                </label>
                <select className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime/50 outline-none font-sans text-sm appearance-none">
                  {options.services.map(s => <option key={s} className="bg-navy">{s}</option>)}
                </select>
              </div>

              <div className="group">
                <label className="block text-[9px] font-tech font-bold text-white/40 uppercase tracking-widest mb-1.5">
                  {texts.labels.message}
                </label>
                <textarea rows={3} className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime/50 focus:ring-1 focus:ring-lime/30 outline-none transition-all font-sans text-sm resize-none" placeholder={texts.placeholders.message}></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-lime text-navy font-tech font-bold uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_40px_rgba(137,201,41,0.4)] transition-all active:scale-95 group relative overflow-hidden text-[10px]">
                <span className="relative z-10">{texts.labels.send}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </div>
          </form>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <p className="text-lime font-tech font-bold text-[9px] uppercase tracking-widest mb-1">Email</p>
            <a href="mailto:contact@douliacameroun.com" className="text-white/60 hover:text-white transition-colors text-xs">contact@douliacameroun.com</a>
          </div>
          <div className="p-4">
            <p className="text-lime font-tech font-bold text-[9px] uppercase tracking-widest mb-1">WhatsApp / Hotline</p>
            <div className="flex flex-col gap-1">
              <a href="https://wa.me/237688954053" target="_blank" className="text-white/60 hover:text-white transition-colors text-xs">(+237) 6 88 95 40 53</a>
              <a href="tel:237673043127" className="text-white hover:text-lime transition-colors text-xs font-bold">(+237) 6 73 04 31 27</a>
            </div>
          </div>
          <div className="p-4">
            <p className="text-lime font-tech font-bold text-[9px] uppercase tracking-widest mb-1">Location</p>
            <p className="text-white/60 text-xs">Douala, Cameroun</p>
          </div>
          <div className="p-4">
            <p className="text-lime font-tech font-bold text-[9px] uppercase tracking-widest mb-1">Social</p>
            <div className="flex justify-center gap-4 mt-1">
              <a href="https://www.facebook.com/profile.php?id=61583620293750" target="_blank" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/doulia/" target="_blank" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
