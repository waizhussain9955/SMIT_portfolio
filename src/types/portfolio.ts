export type ProjectCategory = 'all' | 'saas' | 'web' | 'mobile' | 'ai' | 'games';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  apkUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'core-ai' | 'frontend' | 'mobile-backend' | 'tools';
  proficiency?: number;
  highlight?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  handle?: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    role: string;
    secondaryRole: string;
    location: string;
    availability: string;
    email: string;
    whatsapp: string;
    whatsappNumber: string;
    tagline: string;
    bio: string;
    resumeUrl?: string;
  };
  socials: SocialLink[];
  skills: Skill[];
  projects: Project[];
  services: Service[];
}
