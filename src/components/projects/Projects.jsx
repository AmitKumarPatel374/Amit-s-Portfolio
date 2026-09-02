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
    <section
      id="projects"
      className="projects-section relative overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="projects-bg pointer-events-none absolute inset-0">
        <div className="projects-grid absolute inset-0" />
      </div>

      {/* ================= CONTAINER ================= */}

      <div className="projects-container">

        {/* ================= HEADING ================= */}

        <div className="projects-heading">
          <h2>Selected Works</h2>
          <div className="projects-heading-line" />
        </div>

        {/* ================= PROJECT AREA ================= */}

        <div className="projects-slider">

          {/* PREVIOUS BUTTON */}

          <button
            type="button"
            onClick={previousProject}
            className="project-nav-button project-nav-left"
            aria-label="Previous project"
          >
            <FaChevronLeft />
          </button>

          {/* CARD */}

          <div className="projects-frame">

            <ProjectCard
              key={projects[currentProject].title}
              project={projects[currentProject]}
              index={currentProject}
              total={totalProjects}
            />

          </div>

          {/* NEXT BUTTON */}

          <button
            type="button"
            onClick={nextProject}
            className="project-nav-button project-nav-right"
            aria-label="Next project"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* ================= BOTTOM NAVIGATION ================= */}

        <div className="projects-bottom">

          {/* DOTS */}

          <div className="projects-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to project ${index + 1}`}
                onClick={() => setCurrentProject(index)}
                className={
                  index === currentProject
                    ? "project-dot active"
                    : "project-dot"
                }
              />
            ))}
          </div>

          {/* COUNTER */}

          <div className="projects-counter">
            <span>
              {String(currentProject + 1).padStart(2, "0")}
            </span>

            <span className="counter-divider">/</span>

            <span>
              {String(totalProjects).padStart(2, "0")}
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects