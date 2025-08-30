import express from "express";
import { createOrder, getMyOrders, updateOrderStatus } from "../controllers/orderController";
import { protect } from "../middlewares/authMiddleware.js";''

const router = express.Router();

// Criar pedido
router.post("/", protect, createOrder);  
// Listar pedidos do usuário
router.get("/my-orders", protect, getMyOrders);
// Atualizar status do pedido
router.put("/:id/status", protect, updateOrderStatus);

export default router;
