import { v4 as uuidv4 } from 'uuid';

export const createFakeCheckout = (order) => {
    const paymentId = uuidv4();
    return {
        id: paymentId,
        status: 'pending',
        checkout_url: `https://fakepay.com/checkout/${paymentId}`,
    };
};

export const confirmFakePayment = (paymentId) => {
    return {
        id: paymentId,
        status: 'approved',
        message: 'Payment has been successfully processed.'
    };
}
