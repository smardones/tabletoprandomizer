const { Game } = require('../models');

const gameData = [
    {
        name: 'Disney Villainous',
        cover_img: '../images/game-covers/DisneyVillainous.jpg'
    },
    {
        name: 'Marvel Villainous',
        cover_img: '../images/game-covers/MarvelVillainous.jpg'
    },
    {
        name: 'Spirit Island',
        cover_img: '../images/game-covers/SpiritIsland.jpg'
    },
    {
        name: 'Root',
        cover_img: '../images/game-covers/Root.jpg'
    },
    {
        name: 'Scythe',
        cover_img: '../images/game-covers/Scythe.jpg'
    }
];

const seedGames = () => {
    
    Game.bulkCreate(gameData);
};

module.exports = seedGames;