// Import your project screenshots

import resumeBuilder from "../assets/projects/resume-builder.png"
import shopMaster from "../assets/projects/shopmaster.png"
import learn2survive from "../assets/projects/learn2survive.png"

export const projects = [
  {
    featured: true,

    title: "ResuInstant - AI Resume Builder",

    image: resumeBuilder,

    description:
      "An AI-powered resume builder that helps users create ATS-friendly resumes with real-time AI suggestions, resume scoring, multiple templates, and one-click PDF export.",

    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "JWT"],

    features: [
      "AI-powered resume generation",
      "ATS resume analysis & score",
      "Section-wise AI enhancement",
      "Professional templates",
      "One-click PDF export",
    ],

    live: "https://your-live-link.com",

    github: "https://github.com/yourusername/resuinstant",
  },

  {
    featured: true,

    title: "ShopMaster",

    image: shopMaster,

    description:
      "A complete MERN eCommerce platform with secure authentication, Razorpay payment integration, admin dashboard, product management, and responsive customer experience.",

    tech: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit", "Razorpay"],

    features: [
      "Secure JWT Authentication",
      "Admin Dashboard",
      "Payment Gateway Integration",
      "Product & Order Management",
      "Responsive UI",
    ],

    live: "https://your-shopmaster-demo.com",

    github: "https://github.com/yourusername/shopmaster",
  },

  {
    featured: false,

    title: "Learn2Survive",

    image: learn2survive,

    description:
      "An AI-powered disaster preparedness platform that provides awareness modules, interactive quizzes, simulations, emergency contacts, and personalized learning paths.",

    tech: ["React", "Node.js", "MongoDB", "Express", "Gemini AI", "Framer Motion"],

    features: [
      "AI-powered learning modules",
      "Interactive quiz system",
      "Disaster simulations",
      "Emergency contact directory",
      "Progress tracking dashboard",
    ],

    live: "https://your-learn2survive-demo.com",

    github: "https://github.com/yourusername/learn2survive",
  },
]
