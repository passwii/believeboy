// 通用类型定义
export interface BaseComponentProps {
  className?: string;
  children?: any;
}

// 导航相关类型
export interface NavItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

// 服务相关类型
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

// 团队成员类型
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// 联系表单类型
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}

// 招聘职位类型
export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: string;
  salary?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

// SEO服务类型
export interface SEOService {
  id: string;
  title: string;
  description: string;
  price?: string;
  features: string[];
  popular?: boolean;
}

// 客户评价类型
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

// 联系信息类型
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}