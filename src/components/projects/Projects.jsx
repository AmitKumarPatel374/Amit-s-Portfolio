import { useEffect, useRef, useState } from "react"
import ProjectCard from "./ProjectCard"
import { projects } from "../../data/projects"
import "./Projects.css"

const Projects = () => {
  const sectionRef = useRef(null)
  const snapTimeout = useRef(null)

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = null

    const updateProgress = () => {
      if (!sectionRef.current) return

      if (raf) cancelAnimationFrame(raf)

      raf = requestAnimationFrame(() => {
        const section = sectionRef.current

        const rect = section.getBoundingClientRect()

        const maxScroll = section.offsetHeight - window.innerHeight

        if (maxScroll <= 0) return

        const scrollAmount = Math.max(0, Math.min(maxScroll, -rect.top))

        /*
         * 0 → first project
         * 1 → second project
         * 2 → third project
         */

        const value = (scrollAmount / maxScroll) * (projects.length - 1)

        setProgress(value)
      })
    }

    const snapToNearestProject = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current

      const rect = section.getBoundingClientRect()

      const maxScroll = section.offsetHeight - window.innerHeight

      if (maxScroll <= 0) return

      const currentScroll = Math.max(0, Math.min(maxScroll, -rect.top))

      const currentProgress = (currentScroll / maxScroll) * (projects.length - 1)

      const nearestIndex = Math.round(currentProgress)

      /*
       * Don't snap if we're already
       * basically at the correct project.
       */

      const targetProgress = nearestIndex / (projects.length - 1)

      const targetScroll = targetProgress * maxScroll

      const difference = Math.abs(targetScroll - currentScroll)

      if (difference < 5) return

      const sectionTop = window.scrollY + rect.top

      window.scrollTo({
        top: sectionTop + targetScroll,
        behavior: "smooth",
      })
    }

    const handleScroll = () => {
      updateProgress()

      /*
       * Wait until scrolling stops.
       * Then snap to the nearest project.
       */

      clearTimeout(snapTimeout.current)

      snapTimeout.current = setTimeout(() => {
        snapToNearestProject()
      }, 180)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    window.addEventListener("resize", updateProgress)

    updateProgress()

    return () => {
      window.removeEventListener("scroll", handleScroll)

      window.removeEventListener("resize", updateProgress)

      clearTimeout(snapTimeout.current)

      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  /*
   * IMPORTANT
   *
   * Math.round makes:
   *
   * 0.00 → 01
   * 0.50 → 01 / transition
   * 1.00 → 02
   * 1.50 → 02 / transition
   * 2.00 → 03
   */

  const currentProject = Math.min(projects.length - 1, Math.max(0, Math.round(progress)))

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="projects-section relative"
      style={{
        height: `${projects.length * 100}vh`,
      }}
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}
      <div className="projects-bg pointer-events-none absolute inset-0 overflow-hidden">
        <div className="projects-grid absolute inset-0" />
      </div>

      {/* ==========================================
          STICKY
      ========================================== */}

      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="projects-container">
          {/* ======================================
              TITLE
          ====================================== */}

          <div className="projects-heading">
            <h2>Selected Works</h2>

            <div className="projects-heading-line" />
          </div>

          {/* ======================================
              OUTER RECTANGLE
          ====================================== */}

          <div className="projects-frame">
            <div className="projects-frame-inner">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  progress={progress}
                  total={projects.length}
                />
              ))}
            </div>
          </div>

          {/* ======================================
              PROGRESS
          ====================================== */}

          <div className="projects-navigation">
            <div className="projects-dots">
              {projects.map((_, index) => (
                <span
                  key={index}
                  className={index === currentProject ? "project-dot active" : "project-dot"}
                />
              ))}
            </div>
          </div>

          {/* ======================================
              COUNTER
          ====================================== */}

          <div className="projects-counter">
            <span>{String(currentProject + 1).padStart(2, "0")}</span>

            <span className="counter-divider">/</span>

            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
