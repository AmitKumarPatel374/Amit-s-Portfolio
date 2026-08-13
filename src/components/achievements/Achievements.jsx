import AchievementCard from "./AchievementCard"
import StatCard from "./StatCard"
import { achievements, statistics } from "../../data/achievements"

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#0B1120] py-20 sm:py-24 lg:py-32"
    >
      {/* Background */}
      <div className="skills-bg pointer-events-none absolute inset-0 z-0">
        <div className="projects-grid absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
            Achievements
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:mt-5 sm:text-4xl md:text-5xl lg:mt-6">
            Milestones That <span className="text-blue-400">Define My Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-7 lg:mx-0 lg:mt-8 lg:text-lg lg:leading-8">
            A collection of professional milestones, leadership experiences, technical
            accomplishments, and continuous learning that reflect my growth as a full-stack
            developer.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {statistics.map((stat) => (
            <StatCard
              key={stat.label}
              stat={stat}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
