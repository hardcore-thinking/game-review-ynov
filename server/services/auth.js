const User = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // À Modifier

const registerUser = async (username, email, password, role) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword, role });
    return user;
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user.user_id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};

module.exports = {
    registerUser,
    loginUser
};
