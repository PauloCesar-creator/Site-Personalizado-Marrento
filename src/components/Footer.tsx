import React from 'react';
import { ShieldCheck, Award, Lock, ArrowUp } from 'lucide-react';
import logoImg from '../assets/images/logo_marrento.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#060608] border-t border-zinc-800 text-zinc-400 py-12 px-4 sm:px-6 lg:px-8 font-sans-clean text-xs"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-850">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-600/50 p-0.5 bg-zinc-950">
              <img
                src={logoImg}
                alt="Logo Marrento"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-serif-luxury text-lg font-bold text-zinc-100 tracking-widest block uppercase">
                Marrento
              </span>
              <span className="font-mono-tech text-[10px] text-zinc-500 tracking-wider">
                HAUTE HORLOGERIE & PRECISION ENGINEERING
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-mono-tech text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Garantia Vitalícia Estrutural
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Award className="w-4 h-4 text-amber-500" />
              Certificação Suíça de Tolerância
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono-tech text-xs text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 px-3 py-2 bg-cyan-950/30 hover:bg-cyan-950/60 transition-all"
            aria-label="Voltar ao topo da página"
          >
            <span>Retornar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Tier & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono-tech">
          <p>
            © {new Date().getFullYear()} Marrento Acessórios de Alto Padrão. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Termos de Manufatura</a>
            <span>•</span>
            <a href="#specs" className="hover:text-cyan-400 transition-colors">Laudo Metalúrgico</a>
            <span>•</span>
            <a href="#customizer" className="hover:text-cyan-400 transition-colors">Privacidade VIP</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
