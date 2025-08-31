import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    status: { type: String, enum: ["pending", "approved"], default: "pending" },
    checkout_url: { type: String, required: true },
    receipt_url: { type: String, required: true },
}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
