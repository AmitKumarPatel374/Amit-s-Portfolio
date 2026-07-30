import { useMemo } from "react"

import ProjectCard from "./ProjectCard"
import EmptyState from "./EmptyState"

import { allProjects } from "../../data/allProjects"

const ProjectsGrid = ({ search = "", category = "All" }) => {
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const searchText = search.toLowerCase()

      const matchesSearch =
        project.title.toLowerCase().includes(searchText) ||
        project.description.toLowerCase().includes(searchText) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchText))

      const matchesCategory = category === "All" || project.category === category

      return matchesSearch && matchesCategory
    })
  }, [search, category])

  if (filteredProjects.length === 0) {
    return (
      <EmptyState
        title="No Projects Found"
        description="Try changing the search or category."
      />
    )
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Result Count */}

        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">All Projects</h2>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400">
            {filteredProjects.length} Project
            {filteredProjects.length !== 1 && "s"}
          </span>
        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
