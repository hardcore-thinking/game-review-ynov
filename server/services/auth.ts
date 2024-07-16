import User from '../models/users';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // A Modifier

const registerUser = async (username: string, email: string, password: string, role: number) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword, role });
    return user;
};

const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user.user_id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};

export default {
    registerUser,
    loginUser
};
