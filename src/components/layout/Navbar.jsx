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

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleResume = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer")
  }

  return (
    <>
      {/* =================================================
          HEADER
      ================================================= */}

      <header
        id="navbar"
        className={`
          fixed
          top-0
          left-0
          z-50
          w-full
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
            mx-auto
            flex
            max-w-container-max
            items-center
            justify-between

            px-5
            sm:px-6
            lg:px-page-margin

            transition-all
            duration-300

            ${isScrolled ? "h-16" : "h-20"}
          `}
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <div className="flex shrink-0 items-center">
            <Link
              to="home"
              smooth
              spy
              duration={600}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="
                cursor-pointer
                font-headline-md
                text-headline-md
                text-sm
                font-bold
                tracking-tighter
                text-on-background
                transition-transform
                active:scale-95
                sm:text-base
                lg:text-headline-md
              "
            >
              {"<Amit />"}
            </Link>
          </div>

          {/* =================================================
              DESKTOP NAVIGATION
              Visible only on lg+
          ================================================= */}

          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href.replace("#", "")}
                smooth
                spy
                duration={600}
                offset={-80}
                activeClass="nav-active"
                className="
                  nav-link
                  relative
                  cursor-pointer
                  whitespace-nowrap

                  font-label-md
                  text-label-md
                  uppercase
                  tracking-wider

                  text-on-surface-variant

                  transition-colors
                  duration-300

                  hover:text-on-background
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex shrink-0 items-center gap-3">
            {/* Resume - Desktop */}

            <button
              onClick={handleResume}
              className="
                hidden
                lg:block

                rounded-lg

                bg-primary
                px-4
                py-2
                xl:px-5
                xl:py-2.5

                font-label-md
                text-label-md
                font-bold
                uppercase
                tracking-wider
                text-on-primary

                shadow-lg
                shadow-primary/20

                transition-all
                duration-200

                hover:opacity-90
                active:scale-95
              "
            >
              Download Resume
            </button>

            {/* Mobile / Tablet Toggle */}

            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="
                relative
                z-[60]
                flex
                h-10
                w-10
                flex-col
                items-center
                justify-center
                gap-1.5
                rounded-lg
                p-2
                lg:hidden
              "
            >
              <span
                className={`
                  block
                  h-0.5
                  w-6
                  bg-on-background
                  transition-all
                  duration-300

                  ${isOpen ? "translate-y-1 rotate-45" : ""}
                `}
              />

              <span
                className={`
                  block
                  h-0.5
                  w-6
                  bg-on-background
                  transition-all
                  duration-300

                  ${isOpen ? "-translate-y-1 -rotate-45" : ""}
                `}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* =================================================
          MOBILE / TABLET MENU
      ================================================= */}

      <div
        id="mobile-menu"
        className={`
          fixed
          inset-0
          z-40
          flex
          flex-col

          bg-background

          px-6
          pb-8
          pt-24

          lg:hidden

          overflow-y-auto
          no-scrollbar

          transition-transform
          duration-[400ms]
          ease-[cubic-bezier(0.7,0,0.3,1)]

          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Navigation */}

        <div className="flex flex-col gap-5 sm:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href.replace("#", "")}
              smooth
              spy
              duration={600}
              offset={-80}
              activeClass="mobile-nav-active"
              onClick={() => setIsOpen(false)}
              className="
                mobile-nav-link

                cursor-pointer

                py-1

                font-display-lg-mobile
                text-display-lg-mobile

                text-on-surface-variant

                transition-all
                duration-300

                hover:text-primary
              "
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-auto pt-10">
          {/* Resume */}

          <button
            onClick={handleResume}
            className="
              w-full

              rounded-xl

              bg-primary
              py-4

              font-headline-md
              text-headline-md
              font-bold
              text-on-primary

              shadow-lg
              shadow-primary/20

              transition-all
              duration-300

              hover:opacity-90
              active:scale-[0.98]
            "
          >
            Download Resume
          </button>

          {/* Social */}

          <div
            className="
            mt-7
            flex
            flex-wrap
            justify-center
            gap-6
            text-sm
            text-on-surface-variant
          "
          >
            <a
              href="#"
              className="transition-colors hover:text-primary"
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition-colors hover:text-primary"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition-colors hover:text-primary"
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
