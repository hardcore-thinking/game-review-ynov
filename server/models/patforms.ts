import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../sequelize';

interface PlatformAttributes {
    platform_id: number;
    name: string;
}

interface PlatformCreationAttributes extends Optional<PlatformAttributes, 'platform_id'> {}

class Platform extends Model<PlatformAttributes, PlatformCreationAttributes> implements PlatformAttributes {
    public platform_id!: number;
    public name!: string;
}

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

export default Platform;
