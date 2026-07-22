import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { NotebookPen } from "lucide-react";


function Login() {


  const navigate = useNavigate();


  const [formData,setFormData] = useState({
    email:"",
    password:""
  });


  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);



  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };



  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{

      setLoading(true);
      setError("");


      const response = await login(formData);


      localStorage.setItem(
        "token",
        response.token
      );


      navigate("/dashboard");


    }catch(error){

      setError(
        error.response?.data?.message ||
        "Login failed"
      );

    }finally{

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


        <h2 className="text-3xl text-white font-bold text-center mt-8">
          Welcome Back
        </h2>


        <p className="text-slate-400 text-center mt-3">
          Login to manage your tasks
        </p>


        {
          error &&
          <p className="text-red-400 text-center mt-5">
            {error}
          </p>
        }



        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >


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
              ? "Logging in..."
              : "Sign In"
            }

          </button>


        </form>



        <p className="text-slate-400 text-center mt-6">

          Don't have an account?

          <Link
            to="/register"
            className="text-indigo-400 ml-2"
          >
            Register
          </Link>

        </p>


      </div>


    </div>

  );

}


export default Login;