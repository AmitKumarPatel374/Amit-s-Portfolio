import { FaSearch } from "react-icons/fa"

const categories = ["All", "Full Stack", "Backend", "Frontend", "AI", "MERN"]

const ProjectsFilter = ({
  search = "",
  setSearch = () => {},
  category = "All",
  setCategory = () => {},
}) => {
  return (
    <section className="border-b border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}

          <div className="relative w-full lg:max-w-md">
            <FaSearch
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-slate-500
              "
            />

            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-[#111827]/70
                py-4
                pl-14
                pr-5
                text-white
                backdrop-blur-xl
                outline-none
                transition
                placeholder:text-slate-500
                focus:border-blue-400
              "
            />
          </div>

          {/* Result */}

          <p className="text-sm text-slate-400">Find projects by name, technology or category.</p>
        </div>

        {/* Categories */}

        <div className="mt-10 flex flex-wrap gap-4">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`
                rounded-full
                px-5
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-300

                ${
                  category === item
                    ? "bg-blue-500 text-white"
                    : "border border-white/10 bg-[#111827]/70 text-slate-400 hover:border-blue-400/40 hover:text-white"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsFilter
