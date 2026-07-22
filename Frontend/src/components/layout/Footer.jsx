function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">


          <div>
            <h3 className="text-xl font-bold text-white">
              DailyPlanner
            </h3>

            <p className="text-sm mt-2">
              Plan your day. Focus on what matters.
            </p>
          </div>


          <p className="text-sm">
            © 2026 DailyPlanner. All rights reserved.
          </p>


        </div>

      </div>

    </footer>
  );
}

export default Footer;