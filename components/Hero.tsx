import React from 'react';
import { ArrowDown } from 'lucide-react';

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
          src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&q=80&w=2832" 
          alt="Abstract Textured Art Background" 
          className="w-full h-full object-cover"
        />
        {/* Lighter overlay to ensure dark text pops */}
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-transparent to-brand-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 border border-brand-900/30 rounded-full bg-white/60 backdrop-blur-md text-brand-900 text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in shadow-sm">
          Handmade • Modern • Decorative
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-brand-900 mb-6 leading-tight animate-slide-up drop-shadow-sm">
          Vamoka Art Adventures
        </h1>
        <p className="text-lg md:text-xl text-brand-800 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up font-medium" style={{ animationDelay: '0.2s' }}>
          Bringing beauty and warmth to your space with handmade modern decorative art. Based in Virginia and shipping worldwide, we offer custom sizes to perfectly fit your unique vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#gallery" 
            onClick={(e) => scrollToSection(e, 'gallery')}
            className="px-8 py-3 bg-brand-900 text-brand-50 font-medium uppercase tracking-widest hover:bg-brand-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer rounded-sm"
          >
            Watch Highlights
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="px-8 py-3 bg-white/70 backdrop-blur-sm border border-brand-900 text-brand-900 font-medium uppercase tracking-widest hover:bg-white transition-colors cursor-pointer rounded-sm shadow-sm"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-900/70">
        <ArrowDown size={24} />
      </div>
    </div>
  );
};