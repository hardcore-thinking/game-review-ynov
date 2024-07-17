const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize');

class Genre extends Model {}

Genre.init({
    genre_id: {
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
    tableName: 'Genres',
    timestamps: false
});

module.exports = Genre;
