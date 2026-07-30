const AchievementCard = ({ achievement }) => {
  const { icon: Icon, badge, badgeColor, title, description } = achievement

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#111827]/70
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-400/40
      "
    >
      {/* Glow */}

      <div
        className={`
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          blur-3xl
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
          ${badgeColor}
        `}
      />

      <div className="relative z-10">
        {/* Icon */}

        <div
          className="
            mb-6
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-blue-500/10
          "
        >
          <Icon className="text-3xl text-blue-400" />
        </div>

        {/* Badge */}

        <div
          className="
            mb-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
          "
        >
          <span className={`h-2.5 w-2.5 rounded-full ${badgeColor}`} />

          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            {badge}
          </span>
        </div>

        {/* Title */}

        <h3 className="text-2xl font-bold text-white">{title}</h3>

        {/* Description */}

        <p className="mt-5 leading-7 text-slate-400">{description}</p>
      </div>
    </div>
  )
}

export default AchievementCard
