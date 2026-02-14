
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

  useEffect(() => {
    const handleNavPacks = () => setCurrentView('packs');
    window.addEventListener('nav-packs', handleNavPacks);
    return () => window.removeEventListener('nav-packs', handleNavPacks);
  }, []);

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
          {/* Header Section avec centrage parfait */}
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

          {/* Grid des étapes avec effets IA */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative w-full">
            {/* Connecteur de flux lumineux (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-lime/10 to-transparent hidden md:block">
              <div className="absolute inset-0 animate-data-stream bg-gradient-to-r from-transparent via-lime/40 to-transparent w-1/4"></div>
            </div>
            
            {texts.steps.map((step, idx) => (
              <div 
                key={idx} 
                className="group relative animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="relative glass-card p-8 rounded-[40px] border-white/5 group-hover:border-lime/50 transition-all duration-700 h-full flex flex-col items-center text-center overflow-hidden transform group-hover:-translate-y-4 group-hover:shadow-[0_20px_60px_rgba(137,201,41,0.15)]">
                  
                  {/* Effet de scan laser au survol */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-lime/20 -translate-y-full group-hover:animate-scan"></div>
                  </div>

                  {/* Numéro flottant en arrière-plan */}
                  <div className="absolute -top-6 -right-6 text-9xl font-tech font-black text-white/[0.02] group-hover:text-lime/[0.04] transition-colors pointer-events-none select-none">
                    {step.num}
                  </div>

                  {/* Icône avec halo dynamique */}
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

                  {/* Indicateur de phase Cyber */}
                  <div className="mt-8 flex gap-1 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-lime rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                    <span className="text-[8px] font-tech text-lime font-bold uppercase tracking-widest ml-2">Active Node</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderEngagementPage = () => {
    const texts = {
      philTitle: lang === 'FR' ? "Notre Philosophie" : "Our Philosophy",
      philDesc: lang === 'FR' 
        ? "Chez DOULIA, nous croyons que la technologie ne doit pas être froide. L'IA doit être un pont, pas une barrière. Chaque agent IA que nous créons est conçu pour comprendre et servir avec une efficacité qui touche le cœur de l'interaction humaine."
        : "At DOULIA, we believe that technology should not be cold. AI must be a bridge, not a barrier. Every AI agent we create is designed to understand and serve with efficiency that touches the heart of human interaction.",
      impactTitle: lang === 'FR' ? "Impact Local" : "Local Impact",
      impactDesc: lang === 'FR'
        ? "La souveraineté numérique du Cameroun passe par des solutions construites ici, pour les réalités d'ici. Nous formons les talents locaux pour que l'expertise reste au pays."
        : "Cameroon's digital sovereignty relies on solutions built here, for the realities here. We train local talent so that expertise remains in the country.",
    };

    return (
      <div className="pt-32 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Engagement lang={lang} />
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-10 rounded-[35px] border-white/10">
              <h3 className="text-2xl font-tech font-bold text-white mb-6 uppercase tracking-tight">{texts.philTitle}</h3>
              <p className="text-white/50 text-base leading-relaxed font-light font-sans mb-8">
                {texts.philDesc}
              </p>
              <div className="h-1 w-16 bg-lime rounded-full"></div>
            </div>
            <div className="glass-card p-10 rounded-[35px] border-white/10">
              <h3 className="text-2xl font-tech font-bold text-white mb-6 uppercase tracking-tight">{texts.impactTitle}</h3>
              <p className="text-white/50 text-base leading-relaxed font-light font-sans">
                {texts.impactDesc}
              </p>
              <div className="mt-10 flex gap-4">
                <span className="text-3xl">🇨🇲</span>
                <span className="text-3xl">🤖</span>
                <span className="text-3xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAuditPage = () => {
    const texts = {
      badge: lang === 'FR' ? "Phase de Diagnostic" : "Diagnostic Phase",
      title: lang === 'FR' ? "Audit Stratégique Gratuit" : "Free Strategic Audit",
      sub: lang === 'FR' 
        ? "Analyse profonde de vos flux pour identifier vos leviers de croissance immédiate."
        : "Deep analysis of your flows to identify immediate growth levers.",
      feat1Title: lang === 'FR' ? "Analyse des Flux" : "Flow Analysis",
      feat1Desc: lang === 'FR' ? "Identification précise des goulots d'étranglement." : "Precise identification of bottlenecks.",
      feat2Title: lang === 'FR' ? "Évaluation Data" : "Data Evaluation",
      feat2Desc: lang === 'FR' ? "Audit de la structure et de la qualité de vos données." : "Audit of your data structure and quality.",
      feat3Title: lang === 'FR' ? "Simulation ROI" : "ROI Simulation",
      feat3Desc: lang === 'FR' ? "Calcul des gains de productivité et financiers." : "Calculation of productivity and financial gains.",
      btn: lang === 'FR' ? "Réserver mon audit maintenant" : "Book my audit now",
      sidebarTitle: lang === 'FR' ? "Pourquoi un audit ?" : "Why an audit?",
      sidebarList1: lang === 'FR' ? "Prenez des décisions basées sur des métriques réelles." : "Make decisions based on real metrics.",
      sidebarList2: lang === 'FR' ? "Découvrez des opportunités de revenus inexploitées." : "Discover untapped revenue opportunities.",
      quote: lang === 'FR' ? "\"L'audit DOULIA a été le catalyseur de notre accélération.\"" : "\"The DOULIA audit was the catalyst for our acceleration.\"",
      quoteAuthor: lang === 'FR' ? "— Dirigeant à Douala" : "— Executive in Douala",
    };

    return (
      <div className="pt-40 pb-32 px-6 max-w-6xl mx-auto relative overflow-hidden">
        {/* Grille de fond cybernétique spécifique à l'audit */}
        <div className="absolute inset-0 bg-data-flow opacity-10 pointer-events-none"></div>
        
        <div className="text-center mb-24 relative z-10 flex flex-col items-center">
          {/* Badge repositionné au-dessus en absolu pour ne pas affecter le centrage du titre */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-lime/10 text-lime rounded-lg text-[9px] font-tech font-bold tracking-[0.4em] uppercase border border-lime/30 animate-pulse shadow-[0_0_15px_rgba(137,201,41,0.2)]">
            {texts.badge}
          </div>
          
          <h2 className="text-4xl md:text-7xl font-tech font-bold text-white tracking-tighter uppercase gradient-text leading-tight mb-8">
            {texts.title}
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-lime to-transparent mb-8"></div>
          <p className="text-lg text-white/40 font-inter max-w-2xl mx-auto">{texts.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-10">
            {[
              { title: texts.feat1Title, desc: texts.feat1Desc, icon: "📡", color: "rgba(137, 201, 41, 0.4)" },
              { title: texts.feat2Title, desc: texts.feat2Desc, icon: "💾", color: "rgba(255, 255, 255, 0.1)" },
              { title: texts.feat3Title, desc: texts.feat3Desc, icon: "📊", color: "rgba(137, 201, 41, 0.4)" }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-16 h-16 shrink-0 bg-navy/80 rounded-2xl border border-white/10 flex items-center justify-center text-3xl group-hover:border-lime group-hover:shadow-[0_0_25px_rgba(137,201,41,0.3)] transition-all duration-500 relative overflow-hidden">
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: item.color }}></div>
                   <span className="relative z-10">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-xl font-tech font-bold text-white mb-2 uppercase tracking-tight group-hover:text-lime transition-colors">{item.title}</h4>
                  <p className="text-white/40 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            
            <button 
              onClick={() => setCurrentView('contact')}
              className="w-full md:w-auto px-12 py-5 bg-lime text-navy rounded-2xl font-tech font-bold text-base uppercase tracking-[0.2em] hover:shadow-[0_0_60px_rgba(137,201,41,0.5)] transition-all active:scale-95 group relative overflow-hidden"
            >
              <span className="relative z-10">{texts.btn}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>

          <div className="glass-card p-12 rounded-[50px] border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="space-y-8 relative z-10">
              <h4 className="text-sm font-tech text-lime font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                 <span className="w-8 h-px bg-lime/40"></span>
                 {texts.sidebarTitle}
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-5 items-start">
                  <div className="w-6 h-6 rounded-lg bg-lime/20 flex items-center justify-center shrink-0 text-lime text-[12px] shadow-lg">✓</div>
                  <p className="text-white/70 font-sans leading-relaxed text-base">{texts.sidebarList1}</p>
                </li>
                <li className="flex gap-5 items-start">
                  <div className="w-6 h-6 rounded-lg bg-lime/20 flex items-center justify-center shrink-0 text-lime text-[12px] shadow-lg">✓</div>
                  <p className="text-white/70 font-sans leading-relaxed text-base">{texts.sidebarList2}</p>
                </li>
              </ul>
              
              <div className="pt-8 border-t border-white/10 italic">
                <p className="text-white/40 font-sans mb-3 text-lg leading-relaxed">{texts.quote}</p>
                <p className="text-lime/60 font-tech text-[10px] uppercase tracking-widest font-bold">{texts.quoteAuthor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderHome = () => {
    const texts = {
      ready: lang === 'FR' ? "Prêt à propulser votre croissance ?" : "Ready to power your growth?",
      btn: lang === 'FR' ? "Lancer mon diagnostic IA" : "Launch my AI diagnosis",
      prompt: lang === 'FR' 
        ? "Bonjour ! Je suis prêt à lancer mon diagnostic IA pour mon entreprise."
        : "Hello! I am ready to launch my AI diagnosis for my business."
    };

    return (
      <div className="animate-fade-in pb-32">
        <Hero lang={lang} />
        <Stats lang={lang} />
        
        <section className="py-24 px-6 flex justify-center">
          <div className="max-w-2xl text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-tech font-bold uppercase tracking-tighter gradient-text">{texts.ready}</h2>
            <button 
               onClick={() => setCurrentView('contact')}
               className="px-12 py-6 bg-lime text-navy rounded-full font-tech font-bold text-lg uppercase tracking-widest hover:shadow-[0_0_50px_#89C929] transition-all"
            >
              {texts.btn}
            </button>
          </div>
        </section>

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
        {currentView === 'engagement' && renderEngagementPage()}
        {currentView === 'audit' && renderAuditPage()}
        {currentView === 'vision' && <VisionView lang={lang} />}
        {currentView === 'packs' && <div className="pt-20"><Packs lang={lang} /></div>}
        {currentView === 'services' && <ServicesView lang={lang} />}
        {currentView === 'contact' && <ContactView lang={lang} />}
      </main>

      <Footer lang={lang} />
      <Chatbot lang={lang} />
    </div>
  );
}

export default App;
