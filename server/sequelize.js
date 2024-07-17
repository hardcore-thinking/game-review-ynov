const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('GameReviews', 'root', 'test', {
    host: '172.19.0.2',
    dialect: 'mysql',
});

module.exports = sequelize;
