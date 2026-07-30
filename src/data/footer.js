import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa"

export const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/yourusername", // Replace with your GitHub
  },

  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername", // Replace with your LinkedIn
  },

  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:yourmail@gmail.com", // Replace with your email
  },

  {
    name: "Resume",
    icon: FaFileDownload,
    href: "/resume.pdf", // Place resume.pdf inside public folder
  },
]
