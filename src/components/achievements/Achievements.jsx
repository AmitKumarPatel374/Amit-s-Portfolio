import AchievementCard from "./AchievementCard"
import StatCard from "./StatCard"

import { achievements, statistics } from "../../data/achievements"

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-32 bg-[#0B1120]"
    >

      {/* Background */}
      <div className="skills-bg pointer-events-none absolute inset-0 -z-0">
        <div className="projects-grid absolute inset-0" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Achievements
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Milestones That
            <span className="text-blue-400"> Define My Journey</span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            A collection of professional milestones, leadership experiences, technical
            accomplishments, and continuous learning that reflect my growth as a full-stack
            developer.
          </p>
        </div>

        {/* Achievement Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
            />
          ))}
        </div>

        {/* Statistics */}

        <div className="mt-24 grid grid-cols-2 gap-6 lg:grid-cols-4">
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
