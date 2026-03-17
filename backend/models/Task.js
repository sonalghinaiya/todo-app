import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "inProgress", "completed"],
      default: "pending",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true },
);

export const Task = mongoose.model("task", taskSchema);
