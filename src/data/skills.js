import { FaReact, FaNodeJs, FaDatabase, FaTools, FaAws, FaGithub } from "react-icons/fa"

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiDocker,
  SiPostman,
  SiGit,
  SiSocketdotio,
  SiJavascript,
} from "react-icons/si"

export const skillCategories = [
  {
    title: "Frontend",

    icon: FaReact,

    color: "bg-cyan-500/20",

    description:
      "Building modern, responsive and interactive user interfaces with performance and accessibility in mind.",

    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
  },

  {
    title: "Backend",

    icon: FaNodeJs,

    color: "bg-green-500/20",

    description:
      "Developing scalable APIs, authentication systems and backend architectures for production applications.",

    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",
      "Socket.io",
    ],
  },

  {
    title: "Database & Cloud",

    icon: FaDatabase,

    color: "bg-violet-500/20",

    description: "Designing efficient databases and deploying secure cloud-based applications.",

    skills: ["MongoDB", "PostgreSQL", "Redis", "AWS EC2", "AWS S3"],
  },

  {
    title: "Developer Tools",

    icon: FaTools,

    color: "bg-orange-500/20",

    description:
      "Using modern development workflows, testing tools and version control to build reliable software.",

    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },

  {
    title: "AI & Automation",

    icon: SiJavascript,

    color: "bg-pink-500/20",

    description: "Integrating AI models and workflow automation into modern applications.",

    skills: [
      "Gemini API",
      "OpenAI API",
      "Prompt Engineering",
      "n8n basic",
    ],
  },

  {
    title: "Currently Learning",

    icon: FaAws,

    color: "bg-blue-500/20",

    description:
      "Continuously expanding my knowledge with modern technologies and scalable architectures.",

    skills: ["CI/CD", "AWS", "WebSockets"],
    // skills: ["System Design", "Microservices", "Kubernetes", "CI/CD", "AWS", "WebSockets"],
  },
]
