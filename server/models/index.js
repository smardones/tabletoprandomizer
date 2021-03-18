const Game = require('./game');
const Expansion = require('./expansion');
const Option = require('./option');

Expansion.belongsTo(Game, {
    foreignKey: 'game_id'
});

Option.belongsTo(Game, {
    foreignKey: 'game_id'
});

Option.belongsTo(Expansion, {
    foreignKey: 'expansion_id'
})

module.exports = { Game, Expansion, Option };