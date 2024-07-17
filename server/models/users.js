const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize');
const Review = require('./reviews');

class User extends Model {}

User.init({
    user_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(400),
        allowNull: false
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'Users',
    timestamps: false
});

// Relations
User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

module.exports = User;
