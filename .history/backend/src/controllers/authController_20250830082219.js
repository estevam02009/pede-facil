import User from '../models/User.js';
import { generateToken } from '../utils/jwt.js';

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Create new user
        const user = await User.create({ name, email, password, role });

        res.status(201).json({ 
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id, user.role)
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
}