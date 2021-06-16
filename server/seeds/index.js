const seedOptions = require('./options-seed');
const seedGames = require('./games-seed');
const seedExpansions = require('./expansion-seeds');

const sequelize = require('../config/connection');


const allSeed = async () => {
    await sequelize.sync({force: true});
     

    await seedGames();
     console.log('Games seeded');

    await seedOptions();
     console.log('Options seeded');

     await seedExpansions();
     console.log('Expansions seeded');

     
}

allSeed();
