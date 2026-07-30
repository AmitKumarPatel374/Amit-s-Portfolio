import { Link, Navigate, useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

import { projects } from "../data/projects"

import ProjectHero from "../components/project-details/ProjectHero"
import ProjectOverview from "../components/project-details/ProjectOverview"
import ProjectGallery from "../components/project-details/ProjectGallery"
import ProjectFeatures from "../components/project-details/ProjectFeatures"
import ProjectArchitecture from "../components/project-details/ProjectArchitecture"
import ProjectChallenges from "../components/project-details/ProjectChallenges"
import ProjectLearnings from "../components/project-details/ProjectLearnings"
import ProjectCTA from "../components/project-details/ProjectCTA"

const ProjectDetails = () => {
  const { slug } = useParams()

  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <Navigate
        to="/404"
        replace
      />
    )
  }

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-slate-400 hover:text-white"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>
        </div>
      </section>

      <ProjectHero project={project} />

      <ProjectOverview project={project} />

      <ProjectGallery project={project} />

      <ProjectFeatures project={project} />

      <ProjectArchitecture project={project} />

      <ProjectChallenges project={project} />

      <ProjectLearnings project={project} />

      <ProjectCTA project={project} />
    </main>
  )
}

export default ProjectDetails
