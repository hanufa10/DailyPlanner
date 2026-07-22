import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Dashboard(){

    const { logout } = useAuth();
    const navigate = useNavigate();


    const handleLogout = () => {

        logout();

        navigate("/login");

    };


    return (

        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center gap-6">


            <h1 className="text-4xl font-bold">
                Welcome to Dashboard 🚀
            </h1>


            <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-xl font-semibold transition"
            >
                Logout
            </button>


        </div>

    );

}


export default Dashboard;