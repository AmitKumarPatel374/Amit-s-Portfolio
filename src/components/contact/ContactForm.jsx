import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FaPaperPlane } from "react-icons/fa"
import { toast } from "react-toastify"

const ContactForm = () => {
  const formRef = useRef()

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
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
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )

      toast.success("Message sent successfully!")
      
      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      
      toast.error("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Name + Email */}

        <div className="grid gap-6 md:grid-cols-2">
          <InputField
            label="Name"
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="John Doe"
          />

          <InputField
            label="Email Address"
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>

        {/* Subject */}

        <InputField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Discussion"
        />

        {/* Message */}

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

        {/* Submit */}

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

        {/* Bottom info */}

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
