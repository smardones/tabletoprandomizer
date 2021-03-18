const { Option } = require('../models');

const optionData = [
    {
        name: "Captain Hook",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Captain_Hook.png"
    },
    {
        name: "Cruella De Vil",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Cruella_De_Vil.png"
    },
    {
        name: "Dr. Facilier",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Dr_Facilier.png"
    },
    {
        name: "Evil Queen",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Evil_Queen.png"
    },
    {
        name: "Gaston",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Gaston.png"
    },
    {
        name: "Hades",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Hades.png"
    },
    {
        name: "Horned King",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Horned_King.png"
    },
    {
        name: "Jafar",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Jafar.png"
    },
    {
        name: "Lady Tremaine",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Lady_Tremaine.png"
    },
    {
        name: "Maleficent",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Maleficent.png"
    },
    {
        name: "Mother Gothel",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Mother_Gothel.png"
    },
    {
        name: "Pete",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Pete.png"
    },
    {
        name: "Prince John",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Prince_John.png"
    },
    {
        name: "Queen of Hearts",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Queen_of_Hearts.png"
    },
    {
        name: "Ratigan",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Ratigan.png"
    },
    {
        name: "Scar",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Scar.png"
    },
    {
        name: "Ursula",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Ursula.png"
    },
    {
        name: "Yzma",
        game_name: "Disney Villainous",
        game_id: "1",
        option_img: "../images/player-options/disney-villainous/Yzma.png"
    }
];

const seedOptions = () => {
    console.log(Option);
    Option.bulkCreate(optionData)
};

module.exports = seedOptions;
