import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { NotebookPen } from "lucide-react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setMessage("");

      const response = await api.post("/auth/forgot-password", {
        email,
      });

      setMessage(response.data.message);
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#020617] via-[#172554] to-[#0f172a] flex items-center justify-center px-6">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 w-full max-w-md">
        <div className="flex justify-center items-center gap-2">
          <NotebookPen className="text-indigo-400" />

          <h1 className="text-white text-2xl font-bold">DailyPlanner</h1>
        </div>

        <h2 className="text-white text-3xl font-bold text-center mt-8">
          Forgot Password?
        </h2>

        <p className="text-slate-400 text-center mt-3">
          Enter your email and we will send you a reset link.
        </p>

        {message && (
          <p className="text-green-400 mt-5 text-center">{message}</p>
        )}

        {error && <p className="text-red-400 mt-5 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-xl outline-none"
          />

          <button
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Remember your password?
          <Link to="/login" className="text-indigo-400 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
