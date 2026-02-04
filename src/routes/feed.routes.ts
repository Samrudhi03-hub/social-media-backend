import { Router } from "express";
import { getFeedHandler } from "../controllers/feed.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getFeedHandler);

export default router;
