import OrderItem from "../models/OrderItem.js";


export const calculateTotal = async (items) => {
    let total = 0;
    for (const item of items) {
        const price = item.unitPrice * item.quantity;
        total += price;
    }
    return total;
}