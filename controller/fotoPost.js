const User = require("../models/User");
const Foto = require("../models/Foto");

/*private post process*/
exports.postFotoProcess = async(req, res)=>{
	const  {tops, bottoms, shoses, acce} = req.body;
	const {path} = req.file;
	if(tops === "" || bottoms === "" || shoses === "" || acce === ""){
		return res.render(`auth/private/${req.user.id}`, {message : "You need to fill in the data."})
	}
	const newFoto = await Foto.create({
		tops,
		bottoms,
		shoses,
		acce,
		img : path,
		owner : req.user.username,
		ownerId : req.user.id,
	})
	await User.findByIdAndUpdate(req.user.id, {$push : {fotos : newFoto}})
	res.redirect("/");
}

/*delete fotoPost*/
exports.deleteFotoView = async (req,res)=>{
	const {fotoId} = req.params;
	const foto = await Foto.findById(fotoId);
	res.render("auth/delete", foto);
}

exports.deleteFotoProcess = async(req,res)=>{
	const {fotoId} = req.params;
	const deleteFoto = await Foto.findByIdAndDelete(fotoId);
	await User.findByIdAndUpdate(req.user.id, {$pull : {fotos : deleteFoto}})
	res.redirect("/auth/private");
}