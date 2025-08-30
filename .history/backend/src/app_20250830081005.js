import express from 'express';
import cors from 'cors';
// import connectDB from './config/db.js';

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

export default app;