import { Router } from "express";
import { likePost } from "../controllers/like.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * /api/likes/{postId}:
 *   post:
 *     summary: Like or Unlike a post
 *     tags: [Like]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Toggle like
 */

router.post("/:postId", authMiddleware, likePost);

export default router;
