import React, { useState, useEffect, useRef } from 'react';
import { Message, Language } from '../types';
import { getGeminiResponse } from '../geminiService';
import { GoogleGenAI, Modality } from "@google/genai";

// Helper functions for audio processing from Gemini TTS
function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const Chatbot: React.FC<{ lang: Language }> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const activeSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const DOULY_AVATAR = "https://i.postimg.cc/BQT208Q9/Generated_Image_November_15_2025_3_43PM-(1).png";
  const STORAGE_KEY = 'douly_memory_v4';

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = lang === 'EN' ? 'en-US' : 'fr-FR';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
        handleSend(transcript);
      };

      recognitionRef.current.onerror = () => setIsListening(false);
      recognitionRef.current.onend = () => setIsListening(false);
    }
  }, [lang]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) })));
      } catch (e) {
        console.error("Erreur de mémoire");
      }
    } else {
      setMessages([{
        id: '1',
        role: 'assistant',
        content: "Bonjour ! Je suis **Douly**. Je suis ravie de vous accueillir dans l'univers DOULIA. Comment puis-je vous aider à transformer votre vision aujourd'hui ?",
        timestamp: new Date()
      }]);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  const stopSpeaking = () => {
    activeSourcesRef.current.forEach(source => {
      try {
        source.stop();
      } catch (e) {
        // Source already stopped
      }
    });
    activeSourcesRef.current.clear();
  };

  const speak = async (text: string) => {
    if (!isOpen) return;

    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }

      // @ts-ignore
      const ai = new GoogleGenAI({ apiKey: (import.meta as any).env.VITE_API_KEY });
      
      const cleanText = text.replace(/\*\*/g, '').replace(/#+/g, '').replace(/(\d+)\./g, 'Option $1.');
      
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp", 
        contents: [{ parts: [{ text: cleanText }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' }, 
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio && audioContextRef.current) {
        const audioData = decodeBase64(base64Audio);
        const audioBuffer = await decodeAudioData(audioData, audioContextRef.current, 24000, 1);
        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContextRef.current.destination);
        
        activeSourcesRef.current.add(source);
        source.onended = () => {
          activeSourcesRef.current.delete(source);
        };
        
        source.start();
      }
    } catch (error) {
      console.error("TTS Error:", error);
    }
  };

  const handleSend = async (text?: string) => {
    const val = text || input;
    if (!val.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: val, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const history = messages.map(m => ({ role: m.role, content: m.content }));
    const aiResponse = await getGeminiResponse(val, history, lang);

    const assistantMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: aiResponse, timestamp: new Date() };
    setIsTyping(false);
    setMessages(prev => [...prev, assistantMsg]);
    speak(aiResponse);
  };

  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      stopSpeaking();
      setIsListening(true);
      recognitionRef.current?.start();
    }
  };

  const toggleChat = () => {
    if (isOpen) {
      stopSpeaking();
    }
    setIsOpen(prev => !prev);
  };

  const formatMessage = (content: string) => {
    if (content.toUpperCase().includes('DÉMARRER L\'ÉTUDE') || content.toUpperCase().includes('AUDIT GRATUIT')) {
      return (
        <div className="p-4 bg-lime/10 border-l-4 border-lime rounded-r-2xl my-3 shadow-[0_0_30px_rgba(137,201,41,0.15)] animate-pulse-slow">
          {renderText(content)}
        </div>
      );
    }
    return renderText(content);
  };

  const renderText = (text: string) => {
    return text.split('\n').map((line, idx) => {
      const listMatch = line.match(/^(\d+)\.\s(.*)/);
      if (listMatch) {
        return (
          <div key={idx} className="flex gap-3 items-center my-4 group">
            <span className="w-7 h-7 shrink-0 rounded-full bg-lime text-navy flex items-center justify-center font-tech font-bold text-[10px] shadow-[0_0_15px_#ccff00] group-hover:scale-110 transition-transform">
              {listMatch[1]}
            </span>
            <span className="text-white/90 font-medium text-[14px]">{parseBold(listMatch[2])}</span>
          </div>
        );
      }
      return <p key={idx} className="mb-3 last:mb-0 leading-[1.6] font-sans text-[14px] text-white/80">{parseBold(line)}</p>;
    });
  };

  const parseBold = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-lime font-tech font-bold tracking-tight">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  useEffect(() => {
    const handleOpen = (e: any) => {
      setIsOpen(true);
      if (e.detail?.initialMessage) setTimeout(() => handleSend(e.detail.initialMessage), 600);
    };
    window.addEventListener('open-chatbot', handleOpen);
    return () => window.removeEventListener('open-chatbot', handleOpen);
  }, [messages, lang]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div className="w-[92vw] md:w-[380px] max-h-[80vh] h-[600px] mb-4 bg-black border border-lime/40 rounded-[35px] flex flex-col shadow-[0_40px_150px_rgba(0,0,0,1)] overflow-hidden animate-in slide-in-from-bottom-5 pointer-events-auto ring-1 ring-lime/20 relative">
          
          <div className="p-5 bg-navy/95 backdrop-blur-3xl border-b border-lime/20 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl p-0.5 bg-gradient-to-br from-lime to-navy shadow-[0_0_20px_rgba(137,201,41,0.3)]">
                  <img src={DOULY_AVATAR} alt="Douly" className="w-full h-full rounded-2xl object-cover object-top" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-lime rounded-full border-2 border-black animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-tech text-xl text-white font-bold tracking-tighter leading-none mb-1">Douly</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-lime font-tech font-bold tracking-[0.3em] uppercase opacity-80">Service Clients</span>
                </div>
              </div>
            </div>
            <button onClick={toggleChat} className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 hover:bg-red-500/20 text-white/40 hover:text-red-500 transition-all border border-white/10 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-8 bg-darkNavy/40 scroll-smooth">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                <div className={`max-w-[90%] p-5 rounded-[25px] shadow-2xl border transition-all duration-300 ${
                  m.role === 'user' 
                    ? 'bg-white/10 text-white rounded-tr-none border-lime/30 backdrop-blur-md shadow-[0_0_20px_rgba(137,201,41,0.05)]' 
                    : 'bg-navy/80 text-white/95 rounded-tl-none border-white/10 backdrop-blur-3xl'
                }`}>
                  {formatMessage(m.content)}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-full flex gap-2 border border-white/10">
                  <div className="w-2 h-2 bg-lime rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-lime rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-lime rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-black border-t border-lime/20">
            <div className="relative flex items-center gap-3 bg-navy/60 border border-white/10 rounded-[25px] p-1.5 focus-within:ring-1 focus-within:ring-lime/40 transition-all">
              <button 
                onClick={toggleListen}
                className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-500 ${isListening ? 'bg-red-500 text-white animate-pulse shadow-[0_0_25px_#ef4444]' : 'bg-white/5 text-lime hover:bg-lime/10 border border-lime/20'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isListening ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H10a1 1 0 01-1-1v-4z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  )}
                </svg>
              </button>
              
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                placeholder={isListening ? "Écoute..." : "Écrire..."}
                className="flex-1 bg-transparent border-none outline-none text-white px-2 text-[14px] font-sans placeholder:text-white/20"
              />

              <button 
                onClick={() => handleSend()} 
                className="w-11 h-11 flex items-center justify-center bg-lime text-navy rounded-xl hover:scale-105 transition-all shadow-[0_0_25px_rgba(137,201,41,0.5)] active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={toggleChat} 
        className="w-20 h-20 bg-navy p-1 rounded-[25px] shadow-[0_0_60px_rgba(137,201,41,0.4)] flex items-center justify-center hover:scale-110 transition-all pointer-events-auto border-2 border-lime/40 group relative active:scale-95"
      >
        <div className="w-full h-full rounded-[20px] overflow-hidden relative">
          <img src={DOULY_AVATAR} alt="Douly" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
        </div>
        <div className="absolute -top-2 -right-2 bg-lime text-navy text-[9px] font-tech font-bold px-3 py-1 rounded-full shadow-2xl border-2 border-navy animate-bounce">
          {messages.length > 2 ? "OUVRIR" : "LIVE"}
        </div>
      </button>
    </div>
  );
};

export default Chatbot;