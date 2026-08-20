import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Maximize2, ShieldCheck, Cpu, Sparkles, CheckCircle2, Compass } from 'lucide-react';
import { CASE_SPECIFICATIONS } from '../data/watchData';
import watchMacroImg from '../assets/images/watch_movement_macro_1787233993261.jpg';
import { SplitText } from './SplitText';

gsap.registerPlugin(ScrollTrigger);

export const SpecsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'specs' | 'blueprint' | 'materials'>('specs');
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Maximize2: <Maximize2 className="w-5 h-5 text-cyan-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-cyan-400" />
  };

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
          } else if (progress > 0.85) {
            const exitP = (progress - 0.85) / 0.15;
            gsap.set(contentWrapperRef.current, {
              opacity: 1 - exitP,
              y: -exitP * 40,
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
      id="specs-scroll-wrapper"
      className="relative w-full bg-[#070709]"
      style={{ minHeight: '2600px' }}
    >
      <div
        ref={pinTargetRef}
        className="w-full h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 select-none overflow-hidden"
      >
        <section
          id="specs"
          aria-label="Engenharia e Especificações Técnicas"
          className="relative w-full max-w-7xl max-h-[92vh] flex flex-col justify-center items-center"
        >
          <div ref={contentWrapperRef} className="w-full space-y-8 sm:space-y-12">
            {/* Section Header with SplitText */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono-tech text-xs tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5" />
                Engenharia & Alta Precisão
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
                <SplitText text="A Anatomia da Perfeição" />
              </h2>
              <p className="font-sans-clean text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
                Cada curva, chanfro e encaixe da caixa Marrento é projetado com tolerâncias micrométricas,
                unindo a nobreza dos metais nobres à resistência extrema.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="flex justify-center border-b border-zinc-800/80">
              <div className="flex gap-2 sm:gap-6 font-mono-tech text-xs tracking-wider">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-3 px-3 transition-all border-b-2 ${
                    activeTab === 'specs'
                      ? 'border-cyan-400 text-cyan-300 font-bold'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  [01] ESPECIFICAÇÕES
                </button>
                <button
                  onClick={() => setActiveTab('blueprint')}
                  className={`pb-3 px-3 transition-all border-b-2 ${
                    activeTab === 'blueprint'
                      ? 'border-cyan-400 text-cyan-300 font-bold'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  [02] BLUEPRINT TÉCNICO
                </button>
                <button
                  onClick={() => setActiveTab('materials')}
                  className={`pb-3 px-3 transition-all border-b-2 ${
                    activeTab === 'materials'
                      ? 'border-cyan-400 text-cyan-300 font-bold'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  [03] METALURGIA 316L
                </button>
              </div>
            </div>

            {/* Tab 1: Specifications Cards */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {CASE_SPECIFICATIONS.map((spec) => (
                  <article
                    key={spec.id}
                    id={spec.id}
                    className="group relative bg-[#0d0d12]/90 border border-zinc-800/80 p-5 sm:p-6 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="w-9 h-9 rounded-none bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {iconMap[spec.iconName]}
                      </div>
                      <div>
                        <span className="font-mono-tech text-[10px] text-cyan-400 uppercase tracking-widest block">
                          {spec.subtitle}
                        </span>
                        <h3 className="font-serif-luxury text-sm sm:text-base font-semibold text-zinc-100 mt-0.5">
                          {spec.title}
                        </h3>
                      </div>
                      <p className="font-sans-clean text-xs text-zinc-400 leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {spec.description}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-zinc-800/60 flex items-baseline justify-between">
                      <span className="font-mono-tech text-[10px] text-zinc-500 uppercase">Classificação</span>
                      <span className="font-mono-tech text-xs sm:text-sm font-bold text-cyan-300">
                        {spec.value}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Tab 2: Blueprint & Macro View */}
            {activeTab === 'blueprint' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#0d0d12]/90 border border-cyan-500/30 p-5 sm:p-8">
                <div className="lg:col-span-7 relative aspect-[16/10] max-h-[300px] overflow-hidden border border-zinc-800 bg-black">
                  <img
                    src={watchMacroImg}
                    alt="Macro do Movimento e Caixa"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-110 brightness-95"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 border border-cyan-500/40 px-2 py-1 font-mono-tech text-[10px] text-cyan-300">
                    MICROSCOPIA DE CHANFRO • 50X ZOOM
                  </div>
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <div className="space-y-1.5">
                    <span className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest">
                      Blueprint Estrutural
                    </span>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-zinc-100">
                      Usinagem Monobloco em CNC
                    </h3>
                    <p className="font-sans-clean text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      A estrutura Marrento é lapidada a partir de uma barra maciça em centro de usinagem suíço de 5 eixos sincronizados.
                    </p>
                  </div>

                  <ul className="space-y-2.5 font-mono-tech text-xs text-zinc-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Vedação Tripla por O-rings de Viton</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Fundo Rosqueado com Gravação a Laser</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Tratamento Térmico Anti-Tensão Criogênica</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 3: Metallurgy Details */}
            {activeTab === 'materials' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-[#0d0d12]/90 border border-zinc-800 p-5 sm:p-6 space-y-2.5">
                  <span className="font-mono-tech text-xs text-amber-500 uppercase tracking-wider block">
                    Composição Química
                  </span>
                  <h4 className="font-serif-luxury text-base sm:text-lg text-zinc-100">Molibdênio & Níquel Cromo</h4>
                  <p className="font-sans-clean text-xs text-zinc-400">
                    A adição de 2.5% de Molibdênio confere imunidade contra a corrosão em água salgada e suor humano.
                  </p>
                </div>
                <div className="bg-[#0d0d12]/90 border border-zinc-800 p-5 sm:p-6 space-y-2.5">
                  <span className="font-mono-tech text-xs text-cyan-400 uppercase tracking-wider block">
                    Propriedade Hipoalergênica
                  </span>
                  <h4 className="font-serif-luxury text-base sm:text-lg text-zinc-100">Zero Irritação Dérmica</h4>
                  <p className="font-sans-clean text-xs text-zinc-400">
                    Livre de chumbo e com liberação de níquel abaixo dos limites mais rigorosos da Diretiva Europeia REACH.
                  </p>
                </div>
                <div className="bg-[#0d0d12]/90 border border-zinc-800 p-5 sm:p-6 space-y-2.5">
                  <span className="font-mono-tech text-xs text-sky-400 uppercase tracking-wider block">
                    Dureza Vickers
                  </span>
                  <h4 className="font-serif-luxury text-base sm:text-lg text-zinc-100">240 HV de Dureza</h4>
                  <p className="font-sans-clean text-xs text-zinc-400">
                    Resistência contra micro-riscos diários através de têmpera superficial e polimento satinado.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
