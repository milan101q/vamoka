import React from 'react';
import { ProductCard } from './ProductCard';
import { MOCK_PRODUCTS } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-50 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Handmade Creations</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-900 mb-6">Modern Decorative Art</h2>
          <div className="h-0.5 w-16 bg-brand-200 mx-auto mb-8"></div>
          <p className="text-brand-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Immerse yourself in our collection of handmade modern decorative art. Click to experience the full texture, detail, and warmth of each piece on Instagram.
          </p>
        </div>

        {/* 
          Grid adjusted for Vertical Reels (Aspect Ratio ~9:16).
          We use min-width to ensure they don't get too squashed.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {MOCK_PRODUCTS.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};