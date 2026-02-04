import { Request, Response } from "express";
import { createPost, softDeletePost } from "../services/post.service";

export const createPostHandler = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;

    const post = await createPost({
      userId: user.userId,
      content: req.body.content,
      imageUrl: req.body.imageUrl,
    });

    res.status(201).json({
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating post",
    });
  }
};

export const deletePostHandler = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const postId = Number(req.params.postId);

    await softDeletePost(postId, user.userId);

    res.json({ message: "Post deleted" });
  } catch {
    res.status(500).json({ message: "Error deleting post" });
  }
};
