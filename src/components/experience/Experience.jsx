import { useEffect, useRef, useState } from "react"
import "./Experience.css"
import { experienceData } from "../../data/experience"

const Experience = () => {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  const [lineHeight, setLineHeight] = useState(0)

  useEffect(() => {
    const updateLine = () => {
      if (!sectionRef.current || !lineRef.current) return

      const section = sectionRef.current

      const rect = section.getBoundingClientRect()

      const windowHeight = window.innerHeight

      const totalHeight = section.offsetHeight

      const start = windowHeight * 0.2

      const end = windowHeight * 0.8

      let progress = (end - rect.top) / (totalHeight + end - start)

      progress = Math.max(0, Math.min(progress, 1))

      setLineHeight(progress * 100)
    }

    updateLine()

    window.addEventListener("scroll", updateLine)

    window.addEventListener("resize", updateLine)

    return () => {
      window.removeEventListener("scroll", updateLine)
      window.removeEventListener("resize", updateLine)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-[#0B1120] py-40"
    >
      {/* ================= Background ================= */}

      <div className="projects-bg pointer-events-none absolute inset-0 overflow-hidden">
        <div className="projects-grid absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-10">
        {/* ================= Heading ================= */}

        <div className="experience-heading mx-auto max-w-[900px] text-center">
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ADC6FF]">
            Experience
          </span>

          <h2 className="mt-7 text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-white xl:text-[60px]">
            Building production-ready software through real-world engineering experience.
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-9 text-slate-400">
            Solving complex engineering challenges by combining scalable backend architectures with
            modern frontend engineering.
          </p>
        </div>

        {/* ================= Timeline ================= */}

        <div className="relative mt-32">
          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-[2px] bg-white/10 lg:left-1/2 lg:-translate-x-1/2">
            <div
              ref={lineRef}
              className="timeline-fill absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-[#ADC6FF] via-[#7C3AED] to-[#4D8EFF]"
              style={{
                height: `${lineHeight}%`,
              }}
            />
          </div>
          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0

            return (
              <div
                key={item.title}
                className={`timeline-item relative mb-28 flex ${
                  isLeft ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {/* ================= Timeline Dot ================= */}

                <div
                  className="
                    timeline-dot
                    absolute
                    left-6
                    top-12
                    h-5
                    w-5
                    rounded-full
                    border-[5px]
                    border-[#0B1120]
                    bg-[#191B23]
                    lg:left-1/2
                    lg:-translate-x-1/2
                  "
                />

                {/* ================= Card ================= */}

                <div
                  className={`
                    experience-card
                    relative
                    ml-16
                    w-full
                    rounded-[30px]
                    border
                    border-white/10
                    bg-[#121826]/75
                    p-8
                    backdrop-blur-xl

                    lg:ml-0
                    lg:w-[46%]

                    ${isLeft ? "card-left" : "card-right"}
                  `}
                >
                  {/* Top */}

                  <div className="flex items-center justify-between gap-5">
                    <span className="rounded-full border border-[#ADC6FF]/20 bg-[#ADC6FF]/10 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ADC6FF]">
                      {item.type}
                    </span>

                    <span className="text-sm text-slate-500">{item.date}</span>
                  </div>

                  {/* Title */}

                  <h3 className="mt-4 text-[34px] font-bold tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>

                  {/* Description */}

                  {item.description && (
                    <p className="mt-4 text-[16px] leading-8 text-slate-400">{item.description}</p>
                  )}

                  {/* ================= Skills ================= */}

                  <div className="mt-4 grid gap-5 md:grid-cols-2">
                    {item.skills?.map((skill) => (
                      <div
                        key={skill.title}
                        className="skill-card rounded-2xl border border-white/10 bg-[#0F172A]/70 p-5"
                      >
                        <h4 className="text-[17px] font-semibold text-white">{skill.title}</h4>

                        <p className="mt-3 text-[14px] leading-7 text-slate-400">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* ================= Technologies ================= */}

                  {item.technologies && (
                    <div className="mt-10 flex flex-wrap gap-3">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="tech-badge rounded-full border border-white/10 bg-[#0F172A] px-5 py-[10px] text-[13px] font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* ================= Bottom Accent ================= */}

                  <div className="mt-10 flex items-center gap-4">
                    <div className="h-[2px] w-16 rounded-full bg-[#ADC6FF]" />

                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
                      Production Experience
                    </span>
                  </div>
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
