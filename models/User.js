const {Schema, model} = require("mongoose");

const userSchema = new Schema ({
	username : String,
	photo : {
		type : String,
		default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
	},
	follow : Array,
	email : String,
	password : String,
	fotos : Array,
})

module.exports = model("User", userSchema);