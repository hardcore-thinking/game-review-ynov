const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize');

class Platform extends Model {}

Platform.init({
    platform_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    tableName: 'Platforms',
    timestamps: false
});

module.exports = Platform;
