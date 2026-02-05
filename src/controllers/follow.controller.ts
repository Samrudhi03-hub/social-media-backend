import { Request, Response } from "express";
import { toggleFollow } from "../services/follow.service";

export const followUser = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const followingId = Number(req.params.userId);

    const result = await toggleFollow(user.userId, followingId);

    res.json({
      message: result.followed ? "User followed" : "User unfollowed",
    });
  } catch {
    res.status(500).json({ message: "Error following user" });
  }
};
