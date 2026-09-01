import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import ProjectCard from "./ProjectCard"
import { projects } from "../../data/projects"
import "./Projects.css"

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const totalProjects = projects.length

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % totalProjects)
  }

  const previousProject = () => {
    setCurrentProject((prev) => (prev - 1 + totalProjects) % totalProjects)
  }

  return (
    <section id="projects" className="projects-section relative overflow-hidden">
      <div className="projects-bg pointer-events-none absolute inset-0">
        <div className="projects-grid absolute inset-0" />
      </div>

      <div className="projects-container">

        <div className="projects-heading">
          <h2>Selected Works</h2>
          <div className="projects-heading-line" />
        </div>

        {/* DESKTOP SLIDER */}
        <div className="projects-desktop">
          <div className="projects-slider">

            <button
              type="button"
              onClick={previousProject}
              className="project-nav-button project-nav-left"
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </button>

            <div className="projects-frame">
              <ProjectCard
                key={projects[currentProject].title}
                project={projects[currentProject]}
                index={currentProject}
              />
            </div>

            <button
              type="button"
              onClick={nextProject}
              className="project-nav-button project-nav-right"
              aria-label="Next project"
            >
              <FaChevronRight />
            </button>

          </div>

          <div className="projects-bottom">
            <div className="projects-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to project ${index + 1}`}
                  onClick={() => setCurrentProject(index)}
                  className={index === currentProject ? "project-dot active" : "project-dot"}
                />
              ))}
            </div>

            <div className="projects-counter">
              <span>{String(currentProject + 1).padStart(2, "0")}</span>
              <span className="counter-divider">/</span>
              <span>{String(totalProjects).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        {/* MOBILE - ALL PROJECTS SEPARATE */}
        <div className="projects-mobile">
          {projects.map((project, index) => (
            <div className="mobile-project-card" key={project.title}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects