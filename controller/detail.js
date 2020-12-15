const User = require("../models/User");
const Foto = require("../models/Foto");

/*postDetail*/
exports.postDetailView = async(req,res)=>{
	const {photoId} = req.params;
	const foto = await Foto.findById(photoId);
	console.log(foto);
	res.render("user/detail", foto);
}

/*userDetail*/
exports.userDetailView = async(req, res)=>{
	const {userId} = req.params;
	const user = await User.findById(userId);
	res.render("user/aboutUser", user);
} 