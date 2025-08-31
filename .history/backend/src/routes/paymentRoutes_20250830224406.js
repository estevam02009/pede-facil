import express from "express";
import { createCheckout, confirmPayment } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/checkout", createCheckout);
router.post("/confirm/:paymentId", confirmPayment);

export default router;
