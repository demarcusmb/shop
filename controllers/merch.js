// DEPENDENCIES
const express = require('express');
const { findById } = require('../models/game.js');
const router = express.Router()
const Game = require('../models/game.js');

//INDEX
router.get('/', (req, res) => {
	Game.find({}, (err, foundMerch) => {
		res.render('merch/index.ejs', {
			merch: foundMerch
		});
	});
});

//NEW



//DELETE


//UPDATE


//CREATE


//EDIT



//SHOW


module.exports = router