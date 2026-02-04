import { Router } from "express";
import { followUser } from "../controllers/follow.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/:userId", authMiddleware, followUser);

export default router;
