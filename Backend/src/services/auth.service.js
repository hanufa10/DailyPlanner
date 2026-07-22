import bcrypt from "bcrypt";
import prisma from "../config/prisma.js";
import { generateToken } from "../utils/jwt.js";
import crypto from "crypto";
import { sendEmail } from "../utils/email.js";

export const registerUser = async (data) => {
  const { name, email, password } = data;

  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true
    }
  });

  return user;
};
export const loginUser = async ({ email, password}) => {
  const user = await prisma.user.findUnique({
    where: { email }
  });
  if(!user){
    throw new Error("Invalid email or password");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!isPasswordValid){
    throw new Error("Invalid email or password");
  }
  const token = generateToken(user.id);
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token
  };
}
export const forgotPassword = async(email)=>{


    const user = await prisma.user.findUnique({
        where:{
            email
        }
    });


    // Don't reveal if user exists
    if(!user){
        return;
    }


    const token = crypto
        .randomBytes(32)
        .toString("hex");


    await prisma.user.update({

        where:{
            id:user.id
        },

        data:{
            resetToken: token,

            resetTokenExpiry:
              new Date(Date.now() + 15 * 60 * 1000)
        }

    });

    const resetLink =
    `http://localhost:5173/reset-password/${token}`;

    await sendEmail(
        email,
        "DailyPlanner Password Reset",
        `Reset your password here: ${resetLink}`
    );


};

export const resetPassword = async (token, password) => {

    const user = await prisma.user.findFirst({
        where: {
            resetToken: token,
            resetTokenExpiry: {
                gt: new Date()
            }
        }
    });


    if(!user){
        throw new Error("Invalid or expired token");
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    await prisma.user.update({

        where:{
            id:user.id
        },

        data:{
            password: hashedPassword,

            resetToken: null,

            resetTokenExpiry: null
        }

    });


};