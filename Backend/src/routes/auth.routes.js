import express from "express";
import { register } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";
import { forgotPasswordController, resetPasswordController } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password/:token", resetPasswordController);

export default router;
