import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../sequelize';

interface ReviewAttributes {
    user_id: number;
    game_id: number;
    rating: number;
    description?: string;
}

interface ReviewCreationAttributes extends Optional<ReviewAttributes, 'description'> {}

class Review extends Model<ReviewAttributes, ReviewCreationAttributes> implements ReviewAttributes {
    public user_id!: number;
    public game_id!: number;
    public rating!: number;
    public description?: string;
}

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

export default Review;
