import {
  Calendar,
  CheckCircle2,
  Clock3,
  FolderOpen,
} from "lucide-react";

function Preview() {
  return (
    <section
      id="preview"
      className="py-28 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm">
            Dashboard Preview
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Stay Productive Every Day
          </h2>

          <p className="text-slate-400 text-lg mt-6 max-w-3xl mx-auto">
            A clean workspace where you can manage tasks, categories,
            priorities and deadlines effortlessly.
          </p>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-[32px] shadow-2xl overflow-hidden">

          {/* Window Header */}

          <div className="flex items-center justify-between px-8 py-5 border-b border-slate-800">

            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            <p className="text-slate-400 font-medium">
              Daily Planner
            </p>

          </div>

          <div className="grid lg:grid-cols-4">

            {/* Sidebar */}

            <div className="bg-slate-950 border-r border-slate-800 p-6">

              <h3 className="text-white text-xl font-bold mb-8">
                Dashboard
              </h3>

              <div className="space-y-5 text-slate-300">

                <Menu icon={<CheckCircle2 size={18} />} text="Tasks" />
                <Menu icon={<FolderOpen size={18} />} text="Categories" />
                <Menu icon={<Calendar size={18} />} text="Calendar" />
                <Menu icon={<Clock3 size={18} />} text="Upcoming" />

              </div>

            </div>

            {/* Main */}

            <div className="lg:col-span-3 p-8">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl text-white font-bold">
                  Good Morning 👋
                </h2>

                <span className="bg-indigo-600 text-white px-4 py-2 rounded-full">
                  Monday
                </span>

              </div>

              <div className="grid md:grid-cols-3 gap-6">

                {/* Tasks */}

                <div className="md:col-span-2 bg-slate-800 rounded-3xl p-6">

                  <h3 className="text-white text-xl font-semibold mb-6">
                    Today's Tasks
                  </h3>

                  <div className="space-y-4">

                    <Task title="Complete Backend API" done />

                    <Task title="Finish Landing Page" />

                    <Task title="Design Login Screen" />

                    <Task title="Study React Hooks" />

                  </div>

                </div>

                {/* Stats */}

                <div className="space-y-6">

                  <Stat
                    title="Completed"
                    value="12"
                    color="text-green-400"
                  />

                  <Stat
                    title="Progress"
                    value="85%"
                    color="text-indigo-400"
                  />

                  <Stat
                    title="Categories"
                    value="5"
                    color="text-cyan-400"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function Menu({ icon, text }) {
  return (
    <div className="flex items-center gap-3 hover:text-indigo-400 cursor-pointer transition">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function Task({ title, done }) {
  return (
    <div className="flex items-center justify-between bg-slate-900 rounded-xl px-5 py-4">

      <div className="flex items-center gap-4">

        <div
          className={`w-5 h-5 rounded-full border-2 ${
            done
              ? "bg-green-500 border-green-500"
              : "border-slate-500"
          }`}
        ></div>

        <span
          className={
            done
              ? "line-through text-slate-500"
              : "text-white"
          }
        >
          {title}
        </span>

      </div>

    </div>
  );
}

function Stat({ title, value, color }) {
  return (
    <div className="bg-slate-800 rounded-3xl p-6">

      <p className="text-slate-400">
        {title}
      </p>

      <h3 className={`text-4xl font-bold mt-2 ${color}`}>
        {value}
      </h3>

    </div>
  );
}

export default Preview;