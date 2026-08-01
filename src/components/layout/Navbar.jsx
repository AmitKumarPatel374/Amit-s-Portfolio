import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import "./Navbar.css"

import { navigation } from "../../data/navigation"

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

  return (
    <>
      {/* ================= HEADER ================= */}

      <header
        id="navbar"
        className={`
  fixed
  top-0
  w-full
  z-50
  transition-all
  duration-300

  ${
    isScrolled
      ? "bg-background/80 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-white/10"
      : "bg-background border-b border-transparent"
  }
`}
      >
        <nav
          id="nav-container"
          className={`
            flex
            justify-between
            items-center

            px-page-margin

            max-w-container-max

            mx-auto

            fade-in-sequence

            transition-all

            duration-300

            ${isScrolled ? "h-16" : "h-20"}
          `}
        >
          {/* ================= Left : Logo ================= */}

          <div className="flex items-center">
            <Link
              to="home"
              smooth
              spy
              duration={600}
              offset={-80}
              className="
      font-headline-md
      text-headline-md
      font-bold
      text-on-background
      tracking-tighter
      transition-transform
      active:scale-95
      cursor-pointer
    "
            >
              AKP
            </Link>
          </div>

          {/* ================= Center : Desktop Navigation ================= */}

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href.replace("#", "")}
                smooth
                spy
                duration={600}
                offset={-80}
                activeClass="nav-active"
                className={`
        font-label-md
        text-label-md
        uppercase
        tracking-wider
        relative
        nav-link
        transition-colors
        duration-300
        cursor-pointer

        ${
          index === 0
            ? "text-primary border-b-2 border-primary pb-1"
            : "text-on-surface-variant hover:text-on-background"
        }
      `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* ================= Right : Actions ================= */}

          <div className="flex items-center gap-4">
            {/* ================= Desktop Icons ================= */}

            {/* ================= Resume Button ================= */}

            <button
              className="
    hidden
    md:block

    bg-primary
    text-on-primary

    font-label-md
    text-label-md

    uppercase
    tracking-wider

    px-6
    py-2.5

    rounded-lg

    font-bold

    hover:opacity-90

    active:scale-95

    transition-all

    shadow-lg

    shadow-primary/20
  "
            >
              Download Resume
            </button>

            {/* ================= Mobile Toggle ================= */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
    md:hidden
    flex
    flex-col
    gap-1.5
    p-2
    z-[60]
  "
            >
              <span
                className={`
      w-6
      h-0.5
      bg-on-background
      transition-all

      ${isOpen ? "rotate-45 translate-y-1" : ""}
    `}
              />

              <span
                className={`
      w-6
      h-0.5
      bg-on-background
      transition-all

      ${isOpen ? "-rotate-45 -translate-y-1" : ""}
    `}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ================= Mobile Menu ================= */}

      <div
        id="mobile-menu"
        className={`
          fixed
          inset-0
          bg-background
          z-50
          md:hidden

          flex
          flex-col

          px-page-margin
          py-20

          overflow-y-auto
          no-scrollbar

          transition-transform
          duration-[400ms]
          ease-[cubic-bezier(0.7,0,0.3,1)]

          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* ================= Navigation ================= */}

        <div className="flex flex-col gap-8 mb-auto">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.href.replace("#", "")}
              smooth
              spy
              duration={600}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className={`
                font-display-lg-mobile
                text-display-lg-mobile

                transition-colors
                duration-300

                cursor-pointer

                ${index === 0 ? "text-on-background" : "text-on-surface-variant hover:text-primary"}
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* ================= Bottom ================= */}

        <div className="mt-12 flex flex-col gap-6">
          <button
            className="
              w-full

              bg-primary
              text-on-primary

              font-headline-md
              text-headline-md

              py-4

              rounded-xl

              font-bold

              hover:opacity-90

              transition-all
            "
          >
            Download Resume
          </button>

          <div className="flex gap-6 justify-center text-on-surface-variant">
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>

            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
