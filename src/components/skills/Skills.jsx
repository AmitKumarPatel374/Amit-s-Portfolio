import SkillCategoryCard from "./SkillCategoryCard"
import { skillCategories } from "../../data/skills"

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[160px]" />

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
            Skills & Tech Stack
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Technologies I Use to Build
            <span className="text-blue-400"> Modern Applications</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            I specialize in building scalable, secure, and production-ready applications using
            modern web technologies, cloud services, and AI-powered tools. Every technology is
            carefully chosen to deliver exceptional performance and user experience.
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
