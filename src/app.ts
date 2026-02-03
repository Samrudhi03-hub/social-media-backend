import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();

// Middleware to read JSON body
app.use(express.json());
app.use("/api/users", userRoutes);


// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

export default app;
