import {
  CheckCircle,
  CalendarDays,
  FolderOpen,
  ChartNoAxesColumn,
} from "lucide-react";

const features = [
  {
    icon: <CheckCircle size={40} className="text-cyan-400" />,
    title: "Task Management",
    description:
      "Create, organize, edit and complete your daily tasks with an intuitive workflow.",
  },
  {
    icon: <FolderOpen size={40} className="text-purple-400" />,
    title: "Smart Categories",
    description:
      "Separate work, study and personal tasks into organized categories.",
  },
  {
    icon: <CalendarDays size={40} className="text-indigo-400" />,
    title: "Due Dates",
    description:
      "Stay ahead of deadlines with reminders and scheduling.",
  },
  {
    icon: <ChartNoAxesColumn size={40} className="text-green-400" />,
    title: "Progress Tracking",
    description:
      "Visualize your productivity and celebrate completed goals.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 py-24 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium">
            Powerful Features
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Everything You Need
          </h2>

          <p className="text-slate-400 text-lg mt-6 max-w-3xl mx-auto">
            DailyPlanner combines simplicity and productivity in one modern
            workspace, helping you stay focused and organized every day.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:border-indigo-500
                hover:-translate-y-3
                hover:shadow-[0_20px_50px_rgba(79,70,229,0.25)]
              "
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:scale-110 transition">
                {feature.icon}
              </div>

              <h3 className="text-white text-2xl font-semibold mt-8">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-5 leading-7">
                {feature.description}
              </p>

              <button className="mt-8 text-indigo-400 font-semibold hover:text-indigo-300 transition">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;