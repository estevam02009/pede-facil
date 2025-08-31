import Payment from "../models/Payment.js";
import { createFakeCheckout, confirmFakePayment } from "../services/fakePaymentService.js";

// Criar checkout fake
export const createCheckout = async (req, res) => {
    try {
        const { orderId } = req.body;

        if (!orderId) {
            return res.status(400).json({ error: "orderId é obrigatório" });
        }

        const fakeCheckout = createFakeCheckout(orderId);

        const payment = new Payment({
            orderId,
            status: fakeCheckout.status,
            checkoutUrl: fakeCheckout.checkout_url,
        });

        await payment.save();

        res.json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Confirmar pagamento fake
export const confirmPayment = async (req, res) => {
    try {
        const { paymentId } = req.params;

        const payment = await Payment.findById(paymentId);
        if (!payment) {
            return res.status(404).json({ error: "Pagamento não encontrado" });
        }

        const confirmation = confirmFakePayment(paymentId);

        payment.status = confirmation.status;
        await payment.save();

        res.json({ payment, message: confirmation.message });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
