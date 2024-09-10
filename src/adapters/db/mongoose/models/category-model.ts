import mongoose from 'mongoose';
import {Status} from "@src/core/domain/types";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    status: {
      type: String,
      default: Status.active,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Categories', categorySchema);
