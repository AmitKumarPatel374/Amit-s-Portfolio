import SkillCategoryCard from "./SkillCategoryCard"
import { skillCategories } from "../../data/skills"

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0B1120] py-20 sm:py-24 lg:py-32"
    >
      {/* Background */}
      <div className="skills-bg pointer-events-none absolute inset-0 z-0">
        <div className="projects-grid absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
            Skills & Tech Stack
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              leading-[1.1]
              tracking-tight
              text-white

              sm:mt-5
              sm:text-4xl

              md:text-5xl

              lg:text-[52px]
              lg:leading-[1.08]
            "
          >
            Technologies I Use to Build <span className="text-blue-400">Modern Applications</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-sm
              leading-7
              text-slate-400

              sm:mt-6
              sm:text-base
              sm:leading-7

              lg:mt-8
              lg:text-lg
              lg:leading-8
            "
          >
            I specialize in building scalable, secure, and production-ready applications using
            modern web technologies, cloud services, and AI-powered tools. Every technology is
            carefully chosen to deliver exceptional performance and user experience.
          </p>
        </div>

        {/* ================= SKILLS GRID ================= */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5

            sm:mt-16
            sm:gap-6

            md:grid-cols-2
            md:gap-7

            lg:mt-20
            lg:gap-8
          "
        >
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
