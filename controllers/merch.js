// DEPENDENCIES
const express = require('express');
const { findById } = require('../models/merch.js');
const router = express.Router()
const Merch = require('../models/merch.js');
const merchSeed = require('../models/merchseed.js');

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
router.delete('/:id', (req,res)=>{
	Merch.findByIdAndRemove(req.params.id, ()=>{
		res.redirect('/merch');
	});
});

//UPDATE
router.put('/:id', (req, res)=>{
	Merch.findByIdAndUpdate(req.params.id, req.body, () => {
			res.redirect(`/merch/${req.params.id}`)
		});
});

//CREATE
router.post('/',(req,res)=>{
	Merch.create(req.body, (err, createdMerch)=>{
		res.redirect('/merch')
	})
})


//EDIT
router.get('/:id/edit', (req, res)=>{
	Merch.findById(req.params.id, (err, foundMerch)=>{
		res.render('merch/edit.ejs', {
			merch: foundMerch
		});
	});
});


//SHOW
router.get('/:id', (req,res)=> {
	Merch.findById(req.params.id, (err,foundMerch)=>{
		res.render('merch/show.ejs', {
			merch: foundMerch,
		});
	});
});

module.exports = router