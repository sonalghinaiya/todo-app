import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/taskController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const route = Router();

route.get("/", isAuthenticated, getTasks);
route.get("/:id", isAuthenticated, getTaskById);
route.post("/", isAuthenticated, createTask);
route.patch("/:id", isAuthenticated, updateTask);
route.delete("/:id", isAuthenticated, deleteTask);

export default route;
