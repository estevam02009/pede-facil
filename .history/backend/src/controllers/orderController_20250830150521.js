import Order from "../models/Order.js";
import OrderItem from "../models/OrderItem.js";
import { calculateTotal } from "../services/orderService.js";

// Criar pedido
export const createOrder = async (req, res) => {
  try {
    const { items, paymentMethod, restaurant } = req.body;

    // cria itens
    const orderItems = await Promise.all(items.map(async (item) => {
      const orderItem = await OrderItem.create(item);
      return orderItem._id;
    }));

    // calcula total
    const totalPrice = await calculateTotal(items);

    // cria pedido
    const order = await Order.create({
      user: req.user._id,
      restaurant,
      items: orderItems,
      totalPrice,
      paymentMethod
    });

    res.status(201).json(await order.populate("items"));
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar pedido", error: error.message });
  }
};

// Listar pedidos do usuário
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("items")
      .populate("restaurant", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar pedidos", error: error.message });
  }
};

// Atualizar status do pedido (admin/restaurante)
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true })
      .populate("items");

    if (!order) return res.status(404).json({ message: "Pedido não encontrado" });

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar status", error: error.message });
  }
};
