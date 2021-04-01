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
    },
    {
        name: "Hela",
        game_name: "Marvel Villainous",
        game_id: "2",
        option_img: "../images/player-options/marvel-villainous/Hela.png"
    },
    {
        name: "Killmonger",
        game_name: "Marvel Villainous",
        game_id: "2",
        option_img: "../images/player-options/marvel-villainous/Killmonger.png"
    },
    {
        name: "Taskmaster",
        game_name: "Marvel Villainous",
        game_id: "2",
        option_img: "../images/player-options/marvel-villainous/Taskmaster.png"
    },
    {
        name: "Thanos",
        game_name: "Marvel Villainous",
        game_id: "2",
        option_img: "../images/player-options/marvel-villainous/Thanos.png"
    },
    {
        name: "Ultron",
        game_name: "Marvel Villainous",
        game_id: "2",
        option_img: "../images/player-options/marvel-villainous/Ultron.png"
    },
    {
        name: "Bringer of Dreams and Nightmares",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Bringer.png"
    },
    {
        name: "A Spread of Rampant Green",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/RampantGreen.png"
    },
    {
        name: "Lighting's Swift Strike",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Lightning.png"
    },
    {
        name: "Ocean's Hungry Grasp",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Ocean.png"
    },
    {
        name: "River Surges in Sunlight",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/River.png"
    },
    {
        name: "Shadows Flicker Like Flame",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Shadows.png"
    },
    {
        name: "Thunderspeaker",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Thunderspeaker.png"
    },
    {
        name: "Vital Strength of the Earth",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Earth.png"
    },
    {
        name: "Heart of the Wildfire",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Wildfire.png"
    },
    {
        name: "Serpent Slumbering Beneath the Island",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Serpent.png"
    },
    {
        name: "Keeper of the Forbidden Wilds",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Keeper.png"
    },
    {
        name: "Sharp Fangs Behind the Leaves",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/SharpFangs.png"
    },
    {
        name: "Downpour Drenches the World",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Downpour.png"
    },
    {
        name: "Finder of Paths Unseen",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Finder.png"
    },
    {
        name: "Fractured Days Split the Sky",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/FracturedDays.png"
    },
    {
        name: "Grinning Trickster Stirs Up Trouble",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Trickster.png"
    },
    {
        name: "Lure of the Deep Wilderness",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Lure.png"
    },
    {
        name: "Many Minds Move As One",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/ManyMinds.png"
    },
    {
        name: "Shifting Memory of Ages",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Memories.png"
    },
    {
        name: "Shroud of Silent Mist",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Shroud.png"
    },
    {
        name: "Starlight Seeks Its Form",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Starlight.png"
    },
    {
        name: "Stone's Unyielding Defiance",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Stone.png"
    },
    {
        name: "Vengeance As a Burning Plague",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Vengeance.png"
    },
    {
        name: "Volcano Looming High",
        game_name: "Spirit Island",
        game_id: "3",
        option_img: "../images/player-options/spirit-island/Volcano.png"
    },
    {
        name: "Lizard Cult",
        game_name: "Root",
        game_id: "4",
        option_img: "../images/player-options/root/Lizard-Cult.jpg"
    },
    {
        name: "Riverfolk Company",
        game_name: "Root",
        game_id: "4",
        option_img: "../images/player-options/root/Riverfolk_Company.jpg"
    },
    {
        name: "Corvid Conspiracy",
        game_name: "Root",
        game_id: "4",
        option_img: "../images/player-options/root/RootUWE_CorvidConspiracy.png"
    },
    {
        name: "Underground Duchy",
        game_name: "Root",
        game_id: "4",
        option_img: "../images/player-options/root/RootUWE_UndergroundDuchy.png"
    },
    {
        name: "Eyrie Dynasties",
        game_name: "Root",
        game_id: "4",
        option_img: "../images/player-options/root/The-Eyrie_Dynasties.png"
    },
    {
        name: "Marquise de Cat",
        game_name: "Root",
        game_id: "4",
        option_img: "../images/player-options/root/The-Marquise-de-Cat.png"
    },
    {
        name: "Vagabond",
        game_name: "Root",
        game_id: "4",
        option_img: "../images/player-options/root/The-Vagabond.png"
    },
    {
        name: "Woodland Alliance",
        game_name: "Root",
        game_id: "4",
        option_img: "../images/player-options/root/The-Woodland-Alliance.png"
    },
    {
        name: "Clan Albion",
        game_name: "Scythe",
        game_id: "5",
        option_img: "../images/player-options/scythe/Albion.jpg"
    },
    {
        name: "Crimean Khanate",
        game_name: "Scythe",
        game_id: "5",
        option_img: "../images/player-options/scythe/Crimean.jpg"
    },
    {
        name: "Fenris",
        game_name: "Scythe",
        game_id: "5",
        option_img: "../images/player-options/scythe/Fenris.jpg"
    },
    {
        name: "Nordic Kingdoms",
        game_name: "Scythe",
        game_id: "5",
        option_img: "../images/player-options/scythe/Nordic.jpg"
    },
    {
        name: "Republic of Polandia",
        game_name: "Scythe",
        game_id: "5",
        option_img: "../images/player-options/scythe/Polandia.jpg"
    },
    {
        name: "Rusviet Union",
        game_name: "Scythe",
        game_id: "5",
        option_img: "../images/player-options/scythe/Rusviet.jpg"
    },
    {
        name: "Saxony Empire",
        game_name: "Scythe",
        game_id: "5",
        option_img: "../images/player-options/scythe/Saxony.jpg"
    },
    {
        name: "Togawa Shogunate",
        game_name: "Scythe",
        game_id: "5",
        option_img: "../images/player-options/scythe/Togawa.jpg"
    },
    {
        name: "Vesna Tesla",
        game_name: "Scythe",
        game_id: "5",
        option_img: "../images/player-options/scythe/Vesna.jpg"
    }

];

const seedOptions = () => {
    console.log(Option);
    Option.bulkCreate(optionData)
};

module.exports = seedOptions;
