export interface Skill {
  name: string;
  category: string;
  iconName: string;
  description?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Creating modern, interactive, high-performance web user interfaces.",
    skills: [
      { name: "React.js", category: "Frontend", iconName: "Code2", highlight: true, description: "Component architecture & hooks" },
      { name: "Next.js", category: "Frontend", iconName: "Globe", highlight: true, description: "App Router, SSR, SSG & SEO" },
      { name: "JavaScript ES6+", category: "Frontend", iconName: "FileCode", highlight: true, description: "Async/await, DOM, closures" },
      { name: "Tailwind CSS", category: "Frontend", iconName: "Palette", highlight: true, description: "Utility-first modern styling" },
      { name: "HTML5", category: "Frontend", iconName: "Layout", description: "Semantic, accessible HTML structure" },
      { name: "CSS3", category: "Frontend", iconName: "Sparkles", description: "Flexbox, Grid, keyframe animations" },
      { name: "Bootstrap", category: "Frontend", iconName: "Layers", description: "Responsive grid & component design" },
      { name: "jQuery", category: "Frontend", iconName: "Cpu", description: "DOM manipulation & legacy support" },
    ],
  },
  {
    title: "Development & Integration",
    description: "Connecting backend APIs, payment systems, and developer workflows.",
    skills: [
      { name: "REST APIs", category: "Integration", iconName: "Server", highlight: true, description: "Asynchronous data fetching & state" },
      { name: "API Integration", category: "Integration", iconName: "Workflow", highlight: true, description: "Axios, Fetch, error handling" },
      { name: "Git & GitHub", category: "Integration", iconName: "GitBranch", highlight: true, description: "Branching, PRs, version control" },
      { name: "Responsive Web Design", category: "Integration", iconName: "Smartphone", highlight: true, description: "Mobile-first adaptive layouts" },
      { name: "UI/UX Implementation", category: "Integration", iconName: "Eye", description: "Figma translation to code" },
      { name: "Form Validation", category: "Integration", iconName: "CheckSquare", description: "Client & schema validation" },
      { name: "Stripe Integration", category: "Integration", iconName: "CreditCard", description: "Checkout flows & webhooks" },
      { name: "DataTables", category: "Integration", iconName: "Table", description: "Complex data display & sorting" },
      { name: "WordPress", category: "Integration", iconName: "Globe2", description: "CMS customization & theme integration" },
    ],
  },
  {
    title: "Professional Skills",
    description: "Engineering practices, optimization, and collaborative workflows.",
    skills: [
      { name: "Problem Solving", category: "Professional", iconName: "Brain", highlight: true, description: "Logical analysis & bug resolution" },
      { name: "Performance Optimization", category: "Professional", iconName: "Zap", highlight: true, description: "Core Web Vitals & bundle efficiency" },
      { name: "Reusable Components", category: "Professional", iconName: "Box", highlight: true, description: "Modular UI library architecture" },
      { name: "Debugging & Troubleshooting", category: "Professional", iconName: "Bug", description: "DevTools & deep-dive diagnostics" },
      { name: "Cross-Browser Compatibility", category: "Professional", iconName: "Monitor", description: "Seamless rendering across browsers" },
      { name: "Code Quality & Refactoring", category: "Professional", iconName: "ShieldCheck", description: "Clean code & maintainable structure" },
      { name: "Agile / Scrum", category: "Professional", iconName: "Users", description: "Sprint planning & team collaboration" },
    ],
  },
];
