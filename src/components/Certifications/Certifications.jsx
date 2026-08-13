import { certifications } from "../../data/certifications"

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#0B1120] py-20 sm:py-24 lg:py-32"
    >
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
            Certifications
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl md:text-5xl">
            Certifications & <span className="text-blue-400">Credentials</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            A collection of certifications, internships, and courses that represent my continuous
            learning and technical growth.
          </p>
        </div>

        {/* Certification Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {certifications.map((certificate) => (
            <a
              key={certificate.id}
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#151e30] hover:shadow-2xl hover:shadow-blue-500/10 sm:rounded-3xl sm:p-6 lg:hover:-translate-y-2"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-lg text-blue-400 sm:h-12 sm:w-12 sm:text-xl">
                  📜
                </div>

                <span className="max-w-[55%] rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400 sm:px-3 sm:text-[10px]">
                  {certificate.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-blue-300 sm:mt-6 sm:text-xl">
                {certificate.title}
              </h3>

              {/* Issuer */}
              <p className="mt-2 text-xs font-medium text-blue-400 sm:text-sm">
                {certificate.issuer}
              </p>

              {/* Description */}
              <p className="mt-3 text-xs leading-6 text-slate-400 sm:mt-4 sm:text-sm">
                {certificate.description}
              </p>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] text-slate-400 sm:px-3 sm:text-[11px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4 sm:mt-6 sm:pt-5">
                <span className="font-mono text-[10px] text-slate-500 sm:text-xs">
                  {certificate.date}
                </span>

                <span className="text-[11px] font-semibold text-blue-400 transition-transform duration-300 group-hover:translate-x-1 sm:text-sm">
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
