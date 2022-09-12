// DEPENDENCIES
const express = require('express')
const router = express.Router()
const Game = require('../models/game.js');
const gameSeed = require('../models/gameseed.js');

// SEED
router.get('/seed', (req, res)=>{
	Game.create(gameSeed, (error, data)=> {
		res.redirect('/games')
	});
});

//INDEX
router.get('/', (req, res) => {
	Game.find({}, (err, foundGames) => {
		res.render('games/index.ejs', {
			games: foundGames
		});
	});
});

//NEW



//DELETE


//UPDATE
router.put('/:id', (req, res)=>{
	Game.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new:true
		},
		(error, updatedGame)=>{
			res.redirect(`/games/${req.params.id}`)
		}
	);
});

//CREATE


//EDIT



//SHOW
router.get('/:id', (req,res)=> {
	Game.findById(req.params.id, (err,foundGames)=>{
		res.render('games/show.ejs', {
			games: foundGames,
		});
	});
});

module.exports = router