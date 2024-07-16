import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../sequelize';
import Review from './reviews';

interface GameAttributes {
    game_id: number;
    name: string;
    developers: string;
    release_date: Date;
    genre_id: number;
    platform_id: number;
}

interface GameCreationAttributes extends Optional<GameAttributes, 'game_id'> {}

class Game extends Model<GameAttributes, GameCreationAttributes> implements GameAttributes {
    public game_id!: number;
    public name!: string;
    public developers!: string;
    public release_date!: Date;
    public genre_id!: number;
    public platform_id!: number;
}

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

export default Game;
