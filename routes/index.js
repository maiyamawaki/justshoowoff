const express = require('express');
const router  = express.Router();
const Foto = require("../models/Foto");

/* GET home page */
router.get('/', async (req, res, next) => {
	const fotos = await Foto.find();
	res.render("index",{fotos});
});

module.exports = router;
