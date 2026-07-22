import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();


export function AuthProvider({ children }) {


    const [token, setToken] = useState(
        localStorage.getItem("token")
    );


    const [user, setUser] = useState(null);



    // Check token when app loads
    useEffect(() => {

        const savedToken = localStorage.getItem("token");

        if(savedToken){
            setToken(savedToken);
        }

    }, []);



    // Login function
    const login = (token) => {

        localStorage.setItem(
            "token",
            token
        );

        setToken(token);

    };



    // Logout function
    const logout = () => {

        localStorage.removeItem("token");

        setToken(null);
        setUser(null);

    };



    return (

        <AuthContext.Provider
            value={{
                token,
                user,
                setUser,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}



export function useAuth(){

    return useContext(AuthContext);

}