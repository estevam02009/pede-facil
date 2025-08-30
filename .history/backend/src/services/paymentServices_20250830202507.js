import mercadopago from 'mercadopago';

mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN, // Token do Mercado pago
});

export const createPyment = async (order) => {
    try {
        const preference = {
            items: order.items.map((item) => ({
                title: item.name,
                unit_price: item.price,
                quantity: item.quantity
            })),
            back_url: {
                success: "http://www.your-site.com/success",
                failure: "http://www.your-site.com/failure",
                pending: "http://www.your-site.com/pending"
            },
            auto_return: "approved",
        }

        const response = await mercadopago.preferences.create(preference);
        return response.body;
    } catch (error) {
        throw new Error(error.message);
    }
}
