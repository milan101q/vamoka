
import React, { useState } from 'react';
import { Product } from '../types';
import { ArrowUpRight, Instagram, Loader2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const getEmbedUrl = (url: string) => {
    // Extract ID from URL (e.g., https://www.instagram.com/reel/CODE/ or /p/CODE/)
    const match = url.match(/(?:p|reel)\/([a-zA-Z0-9_-]+)/);
    const id = match ? match[1] : '';
    
    // Determine type based on URL or default to 'p' (which works for most)
    // We try to preserve 'reel' or 'p' to ensure correct embed rendering.
    const type = url.includes('/reel/') ? 'reel' : 'p';
    
    // Use the embed endpoint
    return id ? `https://www.instagram.com/${type}/${id}/embed/` : url;
  };

  const embedUrl = getEmbedUrl(product.instagramUrl);

  return (
    <div className="group relative bg-white border border-brand-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 rounded-xl flex flex-col h-full">
      {/* Instagram Iframe Container */}
      <div className="relative w-full aspect-[9/16] bg-brand-50 border-b border-brand-50 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-brand-100/50 backdrop-blur-sm z-10">
              <Loader2 className="animate-spin text-brand-400" size={24} />
          </div>
        )}
        {/* CROPPING MAGIC:
            Shift top up by 58px to hide header.
            Increase height to push footer out.
        */}
        <iframe 
          src={embedUrl}
          onLoad={() => setIsLoading(false)}
          className={`absolute left-0 w-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          style={{ top: '-58px', height: 'calc(100% + 116px)' }}
          frameBorder="0" 
          scrolling="no" 
          allowTransparency={true}
          allow="encrypted-media"
          loading="lazy"
          title={product.title}
        ></iframe>
        
        {/* Fallback/Overlay for interaction */}
        <div className="absolute inset-0 pointer-events-none group-hover:bg-black/10 transition-colors z-20" />
      </div>
      
      {/* Footer with Button Only */}
      <div className="p-5 bg-white relative z-30 mt-auto shadow-[0_-5px_15px_rgba(0,0,0,0.05)] flex flex-col">
        <a 
          href={product.instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 bg-brand-900 text-brand-50 uppercase text-xs tracking-widest font-bold hover:bg-brand-700 transition-colors rounded-lg shadow-md font-sans"
        >
          <Instagram size={14} /> View Artwork <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
};
