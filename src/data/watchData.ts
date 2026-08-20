import { WatchSpecification, Hotspot, CaseFinish } from '../types';

export const CASE_HOTSPOTS: Hotspot[] = [
  {
    id: 'bezel',
    x: 48,
    y: 32,
    title: 'Bisel Unidirecional de 120 Cliques',
    description: 'Usinado em CNC de 5 eixos com ranhuras de alta aderência para precisão tátil incomparável.',
    detail: 'Tolerância dimensional inferior a 0.005mm com inserção cerâmica resistente a riscos.'
  },
  {
    id: 'case-body',
    x: 42,
    y: 52,
    title: 'Aço Inoxidável 316L Cirúrgico',
    description: 'Forjado sob 200 toneladas de pressão térmica para máxima integridade molecular.',
    detail: 'Resistência à corrosão salina e hipoalergênico com acabamento escovado à mão.'
  },
  {
    id: 'crown-guard',
    x: 61,
    y: 55,
    title: 'Proteção Integrada de Coroa',
    description: 'Geometria reforçada esculpida diretamente no bloco maciço da caixa principal.',
    detail: 'Garante vedação hermética para mergulho profissional de até 300 metros (30 ATM).'
  },
  {
    id: 'lugs',
    x: 58,
    y: 28,
    title: 'Garras Chanfradas de Alta Ergonomia',
    description: 'Ângulo de caimento otimizado para abraçar perfeitamente o contorno do pulso.',
    detail: 'Furos passantes para troca rápida de pulseiras com pino rosqueado em titânio.'
  }
];

export const CASE_SPECIFICATIONS: WatchSpecification[] = [
  {
    id: 'spec-1',
    title: 'Diâmetro da Caixa',
    subtitle: 'Proporção Áurea',
    value: '41.5 mm',
    description: 'Dimensão clássica contemporânea com espessura de perfil de apenas 12.2 mm.',
    iconName: 'Maximize2'
  },
  {
    id: 'spec-2',
    title: 'Resistência Hídrica',
    subtitle: 'Certificação ISO 6425',
    value: '30 ATM / 300m',
    description: 'Testado individualmente em câmara hiperbárica de pressurização extrema.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'spec-3',
    title: 'Material Base',
    subtitle: 'Grau Austenítico',
    value: 'Aço 316L / Titânio G5',
    description: 'Liga de altíssima densidade tratada contra magnetismo e choques mecânicos.',
    iconName: 'Cpu'
  },
  {
    id: 'spec-4',
    title: 'Cristal Protetor',
    subtitle: 'Dureza 9 Mohs',
    value: 'Safira Abobadada',
    description: 'Quádruplo revestimento anti-reflexo interno para legibilidade cristalina em qualquer ângulo.',
    iconName: 'Sparkles'
  }
];

export const CASE_FINISHES: CaseFinish[] = [
  {
    id: 'raw-steel',
    name: 'Aço Cirúrgico Escovado',
    colorCode: '#d1d5db',
    material: 'Aço Inoxidável 316L',
    coating: 'Satin Hand-Brushed',
    weight: '94g (caixa pura)',
    resistance: '300m (30 ATM)',
    accentColor: '#0ea5e9'
  },
  {
    id: 'dlc-black',
    name: 'Black Diamond DLC',
    colorCode: '#27272a',
    material: 'Titânio Grau 5 + Carbono DLC',
    coating: 'Diamond-Like Carbon 3.5µm',
    weight: '68g (ultra leve)',
    resistance: '500m (50 ATM)',
    accentColor: '#38bdf8'
  },
  {
    id: 'bronze-aged',
    name: 'Bronze Marrento Heritage',
    colorCode: '#b45309',
    material: 'Liga CuSn8 Bronze Marítimo',
    coating: 'Pátina Natural Auto-Regenerativa',
    weight: '108g (densidade clássica)',
    resistance: '300m (30 ATM)',
    accentColor: '#f59e0b'
  },
  {
    id: 'rose-gold',
    name: 'Ouro Nobre 18K PVD',
    colorCode: '#fcd34d',
    material: 'Aço 316L + Ouro Rosa 18K',
    coating: 'Deposição PVD de 5 Microns',
    weight: '98g (acabamento nobre)',
    resistance: '200m (20 ATM)',
    accentColor: '#eab308'
  }
];
