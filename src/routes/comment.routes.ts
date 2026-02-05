import { Router } from "express";
import { addCommentHandler } from "../controllers/comment.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * /api/comments/{postId}:
 *   post:
 *     summary: Add comment to post
 *     tags: [Comment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: Nice post!
 *     responses:
 *       201:
 *         description: Comment added
 */

router.post("/:postId", authMiddleware, addCommentHandler);

export default router;
