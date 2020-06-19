const router = require('express').Router()

	// Handle Auth routes
	require("./auth")(router);

	//Handle Africas Talking API
	require("./africastalk")(router);

	// Handle Auth routes
	require("./account")(router);

	// Handle errors
	// require("./errors")(app, db);	

module.exports = router
