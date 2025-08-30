import Category from "../models/Category.js";
import Product from "../models/Product.js";


// 🔹 Categorias
export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await Category.create({ name });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar categoria", error: error.message });
    }
};

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Erro ao listar categorias", error: error.message });
    }
};


// 🔹 Produtos
export const createProduct = async (req, res) => {
    try {
        const { name, description, price, image, category, restaurant } = req.body;

        const product = await Product.create({
            name, description, price, image, category, restaurant
        });

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar produto", error: error.message });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("category", "name");
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Erro ao listar produtos", error: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("category", "name");
        if (!product) return res.status(404).json({ message: "Produto não encontrado" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produto", error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Produto não encontrado" });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar produto", error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Produto não encontrado" });
        res.json({ message: "Produto removido com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao remover produto", error: error.message });
    }
};
