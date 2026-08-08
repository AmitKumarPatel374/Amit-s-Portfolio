import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaPaperPlane,
} from "react-icons/fa"

export const contactInfo = [
  {
    title: "Email",
    value: "amitpatel9302352967@gmail.com",
    icon: FaEnvelope,
    buttonText: "Copy Email",
    copy: true,
  },

  {
    title: "Phone",
    value: "+91 9753005051", 
    icon: FaPhoneAlt,
    buttonText: "Call Now",
    action: "tel:+919753005051",
  },

  {
    title: "Location",
    value: "Bhopal, Madhya Pradesh, India",
    icon: FaMapMarkerAlt,
  },

  {
    title: "Availability",
    value: "Available for Full-Time Opportunities",
    icon: FaBriefcase,
    availability: "Open to Work",
  },
]

export const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/AmitKumarPatel374",
  },

  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/amit-kumar-patel-053130316/",
  },

  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:amitpatel9302352967@gmail.com",
  },

  {
    name: "Resume",
    icon: FaFileDownload,
    href: "/resume.pdf",
    type: "button",
  },
]
