const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Game = require('./game');
const Expansion = require('./expansion');

class Option extends Model {};

Option.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        game_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Game,
                key: id
            }
        },
        expansion_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Expansion,
                key: id
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "option"

    }
);

module.exports = Expansion;