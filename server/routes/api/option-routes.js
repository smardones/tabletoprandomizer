const router = require('express').Router();
const { Option } = require('../../models');

router.get('/:gameId', (req, res) => {
    
    Option.findAll({
        where: {
            game_id: req.params.gameId
        }
    })
        .then(dbOptionData => {
            if (!dbOptionData) {
                res.status(404).json({message: 'No player options found'})
                return;
            }
            res.json(dbOptionData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/', (req, res) => {

    Option.findAll()
        .then(optionData => res.json(optionData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

module.exports = router;