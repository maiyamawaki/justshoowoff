const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { compareSync } = require("bcrypt");
const User = require("../models/User");

passport.use(
	new LocalStrategy(
			{
				usernameField : "email",
				passwordField : "password",
			},
			async(email, password, done)=>{
				try{
					const user = await User.findOne({email});
					if(email === "" || password === ""){
						return done(null, false, {message : "Put the necessary data to login."})
					}
					if(!user){
						return done(null, false, {message : "We don't have your acount."});
					}
					if(!compareSync(password, user.password)){
						return done(null, false, {message : "The password was wrong."});
					}
					console.log(user);
					done(null, user)
				}catch(error){
					done(error);
				}
		}
	)
)

passport.serializeUser((user, done)=>{
	done(null, user._id);
})

passport.deserializeUser(async(id, done)=>{
	try{
		const {email, username} = await User.findById(id);
		done(null, {email, username, id});
	}catch(error){
		done(error);
	}
})

module.exports = passport;