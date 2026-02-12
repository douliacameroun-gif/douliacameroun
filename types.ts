export type Language = 'FR' | 'EN';

export type ViewType = 'home' | 'vision' | 'packs' | 'services' | 'engagement' | 'audit';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface StatItem {
  label: Record<Language, string>;
  value: number;
  suffix: string;
}

export interface PackItem {
  title: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  features: Record<Language, string[]>;
}