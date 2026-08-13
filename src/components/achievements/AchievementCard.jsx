const AchievementCard = ({ achievement }) => {
  const { icon: Icon, badge, badgeColor, title, description } = achievement

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/70 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/40 sm:rounded-3xl sm:p-6 lg:p-8 lg:hover:-translate-y-2">
      {/* Glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100 sm:h-48 sm:w-48 lg:h-56 lg:w-56 ${badgeColor}`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl">
          <Icon className="text-2xl text-blue-400 sm:text-3xl" />
        </div>

        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:mb-5 sm:px-4 sm:py-2">
          <span className={`h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5 ${badgeColor}`} />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-300 sm:text-xs">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">{title}</h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-slate-400 sm:mt-5 sm:text-base sm:leading-7">
          {description}
        </p>
      </div>
    </div>
  )
}

export default AchievementCard
