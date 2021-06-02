const router = require('express').Router();

const { Game } = require('../../models');

router.get('/', (req, res) => {
    
    Game.findAll()
        .then(dbGameData => {
        res.json(dbGameData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:gameId', (req, res) => {

    Game.findAll({
        where: {
            id: req.params.gameId
        }
    })
    .then(gameData => {
        if (!gameData) {
            res.status(404).json({message: 'No game found'})
                return;
        }
        res.json(gameData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;