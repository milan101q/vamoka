import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct chat history for the SDK
    // Note: The SDK Chat object manages history statefully, but here we are treating it statelessly 
    // for simplicity in this React component wrapper, or re-initializing. 
    // Ideally, we keep a persistent Chat object, but creating a new one with history is safer for simple web apps to avoid sync issues.
    
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm having trouble connecting to the art muse right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get response from Gemini");
  }
};