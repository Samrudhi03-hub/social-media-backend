import { Request, Response } from "express";
import { addComment } from "../services/comment.service";

export const addCommentHandler = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const postId = Number(req.params.postId);

    const comment = await addComment(postId, user.userId, req.body.content);

    res.status(201).json({
      message: "Comment added",
      data: comment,
    });
  } catch {
    res.status(500).json({ message: "Error adding comment" });
  }
};
