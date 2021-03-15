const router = require('express').Router();
const Option = require('../../models/option');

router.get('/:gameId', (req, res) => {
    
    Option.findAll({
        where: {
            id: req.params.gameId
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