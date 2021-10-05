import * as mongoose from "mongoose";
import { TagSchema } from "src/tags/tags.schema";

export const TodoSchema = new mongoose.Schema({
  title: String,
  isCompleted: Boolean,
  deadline: String,
  tags: [mongoose.Types.ObjectId]
})