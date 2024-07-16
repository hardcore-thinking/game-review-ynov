import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../sequelize';

interface GenreAttributes {
    genre_id: number;
    name: string;
}

interface GenreCreationAttributes extends Optional<GenreAttributes, 'genre_id'> {}

class Genre extends Model<GenreAttributes, GenreCreationAttributes> implements GenreAttributes {
    public genre_id!: number;
    public name!: string;
}

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

export default Genre;
