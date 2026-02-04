import { Router } from "express";
import { addCommentHandler } from "../controllers/comment.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/:postId", authMiddleware, addCommentHandler);

export default router;
