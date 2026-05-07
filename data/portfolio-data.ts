import {
  Brain,
  Code2,
  Database,
  Cloud,
  Globe,
  Server,
  Cpu,
  Zap,
  GitBranch,
  Box,
  type LucideIcon,
} from "lucide-react";

export const personalInfo = {
  name: "Soumyajit Khan",
  role: "Full Stack Developer | AI Engineer",
  location: "Kolkata, India",
  email: "reach@devsoumyajit.in",
  tagline: "Building scalable AI-powered web applications and backend systems.",
  about:
    "Results-driven Full Stack Developer with production experience building scalable web applications, REST APIs, AI-powered systems, and backend architectures. Skilled in Next.js, React, Node.js, MongoDB, LangChain, RAG pipelines, Docker, CI/CD, and modern DevOps workflows. Passionate about applied AI systems, performance optimization, and real-world product engineering.",
  social: {
    github: "https://github.com/dev-soumyajit",
    linkedin: "https://www.linkedin.com/in/soumyajit-khan-48517a22a/",
    twitter: "#",
  },
  resumeUrl: "https://drive.google.com/file/d/1kDeFLzwrVcSMDQuMGSiLEg29ztJao5dR/view?usp=drive_link",
};

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Globe,
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "React.js", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Code2 },
      { name: "ShadCN UI", icon: Box },
      { name: "Framer Motion", icon: Zap },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "FastAPI", icon: Zap },
      { name: "Django", icon: Server },
      { name: "REST APIs", icon: Globe },
      { name: "JWT Auth", icon: Code2 },
    ],
  },
  {
    title: "AI / LLM",
    icon: Brain,
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "LangChain", icon: Brain },
      { name: "RAG Pipelines", icon: Database },
      { name: "OpenAI API", icon: Brain },
      { name: "Prompt Engineering", icon: Cpu },
      { name: "Vector DBs", icon: Database },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-orange-500 to-amber-600",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-rose-500 to-pink-600",
    skills: [
      { name: "Docker", icon: Box },
      { name: "AWS", icon: Cloud },
      { name: "GitHub Actions", icon: GitBranch },
      { name: "CI/CD", icon: Zap },
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    color: "from-indigo-500 to-violet-600",
    skills: [
      { name: "JavaScript", icon: Code2 },
      { name: "Python", icon: Code2 },
      { name: "Java", icon: Code2 },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "foundry",
    title: "Foundry",
    subtitle: "AI Startup Validation Platform",
    description:
      "AI-powered startup validation system that analyzes startup ideas using LLM reasoning and retrieval augmented generation. Built with a production-grade async pipeline architecture.",
    features: [
      "Market fit analysis",
      "Competitive analysis",
      "AI-powered insights",
      "RAG architecture",
      "Async backend pipelines",
    ],
    tech: ["Python", "FastAPI", "LangChain", "OpenAI API", "RAG", "Vector DB"],
    gradient: "from-violet-600 to-indigo-600",
    icon: "brain",
  },
  {
    id: "yoom",
    title: "Yoom",
    subtitle: "Video Conferencing Platform",
    description:
      "Modern video conferencing application supporting real-time meetings, scheduling, authentication, and seamless communication built on cutting-edge streaming infrastructure.",
    features: [
      "Real-time meetings",
      "Smart scheduling",
      "Secure authentication",
      "Role-based access",
      "Presence management",
    ],
    tech: ["Next.js 14", "TypeScript", "Stream.io", "Clerk", "Tailwind CSS"],
    liveUrl: "https://yoom.soumyajit.site",
    gradient: "from-cyan-600 to-blue-600",
    icon: "video",
  },
  {
    id: "ai-call",
    title: "AI Call Processing",
    subtitle: "Intelligent Call Pipeline",
    description:
      "Automated call-processing pipeline with AI-powered transcription, intent detection, scheduling extraction, and smart workflow automation.",
    features: [
      "AI transcription",
      "Intent detection",
      "Schedule extraction",
      "Smart workflows",
      "Real-time processing",
    ],
    tech: ["Node.js", "MongoDB", "AI APIs", "Docker"],
    gradient: "from-emerald-600 to-teal-600",
    icon: "phone",
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Azmth Labs Private Limited",
    role: "Founding Full Stack Developer & DevOps Engineer",
    period: "2025 — Present",
    location: "India",
    highlights: [
      "Built scalable production applications serving real users with high availability",
      "Designed and implemented secure REST APIs with JWT authentication and role-based access",
      "Dockerized microservices and orchestrated deployments for consistent environments",
      "Engineered CI/CD pipelines with GitHub Actions for automated testing and deployment",
      "Integrated AI workflow automation using LangChain and OpenAI for intelligent systems",
    ],
    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Docker",
      "AWS",
      "LangChain",
      "GitHub Actions",
    ],
  },
];

export interface AiCapability {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export const aiCapabilities: AiCapability[] = [
  {
    title: "LLM Engineering",
    description:
      "Building production-grade systems with large language models, prompt engineering, and fine-tuned pipelines for real-world applications.",
    icon: "brain",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "RAG Pipelines",
    description:
      "Designing retrieval-augmented generation systems with vector databases, semantic search, and context-aware AI responses.",
    icon: "database",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "AI Automation",
    description:
      "Creating intelligent automation workflows that combine AI reasoning with real-world actions for business process optimization.",
    icon: "zap",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Applied AI Systems",
    description:
      "End-to-end AI system architecture from data pipelines to inference APIs, designed for scalability and production reliability.",
    icon: "cpu",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
];

export const stats = [
  { label: "Projects Built", value: "15+" },
  { label: "AI Systems", value: "5+" },
  { label: "APIs Designed", value: "50+" },
  { label: "Lines of Code", value: "100K+" },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI", href: "#ai" },
  { label: "Contact", href: "#contact" },
];
