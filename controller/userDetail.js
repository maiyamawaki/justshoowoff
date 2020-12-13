const User = require("../models/User");
const Foto = require("../models/Foto");

exports.userDetailView = async(req,res)=>{
	const {userId} = req.params;
	const user = await User.findById(userId);
	res.render("user/detail", user);
}