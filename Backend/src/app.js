import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import { authenticate } from "./middleware/auth.middleware.js";
import categoryRoutes from "./routes/category.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/tasks", taskRoutes);
app.get("/", (req, res) => {
  res.send("Daily Planner API is running 🚀");
});
app.get("/api/test", authenticate, (req, res) => {
  res.json({
    message: "Protected route works",
    user: req.user
  });
});

export default app;