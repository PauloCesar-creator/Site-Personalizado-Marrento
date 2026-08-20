import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CASE_FINISHES } from '../data/watchData';
import { CaseFinish } from '../types';
import { Palette, Check, Sliders, Shield } from 'lucide-react';
import watchImg from '../assets/images/watch_case_frame_1787233980704.jpg';
import { SplitText } from './SplitText';

gsap.registerPlugin(ScrollTrigger);

interface CustomizerSectionProps {
  onSelectFinishForConcierge: (finish: CaseFinish) => void;
}

export const CustomizerSection: React.FC<CustomizerSectionProps> = ({ onSelectFinishForConcierge }) => {
  const [selectedFinish, setSelectedFinish] = useState<CaseFinish>(CASE_FINISHES[0]);
  const [bezelInsert, setBezelInsert] = useState<'ceramic-black' | 'steel-engraved' | 'sapphire-lumed'>('ceramic-black');
  const [customEngraving, setCustomEngraving] = useState('');

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
      id="customizer-scroll-wrapper"
      className="relative w-full bg-[#060608]"
      style={{ minHeight: '2600px' }}
    >
      <div
        ref={pinTargetRef}
        className="w-full h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 select-none overflow-hidden"
      >
        <section
          id="customizer"
          aria-label="Ateliê de Personalização de Acabamentos"
          className="relative w-full max-w-7xl max-h-[92vh] flex flex-col justify-center items-center"
        >
          <div ref={contentWrapperRef} className="w-full space-y-6 sm:space-y-8">
            {/* Section Header with SplitText */}
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono-tech text-xs tracking-widest uppercase">
                <Palette className="w-3.5 h-3.5" />
                Ateliê de Customização
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
                <SplitText text="Forje a Sua Identidade" />
              </h2>
              <p className="font-sans-clean text-xs sm:text-sm text-zinc-400">
                Escolha o tratamento metalúrgico, a tonalidade do bisel e configure a sua peça exclusiva.
              </p>
            </div>

            {/* Customizer Workstation Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#0c0c10]/95 border border-zinc-800 p-5 sm:p-8">
              {/* Left: Dynamic Watch Preview Canvas */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[260px] sm:min-h-[340px] bg-radial from-zinc-900/60 to-zinc-950 border border-zinc-800/80 p-4 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-25 blur-3xl transition-colors duration-700 pointer-events-none"
                  style={{ backgroundColor: selectedFinish.accentColor }}
                />

                <div className="relative w-full max-w-[340px] aspect-[16/10] flex items-center justify-center">
                  <img
                    src={watchImg}
                    alt={`Caixa no acabamento ${selectedFinish.name}`}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] transition-all duration-500 ${
                      selectedFinish.id === 'dlc-black'
                        ? 'brightness-75 contrast-125 saturate-50'
                        : selectedFinish.id === 'bronze-aged'
                        ? 'sepia-[0.4] hue-rotate-[-30deg] brightness-90'
                        : selectedFinish.id === 'rose-gold'
                        ? 'sepia-[0.35] brightness-105'
                        : 'brightness-100'
                    }`}
                  />
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="font-mono-tech text-[10px] text-zinc-500 uppercase tracking-widest block">
                      Tratamento Ativo
                    </span>
                    <span className="font-serif-luxury text-xs sm:text-sm font-semibold text-zinc-200">
                      {selectedFinish.name} ({selectedFinish.colorCode})
                    </span>
                  </div>
                  <span className="font-mono-tech text-[10px] text-cyan-400 bg-black/60 px-2 py-1 border border-cyan-500/30">
                    {selectedFinish.resistance}
                  </span>
                </div>
              </div>

              {/* Right: Customization Controls */}
              <div className="lg:col-span-5 space-y-4">
                {/* Finish Selector */}
                <div className="space-y-2">
                  <label className="font-mono-tech text-xs text-zinc-300 flex items-center justify-between">
                    <span>1. SELECIONE O ACABAMENTO</span>
                    <span className="text-[10px] text-cyan-400 uppercase">{selectedFinish.name}</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {CASE_FINISHES.map((finish) => (
                      <button
                        key={finish.id}
                        onClick={() => setSelectedFinish(finish)}
                        className={`p-2.5 flex items-center gap-2.5 border text-left transition-all ${
                          selectedFinish.id === finish.id
                            ? 'border-cyan-400 bg-cyan-950/20 text-zinc-100 shadow-[0_0_15px_rgba(14,165,233,0.15)]'
                            : 'border-zinc-800/80 bg-zinc-900/30 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300'
                        }`}
                      >
                        <div
                          className="w-3.5 h-3.5 rounded-full border border-white/20 flex-shrink-0"
                          style={{ backgroundColor: finish.accentColor }}
                        />
                        <div className="min-w-0">
                          <p className="font-mono-tech text-xs truncate leading-tight">{finish.name}</p>
                          <p className="font-mono-tech text-[9px] text-zinc-500 truncate">{finish.colorCode}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bezel Selector */}
                <div className="space-y-2">
                  <label className="font-mono-tech text-xs text-zinc-300 flex items-center justify-between">
                    <span>2. INSERTO DO BISEL GIRATÓRIO</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setBezelInsert('ceramic-black')}
                      className={`p-2 border font-mono-tech text-[10px] transition-all text-center ${
                        bezelInsert === 'ceramic-black'
                          ? 'border-cyan-400 bg-cyan-950/20 text-cyan-300'
                          : 'border-zinc-800 bg-zinc-900/30 text-zinc-400'
                      }`}
                    >
                      Cerâmica Black
                    </button>
                    <button
                      onClick={() => setBezelInsert('steel-engraved')}
                      className={`p-2 border font-mono-tech text-[10px] transition-all text-center ${
                        bezelInsert === 'steel-engraved'
                          ? 'border-cyan-400 bg-cyan-950/20 text-cyan-300'
                          : 'border-zinc-800 bg-zinc-900/30 text-zinc-400'
                      }`}
                    >
                      Aço Escovado
                    </button>
                    <button
                      onClick={() => setBezelInsert('sapphire-lumed')}
                      className={`p-2 border font-mono-tech text-[10px] transition-all text-center ${
                        bezelInsert === 'sapphire-lumed'
                          ? 'border-cyan-400 bg-cyan-950/20 text-cyan-300'
                          : 'border-zinc-800 bg-zinc-900/30 text-zinc-400'
                      }`}
                    >
                      Safira Luminescente
                    </button>
                  </div>
                </div>

                {/* Laser Engraving Input */}
                <div className="space-y-1.5">
                  <label className="font-mono-tech text-xs text-zinc-300 flex items-center justify-between">
                    <span>3. GRAVAÇÃO LASER PERSONALIZADA</span>
                    <span className="text-[10px] text-zinc-500">{customEngraving.length}/20</span>
                  </label>
                  <input
                    type="text"
                    maxLength={20}
                    value={customEngraving}
                    onChange={(e) => setCustomEngraving(e.target.value)}
                    placeholder="Ex: MARRENTO N° 042/100"
                    className="w-full bg-zinc-900/70 border border-zinc-800 px-3 py-2 text-xs font-mono-tech text-cyan-300 focus:outline-none focus:border-cyan-400 tracking-wider placeholder:text-zinc-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
