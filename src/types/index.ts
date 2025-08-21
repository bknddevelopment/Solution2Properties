export interface PropertyDetails {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: 'single-family' | 'condo' | 'townhouse' | 'multi-family' | 'other';
  bedrooms: number;
  bathrooms: number;
  squareFootage?: number;
  yearBuilt?: number;
  condition: 'excellent' | 'good' | 'fair' | 'poor' | 'needs-repair';
  timeline: 'asap' | '30-days' | '60-days' | '90-days' | 'flexible';
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: 'phone' | 'email' | 'text';
}

export interface OfferFormData extends PropertyDetails, ContactInfo {
  additionalInfo?: string;
  marketing?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  saleDate?: string;
  saleAmount?: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}