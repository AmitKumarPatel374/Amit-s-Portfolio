import {
  FaCheckCircle,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa"

const ProjectCard = ({ project, index }) => {
  const technologies = project.tech || project.technologies || []

  return (
    <article className="project-screen">

      <div className="project-original-layout">

        {/* ================= IMAGE ================= */}

        <div className="project-image-wrapper">

          <div className="project-browser">

            {/* Browser Header */}

            <div className="project-browser-header">
              <span className="browser-dot browser-red" />
              <span className="browser-dot browser-yellow" />
              <span className="browser-dot browser-green" />

              <div className="browser-address" />
            </div>

            {/* Image */}

            <div className="relative overflow-hidden bg-[#111827]">

              <img
                src={project.image}
                alt={project.title}
                className="project-main-image"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/30 via-transparent to-transparent opacity-70" />

            </div>

          </div>

          <div className="project-image-glow" />

        </div>

        {/* ================= CONTENT ================= */}

        <div className="project-content">

          {/* Number */}

          <div className="project-number">

            <span>
              PROJECT {String(index + 1).padStart(2, "0")}
            </span>

            <div />

          </div>

          {/* Featured */}

          {project.featured && (
            <div className="project-featured">

              <span />

              <span>
                Featured Project
              </span>

            </div>
          )}

          {/* Title */}

          <h2 className="project-title">
            {project.title}
          </h2>

          {/* Description */}

          <p className="project-description">
            {project.description}
          </p>

          {/* Technologies */}

          <div className="project-technologies">

            {technologies.map((tech) => (
              <span
                key={tech}
                className="project-tech"
              >
                {tech}
              </span>
            ))}

          </div>

          {/* Features */}

          {project.features?.length > 0 && (
            <div className="project-features">

              {project.features.slice(0, 3).map((feature) => (
                <div
                  key={feature}
                  className="project-feature"
                >
                  <FaCheckCircle />

                  <span>
                    {feature}
                  </span>
                </div>
              ))}

            </div>
          )}

          {/* Buttons */}

          <div className="project-buttons">

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-button project-button-primary"
              >
                Live Demo
                <FaExternalLinkAlt />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-button project-button-secondary"
              >
                <FaGithub />
                GitHub
              </a>
            )}

          </div>

        </div>

      </div>

    </article>
  )
}

export default ProjectCard