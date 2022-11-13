const { DataTypes } = require("sequelize");

const ModelDefinition = {
    User: {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        token: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        },
        avatar: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: [8, 16],
            },
        },
    },
    Post: {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            },
        },
    },
};

module.exports = ModelDefinition;
