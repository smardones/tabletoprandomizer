const router = require('express').Router();

const gameRoutes = require('./game-routes');
const optionRoutes = require('./option-routes');

router.use('/games', gameRoutes);
router.use('/playeroptions', optionRoutes);

module.exports = router;