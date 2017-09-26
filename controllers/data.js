//File: controllers/tvshows.js
var mongoose = require('mongoose');
var user_s  = mongoose.model('user');

//POST - Insert a new TVShow in the DB
exports.addUser = function(req, res) {
	console.log('POST');
	console.log(req);

	var user_s = new user({
		id:    req[0],
		edad: 	  req,
		genero:  req[2],
		orientacion:   req.body.orientacion,
		lugarNac:  req.body.lugarNac,
		lugarRes:    req.body.lugarRes,
		nivEdu:  req.body.nivEdu,
        ocup: req.body.ocup,
        otrasLeng: req.body.otrasLeng,
        relacion: req.body.relacion
	});

	user_s.save('conver',function(err, user_s) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(user_s);
	});
};