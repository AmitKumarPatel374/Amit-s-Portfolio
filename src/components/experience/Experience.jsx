import { experienceData } from "../../data/experience"

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Experience
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Building production-ready software through real-world engineering experience.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Solving complex engineering challenges by combining scalable backend architectures with
            modern frontend engineering.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Line */}

          <div className="absolute left-5 top-0 h-full w-[2px] bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />

          {experienceData.map((item, index) => {
            const left = index % 2 === 0

            return (
              <div
                key={item.title}
                className={`relative mb-28 flex ${left ? "lg:justify-start" : "lg:justify-end"}`}
              >
                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    left-5
                    top-10
                    h-5
                    w-5
                    rounded-full
                    border-4
                    border-[#0B1120]
                    bg-blue-400
                    shadow-[0_0_20px_rgba(59,130,246,.7)]
                    lg:left-1/2
                    lg:-translate-x-1/2
                  "
                />

                <div
                  className="
                    ml-16
                    w-full
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    backdrop-blur-xl
                    transition
                    hover:-translate-y-2
                    hover:border-blue-400
                    lg:ml-0
                    lg:w-[46%]
                  "
                >
                  <span className="text-sm uppercase tracking-widest text-blue-400">
                    {item.type}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold text-white">{item.title}</h3>

                  <p className="mt-2 text-slate-500">{item.date}</p>

                  {item.description && (
                    <p className="mt-6 leading-8 text-slate-400">{item.description}</p>
                  )}

                  {/* Skills */}

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {item.skills?.map((skill) => (
                      <div
                        key={skill.title}
                        className="
                          rounded-2xl
                          border
                          border-white/10
                          bg-[#111827]
                          p-5
                          transition
                          hover:border-blue-400
                        "
                      >
                        <h4 className="text-base font-semibold text-white">{skill.title}</h4>

                        <p className="mt-2 text-sm leading-6 text-slate-400">{skill.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}

                  {item.technologies && (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-[#0f172a]
                            px-4
                            py-2
                            text-sm
                            text-slate-300
                            transition
                            hover:border-blue-400
                            hover:text-white
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
