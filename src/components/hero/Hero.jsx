import { Link } from "react-scroll"
import {
  FaGithub,
  FaDownload,
  FaArrowRight,
  FaMapMarkerAlt,
  FaBriefcase,
  FaFolderOpen,
} from "react-icons/fa"

import profile from "../../assets/profile.png"
import { technologies } from "../../data/technologies"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-20"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-200px] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute right-[-250px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_50%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
        {/* LEFT */}

        <div className="lg:col-span-7">
          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>

            <span className="text-xs uppercase tracking-[0.25em] text-slate-300">
              Available For Full-Time Opportunities
            </span>
          </div>

          {/* Heading */}

          <div className="mt-8">
            <h1 className="text-5xl font-bold leading-tight text-white lg:text-7xl">
              Hi, I'm
              <br />
              <span className="text-blue-400">Amit Kumar Patel</span>
            </h1>

            <h2 className="mt-6 text-2xl font-medium text-slate-400">Full Stack MERN Developer</h2>
          </div>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Building scalable backend systems, AI-powered web applications, and production-ready
            full-stack products with clean architecture, performance optimization, and exceptional
            user experience.
          </p>

          {/* Tech Stack */}

          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-[#111827]
                  px-4
                  py-2
                  transition
                  hover:-translate-y-1
                  hover:border-blue-400
                "
              >
                {tech.icon}

                <span className="text-sm text-white">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              to="projects"
              smooth
              duration={600}
              offset={-80}
              className="
                flex
                cursor-pointer
                items-center
                gap-3
                rounded-xl
                bg-blue-500
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-blue-600
              "
            >
              View Projects
              <FaArrowRight />
            </Link>

            <button
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-8
                py-4
                text-white
                transition
                hover:bg-white/10
              "
            >
              <FaDownload />
              Download Resume
            </button>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                text-blue-400
                transition
                hover:gap-4
              "
            >
              <FaGithub />
              View GitHub
              <FaArrowRight />
            </a>
          </div>

          {/* Stats */}

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {/* Location */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400">
              <div className="mb-3 flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />

                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Location</span>
              </div>

              <h3 className="text-xl font-semibold text-white">Bhopal, India</h3>
            </div>

            {/* Experience */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400">
              <div className="mb-3 flex items-center gap-3">
                <FaBriefcase className="text-blue-400" />

                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Experience
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white">1+ Years</h3>
            </div>

            {/* Projects */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400">
              <div className="mb-3 flex items-center gap-3">
                <FaFolderOpen className="text-blue-400" />

                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Projects</span>
              </div>

              <h3 className="text-xl font-semibold text-white">10+</h3>
            </div>
          </div>
        </div>

        {/* ================= Right Side ================= */}

        <div className="relative mt-16 flex items-center justify-center lg:col-span-5 lg:mt-0">
          {/* Glow */}

          <div className="absolute h-[430px] w-[430px] rounded-full bg-blue-500/10 blur-[120px]" />

          {/* Ring */}

          <div className="absolute h-[360px] w-[360px] rounded-full border border-blue-400/20" />

          <div className="absolute h-[420px] w-[420px] rounded-full border border-white/5" />

          {/* Image */}

          <div
            className="
              relative
              z-10
              h-72
              w-72
              overflow-hidden
              rounded-full
              border-2
              border-white/10
              bg-slate-900
              shadow-[0_0_60px_rgba(59,130,246,.2)]
              md:h-96
              md:w-96
            "
          >
            <img
              src={profile}
              alt="Amit Kumar Patel"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Cards */}

          <div className="absolute left-0 top-12 rounded-xl border border-white/10 bg-[#111827]/80 p-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-wider text-slate-400">Database</p>

            <h4 className="mt-1 font-semibold text-white">MongoDB</h4>
          </div>

          <div className="absolute bottom-10 left-4 rounded-xl border border-white/10 bg-[#111827]/80 p-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-wider text-slate-400">Runtime</p>

            <h4 className="mt-1 font-semibold text-white">Node.js</h4>
          </div>

          <div className="absolute right-0 top-1/2 rounded-xl border border-white/10 bg-[#111827]/80 p-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-wider text-slate-400">Frontend</p>

            <h4 className="mt-1 font-semibold text-white">React.js</h4>
          </div>

          <div className="absolute right-8 top-0 rounded-xl border border-white/10 bg-[#111827]/80 p-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-wider text-slate-400">Cache</p>

            <h4 className="mt-1 font-semibold text-white">Redis</h4>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Scroll Down</span>

        <div className="h-14 w-px bg-gradient-to-b from-blue-400 to-transparent" />
      </div>
    </section>
  )
}

export default Hero
