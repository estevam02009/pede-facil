import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Conectar ao banco de dados
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
