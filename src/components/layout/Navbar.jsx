import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa"

import { navLinks } from "../../data/navigation"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* ================= Navbar ================= */}

      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}

          <Link
            to="home"
            smooth
            duration={600}
            offset={-80}
            className="cursor-pointer text-2xl font-bold tracking-tight text-white"
          >
            AKP
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href.replace("#", "")}
                smooth
                spy
                duration={600}
                offset={-80}
                activeClass="text-blue-400 after:w-full"
                className="
                relative
                cursor-pointer
                uppercase
                text-sm
                tracking-[0.15em]
                text-slate-400
                transition
                hover:text-white

                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-blue-400
                after:transition-all
                hover:after:w-full
              "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.02]
              transition
              hover:border-blue-400/30
              hover:bg-white/5
            "
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.02]
              transition
              hover:border-blue-400/30
              hover:bg-white/5
            "
            >
              <FaLinkedin size={18} />
            </a>

            <button
              className="
              ml-2
              flex
              items-center
              gap-2
              rounded-xl
              bg-blue-500
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-blue-600
            "
            >
              <FaDownload size={14} />
              Resume
            </button>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(true)}
            className="text-white lg:hidden"
          >
            <HiOutlineMenuAlt3 size={30} />
          </button>
        </nav>
      </header>

      {/* ================= Mobile Menu ================= */}

      <div
        className={`fixed inset-0 z-[60] bg-[#0F172A] transition-all duration-500 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-8 py-8">
          {/* Top */}

          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">AKP</h2>

            <button
              onClick={closeMenu}
              className="rounded-lg p-2"
            >
              <HiOutlineX size={30} />
            </button>
          </div>

          {/* Navigation */}

          <div className="mt-20 flex flex-col gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href.replace("#", "")}
                smooth
                duration={600}
                offset={-80}
                onClick={closeMenu}
                className="cursor-pointer text-4xl font-semibold text-slate-300 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Bottom */}

          <div className="mt-auto">
            <button
              className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-blue-500
              py-4
              font-semibold
              text-white
              transition
              hover:bg-blue-600
            "
            >
              <FaDownload />
              Download Resume
            </button>

            <div className="mt-10 flex justify-center gap-8">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
