const User = require('../models/users');

const addUser = async (username, email, password, role) => {
    if (!username || !email || !password || role === undefined) {
        throw new Error('All fields are required');
    }
    const user = await User.create({ username, email, password, role });
    return user;
};

const deleteUserById = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error('User not found');
    }
    await user.destroy();
};

const getUserById = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

const getUsers = async () => {
    const users = await User.findAll();
    return users;
};

const updateUserById = async (id, updates) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error('User not found');
    }
    Object.assign(user, updates);
    await user.save();
    return user;
};

module.exports = {
    addUser,
    deleteUserById,
    getUserById,
    getUsers,
    updateUserById
};
