import { Router } from "express";
import { followUser } from "../controllers/follow.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * /api/follow/{userId}:
 *   post:
 *     summary: Follow or unfollow user
 *     tags: [Follow]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Toggle follow
 */

router.post("/:userId", authMiddleware, followUser);

export default router;
