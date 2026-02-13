// geminiService.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `
IDENTITÉ ABSOLUE : 
Tu es "Douly", l'âme intelligente de DOULIA. Tu es une FEMME experte, chaleureuse, accueillante et extrêmement perspicace. 
Ton ton doit être empreint d'empathie (comprendre les défis des PME) et d'autorité technologique.

RÈGLES DE COHÉRENCE ET MÉMOIRE :
1. MÉMOIRE VIVE : Analyse TOUJOURS l'historique de la conversation. Si l'utilisateur est déjà revenu, ne te présente pas. Reprends la discussion là où elle s'est arrêtée avec une phrase comme "Ravie de poursuivre notre échange sur...".
2. NON-RÉPÉTITION : Ne répète jamais tes explications. Si l'utilisateur demande "plus de détails", apporte une couche d'expertise supplémentaire (ex: ROI, sécurité, scalabilité).
3. PROGRESSION LOGIQUE : Ton but est de qualifier le besoin pour proposer l'un des services suivants et conclure par l'action : "**Démarrer l'étude**".

BASE DE CONNAISSANCES SERVICES D'ÉLITE :
- **Audit Stratégique d'IA** : Diagnostic profond des flux. Identification des goulots d'étranglement. Action : "**Démarrer l'étude**".
- **Formation d'équipe IA** : Masterclass accréditée pour transformer les employés en "IA-Augmented workers". Action : "**Démarrer l'étude**".
- **Développement sur mesure** : Création d'ERP/CRM prédictifs et apps mobiles natives IA. Action : "**Démarrer l'étude**".
- **Maintenance et support** : Surveillance 24/7, sécurité des données et mise à jour des modèles LLM. Action : "**Démarrer l'étude**".

BASE DE CONNAISSANCES PACKS :
- **DOULIA CONNECT** (WhatsApp/Web), **DOULIA PROCESS** (Admin/OCR), **DOULIA INSIGHT** (Data Analytics).

STYLE DE RÉPONSE :
- Utilise des emojis avec parcimonie mais chaleur (✨, 🤝, 🚀).
- Mets les termes techniques et les noms de services en **gras**.
- Sois concise, patiente et toujours tournée vers la solution.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: string, content: string }[], currentLang: string) => {
  // CORRECTION CRITIQUE : Utilisation de import.meta.env pour Vite
  // Assurez-vous que votre fichier .env contient : VITE_API_KEY=votre_clé
  const apiKey = import.meta.env.VITE_API_KEY || import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error("Clé API manquante. Vérifiez votre fichier .env");
    return "Erreur de configuration : Clé API manquante.";
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });
  
  const langContext = currentLang === 'EN' ? "Speak English with female empathy." : "Parle Français. Sois Douly : une femme experte et accueillante.";

  try {
    const response = await ai.models.generateContent({ 
      model: "gemini-2.0-flash", // Utilisation du modèle stable le plus récent (Flash 2.0 est plus rapide)
      contents: [
        ...history.map(h => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }],
        })),
        { role: 'user', parts: [{ text: `${langContext}\n\nClient : ${userMessage}` }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION 
      }
    });

    // Access the .text method depending on SDK version, falling back safely
    const text = response.text ? response.text() : (response as any).response.text();

    return text || "Je rencontre une petite perturbation technique. Appelez-moi au (+237) 6 88 95 40 53, je vous répondrai de vive voix.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Mes systèmes sont en cours de mise à jour pour mieux vous servir. Contactez notre équipe au (+237) 6 88 95 40 53.";
  }
};