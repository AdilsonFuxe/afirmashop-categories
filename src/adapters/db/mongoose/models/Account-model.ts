import mongoose, { Schema, Types } from 'mongoose';
import {Roles} from "@src/core/domain/types";

const SessionSchema = new Schema(
  {
    accessToken: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AccountSchema = new Schema(
  {
    _id: {
      type: Types.ObjectId,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, 'password must be at least 6 characters'],
    },
    sessions: {
      type: [SessionSchema],
      default: [],
    },
    forgotPasswordAccessToken: {
      type: Number,
    },
    forgotPasswordExpiresIn: {
      type: Date,
    },
    roles: {
      type: [String],
      default: [Roles.Customer]
    },
  },
  { timestamps: true }
);

export default mongoose.model('accounts', AccountSchema);
