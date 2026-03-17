import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/taskController.js";

const route = Router();

route.get("/", getTasks);
route.post("/", createTask);
route.patch("/:id", updateTask);
route.delete("/:id", deleteTask);

export default route;
