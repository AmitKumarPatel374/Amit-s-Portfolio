const StatCard = ({ stat }) => {
  return (
    <div className="group rounded-2xl border border-white/10 bg-[#111827]/70 p-4 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/40 sm:rounded-3xl sm:p-6 lg:p-8 lg:hover:-translate-y-2">
      {/* Value */}
      <h3 className="text-3xl font-bold text-blue-400 transition-transform duration-300 group-hover:scale-105 sm:text-4xl lg:text-5xl">
        {stat.value}
      </h3>

      {/* Label */}
      <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:mt-3 sm:text-[10px] sm:tracking-[0.22em] lg:mt-4 lg:text-xs lg:tracking-[0.25em]">
        {stat.label}
      </p>

      {/* Description */}
      {stat.description && (
        <p className="mt-3 text-xs leading-5 text-slate-400 sm:mt-4 sm:text-sm sm:leading-6">
          {stat.description}
        </p>
      )}
    </div>
  )
}

export default StatCard
