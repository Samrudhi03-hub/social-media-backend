import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import { findUserByEmail } from "../services/user.service";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req: Request, res: Response) => {
  try {
    const { password, ...rest } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser({
    ...rest,
    password: hashedPassword,
    });


    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET as string,
  { expiresIn: "1d" }
);

res.status(200).json({
  message: "Login successful",
  token,
  data: user,
});

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
