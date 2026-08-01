import { Link } from "react-scroll"

import { navigation } from "../../data/navigation"
import { socialLinks } from "../../data/footer"

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-10">
        {/* Availability */}
        <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
          </span>

          <span className="text-sm font-medium text-blue-300">
            Available for Full-Time Opportunities
          </span>
        </div>

        {/* Name */}
        <h2 className="mt-10 text-3xl font-bold text-white">Amit Kumar Patel</h2>

        <p className="mt-5 max-w-2xl leading-8 text-slate-400">
          Full Stack MERN Developer passionate about building scalable backend systems, AI-powered
          applications, and modern web experiences.
        </p>

        {/* Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={600}
              offset={-70}
              className="cursor-pointer text-sm font-medium text-slate-400 transition hover:text-blue-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="mt-12 flex gap-5">
          {socialLinks.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111827]/70 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <Icon className="text-xl" />
              </a>
            )
          })}
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex w-full flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Amit Kumar Patel. All Rights Reserved.</p>

          <p>Built with ❤️ using React, Tailwind CSS, Framer Motion & Node.js.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
