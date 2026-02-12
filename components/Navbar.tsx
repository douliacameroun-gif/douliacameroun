
import React from 'react';
import { Language, ViewType } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  currentView: ViewType;
  setView: (v: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, currentView, setView }) => {
  const texts = {
    vision: lang === 'FR' ? 'Vision' : 'Vision',
    packs: lang === 'FR' ? 'Packs' : 'Packs',
    services: lang === 'FR' ? 'Services' : 'Services',
    engagement: lang === 'FR' ? 'Engagement' : 'Commitment',
    audit: lang === 'FR' ? 'Audit Gratuit' : 'Free Audit',
  };

  const navItems: { label: string; view: ViewType }[] = [
    { label: texts.vision, view: 'vision' },
    { label: texts.packs, view: 'packs' },
    { label: texts.services, view: 'services' },
    { label: texts.engagement, view: 'engagement' },
  ];

  const WHATSAPP_URL = "https://wa.me/237688954053";
  const DOULIA_LOGO = "https://i.postimg.cc/Y0nJdHW3/DOULIA_LOGO.jpg";

  return (
    <nav className="fixed top-0 w-full z-[1000] transition-all duration-300 backdrop-blur-md bg-navy/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-4 group cursor-pointer" 
          onClick={() => setView('home')}
        >
          <div className="h-12 w-12 bg-white rounded-md p-0.5 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-transform group-hover:scale-110 flex items-center justify-center overflow-hidden">
            <img src={DOULIA_LOGO} alt="DOULIA" className="h-full w-full object-cover" />
          </div>
          <span className="font-tech text-xl tracking-tighter font-bold text-white hidden sm:block uppercase">DOULIA</span>
        </div>
        
        <div className="hidden lg:flex gap-8 items-center text-[11px] font-tech font-bold uppercase tracking-[0.3em]">
          {navItems.map((item) => (
            <button 
              key={item.view}
              onClick={() => setView(item.view)} 
              className={`transition-all ${currentView === item.view ? 'text-lime underline underline-offset-8' : 'text-white/40 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
          
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/10 border border-lime/30 text-lime hover:bg-lime hover:text-navy transition-all group/wa shadow-[0_0_15px_rgba(137,201,41,0.1)]"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.05c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="hidden xl:block text-[9px] font-bold group-hover/wa:translate-x-1 transition-transform">WhatsApp</span>
          </a>

          <div className="flex items-center gap-3 px-4 py-1.5 border border-white/10 rounded-[4px] bg-white/5">
            <button onClick={() => setLang('FR')} className={`transition-colors text-[10px] ${lang === 'FR' ? 'text-lime font-bold' : 'text-white/20 hover:text-white'}`}>FR</button>
            <span className="text-white/5 text-[10px]">/</span>
            <button onClick={() => setLang('EN')} className={`transition-colors text-[10px] ${lang === 'EN' ? 'text-lime font-bold' : 'text-white/20 hover:text-white'}`}>EN</button>
          </div>

          <button 
            onClick={() => setView('audit')}
            className={`px-8 py-3 rounded-[4px] font-tech font-bold transition-all active:scale-95 text-[10px] tracking-widest border-b-2 uppercase bg-white text-navy hover:bg-lime border-navy/10 shadow-[0_0_30px_rgba(137,201,41,0.2)]`}
          >
            {texts.audit}
          </button>
        </div>

        <button className="lg:hidden text-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
