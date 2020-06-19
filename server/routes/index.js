
let path 	= require("path");
const router = require('express').Router()

	// Handle Auth routes
	require("./auth")(router);

	//Handle Africas Talking API
	require("./africastalk")(app, db, atAPI);

	// Handle Auth routes
	require("./account")(router);

	// Handle errors
	// require("./errors")(app, db);	

module.exports = router
