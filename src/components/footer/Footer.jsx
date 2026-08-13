import { Link } from "react-scroll"
import { navigation } from "../../data/navigation"
import { socialLinks } from "../../data/footer"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0B1120]">
      <div className="footer-grid pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pr-8">
            <h2 className="footer-name">Amit Kumar Patel</h2>

            <p className="footer-description">
              Full Stack MERN Developer passionate about building scalable backend systems,
              AI-powered applications, and modern web experiences.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex flex-wrap gap-3">
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

            <p className="mt-5 max-w-sm text-xs leading-6 text-slate-500 sm:text-sm">
              Let's connect and build something amazing together!
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-4">
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

          {/* RESOURCES */}
          <div>
            <h3 className="footer-heading">Resources</h3>

            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-4">
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
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
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

          {/* CTA */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="footer-heading">Let's Connect</h3>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Have a project idea or an opportunity? I'd love to hear from you.
            </p>

            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="footer-contact-button"
            >
              Get In Touch
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px w-full bg-white/[0.08] sm:my-12" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center gap-4 text-center text-xs text-slate-500 sm:text-sm md:flex-row md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Amit Kumar Patel. All Rights Reserved.</p>

          <div className="flex items-center gap-5 sm:gap-7">
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

      {/* BACK TO TOP */}
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
