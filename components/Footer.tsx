
import React from 'react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const DOULIA_LOGO = "https://i.postimg.cc/Y0nJdHW3/DOULIA_LOGO.jpg";

  const texts = {
    desc: lang === 'FR' 
      ? "Expert en IA au Cameroun. Accélération digitale et souveraineté technologique pour les PME. Développement d'IA natives basées à Douala."
      : "AI Expert in Cameroon. Digital acceleration and technological sovereignty for SMEs. Native AI development based in Douala.",
    bold: lang === 'FR' ? "Expert en IA au Cameroun." : "AI Expert in Cameroon.",
    hq: lang === 'FR' ? "Siège" : "Headquarters",
    location: lang === 'FR' ? "Akwa, Douala • Cameroun. Unité d'Innovation Stratégique IA" : "Akwa, Douala • Cameroon. Strategic AI Innovation Unit",
    legal: lang === 'FR' ? "Légal" : "Legal",
    data: lang === 'FR' ? "Données" : "Data",
    ethics: lang === 'FR' ? "Éthique" : "Ethics",
    copy: lang === 'FR' ? "Vive l'IA au Cameroun." : "Long live AI in Cameroon.",
  };

  return (
    <footer className="bg-navy/95 backdrop-blur-2xl py-12 md:py-20 border-t border-white/10 relative overflow-hidden h-auto text-[10px]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-12 lg:gap-16 mb-16 justify-between">
        <div className="max-w-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white rounded-lg p-0.5 shadow-xl flex items-center justify-center overflow-hidden">
              <img src={DOULIA_LOGO} alt="DOULIA" className="h-full w-full object-cover" />
            </div>
            <span className="font-tech text-lg font-bold tracking-tighter text-white uppercase">DOULIA</span>
          </div>
          <p className="text-white/70 font-sans leading-relaxed text-sm">
            <strong className="text-white">{texts.bold}</strong><br/>
            {texts.desc}
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/237688954053" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-lime hover:text-lime transition-all bg-white/5">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.05c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-tech text-white font-bold uppercase tracking-[0.3em] text-xs">Canaux</h4>
          <div className="space-y-3">
            <div>
              <p className="text-lime/60 text-[8px] uppercase font-bold tracking-[0.2em] mb-1">Web</p>
              <a href="#" className="text-white/80 font-tech hover:text-lime transition-colors text-sm">www.douliacameroun.com</a>
            </div>
            <div>
              <p className="text-lime/60 text-[8px] uppercase font-bold tracking-[0.2em] mb-1">Email</p>
              <a href="mailto:contact@douliacameroun.com" className="text-white/80 font-tech hover:text-lime transition-colors text-sm">contact@douliacameroun.com</a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-tech text-white font-bold uppercase tracking-[0.3em] text-xs">{texts.hq}</h4>
          <p className="text-white/70 font-tech leading-relaxed text-sm">
            {texts.location}
          </p>
          <div className="flex flex-col gap-2">
             <p className="text-lime font-tech tracking-tight text-sm">(+237) 6 88 95 40 53</p>
             <p className="text-white/50 font-tech tracking-tight text-sm">(+237) 6 56 30 48 18</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-10 flex flex-wrap justify-between items-center text-white/40 font-tech uppercase tracking-[0.3em] gap-6 text-[9px]">
        <p>© {new Date().getFullYear()} DOULIA. {texts.copy}</p>
        <div className="flex flex-wrap gap-6">
          <a href="#" className="hover:text-white transition-colors">{texts.legal}</a>
          <a href="#" className="hover:text-white transition-colors">{texts.data}</a>
          <a href="#" className="hover:text-white transition-colors">{texts.ethics}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
