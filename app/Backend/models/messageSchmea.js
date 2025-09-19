"use server";
import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
  {
    message: { type: string },
    authorId: { type: Number },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export { Message };
