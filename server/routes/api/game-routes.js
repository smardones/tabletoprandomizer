const router = require('express').Router();

const { Game } = require('../../models/game');

router.get('/', (req, res) => {
    
    Game.findAll()
        .then(dbGameData => res.json(dbGameData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;