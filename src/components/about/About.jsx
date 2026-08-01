import { FaServer, FaReact, FaDatabase, FaLightbulb, FaArrowRight } from "react-icons/fa"

import profile from "../../assets/profile.png"
import "./About.css"

const strengths = [
  {
    icon: <FaServer className="text-[22px] text-[#4D8EFF]" />,
    title: "Backend Development",
    desc: "Building scalable REST APIs using Node.js, Express.js, repository pattern, authentication and production ready architecture.",
  },
  {
    icon: <FaReact className="text-[22px] text-cyan-400" />,
    title: "Frontend Engineering",
    desc: "Creating modern interfaces using React, Next.js, Tailwind CSS and reusable component architecture.",
  },
  {
    icon: <FaDatabase className="text-[22px] text-green-400" />,
    title: "Database Design",
    desc: "MongoDB schema design, aggregation pipeline, Redis caching and optimized queries.",
  },
  {
    icon: <FaLightbulb className="text-[22px] text-yellow-400" />,
    title: "Problem Solving",
    desc: "Strong understanding of algorithms, debugging, optimization and clean maintainable code.",
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B1120] pt-20 pb-20"
    >
      {/* Background */}

      <div className="about-bg absolute inset-0 -z-10">
        <div className="absolute left-[-250px] top-10 h-[650px] w-[650px] rounded-full bg-[#4D8EFF]/10 blur-[170px]" />

        <div className="absolute right-[-250px] bottom-0 h-[650px] w-[650px] rounded-full bg-violet-500/10 blur-[170px]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-10">
        <div className="grid items-center gap-24 lg:grid-cols-[42%_58%]">
          {/* ================= LEFT ================= */}

          <div className="about-left">
            <div className="group relative">
              <div className="absolute -inset-5 rounded-[36px] bg-[#4D8EFF]/15 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#121826]">
                <img
                  src={profile}
                  alt="Amit Kumar Patel"
                  className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Stats */}

            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="about-stat rounded-3xl border border-white/10 bg-[#121826]/80 p-7 backdrop-blur-xl">
                <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#ADC6FF]">
                  Experience
                </p>

                <h3 className="mt-3 text-[38px] font-bold text-white">1+</h3>

                <p className="mt-2 text-sm text-slate-400">Years Building Products</p>
              </div>

              <div className="about-stat rounded-3xl border border-white/10 bg-[#121826]/80 p-7 backdrop-blur-xl">
                <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#ADC6FF]">
                  Projects
                </p>

                <h3 className="mt-3 text-[38px] font-bold text-white">10+</h3>

                <p className="mt-2 text-sm text-slate-400">Production Applications</p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="about-right">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ADC6FF]">
              About Me
            </p>

            <h2 className="mt-7 max-w-[780px] text-[40px] font-bold leading-[1] tracking-[-0.03em] text-white xl:text-[45px]">
              Building scalable digital products with{" "}
              <span className="text-[#ADC6FF]">clean architecture</span> and modern technologies.
            </h2>

            <p className="mt-5 max-w-[760px] text-[18px] leading-7 text-slate-400">
              I am a Full Stack MERN Developer focused on building scalable backend systems,
              AI-powered applications and modern web experiences. I enjoy solving real-world
              problems using clean architecture and production-ready development practices.
            </p>

            <p className="mt-5 max-w-[760px] text-[18px] leading-7 text-slate-400">
              During my internship, I worked on repository patterns, MongoDB aggregation pipelines,
              secure REST APIs, Redis caching, authentication systems and responsive React
              applications using Tailwind CSS.
            </p>

            {/* ================= Strength Cards ================= */}

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {strengths.map((item, index) => (
                <div
                  key={index}
                  className="strength-card group rounded-[28px] border border-white/10 bg-[#121826]/70 p-5 backdrop-blur-xl"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4D8EFF]/10 transition duration-300 group-hover:bg-[#4D8EFF]/20">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-[15px] font-semibold text-white">{item.title}</h3>

                      <p className="mt-2 text-[15px] leading-6 text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= Quote ================= */}

            <div className="quote-card relative mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-[#121826]/80 p-8 backdrop-blur-xl">
              <span className="absolute right-8 top-0 text-[100px] font-bold leading-none text-[#4D8EFF]/10">
                "
              </span>

              <blockquote className="relative z-10 max-w-[760px] text-[18px] italic leading-[1.7] text-slate-300">
                Code is not just instructions for a machine; it's an investment in the future. I
                believe every application should be scalable, maintainable and deliver an
                exceptional experience to its users.
              </blockquote>

              <div className="mt-4 flex items-center gap-3">
                <div className="h-[2px] w-14 bg-[#ADC6FF]" />

                <span className="font-semibold tracking-wide text-[#ADC6FF]">Amit Kumar Patel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
