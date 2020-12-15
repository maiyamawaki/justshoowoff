const User = require("../models/User");
const Foto = require("../models/Foto");

/*private post process*/
exports.postFotoProcess = async(req, res)=>{
	const  {comment, tops, bottoms, shoses, acce} = req.body;
	const {path} = req.file;
	if(comment === ""){
		return res.render("auth/private", {message : "You need to fill in the data."})
	}
	const actualUser = req.user;
	console.log(req.user.id);
	const newFoto = await Foto.create({
		comment,
		tops,
		bottoms,
		shoses,
		acce,
		img : path,
		owner : actualUser.username,
		ownerId : req.user.id,
	})
	const modifedUser = await User.findByIdAndUpdate(req.user.id, {$push : {fotos : newFoto}})
	console.log(modifedUser)
	res.redirect("/");
}

/*delete fotoPost*/
exports.deleteFotoView = async (req,res)=>{
	const {fotoId} = req.params;
	const foto = await Foto.findById(fotoId);
	res.render("auth/delete", foto);
}

exports.deleteFotoProcess = async(req,res)=>{
	const {fotoId} = req.body;
	console.log(fotoId);
	const deleteFoto = await Foto.findByIdAndDelete(fotoId);
	await User.findByIdAndUpdate(req.user.id, {$pull : {fotos : deleteFoto}})
	res.redirect("/auth/private");
}