import { Router } from "express";
import { likePost } from "../controllers/like.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/:postId", authMiddleware, likePost);

export default router;
