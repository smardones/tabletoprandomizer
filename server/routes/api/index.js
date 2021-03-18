const router = require('express').Router();

const gameRoutes = require('./game-routes');
const optionRoutes = require('./option-routes');

router.use('/game', gameRoutes);
router.use('/playeroptions', optionRoutes);

module.exports = router;