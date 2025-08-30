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

        // Calcula o total
        const totalPrice = await calculateTotal(items);

        // Cria o pedido
        const order = await Order.create({
            user: req.user._id,
            restaurant,
            items: orderItems,
            totalPrice,
            paymentMethod
        });

        // Retorna o pedido
        res.status(201).json(await order.populate("items"));
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar pedido", error: error.message });
    }
}