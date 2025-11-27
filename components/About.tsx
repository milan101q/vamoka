
import React, { useState } from 'react';
import { Instagram, ArrowRight, Palette, MapPin, Maximize, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Using one of the provided "Process/Art" reels for the About section
  const featuredReelId = "DJNuXy5R_5D"; 
  const embedUrl = `https://www.instagram.com/reel/${featuredReelId}/embed/`;

  const scrollToGallery = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-light rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
             <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white aspect-[9/16] max-w-sm mx-auto lg:mx-0">
               {isLoading && (
                  <div className="absolute inset-0 z-10 bg-gradient-to-br from-brand-100 via-white to-brand-100 animate-pulse flex items-center justify-center">
                     <span className="font-serif italic text-6xl text-brand-300">V</span>
                  </div>
               )}
               {/* Embed the Real Video */}
               <iframe 
                  src={embedUrl}
                  onLoad={() => setIsLoading(false)}
                  className={`w-full h-full transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                  style={{ minHeight: '600px' }}
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency={true}
                  allow="encrypted-media"
                  loading="lazy"
                  title="Art in Motion"
               ></iframe>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-brand-500 font-bold tracking-[0.2em] text-xs uppercase mb-2 block font-sans">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6 leading-tight">
              Bringing Beauty & Warmth <br/> to Your <span className="text-brand-600 italic">Space</span>
            </h2>
            
            <div className="prose text-brand-800 text-lg leading-relaxed font-light mb-8 font-sans">
              <p className="mb-4">
                <strong>Vamoka Art Adventures</strong> is more than just a gallery; it is a journey into the wild, reimagined for the modern home. 
              </p>
              <p className="mb-4">
                We specialize in <strong>Handmade Modern Decorative Art</strong>, creating pieces that aren't just seen, but felt. Each creation is a dialogue between nature's untamed spirit and contemporary design, tailored to breathe life into your personal sanctuary.
              </p>
              <p>
                Whether you need a statement piece for a grand hall or a subtle accent for a cozy corner, we craft with passion and precision.
              </p>
            </div>

            {/* Feature Grid - Enhanced with specific Bio details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 mb-10 border-t border-brand-200 pt-8 font-sans">
              <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-brand-600">
                    <Palette size={20} />
                  </div>
                  <div>
                      <h4 className="font-bold text-brand-900 text-xs uppercase tracking-widest mb-1">Handmade Modern Art</h4>
                      <p className="text-sm text-brand-700 leading-snug">Decorative art crafted by hand, blending modern aesthetics with artistic soul.</p>
                  </div>
              </div>
              
              <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-brand-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                      <h4 className="font-bold text-brand-900 text-xs uppercase tracking-widest mb-1">Based in Virginia 🇺🇸</h4>
                      <p className="text-sm text-brand-700 leading-snug">Proudly created in Virginia with <strong>Worldwide Shipping</strong> available.</p>
                  </div>
              </div>

              <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-brand-600">
                    <Maximize size={20} />
                  </div>
                  <div>
                      <h4 className="font-bold text-brand-900 text-xs uppercase tracking-widest mb-1">Custom Sizes</h4>
                      <p className="text-sm text-brand-700 leading-snug">We offer custom sizing to ensure the perfect fit for your unique wall space.</p>
                  </div>
              </div>

              <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-brand-600">
                    <Heart size={20} />
                  </div>
                  <div>
                      <h4 className="font-bold text-brand-900 text-xs uppercase tracking-widest mb-1">Beauty & Warmth</h4>
                      <p className="text-sm text-brand-700 leading-snug">Our mission is to bring beauty, warmth, and inspiration to your environment.</p>
                  </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 font-sans">
              <a 
                href="https://www.instagram.com/vamoka.artadventures/" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-900 text-brand-50 hover:bg-brand-800 transition-colors uppercase tracking-widest text-xs font-bold shadow-lg hover:shadow-xl rounded-sm"
              >
                <Instagram size={18} />
                Contact on Instagram
              </a>
              <a 
                href="#gallery" 
                onClick={scrollToGallery}
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-brand-900 text-brand-900 hover:bg-brand-100 transition-colors uppercase tracking-widest text-xs font-bold rounded-sm cursor-pointer"
              >
                View Gallery <ArrowRight size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
