const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {};

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coverimg: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "game"

    }
);

module.exports = Game;