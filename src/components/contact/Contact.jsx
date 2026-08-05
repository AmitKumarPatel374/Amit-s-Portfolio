import ContactInfoCard from "./ContactInfoCard"
import ContactForm from "./ContactForm"
import SocialButton from "./SocialButton"

import { contactInfo, socialLinks } from "../../data/contact"

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 bg-[#0B1120]"
    >
      {/* Background */}
      <div className="skills-bg pointer-events-none absolute inset-0 -z-0">
        <div className="projects-grid absolute inset-0" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">Contact</p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Let's Build Something
            <span className="text-blue-400"> Amazing Together</span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            I'm always excited to work on innovative projects, collaborate with talented people, and
            explore new opportunities. Feel free to reach out anytime.
          </p>
        </div>

        {/* Content */}

        <div className="mt-24 grid gap-16 lg:grid-cols-12">
          {/* Left */}

          <div className="space-y-8 lg:col-span-5">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((item) => (
                <ContactInfoCard
                  key={item.title}
                  item={item}
                />
              ))}
            </div>

            {/* Social */}

            <div className="flex flex-wrap gap-4 pt-4">
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
