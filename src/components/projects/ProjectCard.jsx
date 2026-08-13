import { FaCheckCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const ProjectCard = ({ project, index, progress, total }) => {
  const position = progress - index

  let opacity = 0
  let translateY = 0
  let scale = 1
  let blur = 0

  if (position >= 0 && position <= 1) {
    const t = position

    opacity = 1 - t

    translateY = -t * 70

    scale = 1 - t * 0.035

    blur = t * 5
  }

  if (position < 0 && position >= -1) {
    const t = Math.abs(position)

    opacity = 1 - t

    translateY = t * 70

    scale = 0.965 + t * 0.035

    blur = t * 5
  }

  if (index === 0 && progress <= 0.001) {
    opacity = 1
    translateY = 0
    scale = 1
    blur = 0
  }

  const technologies = project.tech || project.technologies || []

  return (
    <article
      className="project-screen"
      style={{
        opacity,

        transform: `
          translate3d(
            0,
            ${translateY}px,
            0
          )
          scale(${scale})
        `,

        filter: `blur(${blur}px)`,

        zIndex: index === Math.round(progress) ? 10 : 5,

        pointerEvents: opacity > 0.5 ? "auto" : "none",
      }}
    >
      {/* ========================================
          ORIGINAL UI
      ======================================== */}

      <div className="project-original-layout">
        {/* ======================================
            IMAGE
        ====================================== */}

        <div className="project-image-wrapper">
          <div className="project-browser">
            <div className="flex h-11 items-center gap-2 border-b border-white/10 bg-[#171F2D] px-5">
              <span className="h-3 w-3 rounded-full bg-red-500" />

              <span className="h-3 w-3 rounded-full bg-yellow-400" />

              <span className="h-3 w-3 rounded-full bg-green-500" />

              <div className="ml-5 h-5 flex-1 rounded-md bg-white/[0.03]" />
            </div>

            <div className="relative overflow-hidden bg-[#111827]">
              <img
                src={project.image}
                alt={project.title}
                className="project-main-image aspect-video w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/30 via-transparent to-transparent opacity-70" />
            </div>
          </div>

          <div className="project-image-glow" />
        </div>

        {/* ======================================
            CONTENT
        ====================================== */}

        <div className="project-content">
          {/* Number */}

          <div className="mb-5 flex items-center gap-4">
            <span className="font-mono text-sm tracking-[0.3em] text-[#ADC6FF]">
              PROJECT {String(index + 1).padStart(2, "0")}
            </span>

            <div className="h-px w-16 bg-white/10" />
          </div>

          {/* Featured */}

          {project.featured && (
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#ADC6FF]/20 bg-[#ADC6FF]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ADC6FF]" />

              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#ADC6FF]">
                Featured Project
              </span>
            </div>
          )}

          {/* Title */}

          <h2 className="project-title">{project.title}</h2>

          {/* Description */}

          <p className="project-description">{project.description}</p>

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
              {project.features.slice(0, 4).map((feature) => (
                <div
                  key={feature}
                  className="project-feature"
                >
                  <FaCheckCircle />

                  <span>{feature}</span>
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
