import { Router } from "express";
import { createPostHandler, deletePostHandler } from "../controllers/post.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a post
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: My first swagger post
 *               imageUrl:
 *                 type: string
 *                 example: ""
 *     responses:
 *       201:
 *         description: Post created
 */


router.post("/", authMiddleware, createPostHandler);

/**
 * @swagger
 * /api/posts/{postId}:
 *   delete:
 *     summary: Soft delete a post
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Post not found
 */

router.delete("/:postId", authMiddleware, deletePostHandler);

export default router;
