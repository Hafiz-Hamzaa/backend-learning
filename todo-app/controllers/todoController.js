import Todo from "../models/Todo.js";

// 1️⃣ Get all todos (Home page)
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 }); // latest first
    res.render("index", { todos });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// 2️⃣ Show add todo form
export const showAddTodo = (req, res) => {
  res.render("add");
};

// 3️⃣ Add new todo
export const addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    await Todo.create({ title, description });
    res.redirect("/"); // after adding, go to home
  } catch (err) {
    console.error(err);
    res.status(400).send("Error creating todo");
  }
};

// 4️⃣ Show edit form
export const showEditTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).send("Todo not found");
    res.render("edit", { todo });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// 5️⃣ Update todo
export const updateTodo = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    await Todo.findByIdAndUpdate(req.params.id, { title, description, status });
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(400).send("Error updating todo");
  }
};

// 6️⃣ Delete todo
export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
