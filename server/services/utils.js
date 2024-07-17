const generateId = (existingIds) => {
    let id = -1;
    while (existingIds.includes(++id)) {}
    console.log(`Generated: ${id}`);
    return id;
};

module.exports = { generateId };
