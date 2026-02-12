import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `Tu es Douly, l'experte IA de DOULIA au Cameroun. Sois accueillante et professionnelle.`;

export const getGeminiResponse = async (userMessage: string, history: any[], currentLang: string) => {
  // @ts-ignore
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION 
    });

    const chat = model.startChat({
      history: history.map(h => ({
        role: h.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: h.content }],
      })),
    });

    const result = await chat.sendMessage(userMessage);
    return result.response.text();
  } catch (error) {
    console.error("Erreur Gemini:", error);
    return "Désolée, je rencontre une petite difficulté technique.";
  }
};