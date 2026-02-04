import { Router } from "express";
import { createPostHandler, deletePostHandler } from "../controllers/post.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authMiddleware, createPostHandler);
router.delete("/:postId", authMiddleware, deletePostHandler);

export default router;
