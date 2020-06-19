
let path 	= require("path");
const router = require('express').Router()


module.exports = router

module.exports = (app, db, atAPI) => {

	
	app.get("/", (req, res) => {
		console.log("stage 1")
	
		res.sendFile(path.join(__dirname+'/../www/index.html'));
	});

	// Handle Auth routes
	 require("./auth")(router);

	//Handle Africas Talking API
	require("./africastalk")(app, db, atAPI);

	// Handle Auth routes
	require("./account")(router);



	// // Handle errors
	// require("./errors")(app, db);	
};