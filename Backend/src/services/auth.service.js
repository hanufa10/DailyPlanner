import bcrypt from "bcrypt";
import prisma from "../config/prisma.js";
import { generateToken } from "../utils/jwt.js";

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