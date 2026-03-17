import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;
const url = process.env.MONGODB_URI;

app.get("/", (req, res) => {
  res.json({ success: true, message: "API Running" });
});

connectDB(url).then(() => console.log("MongoDB Connected!"));

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
