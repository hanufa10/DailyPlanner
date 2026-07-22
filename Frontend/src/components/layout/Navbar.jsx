import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { NotebookPen } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <NotebookPen
            className={`w-7 h-7 transition ${
              scrolled ? "text-indigo-600" : "text-indigo-400"
            }`}
          />

          <span
            className={`text-2xl font-bold transition ${
              scrolled ? "text-indigo-600" : "text-white"
            }`}
          >
            DailyPlanner
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">

          <a
            href="#features"
            className={`transition font-medium hover:text-indigo-500 ${
              scrolled ? "text-slate-700" : "text-white"
            }`}
          >
            Features
          </a>

          <a
            href="#preview"
            className={`transition font-medium hover:text-indigo-500 ${
              scrolled ? "text-slate-700" : "text-white"
            }`}
          >
            Preview
          </a>

          <a
            href="#contact"
            className={`transition font-medium hover:text-indigo-500 ${
              scrolled ? "text-slate-700" : "text-white"
            }`}
          >
            Contact
          </a>

        </nav>

        {/* Buttons */}
        <div className="flex gap-3">

          <Link
            to="/login"
            className={`px-5 py-2 rounded-lg font-medium transition ${
              scrolled
                ? "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                : "border border-white text-white hover:bg-white/10"
            }`}
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition"
          >
            Get Started
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;