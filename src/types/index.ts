export interface ContactInfo {
  phone: string
  email: string
  linkedin: string
  linkedinUrl: string
  github: string
  githubUrl: string
}

export interface Profile {
  name: string
  title: string
  tagline: string
  summary: string
  contact: ContactInfo
  cvPath: string
}

export interface Education {
  institution: string
  period: string
  degree?: string
  concentration?: string
  gpa?: string
  note?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceProject {
  title: string
  role?: string
  description: string
  technologies: string[]
}

export interface Experience {
  company: string
  period: string
  role?: string
  description?: string
  projects?: ExperienceProject[]
}

export interface Award {
  title: string
  issuer: string
  year?: string
}

export interface OnlineCourse {
  title: string
  provider: string
  status: 'completed' | 'in-progress'
}

export type CertificateCategory =
  | 'all'
  | 'frontend'
  | 'backend'
  | 'devops'
  | 'machine-learning'

export interface Certificate {
  id: string
  title: string
  issuer: string
  category: Exclude<CertificateCategory, 'all'>
  fileName: string
  filePath: string
}
