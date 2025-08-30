import express from 'express';
import cors from 'cors';
// import connectDB from './config/db.js';

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Conectar ao banco de dados
// connectDB();

// Rotas
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

export default app;