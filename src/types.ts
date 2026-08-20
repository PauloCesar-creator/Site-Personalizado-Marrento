export interface WatchSpecification {
  id: string;
  title: string;
  subtitle: string;
  value: string;
  description: string;
  iconName: string;
}

export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
  detail: string;
}

export interface CaseFinish {
  id: string;
  name: string;
  colorCode: string;
  material: string;
  coating: string;
  weight: string;
  resistance: string;
  accentColor: string;
}
