import Order from '../models/Order.js';
import OrderItem from '../models/OrderItem';
import { calculateTotal } from '../services/orderService.js';

// Criar pedido
export const createOrder = async (req, res) => {
    try {
        const { items, paymentMethod, restaurant } = req.body;

        // Criar itens
        const orderItems = await Promise.all(items.map(async item => {
            const orderItem = await OrderItem.create(item);
            return orderItem._id;
        }));
    } catch (error) {
        
    }
}