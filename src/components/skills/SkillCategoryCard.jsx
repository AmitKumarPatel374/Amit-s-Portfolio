const SkillCategoryCard = ({ category }) => {
  const { title, description, icon: Icon, color, skills } = category

  return (
    <div
      className="
        group
        relative
        overflow-hidden

        rounded-2xl
        border
        border-white/10

        bg-[#111827]/70

        p-5

        backdrop-blur-xl

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-blue-400/40
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]

        sm:rounded-3xl
        sm:p-6

        lg:p-8
        lg:hover:-translate-y-2
      "
    >
      {/* ================= GLOW ================= */}

      <div
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20

          h-40
          w-40

          rounded-full

          blur-3xl

          opacity-0

          transition-all
          duration-500

          group-hover:opacity-100

          sm:h-48
          sm:w-48

          lg:h-56
          lg:w-56

          ${color}
        `}
      />

      <div className="relative z-10">
        {/* ================= ICON ================= */}

        <div
          className="
            mb-5
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-xl
            border
            border-white/10

            bg-white/5

            sm:mb-6
            sm:h-14
            sm:w-14
            sm:rounded-2xl
          "
        >
          <Icon
            className="
              text-2xl
              text-blue-400

              sm:text-3xl
            "
          />
        </div>

        {/* ================= HEADING ================= */}

        <h3
          className="
            text-2xl
            font-bold
            leading-tight
            text-white

            sm:text-3xl
          "
        >
          {title}
        </h3>

        {/* ================= DESCRIPTION ================= */}

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-slate-400

            sm:mt-4
            sm:text-base
            sm:leading-7
          "
        >
          {description}
        </p>

        {/* ================= SKILLS ================= */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-2

            sm:mt-7
            sm:gap-2.5

            lg:mt-8
            lg:gap-3
          "
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5

                px-3
                py-1.5

                text-[11px]
                font-medium
                text-slate-300

                transition-all
                duration-300

                hover:border-blue-400
                hover:bg-blue-500/10
                hover:text-white

                sm:px-3.5
                sm:py-2
                sm:text-xs

                lg:px-4
                lg:text-sm
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
