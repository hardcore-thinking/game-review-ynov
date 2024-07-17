const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize');
const Review = require('./reviews');

class Game extends Model {}

Game.init({
    game_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    developers: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    genre_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    platform_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'Games',
    timestamps: false
});

Game.hasMany(Review, { foreignKey: 'game_id' });
Review.belongsTo(Game, { foreignKey: 'game_id' });

module.exports = Game;
