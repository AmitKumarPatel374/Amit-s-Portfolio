import { FaCopy, FaPhoneAlt } from "react-icons/fa"

const ContactInfoCard = ({ item }) => {
  const { icon: Icon, title, value, action, buttonText, availability, copy } = item

  const handleAction = async () => {
    if (copy) {
      await navigator.clipboard.writeText(value)
      alert("Copied to clipboard!")
      return
    }

    if (action) {
      window.open(action, "_blank")
    }
  }

  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-[#111827]/70
        p-7
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-400/40
      "
    >
      {/* Header */}

      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-blue-500/10
            text-blue-400
          "
        >
          <Icon className="text-2xl" />
        </div>

        <div>
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-slate-500
            "
          >
            {title}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white break-all">{value}</h3>
        </div>
      </div>

      {/* Availability */}

      {availability && (
        <div className="mt-6 flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

          <span className="font-medium text-green-400">{availability}</span>
        </div>
      )}

      {/* Button */}

      {buttonText && (
        <button
          onClick={handleAction}
          className="
            mt-7
            inline-flex
            items-center
            gap-3
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-5
            py-3
            text-sm
            font-medium
            text-white
            transition-all
            duration-300
            hover:border-blue-400/40
            hover:bg-blue-500/10
          "
        >
          {copy ? <FaCopy /> : <FaPhoneAlt />}

          {buttonText}
        </button>
      )}
    </div>
  )
}

export default ContactInfoCard
