const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize');

class Review extends Model {}

Review.init({
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    game_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
}, {
    sequelize,
    tableName: 'Reviews',
    timestamps: false
});

module.exports = Review;
