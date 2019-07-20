
let path 	= require("path");




module.exports = (app, db, ussd) => {

	// Index page
	app.get("/", (req, res) => {
		// if (req.user != null)
		// 	res.render("main", {
		// 		user: req.user
		// 	});
		// else
			// res.render("index");
			res.send("hello")
	});

	// Handle Auth routes
	 require("./auth")(app, db);

	//Handle Africas Talking API
	require("./africastalk")(app, db, ussd);

	// Handle Auth routes
	require("./account")(app, db);



	// // Handle errors
	// require("./errors")(app, db);	
};