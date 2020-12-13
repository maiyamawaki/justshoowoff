const {Schema, model} = require("mongoose");

const fotoSchema = new Schema({
	img : String,
	comment : String,
	owner : String,
	ownerId : {
		type: Schema.Types,
		ref: "User"
	},
})

module.exports = model("Foto", fotoSchema);