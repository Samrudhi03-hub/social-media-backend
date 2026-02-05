import { Router } from "express";
import { getFeedHandler } from "../controllers/feed.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * /api/feed:
 *   get:
 *     summary: Get user feed
 *     tags: [Feed]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Feed fetched
 */


router.get("/", authMiddleware, getFeedHandler);

export default router;
