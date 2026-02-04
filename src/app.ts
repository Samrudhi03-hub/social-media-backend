import express from "express";
import userRoutes from "./routes/user.routes";
import { authMiddleware } from "./middlewares/auth.middleware";
import postRoutes from "./routes/post.routes";
import likeRoutes from "./routes/like.routes";
import commentRoutes from "./routes/comment.routes";
import followRoutes from "./routes/follow.routes";
import feedRoutes from "./routes/feed.routes";


const app = express();

// Middleware to read JSON body
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/follow", followRoutes);
app.use("/api/feed", feedRoutes);



// Test route
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You accessed protected route" });
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

export default app;


//tokens - 
// alice- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc3MDIxMTQxMiwiZXhwIjoxNzcwMjk3ODEyfQ.TjAClbog1CO3cTTnrEorIqCUoewwjHqXrZlw4Mwk9eE

// bob - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTc3MDIxMDYyOSwiZXhwIjoxNzcwMjk3MDI5fQ.B0G5rKE_BihCE8HQp3Fs532-prB2ETRg4jUsccc0_VI

// charlie - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTc3MDIxMDY1MiwiZXhwIjoxNzcwMjk3MDUyfQ.Vg__QHwazB8RNBsNT93mrbqSqDRYO0r3f5bTmWsGqlI

// diana - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTc3MDIxMDUyNCwiZXhwIjoxNzcwMjk2OTI0fQ.uIVxjBEJvvpRATDaoFJiF2ieAI5OXbKhbGL2KBqHqVI
