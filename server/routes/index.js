
let path 	= require("path");




module.exports = (app, db, ussd, payment) => {

	// Index page


	// Handle Auth routes
	 require("./auth")(app, db);

	//Handle Africas Talking API
	require("./africastalk")(app, db, ussd, payment);

	// Handle Auth routes
	require("./account")(app, db);



	// // Handle errors
	// require("./errors")(app, db);	
};