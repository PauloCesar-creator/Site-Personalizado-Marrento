import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gem } from 'lucide-react';
import watchMacroImg from '../assets/images/watch_movement_macro_1787233993261.jpg';
import watchCaseImg from '../assets/images/watch_case_frame_1787233980704.jpg';
import logoImg from '../assets/images/logo_marrento.png';
import { SplitText } from './SplitText';

gsap.registerPlugin(ScrollTrigger);

export const GallerySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !pinTargetRef.current) return;

    const pinTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=1600',
      pin: pinTargetRef.current,
      scrub: 0.6,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        if (contentWrapperRef.current) {
          if (progress < 0.1) {
            gsap.set(contentWrapperRef.current, {
              opacity: progress * 10,
              y: (1 - progress * 10) * 30,
            });
          } else {
            gsap.set(contentWrapperRef.current, { opacity: 1, y: 0 });
          }
        }
      }
    });

    return () => {
      pinTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="gallery-scroll-wrapper"
      className="relative w-full bg-[#060608]"
      style={{ minHeight: '2600px' }}
    >
      <div
        ref={pinTargetRef}
        className="w-full h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 select-none overflow-hidden"
      >
        <section
          id="gallery"
          aria-label="Galeria de Manufatura de Luxo"
          className="relative w-full max-w-7xl max-h-[92vh] flex flex-col justify-center items-center"
        >
          <div ref={contentWrapperRef} className="w-full space-y-6 sm:space-y-8">
            {/* Section Header with SplitText */}
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/40 border border-amber-500/30 text-amber-400 font-mono-tech text-xs tracking-widest uppercase">
                <Gem className="w-3.5 h-3.5" />
                Manufatura & Rigor Suíço
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
                <SplitText text="A Arte do Detalhe Invisível" />
              </h2>
              <p className="font-sans-clean text-xs sm:text-sm text-zinc-400">
                Mais de 140 horas de usinagem, controle de tolerância óptica por laser e acabamento individual.
              </p>
            </div>

            {/* 3-Column Craftsmanship Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Card 1 */}
              <article className="bg-[#0e0e14]/90 border border-zinc-800/80 overflow-hidden flex flex-col group hover:border-cyan-500/40 transition-all duration-300">
                <div className="relative aspect-[16/9] bg-zinc-950 overflow-hidden">
                  <img
                    src={watchCaseImg}
                    alt="Lapidação e chanfros angulares"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 border border-cyan-500/40 px-2 py-0.5 font-mono-tech text-[9px] text-cyan-300">
                    01. CHANFRO POLIDO
                  </div>
                </div>
                <div className="p-4 sm:p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-sm sm:text-base font-bold text-zinc-100">
                      Chanfros em Espelho Sallaz
                    </h3>
                    <p className="font-sans-clean text-xs text-zinc-400 mt-1 leading-relaxed">
                      Bordas com polimento óptico sem distorção contrastando com o corpo acetinado.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-zinc-800/60 font-mono-tech text-[10px] text-cyan-400">
                    Tolerância: ± 0.003mm
                  </div>
                </div>
              </article>

              {/* Card 2 */}
              <article className="bg-[#0e0e14]/90 border border-zinc-800/80 overflow-hidden flex flex-col group hover:border-amber-500/40 transition-all duration-300">
                <div className="relative aspect-[16/9] bg-zinc-950 overflow-hidden">
                  <img
                    src={logoImg}
                    alt="Emblema Marrento em Relevo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-4 filter contrast-125 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 border border-amber-500/40 px-2 py-0.5 font-mono-tech text-[9px] text-amber-300">
                    02. BRASÃO DO LEÃO
                  </div>
                </div>
                <div className="p-4 sm:p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-sm sm:text-base font-bold text-zinc-100">
                      Brasão Marrento
                    </h3>
                    <p className="font-sans-clean text-xs text-zinc-400 mt-1 leading-relaxed">
                      Esculpido em relevo dimensional profundo no topo da coroa e na tampa traseira.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-zinc-800/60 font-mono-tech text-[10px] text-amber-400">
                    Gravação: Laser 3D 120W
                  </div>
                </div>
              </article>

              {/* Card 3 */}
              <article className="bg-[#0e0e14]/90 border border-zinc-800/80 overflow-hidden flex flex-col group hover:border-cyan-500/40 transition-all duration-300">
                <div className="relative aspect-[16/9] bg-zinc-950 overflow-hidden">
                  <img
                    src={watchMacroImg}
                    alt="Acomodação de Alta Resistência"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-115 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 border border-cyan-500/40 px-2 py-0.5 font-mono-tech text-[9px] text-cyan-300">
                    03. BERÇO ANTI-CHOQUE
                  </div>
                </div>
                <div className="p-4 sm:p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-sm sm:text-base font-bold text-zinc-100">
                      Câmara Blindada
                    </h3>
                    <p className="font-sans-clean text-xs text-zinc-400 mt-1 leading-relaxed">
                      Anel interno de absorção em liga aeroespacial que isola o calibre mecânico até 5.000G.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-zinc-800/60 font-mono-tech text-[10px] text-cyan-400">
                    Proteção: ISO 1413
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
