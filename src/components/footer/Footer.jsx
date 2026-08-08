import { Link } from "react-scroll"

import { navigation } from "../../data/navigation"
import { socialLinks } from "../../data/footer"
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* =====================================
              BRAND
          ===================================== */}

          <div className="lg:pr-10">
            <h2 className="footer-name">Amit Kumar Patel</h2>

            <p className="footer-description">
              Full Stack MERN Developer passionate about building scalable backend systems,
              AI-powered applications, and modern web experiences.
            </p>

            {/* Social Icons */}

            <div className="mt-7 flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    className="footer-social"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              Let's connect and build something amazing together!
            </p>
          </div>

          {/* =====================================
              QUICK LINKS
          ===================================== */}

          <div>
            <h3 className="footer-heading">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href.replace("#", "")}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="footer-link"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* =====================================
              RESOURCES
          ===================================== */}

          <div>
            <h3 className="footer-heading">Resources</h3>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                to="home"
                smooth={true}
                duration={600}
                offset={-70}
                className="footer-link"
              >
                Portfolio
              </Link>

              <a
                href="./resume.pdf"
                className="footer-link"
              >
                Resume
              </a>

              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-70}
                className="footer-link"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================
            DIVIDER
        ========================================= */}

        <div className="my-12 h-px w-full bg-white/[0.08]" />

        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Amit Kumar Patel. All Rights Reserved.</p>

          <div className="flex items-center gap-7">
            <a
              href="#"
              className="footer-bottom-link"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="footer-bottom-link"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* =========================================
          BACK TO TOP
      ========================================= */}

      <Link
        to="home"
        smooth={true}
        duration={800}
        offset={0}
        className="footer-back-to-top"
        aria-label="Back to top"
      >
        ↑
      </Link>
    </footer>
  )
}

export default Footer
