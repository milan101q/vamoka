import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
    if (isExternal) return;

    e.preventDefault();
    setIsOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Updated Navigation Links
  const navLinks = [
    { name: 'Home', href: '#', isExternal: false },
    { name: 'Gallery', href: '#gallery', isExternal: false },
    { name: 'About', href: '#about', isExternal: false },
    { name: 'Order', href: 'https://www.instagram.com/vamoka.artadventures/', isExternal: true },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, '#', false)}
              className={`font-serif text-2xl font-bold tracking-wider ${scrolled ? 'text-brand-900' : 'text-brand-900'}`}
            >
              VAMOKA
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isExternal)}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="text-brand-800 hover:text-brand-500 transition-colors text-sm uppercase tracking-widest font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.instagram.com/vamoka.artadventures/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-800 hover:text-brand-500"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-800 hover:text-brand-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl absolute w-full border-t border-brand-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isExternal)}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="block px-3 py-4 text-brand-900 hover:text-brand-500 text-lg uppercase tracking-widest cursor-pointer"
              >
                {link.name}
              </a>
            ))}
             <a 
              href="https://www.instagram.com/vamoka.artadventures/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-900 hover:text-brand-500 py-4"
            >
              <span className="flex items-center gap-2 uppercase tracking-widest text-lg">
                <Instagram size={20} /> Instagram
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};