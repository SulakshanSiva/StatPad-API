const express = require('express');
const playerController = require('../Controllers/playerController');

const router = express.Router();

router.post('/getPlayerList', playerController.getAllPlayers);
router.post('/getPlayerStats', playerController.getPlayerStats);

module.exports = router;