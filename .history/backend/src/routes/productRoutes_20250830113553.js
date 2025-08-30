import express from "express";
import { 
  createCategory, getCategories,
  createProduct, getProducts, getProductById,
  updateProduct, deleteProduct
} from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// 🔹 Categorias
router.post("/categories", protect, createCategory);
router.get("/categories", getCategories);

// 🔹 Produtos
router.post("/", protect, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

export default router;
