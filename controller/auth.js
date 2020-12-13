const User = require("../models/User");
const Foto = require("../models/Foto");
const bcrypt = require("bcrypt");
const passport = require("../config/passport");

/*singup*/ 
exports.signupView = (req,res)=>{
	res.render("auth/signup");
}

exports.signupProcess = async(req,res)=>{
	const {username, email, password} = req.body;
	if(username === "" || email === "" || password === ""){
		return res.render("auth/signup", {message : "you are missing some data"})
	}
	const existingUser = await User.findOne({$or:[{email},{username}]});
	if(existingUser){
		return res.render("auth/signup", {message : "The username or the email already is in use."});
	}
	const salt = bcrypt.genSaltSync(12);
	const hashPass = bcrypt.hashSync(password, salt);
	const newUser = await User.create({
		username,
		email,
		password : hashPass,
	})
	console.log(newUser);
	res.redirect("/auth/login");
}

/*login*/
exports.loginView = (req, res)=>{
	res.render("auth/login");
} 

exports.loginProcess = passport.authenticate("local",{
	successRedirect : "/auth/private",
	failureRedirect : "/auth/login"
})

/*logout*/ 
exports.logoutView = (req, res)=>{
	req.logout();
	res.redirect("/auth/login");
}

/*private view*/
exports.privateView = async(req,res)=>{
	const user = await User.findById(req.user.id);
	res.render("auth/private", user);
}


 