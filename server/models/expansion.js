const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Game = require('./game');

class Expansion extends Model {};

Expansion.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        game_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Game,
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "expansion"

    }
);

module.exports = Expansion;