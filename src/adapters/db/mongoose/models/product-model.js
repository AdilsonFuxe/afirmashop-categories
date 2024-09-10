import mongoose, { Types } from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    _id: {
      type: Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    status: {
      type: Boolean,
      default: true,
    },
    categoryId: {
      type: Types.ObjectId,
      ref: 'Categories',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Products', productSchema);
