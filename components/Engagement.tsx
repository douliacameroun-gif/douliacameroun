
import React from 'react';
import { Language } from '../types';

const Engagement: React.FC<{ lang: Language }> = ({ lang }) => {
  const texts = {
    badge: lang === 'FR' ? "Pourquoi DOULIA ?" : "Why DOULIA?",
    title: lang === 'FR' ? "Votre partenaire IA de confiance" : "Your Trusted AI Partner",
    item1Title: lang === 'FR' ? "100% Local" : "100% Local",
    item1Desc: lang === 'FR' 
      ? "Basés à Douala, nous comprenons les réalités uniques de votre marché."
      : "Based in Douala, we understand the unique realities of your market.",
    item2Title: lang === 'FR' ? "La Touche DOULIA" : "The DOULIA Touch",
    item2Desc: lang === 'FR'
      ? "Créer une relation émotionnelle via l'IA. Notre devise : \"Tomber amoureux de son client\"."
      : "Creating an emotional bond through AI. Our motto: \"Fall in love with your client\".",
    item3Title: lang === 'FR' ? "Résultats Concrets" : "Concrete Results",
    item3Desc: lang === 'FR'
      ? "Pas de jargon technique complexe, juste du Retour sur Investissement (ROI)."
      : "No complex technical jargon, just Return on Investment (ROI).",
  };

  return (
    <section id="engagement" className="py-40 px-6 relative bg-white/[0.01] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-lime/10 text-lime rounded-lg text-[10px] font-tech font-bold mb-10 tracking-[0.4em] uppercase">{texts.badge}</div>
            <h2 className="text-5xl md:text-7xl font-tech font-bold text-white mb-10 leading-[0.9] tracking-tighter uppercase gradient-text">
              {texts.title}
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="text-3xl text-lime group-hover:scale-125 transition-transform">🇨🇲</div>
                <div>
                  <h4 className="text-white font-tech font-bold uppercase tracking-widest text-lg mb-2">{texts.item1Title}</h4>
                  <p className="text-white/40 font-light leading-relaxed">{texts.item1Desc}</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="text-3xl text-lime group-hover:scale-125 transition-transform">❤️</div>
                <div>
                  <h4 className="text-white font-tech font-bold uppercase tracking-widest text-lg mb-2">{texts.item2Title}</h4>
                  <p className="text-white/40 font-light leading-relaxed">{texts.item2Desc}</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="text-3xl text-lime group-hover:scale-125 transition-transform">📈</div>
                <div>
                  <h4 className="text-white font-tech font-bold uppercase tracking-widest text-lg mb-2">{texts.item3Title}</h4>
                  <p className="text-white/40 font-light leading-relaxed">{texts.item3Desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-lime/20 blur-[100px] opacity-20"></div>
            <div className="relative p-2 bg-white/5 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
              <img src="https://i.postimg.cc/tCMtf62T/Doulia_Magique.jpg" alt="Partnership" className="rounded-[35px] grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
