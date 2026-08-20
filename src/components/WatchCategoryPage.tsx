import React, { useState } from 'react';
import {
  Menu,
  Search,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Headphones,
  Award,
  Check,
  X,
  Plus,
  Minus,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  Eye,
  SlidersHorizontal,
} from 'lucide-react';
import logoImg from '../assets/images/logo_marrento.png';
import goldWatchImg from '../assets/images/marrento_gold_watch_1787238783475.jpg';
import heroWatchImg from '../assets/images/watch_stage_hero_1787247376900.jpg';
import smartwatchImg from '../assets/images/marrento_smartwatch_1787237764931.jpg';
import perfumeImg from '../assets/images/marrento_perfume_1787237776373.jpg';
import sunglassesImg from '../assets/images/luxury_sunglasses_gold_1787251195152.jpg';
import leatherBagImg from '../assets/images/luxury_leather_bag_1787251251979.jpg';
import diamondRopeImg from '../assets/images/marrento_diamond_rope_1787239882769.jpg';
import braceletImg from '../assets/images/marrento_cuban_bracelet_1787237753186.jpg';

export interface WatchProduct {
  id: string;
  name: string;
  subtitle: string;
  category: 'all' | 'chrono' | 'skeleton' | 'gold' | 'leather' | 'smart' | 'accessories';
  price: string;
  priceNum: number;
  originalPrice?: string;
  tag: string;
  img: string;
  description: string;
  specs: {
    movement: string;
    caseMaterial: string;
    glass: string;
    waterResistance: string;
    diameter: string;
  };
}

interface WatchCategoryPageProps {
  onNavigateHome: () => void;
  onNavigateCustomizer?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const WatchCategoryPage: React.FC<WatchCategoryPageProps> = ({
  onNavigateHome,
  onNavigateCustomizer,
  onSelectCategory,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<WatchProduct | null>(null);
  const [cartItems, setCartItems] = useState<{ product: WatchProduct; quantity: number }[]>([
    {
      product: {
        id: 'watch-hero-01',
        name: 'Skeleton Gold Edition 18k',
        subtitle: 'Mecanismo Aparente & Cristal Safira',
        category: 'skeleton',
        price: 'R$ 1.850,00',
        priceNum: 1850,
        tag: 'Mais Desejado',
        img: goldWatchImg,
        description: 'Mecanismo mecânico automático de alta precisão aparente com acabamento Sallaz polido em ouro 18k.',
        specs: {
          movement: 'Automático Calibre M-808 (42h reserva)',
          caseMaterial: 'Aço Cirúrgico 316L com Banho Ouro 18k',
          glass: 'Cristal Safira Antirreflexo Duplo',
          waterResistance: '10 ATM (100 Metros)',
          diameter: '42mm x 12.5mm',
        },
      },
      quantity: 1,
    },
  ]);

  const watchCatalog: WatchProduct[] = [
    {
      id: 'watch-01',
      name: 'Chronograph Obsidian Gold',
      subtitle: 'Timeless luxury design. Ultimate clarity.',
      category: 'chrono',
      price: 'R$ 1.690,00',
      originalPrice: 'R$ 2.100,00',
      priceNum: 1690,
      tag: 'Alta Relojoaria',
      img: heroWatchImg,
      description: 'Cronógrafo esportivo de luxo com ponteiros em ouro 18k, taquímetro gravado a laser e sub-mostradores de precisão.',
      specs: {
        movement: 'Cronógrafo Suíço Quartz de Alta Precisão',
        caseMaterial: 'Aço 316L com tratamento PVD Obsidian & Ouro 18k',
        glass: 'Cristal Safira Flame-Fusion',
        waterResistance: '10 ATM (100m)',
        diameter: '43mm',
      },
    },
    {
      id: 'watch-02',
      name: 'Skeleton Gold Edition 18k',
      subtitle: 'Mecanismo aparente gravado à mão.',
      category: 'skeleton',
      price: 'R$ 1.850,00',
      priceNum: 1850,
      tag: 'Mais Desejado',
      img: goldWatchImg,
      description: 'Peça monumental com movimento visível frontal e traseiro em cristal safira, forjado com revestimento em ouro 18k.',
      specs: {
        movement: 'Mecânico Automático 24 Jewels',
        caseMaterial: 'Aço Inoxidável 316L Ouro 18k Sallaz',
        glass: 'Cristal Safira Antirrisco',
        waterResistance: '5 ATM (50m)',
        diameter: '42mm',
      },
    },
    {
      id: 'sunglasses-01',
      name: 'Luxury Sunglasses Aviator',
      subtitle: 'Timeless design. Ultimate clarity.',
      category: 'accessories',
      price: 'R$ 690,00',
      originalPrice: 'R$ 850,00',
      priceNum: 690,
      tag: 'Edição Ouro',
      img: sunglassesImg,
      description: 'Óculos de sol estilo aviador forjado com armação ultra-leve em liga de titânio e banho dourado, lentes polarizadas UV400.',
      specs: {
        movement: 'Lentes Polarizadas Zeiss UV400',
        caseMaterial: 'Liga de Titânio & Ouro Nobre',
        glass: 'Lentes Antirreflexo Resistentes a Impactos',
        waterResistance: 'Proteção Solar Total UV400',
        diameter: 'Tamanho Universal 58mm',
      },
    },
    {
      id: 'perfume-01',
      name: 'Marrento Imperial Extrait',
      subtitle: 'Crafted for unmatched sophistication.',
      category: 'accessories',
      price: 'R$ 480,00',
      priceNum: 480,
      tag: 'Fragrância Nobre',
      img: perfumeImg,
      description: 'Fragrância amadeirada oriental intensa com notas de âmbar negro, couro toscano, oud e especiarias nobres.',
      specs: {
        movement: 'Concentração Extrait de Parfum (35%)',
        caseMaterial: 'Frasco em Vidro Cristal com Tampa Magnética Dourada',
        glass: 'Vaporizador de Alta Nebulização',
        waterResistance: 'Fixação 14h+',
        diameter: 'Volume: 100ml',
      },
    },
    {
      id: 'leather-bag-01',
      name: 'Leather Royale Briefcase',
      subtitle: 'Elegance in every bespoke detail.',
      category: 'accessories',
      price: 'R$ 1.190,00',
      originalPrice: 'R$ 1.490,00',
      priceNum: 1190,
      tag: 'Couro Legítimo',
      img: leatherBagImg,
      description: 'Pasta executiva confeccionada artesanalmente em couro legítimo flor integral com fivelas e travas em latão polido dourado.',
      specs: {
        movement: 'Costura Francesa Reforçada à Mão',
        caseMaterial: 'Couro Bovino Flor Integral Premium',
        glass: 'Fechos e Zíperes YKK banhados a Ouro',
        waterResistance: 'Impermeabilizado contra respingos',
        diameter: 'Dimensões: 40cm x 30cm x 9cm',
      },
    },
    {
      id: 'watch-03',
      name: 'Royal Chrono All-Black Stealth',
      subtitle: 'Elegância sombria de alto contraste.',
      category: 'chrono',
      price: 'R$ 1.540,00',
      priceNum: 1540,
      tag: 'Edição Noturna',
      img: heroWatchImg,
      description: 'Caixa em acabamento DLC preto fosco militar com ponteiros luminescentes Super-LumiNova e bisel graduado.',
      specs: {
        movement: 'Cronógrafo Quartzo Suíço 1/10s',
        caseMaterial: 'Aço 316L com revestimento DLC Carbon',
        glass: 'Cristal Safira Duplo',
        waterResistance: '10 ATM (100m)',
        diameter: '44mm',
      },
    },
    {
      id: 'watch-04',
      name: 'Smart Luxury Obsidian Pro',
      subtitle: 'Conectividade e tecnologia nobre.',
      category: 'smart',
      price: 'R$ 1.250,00',
      priceNum: 1250,
      tag: 'Smartwatch',
      img: smartwatchImg,
      description: 'Smartwatch com display AMOLED de 1.43", coroa tátil em cerâmica, monitoramento cardíaco e bateria para 10 dias.',
      specs: {
        movement: 'Sensor Óptico Bio-Tracker & Bluetooth 5.3',
        caseMaterial: 'Titânio Aeroespacial & Cerâmica Zircônia',
        glass: 'Display AMOLED Ultra-Bright 1000 nits',
        waterResistance: 'IP68 & 5 ATM',
        diameter: '45mm',
      },
    },
    {
      id: 'chain-01',
      name: 'Corrente Grumet Heavy 18k',
      subtitle: 'Diamantada com elos maciços.',
      category: 'accessories',
      price: 'R$ 790,00',
      priceNum: 790,
      tag: 'Joias Marrento',
      img: diamondRopeImg,
      description: 'Corrente masculina imponente forjada com banho ouro 18k 10 milésimos, corte diamantado de 8 faces e fecho duplo.',
      specs: {
        movement: 'Fecho Duplo Trava Canivete',
        caseMaterial: 'Banho de Ouro 18k 10 Milésimos',
        glass: 'Verniz Antialérgico Nano-Cerâmico',
        waterResistance: 'Resistente a água e suor',
        diameter: 'Comprimento: 65cm / Espessura: 7mm',
      },
    },
  ];

  const filteredProducts = watchCatalog.filter((item) => {
    const matchesCategory =
      activeFilter === 'all'
        ? true
        : activeFilter === 'relogios'
        ? item.category === 'chrono' || item.category === 'skeleton' || item.category === 'gold' || item.category === 'leather' || item.category === 'smart'
        : item.category === activeFilter;

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: WatchProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: WatchProduct; quantity: number }[]
    );
  };

  const totalCartValue = cartItems.reduce(
    (sum, item) => sum + item.product.priceNum * item.quantity,
    0
  );

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 flex flex-col font-sans-clean selection:bg-amber-500 selection:text-black">
      {/* 1. TOP ANNOUNCEMENT BANNER (Matches reference image) */}
      <aside
        aria-label="Avisos e promoções"
        className="w-full bg-gradient-to-r from-black via-zinc-950 to-black border-b border-zinc-800/80 py-2 px-4 text-center cursor-pointer hover:bg-zinc-900 transition-colors"
        onClick={() => setIsCartOpen(true)}
      >
        <p className="font-mono-tech text-[10px] sm:text-xs text-amber-200 tracking-[0.2em] uppercase flex items-center justify-center gap-1.5 font-medium">
          <span>FREE WORLDWIDE SHIPPING ON ALL ORDERS</span>
          <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
        </p>
      </aside>

      {/* 2. LUXURY NAVBAR (Matches reference image with Logo, Menu, Search, Cart) */}
      <header className="sticky top-0 z-40 bg-[#060609]/95 backdrop-blur-md border-b border-zinc-800/60 px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Left: Hamburger & Back Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir Menu"
            className="p-1.5 text-zinc-300 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={onNavigateHome}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-full text-xs font-mono-tech text-amber-300 hover:text-amber-200 transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao 3D</span>
          </button>
        </div>

        {/* Center: Crown / Lion Logo & Brand Name */}
        <div
          onClick={onNavigateHome}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <img
            src={logoImg}
            alt="Marrento Store"
            className="h-7 sm:h-9 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(234,179,8,0.4)] group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col text-left">
            <span className="font-serif-luxury text-sm sm:text-base tracking-[0.25em] text-amber-100 font-bold uppercase">
              MARRENTO
            </span>
            <span className="font-mono-tech text-[8px] sm:text-[9px] tracking-[0.3em] text-amber-400/90 uppercase -mt-1 font-semibold">
              HAUTE HORLOGERIE
            </span>
          </div>
        </div>

        {/* Right: Search & Cart Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Buscar relógio"
            className="p-1.5 text-zinc-300 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Ver Carrinho"
            className="relative p-1.5 text-zinc-300 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#eab308] text-black text-[9px] font-bold rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.6)]">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Live Search Bar dropdown */}
      {isSearchOpen && (
        <div className="bg-[#0c0c11] border-b border-zinc-800 px-4 sm:px-8 py-3 animate-fadeIn">
          <div className="max-w-xl mx-auto relative flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por modelo, movimento, acabamento ou acessório..."
              className="w-full bg-black/60 border border-zinc-700 rounded-lg pl-9 pr-8 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 font-mono-tech"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-zinc-400 hover:text-zinc-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Slide-out Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative w-72 sm:w-80 bg-[#0c0c10] border-r border-zinc-800 h-full p-6 flex flex-col justify-between z-10 animate-slideRight">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <img src={logoImg} alt="Logo" className="h-6 w-auto" />
                  <span className="font-serif-luxury text-sm tracking-widest text-amber-200">
                    MENU MARRENTO
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1 text-zinc-400 hover:text-zinc-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-2 font-mono-tech text-xs tracking-wider uppercase">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onNavigateHome();
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  <span>1. Experiência 3D Interativa</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveFilter('relogios');
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold flex items-center justify-between"
                >
                  <span>2. Catálogo de Relógios</span>
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (onSelectCategory) onSelectCategory('acessorios');
                    else onNavigateHome();
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  <span>3. Joias & Acessórios</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (onSelectCategory) onSelectCategory('perfumes');
                    else onNavigateHome();
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  <span>4. Perfumaria Imperial</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                </button>
              </nav>
            </div>

            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <a
                href="https://wa.me/5561999999999?text=Olá!%20Gostaria%20de%20consultoria%20VIP%20para%20escolher%20um%20relógio%20Marrento."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#eab308] hover:bg-amber-400 text-black font-mono-tech text-xs font-bold rounded-lg text-center flex items-center justify-center gap-2 transition-all shadow-lg uppercase"
              >
                <Headphones className="w-4 h-4" />
                <span>Concierge VIP WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 3. HERO SPLIT SECTION (Exactly matching uploaded screenshot layout) */}
      <section className="relative w-full overflow-hidden bg-[#050507] border-b border-zinc-800/80">
        {/* Subtle Luxury Golden Ray Lighting */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-gradient-to-b from-amber-500/15 via-amber-700/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Call-to-actions */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono-tech text-[10px] sm:text-xs text-amber-300 uppercase tracking-widest font-semibold">
                ALTA RELOJOARIA BRASILEIRA & SUÍÇA
              </span>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-zinc-100 leading-[1.1]">
                Premium <br />
                <span className="text-amber-200 font-normal italic">Shopify Store</span> <br />
                Design
              </h1>

              {/* Decorative Accent Line matching reference screenshot */}
              <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mx-auto lg:mx-0 my-3" />

              <p className="font-mono-tech text-xs sm:text-sm text-zinc-400 tracking-[0.25em] uppercase font-light">
                BUILT TO CONVERT VISITORS INTO BUYERS
              </p>
            </div>

            <p className="font-sans-clean text-xs sm:text-sm text-zinc-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Descubra nossa coleção de cronógrafos e modelos automáticos forjados com precisão cirúrgica, aço 316L, cristal safira e banho ouro 18k.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#catalog-grid"
                className="px-6 py-3 bg-[#eab308] hover:bg-amber-400 text-zinc-950 font-mono-tech text-xs font-bold rounded-lg shadow-[0_0_25px_rgba(234,179,8,0.4)] hover:scale-105 active:scale-95 transition-all tracking-wider uppercase flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORAR CATÁLOGO</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={onNavigateHome}
                className="px-5 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono-tech text-xs rounded-lg hover:border-amber-400/60 transition-all uppercase flex items-center gap-2 cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                <span>EXPERIÊNCIA 3D</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Spotlight Watch on Marble Pedestal (Matches screenshot) */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-square flex items-center justify-center">
              {/* Golden Ambient Spotlight Cone */}
              <div className="absolute -top-12 inset-x-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.35),transparent_70%)] pointer-events-none" />

              {/* Glowing Pedestal Ring */}
              <div className="absolute bottom-6 w-3/4 h-8 bg-amber-500/20 rounded-full blur-xl" />

              {/* Spotlighted Watch Image */}
              <div className="relative z-10 w-full h-full p-4 flex items-center justify-center group">
                <img
                  src={heroWatchImg}
                  alt="Relógio Marrento Chronograph 18k"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Feature Tag */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-amber-400/40 rounded-lg shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span className="font-mono-tech text-[10px] text-amber-200 uppercase tracking-wider font-bold">
                    CHRONO GOLD OBSIDIAN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST BADGES ROW (Matches 4-column row in screenshot) */}
      <section className="w-full bg-[#08080c] border-b border-zinc-800/80 py-6 sm:py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {/* Badge 1: Premium Quality */}
          <div className="p-3 sm:p-4 rounded-xl bg-[#0e0e13]/60 border border-zinc-800/80 flex flex-col items-center justify-center space-y-1.5 hover:border-amber-400/40 transition-colors">
            <div className="p-2 rounded-full bg-amber-500/10 text-amber-400 mb-0.5">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-mono-tech text-[11px] sm:text-xs font-bold text-zinc-100 uppercase tracking-wider">
              PREMIUM QUALITY
            </h3>
            <p className="font-sans-clean text-[10px] sm:text-[11px] text-zinc-400 leading-tight">
              Carefully curated products
            </p>
          </div>

          {/* Badge 2: Trusted Store */}
          <div className="p-3 sm:p-4 rounded-xl bg-[#0e0e13]/60 border border-zinc-800/80 flex flex-col items-center justify-center space-y-1.5 hover:border-amber-400/40 transition-colors">
            <div className="p-2 rounded-full bg-amber-500/10 text-amber-400 mb-0.5">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-mono-tech text-[11px] sm:text-xs font-bold text-zinc-100 uppercase tracking-wider">
              TRUSTED STORE
            </h3>
            <p className="font-sans-clean text-[10px] sm:text-[11px] text-zinc-400 leading-tight">
              100% secure shipping
            </p>
          </div>

          {/* Badge 3: Fast Shipping */}
          <div className="p-3 sm:p-4 rounded-xl bg-[#0e0e13]/60 border border-zinc-800/80 flex flex-col items-center justify-center space-y-1.5 hover:border-amber-400/40 transition-colors">
            <div className="p-2 rounded-full bg-amber-500/10 text-amber-400 mb-0.5">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-mono-tech text-[11px] sm:text-xs font-bold text-zinc-100 uppercase tracking-wider">
              FAST SHIPPING
            </h3>
            <p className="font-sans-clean text-[10px] sm:text-[11px] text-zinc-400 leading-tight">
              Worldwide delivery in 3-7 days
            </p>
          </div>

          {/* Badge 4: 24/7 Support */}
          <div className="p-3 sm:p-4 rounded-xl bg-[#0e0e13]/60 border border-zinc-800/80 flex flex-col items-center justify-center space-y-1.5 hover:border-amber-400/40 transition-colors">
            <div className="p-2 rounded-full bg-amber-500/10 text-amber-400 mb-0.5">
              <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-mono-tech text-[11px] sm:text-xs font-bold text-zinc-100 uppercase tracking-wider">
              24/7 SUPPORT
            </h3>
            <p className="font-sans-clean text-[10px] sm:text-[11px] text-zinc-400 leading-tight">
              We're here to help you anytime
            </p>
          </div>
        </div>
      </section>

      {/* 5. CATALOG SECTION ("HANDPICKED SELECTION - Catálogo de Relógios") */}
      <section id="catalog-grid" className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-8">
        {/* Section Header (Matches Screenshot) */}
        <div className="text-center space-y-2">
          <p className="font-mono-tech text-[10px] sm:text-xs text-amber-300 tracking-[0.3em] uppercase font-semibold">
            HANDPICKED SELECTION
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl text-zinc-100 font-light tracking-wide">
            Catálogo de Relógios
          </h2>
          <div className="w-12 h-[1.5px] bg-amber-400 mx-auto mt-2" />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          {[
            { key: 'all', label: 'Todos os Itens' },
            { key: 'relogios', label: 'Apenas Relógios' },
            { key: 'chrono', label: 'Cronógrafos' },
            { key: 'skeleton', label: 'Skeleton Automático' },
            { key: 'accessories', label: 'Acessórios & Perfumes' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full font-mono-tech text-[10px] sm:text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(234,179,8,0.4)]'
                  : 'bg-[#0d0d12] text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid (Matches the 3-column / 2-column dark luxury cards in screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group relative bg-[#09090d] border border-zinc-800/90 hover:border-amber-400/60 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Product Top Tag */}
              <div className="flex items-center justify-between z-10 mb-3">
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700/80 text-[8.5px] sm:text-[9.5px] font-mono-tech uppercase tracking-wider text-amber-300 font-semibold">
                  {product.tag}
                </span>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="p-1 text-zinc-400 hover:text-amber-300 transition-colors flex items-center gap-1 text-[10px] font-mono-tech"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Detalhes</span>
                </button>
              </div>

              {/* Product Image Stage */}
              <div
                onClick={() => setSelectedProduct(product)}
                className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#040406] border border-zinc-800/60 flex items-center justify-center p-3 cursor-pointer group/img"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain filter contrast-105 group-hover/img:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Product Info & Price */}
              <div className="pt-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-sm sm:text-base font-semibold text-zinc-100 uppercase tracking-wide group-hover:text-amber-200 transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-sans-clean text-[11px] sm:text-xs text-zinc-400 line-clamp-1 mt-0.5">
                    {product.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <span className="font-mono-tech text-sm sm:text-base font-bold text-amber-300 tracking-tight">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="ml-2 font-mono-tech text-[10px] text-zinc-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    aria-label={`Comprar ${product.name}`}
                    className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-amber-400 hover:text-black border border-zinc-700 hover:border-amber-400 text-zinc-200 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md group-hover:scale-110"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM TRUST ROW (Matches 3-item footer in screenshot) */}
      <footer className="w-full bg-[#040407] border-t border-zinc-800/80 py-8 px-4 sm:px-8 mt-12">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-zinc-400 font-mono-tech text-xs tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-amber-400" />
            <span>30-DAY RETURNS</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>SECURE PAYMENTS</span>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>100% AUTHENTIC</span>
          </div>
        </div>

        <div className="text-center pt-6 text-zinc-600 font-mono-tech text-[10px] tracking-widest uppercase">
          © {new Date().getFullYear()} MARRENTO STORE. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* MODAL: Product Detail / Specs */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
        >
          <div className="relative w-full max-w-2xl bg-[#0c0c11] border border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_0_60px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-black border border-zinc-700 flex items-center justify-center p-4">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-3">
                <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono-tech uppercase">
                  {selectedProduct.tag}
                </span>

                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-zinc-100">
                  {selectedProduct.name}
                </h3>

                <p className="font-mono-tech text-xl text-amber-300 font-bold">
                  {selectedProduct.price}
                </p>

                <p className="font-sans-clean text-xs text-zinc-300 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Specs List */}
                <div className="space-y-1.5 pt-2 border-t border-zinc-800 font-mono-tech text-[11px] text-zinc-400">
                  <div>
                    <span className="text-zinc-500">Movimento: </span>
                    <span className="text-zinc-200">{selectedProduct.specs.movement}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">Caixa: </span>
                    <span className="text-zinc-200">{selectedProduct.specs.caseMaterial}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">Vidro: </span>
                    <span className="text-zinc-200">{selectedProduct.specs.glass}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">Resistência: </span>
                    <span className="text-zinc-200">{selectedProduct.specs.waterResistance}</span>
                  </div>
                </div>

                <div className="pt-3 flex gap-3">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 py-3 bg-[#eab308] hover:bg-amber-400 text-black font-mono-tech text-xs font-bold rounded-lg text-center transition-all shadow-lg uppercase cursor-pointer"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DRAWER: Shopping Cart */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative w-full max-w-md bg-[#0c0c11] border-l border-zinc-800 h-full p-6 flex flex-col justify-between z-10 shadow-2xl animate-slideLeft">
            <div className="space-y-6 flex-1 overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-amber-400" />
                  <h3 className="font-serif-luxury text-base font-bold text-zinc-100 uppercase tracking-wider">
                    SEU CARRINHO VIP ({totalCartCount})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 text-zinc-400 hover:text-zinc-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="py-12 text-center text-zinc-500 font-mono-tech text-xs space-y-3">
                  <p>SEU CARRINHO ESTÁ VAZIO</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded text-xs uppercase"
                  >
                    Explorar Modelos
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3 p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl items-center"
                    >
                      <div className="w-16 h-16 rounded-lg bg-black border border-zinc-800 overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
                        <img
                          src={item.product.img}
                          alt={item.product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0 space-y-1">
                        <h4 className="font-serif-luxury text-xs font-semibold text-zinc-100 truncate">
                          {item.product.name}
                        </h4>
                        <p className="font-mono-tech text-xs text-amber-300 font-bold">
                          {item.product.price}
                        </p>

                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="w-5 h-5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono-tech text-xs text-zinc-200">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="w-5 h-5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer Checkout */}
            {cartItems.length > 0 && (
              <div className="pt-4 border-t border-zinc-800 space-y-3">
                <div className="flex items-center justify-between font-mono-tech text-sm">
                  <span className="text-zinc-400 uppercase">Subtotal Estimado:</span>
                  <span className="text-amber-300 font-bold text-base">
                    R$ {totalCartValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <a
                  href={`https://wa.me/5561999999999?text=${encodeURIComponent(
                    `Olá Marrento Store! Gostaria de finalizar meu pedido VIP:\n` +
                      cartItems
                        .map(
                          (i) => `• ${i.product.name} (Qtd: ${i.quantity}) - ${i.product.price}`
                        )
                        .join('\n') +
                      `\nTotal: R$ ${totalCartValue.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                      })}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#eab308] hover:bg-amber-400 text-black font-mono-tech text-xs font-bold rounded-xl text-center flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(234,179,8,0.4)] uppercase cursor-pointer"
                >
                  <span>FINALIZAR PEDIDO VIA CONCIERGE VIP</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="font-mono-tech text-[9px] text-zinc-500 text-center uppercase tracking-wider">
                  Envio expresso segurado • Garantia vitalícia • Atendimento VIP
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
