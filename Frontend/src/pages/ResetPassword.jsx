import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NotebookPen } from "lucide-react";
import api from "../api/axios";


function ResetPassword() {

  const { token } = useParams();
  const navigate = useNavigate();


  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e) => {

    e.preventDefault();


    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }


    try {

      setLoading(true);
      setError("");
      setMessage("");


      const response = await api.post(
        `/auth/reset-password/${token}`,
        {
          password
        }
      );


      setMessage(response.data.message);


      setTimeout(() => {
        navigate("/login");
      }, 2000);



    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Password reset failed"
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="min-h-screen bg-gradient-to-r from-[#020617] via-[#172554] to-[#0f172a] flex items-center justify-center px-6">


      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8">


        <div className="flex justify-center items-center gap-2">

          <NotebookPen className="text-indigo-400" />

          <h1 className="text-2xl font-bold text-white">
            DailyPlanner
          </h1>

        </div>



        <h2 className="text-3xl font-bold text-white text-center mt-8">
          Reset Password
        </h2>


        <p className="text-slate-400 text-center mt-3">
          Create a new password for your account.
        </p>



        {
          message && (
            <p className="text-green-400 text-center mt-5">
              {message}
            </p>
          )
        }


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
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-xl outline-none"
          />



          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-xl outline-none"
          />



          <button
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-semibold transition"
          >

            {
              loading
              ? "Resetting..."
              : "Reset Password"
            }

          </button>


        </form>


      </div>


    </div>

  );

}


export default ResetPassword;