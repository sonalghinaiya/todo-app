import express from "express";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const url = process.env.MONGODB_URI;

app.get("/", (req, res) => {
  res.json({ success: true, message: "API Running" });
});

app.use(express.json());

connectDB(url).then(() => console.log("MongoDB Connected!"));

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
