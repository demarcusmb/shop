// DEPENDENCIES
const express = require('express');
const { findById } = require('../models/merch.js');
const router = express.Router()
const Merch = require('../models/merch.js');

// SEED
router.get('/seed', (req, res)=>{
	Merch.create(merchSeed, (error, data)=> {
		res.redirect('/merch')
	});
});

//INDEX
router.get('/', (req, res) => {
	Merch.find({}, (err, foundMerch) => {
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