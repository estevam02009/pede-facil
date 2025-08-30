import Category from "../models/Category";
import Product from "../models/Product.js";

// Categorias
export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await Category.create({ name });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar categoria', error: error.message });
    }
}