import { Request, Response } from "express";
import { getFeed } from "../services/feed.service";

export const getFeedHandler = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const posts = await getFeed(user.userId, page, limit);

    res.json({
      message: "Feed fetched",
      data: posts,
    });
  } catch {
    res.status(500).json({ message: "Error fetching feed" });
  }
};
