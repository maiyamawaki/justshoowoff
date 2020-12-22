const User = require("../models/User");
const Foto = require("../models/Foto");


/*postDetail*/
exports.postDetailView = async(req,res)=>{
	const {photoId} = req.params;
	const foto = await Foto.findById(photoId);
	res.render("user/detail", foto);
}

/*addFavoritePost*/
exports.addFavoritePost = async(req, res)=>{
	let {photoId} = req.params;
	let post = await Foto.findById(photoId);
	await User.findByIdAndUpdate(req.user.id, {$push : {favorites : post}});
	res.redirect("/")
} 

/*userDetail*/
exports.userDetailView = async(req, res)=>{
	const {userId} = req.params;
	const user = await User.findById(userId);
	res.render("user/aboutUser", user);
} 

/*follow function*/
exports.followFunction = async (req,res)=>{
	let {userId} = req.params;
	let user = await User.findById(userId);
	let currentUser = await User.findById(req.user.id);
	for(let i=0; i<currentUser.follow.length; i++){
		if(currentUser.follow[i].username===user.username){
			return res.render("index", {message : "Already you are following this user."});
		}
	}
	await User.findByIdAndUpdate(req.user.id, {$push:{follow :user}})
	res.redirect("/auth/private");
} 
