
let path 	= require("path");



/**
 *
 *
 * @param {*} app
 * @param {*} db
 * @param {*} atAPI
 */

module.exports = (app, db, atAPI) => {

	
	app.get("/", (req, res) => {
		console.log("stage 1")
	
		res.sendFile(path.join(__dirname+'/../www/index.html'));
	});

	// Handle Auth routes
	 require("./auth")(app, db);

	//Handle Africas Talking API
	require("./africastalk")(app, db, atAPI);

	// Handle Auth routes
	require("./account")(app, db);



	// // Handle errors
	// require("./errors")(app, db);	
};