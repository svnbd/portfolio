export interface SkillItem {
  name: string;
  level: number; // percentage e.g. 95
  experience: string;
  iconName: string;
  category: 'backend' | 'frontend' | 'database' | 'security' | 'tools';
  description: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'laravel' | 'react-node' | 'security-api' | 'fullstack';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  architecture: {
    backend: string;
    frontend: string;
    database: string;
    security: string;
  };
  features: string[];
  securityImplementations: string[];
  apiEndpoints?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ApiEndpointDemo {
  id: string;
  title: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  category: 'Authentication' | 'API Security' | 'Data & MySQL' | 'Payment Integration';
  description: string;
  headers: Record<string, string>;
  requestBody?: Record<string, any>;
  responseStatus: number;
  responseHeaders: Record<string, string>;
  responseBody: Record<string, any>;
  securityFeature: string;
}

export interface SecurityCheckItem {
  id: string;
  title: string;
  standard: string; // e.g. OWASP Top 10, PCI-DSS
  status: 'Hardened' | 'Active Protection' | 'Strict Enforced';
  description: string;
  implementationDetail: string;
  techUsed: string[];
}

export interface ServiceOffering {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  deliverables: string[];
  technologies: string[];
  idealFor: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Freelance' | 'Milestone';
  description: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  projectType: string;
}
