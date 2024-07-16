import User from '../models/users';

const addUser = async (username: string, email: string, password: string, role: number) => {
    if (!username || !email || !password || role === undefined) {
        throw new Error('All fields are required');
    }
    const user = await User.create({ username, email, password, role });
    return user;
};

const deleteUserById = async (id: number) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error('User not found');
    }
    await user.destroy();
};

const getUserById = async (id: number) => {
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

const updateUserById = async (id: number, updates: Partial<{ username: string; email: string; password: string; role: number }>) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error('User not found');
    }
    Object.assign(user, updates);
    await user.save();
    return user;
};

export default {
    addUser,
    deleteUserById,
    getUserById,
    getUsers,
    updateUserById
};
