import ProjectCard from "./ProjectCard"
import { projects } from "../../data/projects"

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[160px]" />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
            bg-[size:40px_40px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Featured Projects
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Products I've
            <span className="text-blue-400"> Designed & Built</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Engineering modern web applications focused on scalability, performance, security, and
            user experience. Every project reflects production-ready architecture and clean
            development practices.
          </p>
        </div>

        {/* Projects */}

        <div className="mt-24 space-y-40">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
