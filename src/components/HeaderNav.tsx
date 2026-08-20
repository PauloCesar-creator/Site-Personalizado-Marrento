import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, Compass, PhoneCall, Menu, X } from 'lucide-react';
import logoImg from '../assets/images/logo_marrento_1787233965102.png';

interface HeaderNavProps {
  onOpenConcierge: () => void;
  onExploreClick: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenConcierge, onExploreClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-cyan-500/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-cyan-400">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-amber-600/40 bg-zinc-950 flex items-center justify-center p-0.5 shadow-md shadow-amber-950/40">
            <img
              src={logoImg}
              alt="Logo Marrento"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-sm font-bold tracking-[0.25em] text-zinc-100 uppercase group-hover:text-cyan-400 transition-colors">
              Marrento
            </span>
            <span className="font-mono-tech text-[9px] text-zinc-400 tracking-wider">
              ALTO PADRÃO • HOROLOGY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono-tech text-xs tracking-wider text-zinc-300">
          <a
            href="#hero"
            className="hover:text-cyan-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            A CAIXA
          </a>
          <a
            href="#specs"
            onClick={onExploreClick}
            className="hover:text-cyan-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            ENGENHARIA
          </a>
          <a
            href="#customizer"
            className="hover:text-cyan-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            PERSONALIZAÇÃO
          </a>
          <a
            href="#gallery"
            className="hover:text-cyan-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            DETALHES
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            id="btn-vip-concierge-header"
            onClick={onOpenConcierge}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-none border border-cyan-400/60 bg-cyan-950/30 text-cyan-300 font-mono-tech text-xs tracking-wider uppercase hover:bg-cyan-500 hover:text-zinc-950 hover:border-cyan-400 transition-all duration-200 shadow-sm shadow-cyan-950/50 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reserva VIP</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="btn-mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-cyan-400 focus:outline-none"
          aria-label="Alternar menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0e] border-b border-cyan-500/30 px-6 py-6 font-mono-tech text-sm space-y-4">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-cyan-400"
          >
            [01] A CAIXA
          </a>
          <a
            href="#specs"
            onClick={() => {
              onExploreClick();
              setMobileMenuOpen(false);
            }}
            className="block text-zinc-300 hover:text-cyan-400"
          >
            [02] ENGENHARIA & SPECS
          </a>
          <a
            href="#customizer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-cyan-400"
          >
            [03] PERSONALIZAÇÃO
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-cyan-400"
          >
            [04] DETALHES DE MANUFATURA
          </a>
          <div className="pt-4 border-t border-zinc-800">
            <button
              onClick={() => {
                onOpenConcierge();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-center border border-cyan-400 bg-cyan-950/40 text-cyan-300 font-mono-tech text-xs tracking-wider uppercase"
            >
              Solicitar Reserva VIP
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
