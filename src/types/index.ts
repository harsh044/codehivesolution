export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  features: string[];
  icon: string;
  ctaText: string;
  deliverables: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  fallbackGradient: string;
  features: string[];
  metrics: string[];
  clientType: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  activities: string[];
  deliverables: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  exampleSolutions: string[];
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud';
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
}
