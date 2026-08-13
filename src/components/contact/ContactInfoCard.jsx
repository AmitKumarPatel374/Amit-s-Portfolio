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
    <div className="group rounded-2xl border border-white/10 bg-[#111827]/70 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/40 sm:rounded-3xl sm:p-7 lg:hover:-translate-y-2">
      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 sm:h-14 sm:w-14 sm:rounded-2xl">
          <Icon className="text-xl sm:text-2xl" />
        </div>

        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-xs sm:tracking-[0.25em]">
            {title}
          </p>

          <h3 className="mt-1 break-all text-sm font-semibold text-white sm:mt-2 sm:text-lg">
            {value}
          </h3>
        </div>
      </div>

      {/* Availability */}
      {availability && (
        <div className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3">
          <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-green-400 sm:h-3 sm:w-3" />
          <span className="text-sm font-medium text-green-400">{availability}</span>
        </div>
      )}

      {/* Button */}
      {buttonText && (
        <button
          onClick={handleAction}
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 sm:mt-7 sm:gap-3 sm:px-5 sm:py-3 sm:text-sm"
        >
          {copy ? <FaCopy /> : <FaPhoneAlt />}
          {buttonText}
        </button>
      )}
    </div>
  )
}

export default ContactInfoCard
