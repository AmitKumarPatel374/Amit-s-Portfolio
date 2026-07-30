const StatCard = ({ stat }) => {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-[#111827]/70
        p-8
        text-center
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-400/40
      "
    >
      {/* Label */}

      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-slate-500
        "
      >
        {stat.label}
      </p>

      {/* Value */}

      <h3
        className="
          mt-6
          text-5xl
          font-bold
          text-blue-400
          transition-transform
          duration-300
          group-hover:scale-105
        "
      >
        {stat.value}
      </h3>

      {/* Optional Description */}

      {stat.description && (
        <p className="mt-4 text-sm leading-6 text-slate-400">{stat.description}</p>
      )}
    </div>
  )
}

export default StatCard
