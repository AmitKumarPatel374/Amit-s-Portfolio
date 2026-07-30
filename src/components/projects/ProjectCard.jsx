import { FaCheckCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const ProjectCard = ({ project, reverse }) => {
  return (
    <div className={`grid items-center gap-12 lg:grid-cols-12 ${reverse ? "" : ""}`}>
      {/* Image */}

      <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#111827]
            shadow-2xl
            transition
            duration-500
            hover:-translate-y-2
            hover:border-blue-400
          "
        >
          {/* Browser Header */}

          <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-[#1f2937] px-4">
            <span className="h-3 w-3 rounded-full bg-red-500" />

            <span className="h-3 w-3 rounded-full bg-yellow-400" />

            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          {/* Screenshot */}

          <img
            src={project.image}
            alt={project.title}
            className="
              aspect-video
              w-full
              object-cover
              transition
              duration-500
              hover:scale-105
            "
          />
        </div>
      </div>

      {/* Content */}

      <div className={`space-y-6 lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
        {/* Badge */}

        {project.featured && (
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-400/20
              bg-blue-500/10
              px-4
              py-2
            "
          >
            <span className="h-2 w-2 rounded-full bg-blue-400" />

            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Featured Project
            </span>
          </div>
        )}

        {/* Title */}

        <h3 className="text-4xl font-bold text-white">{project.title}</h3>

        {/* Description */}

        <p className="text-lg leading-8 text-slate-400">{project.description}</p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-[#111827]
                px-4
                py-2
                text-sm
                text-slate-300
                transition
                hover:border-blue-400
                hover:bg-blue-500/10
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}

        <div className="space-y-4">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3"
            >
              <FaCheckCircle
                className="
                  mt-1
                  shrink-0
                  text-blue-400
                "
              />

              <p className="leading-7 text-slate-400">{feature}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 pt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-blue-500
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-600
                active:scale-95
              "
            >
              Live Demo
              <FaExternalLinkAlt className="text-sm" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:border-blue-400
                hover:bg-white/10
                active:scale-95
              "
            >
              <FaGithub />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard