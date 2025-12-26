// Core data models and TypeScript interfaces

export interface SiteConfig {
  business: BusinessInfo;
  branding: BrandingConfig;
  content: ContentConfig;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  smsNumber?: string;
  email: string;
  web3formsAccessKey?: string;
  operatedBy?: string;
  address?: BusinessAddress;
  serviceArea?: string;
  hours: BusinessHours;
}

export interface BusinessAddress {
  company: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  formatted: string;
}

export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface BrandingConfig {
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
  };
}

export interface ContentConfig {
  services: Service[];
  benefits: Benefit[];
  brands: Brand[];
  problems: Problem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Brand {
  name: string;
  logo: string;
  alt: string;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export interface CTAButton {
  text: string;
  action: 'call' | 'form' | 'scroll' | 'link';
  href?: string;
  variant: 'primary' | 'secondary' | 'call';
}
