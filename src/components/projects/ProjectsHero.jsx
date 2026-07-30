import { Link } from "react-router-dom"
import { FaArrowLeft, FaGithub, FaCode, FaLaptopCode } from "react-icons/fa"
import { allProjects } from "../../data/allProjects"

const ProjectsHero = () => {
  const featuredCount = allProjects.filter((project) => project.featured).length

  return (
    <section className="relative overflow-hidden border-b border-white/10 py-28">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Back */}

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
        >
          <FaArrowLeft />
          Back to Portfolio
        </Link>

        {/* Heading */}

        <div className="mt-10 max-w-4xl">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Work
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
            Building Products,
            <br />
            Solving Real Problems.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            A collection of production-ready applications, backend systems, AI-powered tools, and
            full-stack products built using modern technologies.
          </p>
        </div>

        {/* Stats */}

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <StatCard
            icon={FaLaptopCode}
            title="Projects"
            value={allProjects.length}
          />

          <StatCard
            icon={FaCode}
            title="Featured"
            value={featuredCount}
          />

          <StatCard
            icon={FaGithub}
            title="Open Source"
            value="100%"
          />
        </div>
      </div>
    </section>
  )
}

const StatCard = ({ icon: Icon, title, value }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
          <Icon className="text-2xl text-blue-400" />
        </div>

        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h3 className="mt-1 text-3xl font-bold text-white">{value}</h3>
        </div>
      </div>
    </div>
  )
}

export default ProjectsHero
