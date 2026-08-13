import ContactInfoCard from "./ContactInfoCard"
import ContactForm from "./ContactForm"
import SocialButton from "./SocialButton"

import { contactInfo, socialLinks } from "../../data/contact"

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1120] py-20 sm:py-24 lg:py-32"
    >
      {/* Background */}
      <div className="skills-bg pointer-events-none absolute inset-0 -z-0">
        <div className="projects-grid absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl md:text-5xl">
            Let's Build Something <span className="text-blue-400">Amazing Together</span>
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
            I'm always excited to work on innovative projects, collaborate with talented people, and
            explore new opportunities. Feel free to reach out anytime.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          {/* Left */}
          <div className="space-y-5 lg:col-span-5 lg:space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((item) => (
                <ContactInfoCard
                  key={item.title}
                  item={item}
                />
              ))}
            </div>

            {/* Social */}
            <div className="flex flex-wrap gap-3 pt-2 sm:gap-4 sm:pt-4">
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.name}
                  social={social}
                />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
