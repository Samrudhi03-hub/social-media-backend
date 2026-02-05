import express from "express";
import userRoutes from "./routes/user.routes";
import { authMiddleware } from "./middlewares/auth.middleware";
import postRoutes from "./routes/post.routes";
import likeRoutes from "./routes/like.routes";
import commentRoutes from "./routes/comment.routes";
import followRoutes from "./routes/follow.routes";
import feedRoutes from "./routes/feed.routes";
import notificationRoutes from "./routes/notification.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import morgan from "morgan";
import { logger } from "./config/logger";
import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";
import { i18next, middleware as i18nMiddleware } from "./config/i18n";

const app = express();

// Middleware to read JSON body
app.use(express.json());

app.use(i18nMiddleware.handle(i18next));

app.use(
  morgan("dev", {
    stream: {
      write: (message: string) => {
        logger.info(message.trim());
      },
    },
  }),
);

// Rate Limiter
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100, // allow only 100 requests
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests, please try again later.",
});

// Slow Down
const speedLimiter = slowDown({
  windowMs: 60 * 1000,
  delayAfter: 50, // start slowing after 50 requests
  delayMs: () => 500, // add 500ms delay
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(limiter);
app.use(speedLimiter);

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/follow", followRoutes);
app.use("/api/feed", feedRoutes);
app.use("/api/notifications", notificationRoutes);

// Test route
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You accessed protected route" });
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

export default app;
