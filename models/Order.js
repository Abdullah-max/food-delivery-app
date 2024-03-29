import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      max: 60,
    },
    address: {
      type: String,
      required: true,
      max: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
