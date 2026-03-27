export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  image: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
