const express = require('express');
const router  = express.Router();
const Foto = require("../models/Foto");
const User = require('../models/User');

/* GET home page */
router.get('/', async (req, res, next) => {
	const fotos = await Foto.find();
	if(!req.user){
		res.render("index", {fotos})
	}else if(req.user){
		let fotosArr = [];
		for(let i=0; i<fotos.length; i++){
			if(req.user.id !== fotos[i].ownerId){
				console.log(`fotos:${fotos[i]}`);
				fotosArr.push(fotos[i]);
			}
		}
		res.render("index", {fotosArr});
	}
});

module.exports = router;
