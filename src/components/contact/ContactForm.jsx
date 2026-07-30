import { useState } from "react"
import { FaPaperPlane } from "react-icons/fa"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      // EmailJS Integration
      // await emailjs.send(...)

      await new Promise((resolve) => setTimeout(resolve, 1500))

      alert("Message sent successfully!")

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      alert("Something went wrong.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#111827]/70
        p-8
        backdrop-blur-xl
        lg:p-10
      "
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />

          <InputField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>

        <InputField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Discussion"
        />

        <div>
          <label className="mb-3 block text-sm font-medium text-slate-300">Message</label>

          <textarea
            name="message"
            rows={7}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-slate-900/60
              px-5
              py-4
              text-white
              outline-none
              transition
              duration-300
              placeholder:text-slate-500
              focus:border-blue-400
            "
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-blue-500
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-blue-600
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {loading ? (
            <>
              <span
                className="
                  h-5
                  w-5
                  animate-spin
                  rounded-full
                  border-2
                  border-white
                  border-t-transparent
                "
              />
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane />
              Send Message
            </>
          )}
        </button>

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            text-sm
            text-slate-400
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Securely encrypted communication
          </div>

          <p>Average response time: 24 hours</p>
        </div>
      </form>
    </div>
  )
}

const InputField = ({ label, type = "text", ...props }) => {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-slate-300">{label}</label>

      <input
        type={type}
        required
        {...props}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-slate-900/60
          px-5
          py-4
          text-white
          outline-none
          transition
          duration-300
          placeholder:text-slate-500
          focus:border-blue-400
        "
      />
    </div>
  )
}

export default ContactForm
