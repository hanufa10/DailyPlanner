import {registerUser} from "../services/auth.service.js";
import { loginUser } from "../services/auth.service.js";
import { forgotPassword } from "../services/auth.service.js";
import { resetPassword } from "../services/auth.service.js";


// User login credentials for test are "email": "hanan@gmail.com", "password": "12345678"
export const register = async (req, res) => {
  console.log("Register endpoint hit with data:", req.body); // Debugging line
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: user,
    });
  } catch (error) {
    res.status(400).json({ 
        success: false,
        message: error.message,
    });
  }
};
export const login = async (req, res) => {
  console.log("Login data:", req.body);

  try {
    const user = await loginUser(req.body);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: user
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const forgotPasswordController = async(req,res)=>{

    try{

        await forgotPassword(req.body.email);


        res.json({

            success:true,

            message:
            "If the email exists, a reset link has been sent."

        });


    }catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};


export const resetPasswordController = async(req,res)=>{

    try{

        await resetPassword(
            req.params.token,
            req.body.password
        );


        res.json({
            success:true,
            message:"Password reset successful"
        });


    }catch(error){

        res.status(400).json({
            success:false,
            message:error.message
        });

    }

};