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
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        game_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        game_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'game',
                key: "id"
            },
            allowNull: false
        },
        expansion_name: {
            type: DataTypes.STRING
        },
        expansion_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'expansion',
                key: "id"
            }
        },
        option_img: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "option",
        freezeTableName: true

    }
);

module.exports = Option;