import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { NotebookPen } from "lucide-react";


function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);
      setError("");

      await register(formData);

      navigate("/login");


    } catch(error) {

      setError(
        error.response?.data?.message ||
        "Registration failed"
      );

    } finally {

      setLoading(false);

    }

  };


  return (

<div className="min-h-screen bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center px-6">

    <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8">


        <div className="flex justify-center items-center gap-2">

          <NotebookPen className="text-indigo-400"/>

          <h1 className="text-2xl font-bold text-white">
            DailyPlanner
          </h1>

        </div>


        <h2 className="text-3xl font-bold text-white text-center mt-8">
          Create Account
        </h2>


        <p className="text-slate-400 text-center mt-3">
          Start organizing your day
        </p>


        {
          error && (
            <p className="text-red-400 text-center mt-5">
              {error}
            </p>
          )
        }



        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >


          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-xl outline-none"
          />


          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-xl outline-none"
          />


          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-xl outline-none"
          />


          <button
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-semibold transition"
          >

            {
              loading
              ? "Creating..."
              : "Create Account"
            }

          </button>


        </form>



        <p className="text-slate-400 text-center mt-6">

          Already have an account?

          <Link
            to="/login"
            className="text-indigo-400 ml-2"
          >
            Sign In
          </Link>

        </p>


    </div>


</div>

  );
}


export default Register;