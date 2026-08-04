import { useEffect, useRef, useState } from "react"
import {
  FaArrowUp,
  FaCode,
  FaServer,
  FaDatabase,
  FaTerminal,
  FaFilm,
  FaDumbbell,
  FaGamepad,
  FaPlane,
  FaMusic,
  FaCamera,
  FaGlobe,
} from "react-icons/fa"
import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si"

import { FaHtml5, FaCss3Alt } from "react-icons/fa"
import "./About.css"

const expertise = [
  {
    title: "Frontend",
    icon: <FaCode />,
    color: "blue",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    color: "violet",
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Socket.io", icon: <SiSocketdotio /> },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    color: "green",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <FaTerminal />,
    color: "cyan",
    technologies: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
]

const stats = [
  { value: "10+", label: "Projects" },
  { value: "1+", label: "Years Experience" },
  { value: "15+", label: "APIs Built" },
]

const interests = [
  { title: "Movies", description: "Cinema lover and film explorer", icon: <FaFilm /> },
  { title: "Fitness", description: "Strength and stamina goals", icon: <FaDumbbell /> },
  { title: "Gaming", description: "Relaxing with strategy and sports", icon: <FaGamepad /> },
  { title: "Travel", description: "Exploring nature and cultures", icon: <FaPlane /> },
  { title: "Music", description: "Coding soundtrack essentials", icon: <FaMusic /> },
  { title: "Photography", description: "Capturing creative moments", icon: <FaCamera /> },
]

const About = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
    >
      {/* ================= Background ================= */}

      <div className="projects-bg pointer-events-none absolute inset-0 overflow-hidden">
        <div className="projects-grid absolute inset-0" />
      </div>

      <div className="about-container">
        {/* ================= Heading ================= */}

        <div className={`about-heading ${visible ? "about-visible" : ""}`}>
          <span>About Me</span>
          <div className="about-heading-line" />
        </div>

        {/* ================= Main Content ================= */}

        <div className="about-main-grid">
          {/* ================= LEFT ================= */}

          <div className={`about-content ${visible ? "about-visible about-left-enter" : ""}`}>
            <h2>
              Building scalable digital products with <span>clean architecture</span> and modern
              technologies.
            </h2>

            <p>
              I am a Full Stack MERN Developer focused on building scalable backend systems,
              AI-powered applications and modern web experiences. I enjoy solving real-world
              problems using clean architecture and production-ready development practices.
            </p>

            <p>
              During my internship, I worked on repository patterns, MongoDB aggregation pipelines,
              secure REST APIs, Redis caching, authentication systems and responsive React
              applications using Tailwind CSS.
            </p>

            {/* ================= Stats ================= */}

            <div className="about-stats">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="about-stat"
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className={`expertise-section ${visible ? "about-visible about-right-enter" : ""}`}>
            <div className="expertise-heading">
              <FaArrowUp />
              <h3>MERN Stack Expertise</h3>
            </div>

            <div className="expertise-grid">
              {expertise.map((item) => (
                <div
                  key={item.title}
                  className={`expertise-card expertise-${item.color}`}
                >
                  <div className="expertise-card-heading">
                    <div className="expertise-icon">{item.icon}</div>
                    <span>{item.title}</span>
                  </div>

                  <div className="technology-list">
                    {item.technologies.map((technology) => (
                      <div
                        key={technology.name}
                        className="technology-pill"
                      >
                        <span>{technology.icon}</span>
                        <strong>{technology.name}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= Beyond The Code ================= */}

        <div className={`beyond-section ${visible ? "about-visible" : ""}`}>
          <div className="beyond-heading">
            <FaGlobe />
            <h3>Beyond the Code</h3>
            <FaGlobe />
          </div>

          <div className="interest-grid">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="interest-card"
              >
                <div className="interest-icon">{interest.icon}</div>
                <h4>{interest.title}</h4>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
