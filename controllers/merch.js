// DEPENDENCIES
const express = require('express')

const router = express.Router()

//INDEX
router.get('/', (req, res) => {
	Game.find({}, (err, foundGames) => {
		res.render('merch/index.ejs', {
			games: foundGames
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