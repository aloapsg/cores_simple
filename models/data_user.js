exports = module.exports = function(app, mongoose) {

	var UserSchema = new mongoose.Schema({
		id: 		{ type: String },
		edad: 		{ type: String },
		genero: 	{ type: String },
		orientacion:  	{ type: String },
		lugarNac: 	{ type: String },
		lugarRes: 		{type: String },
		nivEdu: 	{ type: String },
        ocup: { type: String },
        otrasLeng: { type: String },
        relacion: { type: String }
	});

	mongoose.model('user', UserSchema);

};