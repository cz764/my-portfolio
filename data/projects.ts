export interface Project {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  logoUrl?: string;
  type: "personal" | "professional";
  timeframe: string;
}

export const projects: Project[] = [
  {
    title: "ECS Console",
    description:
      "Led frontend development for AWS ECS and Fargate features, improving console efficiency and user experience for 500k+ daily users.",
    highlights: [
      "Improved ECS Console efficiency by 10% through UX enhancements",
      "Delivered 100% of MLP features on time",
      "Enhanced code review process with custom ESLint rules",
    ],
    techStack: ["React", "TypeScript", "AWS Fargate", "CloudWatch", "REST API"],
    type: "professional",
    timeframe: "2024 - 2025",
    logoUrl: "/logos/aws.png",
  },
  {
    title: "Sort Center Solution",
    description:
      "Led frontend design and development of 3 greenfield projects for Amazon's Sort Centers, driving significant operational savings.",
    highlights: [
      "Designed UX for greenfield MVP in 2 weeks, earning 90% stakeholder satisfaction",
      "Cooperated with backend engineers and stakeholders during trade-off decisions to ensure milestones were met",
      "Implemented and launched the MVP on time in 3 months",
      "Achieved 80% adoption rate with daily active users at 10k+ level",
      "Generated $500k in quarterly savings across the organization",
      "Boosted team productivity by 20% through standardized code review process",
      "Mentored 3 junior engineers to independent, production-level contributors",
    ],
    techStack: ["React", "TypeScript", "React Query", "Jest", "Docker"],
    type: "professional",
    timeframe: "2021 - 2024",
    logoUrl: "/logos/amazon.jpg",
  },
  {
    title: "Bond Trading Application",
    description:
      "Delivered 10+ web features for ICE's bond trading platform serving 10k daily users, contributing to 20% revenue growth.",
    highlights: [
      "Improved search performance by 30% through data structure refactoring",
      "Sped up CRUD operations by 10% with optimized RESTful APIs",
      "Guided 2 junior developers, accelerating their growth to self-sufficient contributors",
    ],
    techStack: ["JavaScript", "Java", "REST API", "Oracle", "SQL", "Jenkins"],
    type: "professional",
    timeframe: "2015 - 2021",
    logoUrl: "/logos/ice.png",
  },
  {
    title: "Recipe Collection Site",
    description:
      "Designed and implemented a recipe collection website that shows my favorite recipes concisely, with the latest best practices I've learned using Next.js stack.",
    highlights: [
      "Designed the website layout, color palette, logo and components in Figma",
      "Implemented UI components with Next.js, HeroUI and TailwindCSS stack",
      "Managed project estimation and timelines using Asana and spreadsheets",
      "Deployed proof of concept to Vercel with a working home page",
    ],
    techStack: [
      "Next.js",
      "HeroUI",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vercel",
    ],
    githubUrl: "https://github.com/cz764/recipe-collection-fav",
    liveUrl: "https://recipe-collection-neon.vercel.app/",
    type: "personal",
    timeframe: "2025 - present",
  },
  {
    title: "Next.js Portfolio Site",
    description:
      "Built a modern personal portfolio website to showcase projects and practice full-stack development patterns.",
    highlights: [
      "Leveraged Claude AI for component generation and UI refinement",
      "Implemented modern design patterns and best practices",
      "Deployed with automated CI/CD pipeline",
    ],
    techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Vercel"],
    githubUrl: "https://github.com/cz764/my-portfolio",
    type: "personal",
    timeframe: "2025",
  },
  {
    title: "User Center with React and Redux",
    description:
      "Developed a single-page application with authentication and user dashboard, focusing on performance optimization.",
    highlights: [
      "Built complete auth flow and user management system",
      "Improved UX with lazy loading and React Suspense",
      "Implemented Redux for state management",
    ],
    techStack: ["React", "Redux", "React Router", "Webpack", "Antd"],
    githubUrl: "https://github.com/cz764/frontend-personal-app",
    liveUrl: "https://frontend-personal-app.vercel.app/",
    type: "personal",
    timeframe: "2023",
  },
];
