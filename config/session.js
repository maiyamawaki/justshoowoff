const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");


module.exports = app => {
	app.use(
		session({
			secret : process.env.SECRET,
			resave : true,
			saveUninitialized : true,
			store : new MongoStore({
				mongooseConnection:mongoose.connection,
				ttl : 60 * 60 * 24,
			})
		})
	)
	app.use(passport.initialize())
	app.use(passport.session())
	app.use((req,res,next) => {
		if(req.user){
			app.locals.user = req.user;
		}else{
			app.locals.user = null;
		}
		next()
	})
}