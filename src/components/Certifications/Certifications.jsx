import { certifications } from "../../data/certifications"

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#0B1120] py-24"
    >
      {/* Grid Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Certifications
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Certifications & <span className="text-blue-400">Credentials</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A collection of certifications, internships, and courses that represent my continuous
            learning and technical growth.
          </p>
        </div>

        {/* Certification Grid */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate) => (
            <a
              key={certificate.id}
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#111827]/80
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-400/30
                hover:bg-[#151e30]
                hover:shadow-2xl
                hover:shadow-blue-500/10
              "
            >
              {/* Top */}

              <div className="flex items-start justify-between gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-xl
                    text-blue-400
                  "
                >
                  📜
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-3
                    py-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  {certificate.category}
                </span>
              </div>

              {/* Title */}

              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                  leading-snug
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-blue-300
                "
              >
                {certificate.title}
              </h3>

              {/* Issuer */}

              <p className="mt-2 text-sm font-medium text-blue-400">{certificate.issuer}</p>

              {/* Description */}

              <p className="mt-4 text-sm leading-6 text-slate-400">{certificate.description}</p>

              {/* Skills */}

              <div className="mt-5 flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-1
                      text-[11px]
                      text-slate-400
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <span className="font-mono text-xs text-slate-500">{certificate.date}</span>

                <span
                  className="
                    text-sm
                    font-semibold
                    text-blue-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  View Certificate →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
