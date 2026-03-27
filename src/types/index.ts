export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface Service {
  id: number;
  title: string;
  image: string;
  href: string;
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
