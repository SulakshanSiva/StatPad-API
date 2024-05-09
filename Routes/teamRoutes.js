const express = require('express');
const teamController = require('../Controllers/teamController');

const router = express.Router();

router.post('/getClubStats', teamController.getTeamStats);

module.exports = router;