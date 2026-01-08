import express from "express";
import {
  getTodos,
  showAddTodo,
  addTodo,
  showEditTodo,
  updateTodo,
  deleteTodo
} from "../controllers/todoController.js";

const router = express.Router();

// Home / list all todos
router.get("/", getTodos);

// Show form to add todo
router.get("/add", showAddTodo);

// Add new todo
router.post("/add", addTodo);

// Show form to edit todo
router.get("/edit/:id", showEditTodo);

// Update todo
router.post("/edit/:id", updateTodo);

// Delete todo
router.get("/delete/:id", deleteTodo);

export default router;
