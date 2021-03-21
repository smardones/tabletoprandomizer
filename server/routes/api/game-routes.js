const router = require('express').Router();

const { Game } = require('../../models');

router.get('/', (req, res) => {
    
    Game.findAll()
        .then(dbGameData => {
            console.log(dbGameData);
            res.json(dbGameData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;