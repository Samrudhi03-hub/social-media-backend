import { Request, Response } from "express";
import { toggleLike } from "../services/like.service";

export const likePost = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const postId = Number(req.params.postId);

    const result = await toggleLike(postId, user.userId);

    res.json({
      message: result.liked ? "Post liked" : "Post unliked",
    });
  } catch (error) {
    res.status(500).json({ message: "Error toggling like" });
  }
};
