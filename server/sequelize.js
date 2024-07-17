const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('GameReviews', 'root', 'test', {
    host: '172.28.0.4',
    dialect: 'mysql',
});

module.exports = sequelize;
