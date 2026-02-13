
export type Language = 'FR' | 'EN';

export type ViewType = 'home' | 'vision' | 'packs' | 'services' | 'engagement' | 'audit' | 'contact';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  role: string;
  companyName: string;
  companyWebsite: string;
  companySize: string;
  annualRevenue: string;
  budget: string;
  service: string;
  message: string;
}
