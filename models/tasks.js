const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide the task"],
    trim: true,
    maxlength: [20, "Length cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = mongoose.model("task", taskSchema);

module.exports = task;
