import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { Message, ChatState } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm your Art Curator AI. Tell me about your space or what inspires you, and I'll recommend a piece from the Vamoka collection." }
  ]);
  const [input, setInput] = useState('');
  const [chatState, setChatState] = useState<ChatState>(ChatState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || chatState === ChatState.LOADING) return;

    const userMessage: Message = { role: 'user', text: input };
    
    // Add user message to UI immediately
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setChatState(ChatState.LOADING);

    try {
      // Pass 'messages' (which is the history BEFORE the new user message)
      // The sendMessageToGemini service will add the new message to the chat call
      const responseText = await sendMessageToGemini(messages, input);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setChatState(ChatState.IDLE);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting to the art server right now.", isError: true }]);
      setChatState(ChatState.ERROR);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-2 ${
          isOpen ? 'bg-brand-900 rotate-90 scale-0 opacity-0' : 'bg-brand-800 hover:bg-brand-700 text-white scale-100 opacity-100'
        }`}
      >
        <Sparkles size={24} />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-full max-w-[360px] bg-white rounded-2xl shadow-2xl border border-brand-100 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none translate-y-10'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-brand-900 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="text-brand-300" size={18} />
            <div>
              <h3 className="text-white font-medium text-sm tracking-wide">Art Curator AI</h3>
              <p className="text-brand-300 text-xs">Powered by Gemini</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-brand-300 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-50">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-800 text-white rounded-br-none' 
                    : 'bg-white text-brand-900 border border-brand-100 rounded-bl-none shadow-sm'
                } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {chatState === ChatState.LOADING && (
            <div className="flex justify-start">
               <div className="bg-white text-brand-900 border border-brand-100 rounded-2xl rounded-bl-none shadow-sm px-4 py-3 flex items-center gap-2">
                 <Loader2 className="animate-spin text-brand-500" size={16} />
                 <span className="text-xs text-brand-500">Curating...</span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-brand-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Suggest something for a cozy bedroom..."
              className="w-full pl-4 pr-12 py-3 bg-brand-50 border border-brand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm text-brand-900 placeholder-brand-400"
              disabled={chatState === ChatState.LOADING}
            />
            <button
              type="submit"
              disabled={!input.trim() || chatState === ChatState.LOADING}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-brand-500 hover:text-brand-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};