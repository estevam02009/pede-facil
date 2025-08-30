import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    unitPrice: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
    }
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

export default OrderItem;
