import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NeuralBackground from './components/NeuralBackground';
import Stats from './components/Stats';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import Engagement from './components/Engagement';
import Packs from './components/Packs';
import VisionView from './components/VisionView';
import ServicesView from './components/ServicesView';
import ContactView from './components/ContactView';
import { Language, ViewType } from './types';

function App() {
  const [lang, setLang] = useState<Language>('FR');
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Synchronisation des vues
  useEffect(() => {
    const handleNavPacks = () => setCurrentView('packs');
    window.addEventListener('nav-packs', handleNavPacks);
    return () => window.removeEventListener('nav-packs', handleNavPacks);
  }, []);

  // Gestion des transitions de page
  useEffect(() => {
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentView]);

  const renderProcessSection = () => {
    const texts = {
      badge: lang === 'FR' ? "Workflow Opérationnel" : "Operational Workflow",
      title: lang === 'FR' ? "NOTRE PROCÉDÉ D'ÉLITE" : "OUR ELITE PROCESS",
      sub: lang === 'FR' ? "L'architecture stratégique de votre souveraineté technologique" : "The strategic architecture of your technological sovereignty",
      steps: [
        {
          num: "01",
          title: lang === 'FR' ? "SYNERGIE DIGITALE" : "DIGITAL SYNERGY",
          desc: lang === 'FR' 
            ? "L'impulsion initiale. Fusionnez vos ambitions avec l'intelligence de Douly. Nous isolons les variables critiques pour sculpter les fondations de votre futur IA."
            : "The initial impulse. Merge your ambitions with Douly's intelligence. We isolate critical variables to sculpt the foundations of your AI future.",
          icon: "🤝",
          glow: "rgba(137, 201, 41, 0.4)"
        },
        {
          num: "02",
          title: lang === 'FR' ? "ARCHITECTURE DE VALEUR" : "VALUE ARCHITECTURE",
          desc: lang === 'FR'
            ? "L'ingénierie du conseil. Nos architectes identifient vos leviers de croissance pour convertir chaque donnée en un actif stratégique de haute performance."
            : "Consulting engineering. Our architects identify your growth levers to convert every data point into a high-performance strategic asset.",
          icon: "🎯",
          glow: "rgba(137, 201, 41, 0.5)"
        },
        {
          num: "03",
          title: lang === 'FR' ? "INGÉNIERIE NATIVE" : "NATIVE ENGINEERING",
          desc: lang === 'FR'
            ? "Forge technologique. Développement et intégration de systèmes autonomes qui s'imbriquent avec précision dans votre écosystème opérationnel."
            : "Technological forge. Development and integration of autonomous systems that precisely interlock with your operational ecosystem.",
          icon: "⚙️",
          glow: "rgba(137, 201, 41, 0.6)"
        },
        {
          num: "04",
          title: lang === 'FR' ? "ÉVEIL STRATÉGIQUE" : "STRATEGIC AWAKENING",
          desc: lang === 'FR'
            ? "Transfert de puissance. Nous injectons l'expertise IA dans vos équipes pour une maîtrise totale et une autonomie décisionnelle sans précédent."
            : "Power transfer. We inject AI expertise into your teams for total mastery and unprecedented decisional autonomy.",
          icon: "🎓",
          glow: "rgba(137, 201, 41, 0.5)"
        },
        {
          num: "05",
          title: lang === 'FR' ? "SUPRÉMATIE IA" : "AI SUPREMACY",
          desc: lang === 'FR'
            ? "Leadership global. Propulsé par des solutions sur-mesure, votre entreprise dicte désormais les règles de son industrie."
            : "Global leadership. Powered by custom solutions, your company now dictates the rules of its industry.",
          icon: "👑",
          glow: "rgba(137, 201, 41, 0.7)"
        }
      ]
    };

    return (
      <section className="py-40 px-6 relative overflow-hidden bg-black/20">
        <div className="absolute inset-0 bg-data-flow opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          <div className="text-center mb-32 animate-fade-in w-full flex flex-col items-center">
            <div className="relative mb-8">
              <div className="absolute -inset-2 bg-lime/20 blur-xl animate-pulse rounded-full"></div>
              <div className="relative px-6 py-2 bg-navy/80 text-lime rounded-full text-[10px] font-tech font-bold tracking-[0.4em] uppercase border border-lime/40 shadow-[0_0_20px_rgba(137,201,41,0.2)]">
                {texts.badge}
              </div>
            </div>
            <h2 className="text-5xl md:text-8xl font-tech font-bold text-white tracking-tighter uppercase gradient-text leading-none mb-8 text-center">
              {texts.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-lime to-transparent mb-8"></div>
            <p className="text-white/30 font-tech uppercase tracking-[0.3em] text-[11px] max-w-2xl mx-auto">{texts.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative w-full">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-lime/10 to-transparent hidden md:block">
              <div className="absolute inset-0 animate-data-stream bg-gradient-to-r from-transparent via-lime/40 to-transparent w-1/4"></div>
            </div>
            {texts.steps.map((step, idx) => (
              <div key={idx} className="group relative animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="relative glass-card p-8 rounded-[40px] border-white/5 group-hover:border-lime/50 transition-all duration-700 h-full flex flex-col items-center text-center overflow-hidden transform group-hover:-translate-y-4 group-hover:shadow-[0_20px_60px_rgba(137,201,41,0.15)]">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-lime/20 -translate-y-full group-hover:animate-scan"></div>
                  </div>
                  <div className="absolute -top-6 -right-6 text-9xl font-tech font-black text-white/[0.02] group-hover:text-lime/[0.04] transition-colors pointer-events-none select-none">
                    {step.num}
                  </div>
                  <div className="relative mb-10">
                    <div className="absolute inset-0 blur-2xl group-hover:animate-pulse" style={{ backgroundColor: step.glow }}></div>
                    <div className="relative w-20 h-20 bg-navy/80 rounded-3xl border border-white/10 flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 group-hover:border-lime transition-all duration-500 ring-1 ring-white/5">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-tech font-bold text-white mb-6 uppercase tracking-widest group-hover:text-lime transition-colors leading-tight min-h-[2.5em] flex items-center">
                    {step.title}
                  </h3>
                  <p className="text-[12px] text-white/40 font-sans leading-relaxed group-hover:text-white/80 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderAuditPage = () => {
    return (
      <div className="pt-40 pb-32 px-6 max-w-6xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-data-flow opacity-10 pointer-events-none"></div>
        <div className="text-center mb-24 relative z-10 flex flex-col items-center">
           <h2 className="text-4xl md:text-7xl font-tech font-bold text-white tracking-tighter uppercase gradient-text leading-tight mb-8">
            {lang === 'FR' ? "Audit Stratégique Gratuit" : "Free Strategic Audit"}
          </h2>
          <button 
              onClick={() => setCurrentView('contact')}
              className="px-12 py-5 bg-lime text-navy rounded-2xl font-tech font-bold uppercase tracking-widest hover:shadow-[0_0_60px_rgba(137,201,41,0.5)] transition-all"
            >
              Réserver mon audit
            </button>
        </div>
      </div>
    );
  };

  const renderHome = () => {
    return (
      <div className="animate-fade-in pb-32">
        <Hero lang={lang} />
        <Stats lang={lang} />
        {renderProcessSection()}
        <Packs lang={lang} />
        <Engagement lang={lang} />
      </div>
    );
  };

  return (
    <div className={`relative min-h-screen selection:bg-lime selection:text-navy bg-darkNavy overflow-hidden flex flex-col ${isTransitioning ? 'pointer-events-none' : ''}`}>
      <NeuralBackground />
      <Navbar lang={lang} setLang={setLang} currentView={currentView} setView={setCurrentView} />
      
      <main className={`relative z-10 flex-1 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
        {currentView === 'home' && renderHome()}
        {currentView === 'engagement' && <div className="pt-32"><Engagement lang={lang} /></div>}
        {currentView === 'audit' && renderAuditPage()}
        {currentView === 'vision' && <VisionView lang={lang} />}
        {currentView === 'packs' && <div className="pt-20"><Packs lang={lang} /></div>}
        {currentView === 'services' && <ServicesView lang={lang} />}
        {currentView === 'contact' && <ContactView lang={lang} />}
      </main>

      <Footer lang={lang} />
      
      {/* Douly est toujours prête à discuter */}
      <Chatbot lang={lang} />
    </div>
  );
}

export default App;