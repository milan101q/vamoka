
import React from 'react';
import { ArrowDown, MapPin, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=2574" 
          alt="Professional Artistic Liquid Gold and Black Abstract" 
          className="w-full h-full object-cover"
        />
        {/* Overlays to ensure text readability */}
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/80 via-transparent to-brand-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 border border-brand-900/60 rounded-full bg-white/80 backdrop-blur-md text-brand-900 text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in shadow-sm font-sans">
          Handmade • Modern • Decorative
        </span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-900 mb-6 leading-none animate-slide-up drop-shadow-sm tracking-tight">
          Vamoka
        </h1>
        
        {/* Enhanced Visibility Text Box */}
        <div className="bg-white/40 backdrop-blur-md p-6 rounded-xl border border-white/50 shadow-sm mb-10 max-w-3xl mx-auto animate-slide-up transform transition-all hover:bg-white/50" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl font-serif text-brand-900 leading-relaxed font-medium">
            Bringing beauty and warmth to your space with handmade modern decorative art.
          </p>
          
          <div className="my-5 h-px bg-gradient-to-r from-transparent via-brand-900/40 to-transparent w-3/4 mx-auto"></div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-brand-900">
            <span className="font-sans font-semibold tracking-wide flex items-center gap-2">
              <MapPin size={18} className="text-brand-700" /> Based in Virginia
            </span>
            <span className="hidden md:inline text-brand-500">•</span>
            <span className="font-sans font-bold text-lg tracking-wide flex items-center gap-2 bg-brand-100/50 px-3 py-1 rounded-full border border-brand-200">
              <Globe size={18} className="text-brand-700" /> Worldwide Shipping
            </span>
          </div>
          
          <p className="text-lg font-serif text-brand-800 mt-4 italic">
            We offer custom sizes to perfectly fit your unique vision.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up font-sans" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#gallery" 
            onClick={(e) => scrollToSection(e, 'gallery')}
            className="px-8 py-4 bg-brand-900 text-brand-50 font-bold uppercase text-xs tracking-[0.2em] hover:bg-brand-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer rounded-sm"
          >
            Watch Highlights
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="px-8 py-4 bg-white/70 backdrop-blur-sm border border-brand-900 text-brand-900 font-bold uppercase text-xs tracking-[0.2em] hover:bg-white transition-colors cursor-pointer rounded-sm shadow-sm"
          >
            Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-900/70">
        <ArrowDown size={24} />
      </div>
    </div>
  );
};
