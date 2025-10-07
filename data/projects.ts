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
      "Led frontend development for AWS Fargate features, improving console efficiency and user experience for 500k+ daily users.",
    highlights: [
      "Improved Console efficiency by 10% through UX enhancements",
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
      "Achieved 80% adoption rate across sort centers",
      "Generated $500k in quarterly savings",
      "Designed UX for MVP in 2 weeks with 90% stakeholder satisfaction",
      "Boosted team productivity by 20% through standardized code review",
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
      "Implemented secure OAuth API with AES-512 encryption",
    ],
    techStack: ["JavaScript", "Java", "REST API", "Oracle", "SQL", "Jenkins"],
    type: "professional",
    timeframe: "2015 - 2021",
    logoUrl: "/logos/ice.png",
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
