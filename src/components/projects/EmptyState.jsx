import { FaFolderOpen } from "react-icons/fa"

const EmptyState = ({ title, description }) => {
  return (
    <section className="py-32">
      <div className="mx-auto flex max-w-lg flex-col items-center px-6 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-500/10">
          <FaFolderOpen className="text-4xl text-blue-400" />
        </div>

        <h2 className="mt-8 text-3xl font-bold text-white">{title}</h2>

        <p className="mt-4 leading-7 text-slate-400">{description}</p>
      </div>
    </section>
  )
}

export default EmptyState
