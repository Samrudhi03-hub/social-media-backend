import express from "express";
import userRoutes from "./routes/user.routes";
import { authMiddleware } from "./middlewares/auth.middleware";
import postRoutes from "./routes/post.routes";
import likeRoutes from "./routes/like.routes";
import commentRoutes from "./routes/comment.routes";


const app = express();

// Middleware to read JSON body
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);


// Test route
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You accessed protected route" });
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

export default app;


//token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTc3MDIwNjQ5MiwiZXhwIjoxNzcwMjkyODkyfQ.FoXIaDpwMct2YFRWOdMMkVpQEwtwU2hEiIacv4GF8ck