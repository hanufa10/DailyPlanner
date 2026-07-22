import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 items-center gap-20">

          {/* Left Side */}

          <div>

            <span className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm mb-6">
              Productivity Made Simple
            </span>

            <h1 className="text-6xl font-extrabold text-white leading-tight">
              Plan Smarter.
              <br />
              Achieve More Every Day.
            </h1>

            <p className="text-slate-300 text-xl mt-8 leading-8">
              Organize your tasks, manage categories, track deadlines,
              and stay productive with one modern planner built for
              students, professionals, and teams.
            </p>

            <div className="flex gap-5 mt-10">

              <Link
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="border border-slate-600 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition"
              >
                Sign In
              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl w-full max-w-md p-6">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-white text-xl font-bold">
                  Today's Tasks
                </h2>

                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                  75%
                </span>

              </div>

              <div className="space-y-4">

                <Task title="Complete Backend API" completed />

                <Task title="Design Landing Page" />

                <Task title="Study React Hooks" />

                <Task title="Prepare Presentation" />

              </div>

              <div className="mt-8">

                <p className="text-slate-400 mb-2">
                  Progress
                </p>

                <div className="bg-slate-700 rounded-full h-3">

                  <div className="bg-indigo-500 h-3 rounded-full w-3/4"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function Task({ title, completed }) {
  return (
    <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">

      <div className="flex items-center gap-3">

        <div
          className={`w-5 h-5 rounded-full border-2 ${
            completed
              ? "bg-green-500 border-green-500"
              : "border-slate-500"
          }`}
        ></div>

        <span
          className={`${
            completed
              ? "line-through text-slate-500"
              : "text-white"
          }`}
        >
          {title}
        </span>

      </div>

    </div>
  );
}

export default Hero;