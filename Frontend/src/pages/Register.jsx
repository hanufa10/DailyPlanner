import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("/auth/register", formData);

            alert("Registration successful");

            navigate("/login");

        } catch(error) {

            alert(error.response?.data?.message || "Registration failed");

        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form 
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md w-96"
            >

                <h1 className="text-3xl font-bold mb-6 text-center">
                    Register
                </h1>


                <input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded mb-3"
                />


                <input
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded mb-3"
                />


                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 border rounded mb-4"
                />


                <button
                    className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
                >
                    Register
                </button>


            </form>

        </div>
    );
}

export default Register;