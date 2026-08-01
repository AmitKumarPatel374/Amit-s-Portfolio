import { Link } from "react-scroll"
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaMapMarkerAlt,
  FaBriefcase,
  FaFolderOpen,
  FaNodeJs,
} from "react-icons/fa"

import { SiReact, SiNextdotjs, SiMongodb, SiTypescript, SiRedis } from "react-icons/si"

import profile from "../../assets/profile.png"
import "./Hero.css"

const techStack = [
  { name: "React", icon: <SiReact className="text-sky-400 text-lg" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-lg" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-lg" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-lg" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-lg" /> },
  { name: "Redis", icon: <SiRedis className="text-red-500 text-lg" /> },
]

const stats = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Bhopal, India",
  },
  {
    icon: <FaBriefcase />,
    title: "Experience",
    value: "1+ Years",
  },
  {
    icon: <FaFolderOpen />,
    title: "Projects",
    value: "10+",
  },
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0B1120] pt-20"
    >
      {/* Background */}

      <div className="hero-bg absolute inset-0">
        <div className="absolute left-[-220px] top-[10%] h-[650px] w-[650px] rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[650px] w-[650px] rounded-full bg-violet-500/10 blur-[170px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-2">
        <div className="grid items-center gap-12 lg:grid-cols-[58%_42%]">
          {/* LEFT */}

          <div className="hero-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#151B26]/80 px-6 py-[11px] backdrop-blur-xl">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70"></span>

                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>

              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-slate-300">
                Available For Full-Time Opportunities
              </span>
            </div>

            <h1 className="mt-7 max-w-[760px] text-[50px] font-bold leading-[0.95] tracking-[-0.05em] text-white xl:text-[60px]">
              Hi, I'm
              <span className="text-[#ADC6FF]"> Amit Kumar Patel</span>
            </h1>

            <h2 className="mt-2 text-[24px] font-semibold text-slate-400">
              Full Stack MERN Developer
            </h2>

            <p className="mt-5 max-w-[610px] text-[18px] leading-6 text-slate-400">
              Building scalable backend systems, AI-powered web applications, and production-ready
              full-stack products with clean architecture, performance optimization and exceptional
              user experience.
            </p>

            {/* Tech */}

            <div className="mt-7 flex max-w-[720px] flex-wrap gap-2">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-pill flex items-center  rounded-full border border-white/10 bg-[#131A26] px-4 gap-1 py-[11px]"
                >
                  {tech.icon}

                  <span className="whitespace-nowrap text-[15px] font-semibold text-white">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-7 flex flex-wrap gap-7">
              <Link
                to="projects"
                smooth
                duration={600}
                offset={-80}
                className="hero-btn group flex cursor-pointer items-center gap-2 rounded-[18px] bg-[#ADC6FF] px-8 py-4 font-semibold text-[#07111E]"
              >
                View Projects
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <button className="hero-btn flex items-center gap-3 rounded-[18px] border border-white/10 bg-[#151B26] px-9 py-4 font-semibold text-white">
                <FaDownload />
                Resume
              </button>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 font-semibold text-[#ADC6FF]"
              >
                <FaGithub />
                GitHub
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="hero-right relative flex h-[600px] items-center justify-center">
            <div className="orbit">
              <div className="absolute h-[390px] w-[390px] rounded-full border border-[#4D8EFF]/20" />

              <div className="orbit-reverse absolute h-[470px] w-[470px] rounded-full border border-white/5" />
            </div>

            <div className="floating-portrait relative z-20 h-[300px] w-[300px] overflow-hidden rounded-full border border-white/10 bg-[#131A26]">
              <img
                src={profile}
                alt="Amit Kumar Patel"
                className="h-full w-full object-cover"
              />
            </div>

            {/* ================= MongoDB ================= */}

            <div className="floating-card absolute left-0 top-40 hidden w-[150px] xl:block">
              <div className="rounded-xl border border-white/10 bg-[#131A26]/80 p-3 backdrop-blur-xl">
                <div className="mb-1 text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Database
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10">
                    <SiMongodb className="text-lg text-green-500" />
                  </div>

                  <div>
                    <h4 className="whitespace-nowrap text-[13px] font-semibold text-white">
                      MongoDB
                    </h4>

                    <p className="text-[10px] text-slate-400">NoSQL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= Node ================= */}

            <div className="floating-card absolute bottom-30 left-4 hidden w-[150px] xl:block">
              <div className="rounded-xl border border-white/10 bg-[#131A26]/80 p-3 backdrop-blur-xl">
                <div className="mb-1 text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Runtime
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10">
                    <FaNodeJs className="text-lg text-green-500" />
                  </div>

                  <div>
                    <h4 className="whitespace-nowrap text-[13px] font-semibold text-white">
                      Node.js
                    </h4>

                    <p className="text-[10px] text-slate-400">Backend</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= React ================= */}

            <div className="floating-card absolute right-0 top-[59%] hidden w-[150px] xl:block">
              <div className="rounded-xl border border-white/10 bg-[#131A26]/80 p-3 backdrop-blur-xl">
                <div className="mb-1 text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Frontend
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10">
                    <SiReact className="text-lg text-sky-400" />
                  </div>

                  <div>
                    <h4 className="whitespace-nowrap text-[13px] font-semibold text-white">
                      React.js
                    </h4>

                    <p className="text-[10px] text-slate-400">UI Library</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= Redis ================= */}

            <div className="floating-card absolute right-8 top-30 hidden w-[150px] xl:block">
              <div className="rounded-xl border border-white/10 bg-[#131A26]/80 p-3 backdrop-blur-xl">
                <div className="mb-1 text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Cache
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
                    <SiRedis className="text-lg text-red-500" />
                  </div>

                  <div>
                    <h4 className="whitespace-nowrap text-[13px] font-semibold text-white">
                      Redis
                    </h4>

                    <p className="text-[10px] text-slate-400">In-Memory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div className="hero-stats grid gap-5 md:grid-cols-5 mt-[-30px]">
          {stats.map((item, index) => (
            <div
              key={index}
              className="hero-stat rounded-[26px] border border-white/10 bg-[#131A26]/70 p-4 backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-8 w-12 items-center justify-center rounded-xl bg-[#ADC6FF]/10 text-[#ADC6FF]">
                  {item.icon}
                </div>

                <span className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  {item.title}
                </span>
              </div>

              <h3 className="text-[24px] font-semibold text-white">{item.value}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Scroll Indicator ================= */}

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-3">
        <span className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Scroll Down</span>

        <div className="h-14 w-[2px] overflow-hidden rounded-full bg-white/10">
          <div className="scroll-line h-6 w-full rounded-full bg-[#ADC6FF]" />
        </div>
      </div>
    </section>
  )
}

export default Hero
