const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {};

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            
            
        },
        game_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cover_img: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "game",
        freezeTableName: true

    }
);

module.exports = Game;