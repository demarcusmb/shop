// DEPENDENCIES
const express = require('express');
const { findById } = require('../models/game.js');
const router = express.Router()
const Game = require('../models/game.js');
const Merch = require('../models/merch')
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
router.get('/new', (req, res)=>{
	res.render('games/new.ejs')
});


//DELETE
router.delete('/:id', (req,res)=>{
	Game.findByIdAndRemove(req.params.id, ()=>{
		res.redirect('/games');
	});
});

//UPDATE
router.put('/:id', (req, res)=>{
	Game.findByIdAndUpdate(req.params.id, req.body, () => {
			res.redirect(`/games/${req.params.id}`)
		});
});

//CREATE
router.post('/',(req,res)=>{
	Game.create(req.body, (err, createdGame)=>{
		res.redirect('/games')
	})
})

//EDIT
router.get('/:id/edit', (req, res)=>{
	Game.findById(req.params.id, (err, foundGames)=>{
		res.render('games/edit.ejs', {
			games: foundGames
		});
	});
});


//SHOW
router.get('/:id', (req,res)=> {
	Game.findById(req.params.id, (err,foundGames)=>{
		res.render('games/show.ejs', {
			games: foundGames,
		});
	});
});

module.exports = router