import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  isCompleted: {
    type: Boolean
  }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;

console.log("MongoDB Connected")
