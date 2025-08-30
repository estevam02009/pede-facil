import express from "express";
import { createOrder, getMyOrders, updateOrderStatus } from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Criar pedido
router.post("/", protect, createOrder);

// Listar pedidos do usuário logado
router.get("/my-orders", protect, getMyOrders);

// Atualizar status (apenas restaurante/admin)
router.put("/:id/status", protect, updateOrderStatus);

export default router;
