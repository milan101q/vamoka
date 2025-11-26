import React from 'react';
import { Instagram, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-900 text-brand-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-serif text-white mb-2">Vamoka</h2>
            <p className="text-brand-400 uppercase tracking-widest text-xs">Art Adventures</p>
          </div>
          
          <div className="flex space-x-8">
            <a 
              href="https://www.instagram.com/vamoka.artadventures/" 
              target="_blank" 
              rel="noreferrer"
              className="text-brand-300 hover:text-white transition-colors p-2 hover:bg-brand-800 rounded-full"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-500">
          <p>&copy; {new Date().getFullYear()} Vamoka Art Adventures. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={14} className="text-red-400 fill-current" /> and Creative Spirit
          </p>
        </div>
      </div>
    </footer>
  );
};