const { Game } = require('../models');

const gameData = [
    {
        game_name: 'Disney Villainous',
        cover_img: '../images/game-covers/DisneyVillainous.jpg'
    },
    {
        game_name: 'Marvel Villainous',
        cover_img: '../images/game-covers/MarvelVillainous.jpg'
    },
    {
        game_name: 'Spirit Island',
        cover_img: '../images/game-covers/SpiritIsland.png'
    },
    {
        game_name: 'Root',
        cover_img: '../images/game-covers/Root.jpg'
    },
    {
        game_name: 'Scythe',
        cover_img: '../images/game-covers/Scythe.jpg'
    }
];

const seedGames = () => {
    
    Game.bulkCreate(gameData);
};

module.exports = seedGames;