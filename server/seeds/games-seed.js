const { Game } = require('../models');

const gameData = [
    {
        name: 'Disney Villainous',
        cover_img: ''
    },
    {
        name: 'Marvel Villainous',
        cover_img: ''
    },
    {
        name: 'Spirit Island',
        cover_img: ''
    },
    {
        name: 'Root',
        cover_img: ''
    },
    {
        name: 'Scythe',
        cover_img: ''
    }
];

const seedGames = () => {
    console.log(Game);
    Game.bulkCreate(gameData);
};

module.exports = seedGames;