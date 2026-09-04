import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B1120] px-6">
            <div className="text-center">

                <h1 className="text-8xl md:text-9xl font-bold text-indigo-500">
                    404
                </h1>

                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
                    Page Not Found
                </h2>

                <p className="mt-3 max-w-md mx-auto text-gray-400 text-sm md:text-base">
                    Sorry, the page you are looking for doesn't exist or may have been moved.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors"
                >
                    Back to Home
                </Link>

            </div>
        </div>
    )
}

export default PageNotFound