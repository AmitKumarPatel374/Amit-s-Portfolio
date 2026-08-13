const SocialButton = ({ social }) => {
  const { icon: Icon, name, href, type = "icon" } = social

  if (type === "button") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-[#111827]/70 px-4 text-xs font-medium text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 sm:h-12 sm:gap-3 sm:px-6 sm:text-sm"
      >
        <Icon className="text-base text-blue-400 sm:text-lg" />
        <span>{name}</span>
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#111827]/70 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400 sm:h-12 sm:w-12 sm:rounded-full"
    >
      <Icon className="text-lg sm:text-xl" />
    </a>
  )
}

export default SocialButton
