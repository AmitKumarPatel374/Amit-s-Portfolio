const SocialButton = ({ social }) => {
  const { icon: Icon, name, href, type = "icon" } = social

  if (type === "button") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex
          h-12
          items-center
          gap-3
          rounded-full
          border
          border-white/10
          bg-[#111827]/70
          px-6
          text-sm
          font-medium
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-400/40
          hover:bg-blue-500/10
        "
      >
        <Icon className="text-lg text-blue-400" />
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
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-[#111827]/70
        text-slate-300
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-400/40
        hover:bg-blue-500/10
        hover:text-blue-400
      "
    >
      <Icon className="text-xl" />
    </a>
  )
}

export default SocialButton
