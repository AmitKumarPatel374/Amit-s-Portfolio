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
    value: "amitpatel.dev@gmail.com", // Replace with your email
    icon: FaEnvelope,
    buttonText: "Copy Email",
    copy: true,
  },

  {
    title: "Phone",
    value: "+91 XXXXX XXXXX", // Replace with your phone
    icon: FaPhoneAlt,
    buttonText: "Call Now",
    action: "tel:+91XXXXXXXXXX",
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
    href: "https://github.com/yourusername",
  },

  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
  },

  {
    name: "Email",
    icon: FaPaperPlane,
    href: "mailto:amitpatel.dev@gmail.com",
  },

  {
    name: "Resume",
    icon: FaFileDownload,
    href: "/resume.pdf",
    type: "button",
  },
]
