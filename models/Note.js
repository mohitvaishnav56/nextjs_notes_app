import { Schema, model, models } from "mongoose";

const NoteSchema = Schema({
  title: {
    type: string,
    required: true,
    maxLength: 100
  },
  content: {
    type: string,
    required: true,
    maxLength: 2000
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
})

NoteSchema.pre("save", (next) => {
  this.updatedAt = Date.now();
  next();
})

export default models.Note || model("Note", NoteSchema);