const Platform = require('../models/platforms');

const addPlatform = async (name) => {
    if (!name) {
        throw new Error('Name is required');
    }
    const platform = await Platform.create({ name });
    return platform;
};

const deletePlatform = async (id) => {
    const platform = await Platform.findByPk(id);
    if (!platform) {
        throw new Error('Platform not found');
    }
    await platform.destroy();
};

const getPlatformById = async (id) => {
    const platform = await Platform.findByPk(id);
    if (!platform) {
        throw new Error('Platform not found');
    }
    return platform;
};

const getPlatforms = async () => {
    const platforms = await Platform.findAll();
    return platforms;
};

module.exports = {
    addPlatform,
    deletePlatform,
    getPlatformById,
    getPlatforms
};
