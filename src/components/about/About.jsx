import { FaServer, FaReact, FaDatabase, FaLightbulb } from "react-icons/fa"

import profile from "../../assets/profile.png"

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-200px] top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="absolute right-[-200px] bottom-10 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-12 lg:px-10">
        {/* Left */}

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-blue-500/10 blur-3xl" />

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
              "
            >
              <img
                src={profile}
                alt="Amit Kumar Patel"
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Stats */}

          <div className="mt-8 grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-widest text-blue-400">Experience</p>

              <h3 className="mt-2 text-3xl font-bold text-white">1+</h3>

              <p className="mt-1 text-sm text-slate-400">Years Building Products</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-widest text-blue-400">Projects</p>

              <h3 className="mt-2 text-3xl font-bold text-white">10+</h3>

              <p className="mt-1 text-sm text-slate-400">Production Applications</p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            About Me
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-white">
            Building scalable digital products with
            <span className="text-blue-400"> clean architecture</span> and modern technologies.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            I am a Full Stack MERN Developer focused on creating scalable backend systems,
            AI-powered applications, and modern web experiences. I enjoy solving real-world problems
            using clean architecture and production-ready development practices.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            During my internship, I worked on repository patterns, MongoDB aggregation pipelines,
            secure REST APIs, Redis caching, authentication systems, and responsive React
            applications using Tailwind CSS.
          </p>

          {/* Strength Cards */}

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Backend Development */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-400">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <FaServer className="text-xl text-blue-400" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">Backend Development</h3>

                  <p className="mt-2 text-slate-400 leading-7">
                    Building scalable REST APIs using Node.js, Express.js, authentication,
                    repository patterns, and production-ready architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Frontend Engineering */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-400">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <FaReact className="text-xl text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">Frontend Engineering</h3>

                  <p className="mt-2 text-slate-400 leading-7">
                    Creating responsive, fast, and modern user interfaces using React, Next.js,
                    Tailwind CSS, and reusable components.
                  </p>
                </div>
              </div>
            </div>

            {/* Database Design */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-400">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <FaDatabase className="text-xl text-green-400" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">Database Design</h3>

                  <p className="mt-2 text-slate-400 leading-7">
                    Designing optimized MongoDB schemas, aggregation pipelines, Redis caching, and
                    efficient database queries.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem Solving */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-400">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <FaLightbulb className="text-xl text-yellow-400" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">Problem Solving</h3>

                  <p className="mt-2 text-slate-400 leading-7">
                    Strong understanding of algorithms, debugging, optimization, and writing
                    maintainable production-quality code.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}

          <div className="relative mt-16 rounded-3xl border-l-4 border-blue-400 bg-white/5 p-8">
            <span className="absolute right-6 top-2 text-7xl font-bold text-blue-400/10">"</span>

            <blockquote className="text-xl italic leading-9 text-slate-300">
              Code is not just instructions for a machine; it's an investment in the future. I
              believe every application should be scalable, maintainable, and deliver an exceptional
              experience to its users.
            </blockquote>

            <p className="mt-6 font-semibold text-blue-400">— Amit Kumar Patel</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
