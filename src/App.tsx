import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroReferenceFrame } from './components/HeroReferenceFrame';
import { WatchCategoryPage } from './components/WatchCategoryPage';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [currentView, setCurrentView] = useState<'showcase' | 'watches'>('showcase');

  useEffect(() => {
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  // When view switches, scroll to top smoothly
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    ScrollTrigger.refresh();
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 flex flex-col font-sans-clean overflow-x-hidden">
      {/* Dynamic View Router */}
      {currentView === 'watches' ? (
        <WatchCategoryPage
          onNavigateHome={() => setCurrentView('showcase')}
          onSelectCategory={(slug) => {
            if (slug !== 'relogio' && slug !== 'watches') {
              setCurrentView('showcase');
            }
          }}
        />
      ) : (
        <main className="flex-1 w-full flex flex-col items-center">
          <HeroReferenceFrame onNavigateWatches={() => setCurrentView('watches')} />
        </main>
      )}
    </div>
  );
}

