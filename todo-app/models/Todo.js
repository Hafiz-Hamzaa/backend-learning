import mongoose from "mongoose";

// Step 1: Schema define karo
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    minlength: [3, "Title must be at least 3 characters"]
  },
  description: {
    type: String,
    trim: true,
    default: ""
  },
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Step 2: Model banayo
const Todo = mongoose.model("Todo", todoSchema);

// Step 3: Export karo
export default Todo;
