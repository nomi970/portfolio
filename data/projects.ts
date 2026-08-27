export interface Project {
  id: number;
  name: string;
  url: string;
  category:
    | "Web Applications"
    | "Dashboards"
    | "Corporate Websites"
    | "E-commerce"
    | "Education"
    | "AI"
    | "Landing Pages";
  description: string;
  technologies: string[];
  featured: boolean;
  accentColor: string;
  gradient: string;
}

export const projectCategories = [
  "All",
  "Web Applications",
  "Dashboards",
  "Corporate Websites",
  "E-commerce",
  "Education",
  "AI",
  "Landing Pages",
] as const;

export const projectsData: Project[] = [
  {
    id: 1,
    name: "IFFSIE",
    url: "https://iffsie-2.vercel.app/",
    category: "Web Applications",
    description:
      "The Iftiin Foundation for Social Innovation & Entrepreneurship platform empowering community innovation, social impact projects, and entrepreneurship initiatives.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "UI/UX"],
    featured: false,
    accentColor: "#06b6d4",
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    id: 2,
    name: "Employer Ease Dashboard",
    url: "https://employer-ease-dashboard-zapta.vercel.app/",
    category: "Dashboards",
    description:
      "Comprehensive KPI & workforce management dashboard featuring real-time employee performance metrics, interactive analytical charts, and automated team scheduling.",
    technologies: ["React.js", "Tailwind CSS", "DataTables", "REST APIs", "Chart.js"],
    featured: true,
    accentColor: "#3b82f6",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
  {
    id: 3,
    name: "Visa Green",
    url: "https://visa-green.vercel.app/",
    category: "Corporate Websites",
    description:
      "Modern visa & immigration consultancy web application providing online document evaluation, application status tracking, and automated consultation scheduling.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Form Validation"],
    featured: false,
    accentColor: "#10b981",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: 4,
    name: "E-Shope Tan",
    url: "https://e-shope-tan.vercel.app/",
    category: "E-commerce",
    description:
      "Full-featured e-commerce storefront with real-time product filtering, dynamic cart management, secure checkout user flows, and mobile-first responsive layout.",
    technologies: ["React.js", "Tailwind CSS", "Stripe Integration", "JavaScript"],
    featured: false,
    accentColor: "#f59e0b",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: 5,
    name: "Primal Zone",
    url: "https://primal-zone.vercel.app/",
    category: "Landing Pages",
    description:
      "High-impact fitness and athletic training portal featuring membership plans, trainer profiles, interactive exercise showcases, and smooth scroll animations.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    featured: false,
    accentColor: "#ef4444",
    gradient: "from-red-500/20 via-rose-500/10 to-transparent",
  },
  {
    id: 6,
    name: "Sales Akademie",
    url: "https://sales-akademie.vercel.app/",
    category: "Education",
    description:
      "Interactive sales training & educational portal offering structured online courses, progress tracking, video learning modules, and student management.",
    technologies: ["React.js", "Tailwind CSS", "REST APIs", "JavaScript"],
    featured: false,
    accentColor: "#8b5cf6",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: 7,
    name: "Balila Education",
    url: "https://balila-education.vercel.app/",
    category: "Education",
    description:
      "Academic web portal providing educational resources, online course enrollment, student registration forms, and institutional information architecture.",
    technologies: ["React.js", "Bootstrap", "Form Validation", "JavaScript"],
    featured: false,
    accentColor: "#0284c7",
    gradient: "from-sky-600/20 via-blue-500/10 to-transparent",
  },
  {
    id: 8,
    name: "Tapplix Tech",
    url: "https://tapplix-tech.vercel.app/",
    category: "Corporate Websites",
    description:
      "Sleek technology agency platform highlighting custom software development services, technology stack showcases, and interactive lead capture forms.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "UI/UX"],
    featured: false,
    accentColor: "#6366f1",
    gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",
  },
  {
    id: 9,
    name: "Construct Build",
    url: "https://construct-build-one.vercel.app/",
    category: "Corporate Websites",
    description:
      "Industrial construction & engineering firm portfolio displaying large-scale architectural projects, specialized building services, and project inquiries.",
    technologies: ["React.js", "Tailwind CSS", "Responsive Design", "JavaScript"],
    featured: false,
    accentColor: "#d97706",
    gradient: "from-amber-600/20 via-yellow-500/10 to-transparent",
  },
  {
    id: 10,
    name: "Eco Builder",
    url: "https://eco-builder.vercel.app/",
    category: "Corporate Websites",
    description:
      "Connect ECO Builders web app dedicated to sustainable construction, green building technology, eco-conscious materials, and client consultations.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
    featured: false,
    accentColor: "#10b981",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
  {
    id: 11,
    name: "Sale Enigma Reload",
    url: "https://sale-enigmareload.vercel.app/",
    category: "AI",
    description:
      "Intelligent software solutions hub engineering AI-powered digital products, scalable enterprise workflows, and high-conversion sales automation.",
    technologies: ["React.js", "Tailwind CSS", "REST APIs", "AI Integration"],
    featured: false,
    accentColor: "#ec4899",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
  },
  {
    id: 12,
    name: "Barricade Development",
    url: "https://barricade-development-yiid.vercel.app/",
    category: "Dashboards",
    description:
      "Unified security & surveillance platform bringing intrusion alerts, fire systems, access control, camera streams, and billing into one central dashboard.",
    technologies: ["React.js", "Tailwind CSS", "DataTables", "REST APIs", "Recharts"],
    featured: true,
    accentColor: "#00f2fe",
    gradient: "from-cyan-400/20 via-teal-500/10 to-transparent",
  },
  {
    id: 13,
    name: "Vita AI",
    url: "https://vita-ai-theta.vercel.app/",
    category: "AI",
    description:
      "Free AI-driven health & fitness coach app delivering personalized nutrition guidance, calorie tracking, workout plans, and AI health assistance.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "AI Assistant", "REST APIs"],
    featured: true,
    accentColor: "#8b5cf6",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
  },
  {
    id: 14,
    name: "Sync4Tech",
    url: "https://sync4tech.co/",
    category: "Web Applications",
    description:
      "Modern responsive web platform providing digital transformation workflows, cross-device compatibility, and scalable tech infrastructure solutions.",
    technologies: ["React.js", "Tailwind CSS", "API Integration", "JavaScript"],
    featured: false,
    accentColor: "#3b82f6",
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
  },
  {
    id: 15,
    name: "ZeeFrames",
    url: "https://zeeframes.com/",
    category: "Corporate Websites",
    description:
      "Premium UI/UX Design Agency website presenting high-fidelity web, mobile, and SaaS product designs, Figma workflows, and branding showcases.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "UI/UX Implementation"],
    featured: true,
    accentColor: "#a855f7",
    gradient: "from-purple-600/20 via-fuchsia-500/10 to-transparent",
  },
];
