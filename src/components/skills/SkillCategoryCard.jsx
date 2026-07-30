const SkillCategoryCard = ({ category }) => {
  const { title, description, icon: Icon, color, skills } = category

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
          ${color}
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
            bg-white/5
          "
        >
          <Icon className="text-3xl text-blue-400" />
        </div>

        {/* Heading */}

        <h3 className="text-3xl font-bold text-white">{title}</h3>

        <p className="mt-4 leading-7 text-slate-400">{description}</p>

        {/* Skills */}

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                font-medium
                text-slate-300
                transition-all
                duration-300
                hover:border-blue-400
                hover:bg-blue-500/10
                hover:text-white
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillCategoryCard
