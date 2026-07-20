import {registerUser} from "../services/auth.service.js";
import { loginUser } from "../services/auth.service.js";
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
