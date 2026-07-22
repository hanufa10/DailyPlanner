import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 border border-slate-700 rounded-[36px] p-14 text-center shadow-2xl">

          <span className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium">
            Get Started Today
          </span>

          <h2 className="text-5xl font-bold text-white mt-8 leading-tight">
            Organize Your Life.
            <br />
            One Task at a Time.
          </h2>

          <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto leading-8">
            Join thousands of users who manage their daily tasks,
            organize projects, and stay productive with one simple
            planner.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <Link
              to="/register"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              Create Free Account
            </Link>

            <Link
              to="/login"
              className="border border-slate-600 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition duration-300"
            >
              Sign In
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;