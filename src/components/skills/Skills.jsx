import SkillCategoryCard from "./SkillCategoryCard"
import { skillCategories } from "../../data/skills"

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#0B1120]">

      {/* Background */}
      <div className="skills-bg pointer-events-none absolute inset-0 -z-0">
        <div className="projects-grid absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Skills & Tech Stack
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Technologies I Use to Build
            <span className="text-blue-400">
              {" "}Modern Applications
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            I specialize in building scalable, secure, and production-ready
            applications using modern web technologies, cloud services, and
            AI-powered tools. Every technology is carefully chosen to deliver
            exceptional performance and user experience.
          </p>
        </div>

        {/* Skills Grid */}

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills