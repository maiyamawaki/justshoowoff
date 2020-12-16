const {Schema, model} = require("mongoose");

const fotoSchema = new Schema({
	img : String,
	owner : String,
	tops : String,
	bottoms :String,
	shoses : String,
	acce : String,
	ownerId : {
		type: Schema.Types,
		ref: "User"
	},
})

module.exports = model("Foto", fotoSchema);