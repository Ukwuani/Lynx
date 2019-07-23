const express = require('express')
app = express(),
port = 5000,
db = require('./models'),
bodyParser = require('body-parser'),
afriqt = require("africastalking")({
    apiKey: "8ff55ad801b9597b6dadd376049c7bdd97da04dd1c873c3f6f3e0feb0d012f58",
    username: "sandbox"}),
path 	= require("path"),
ussd = afriqt.USSD ,
payment = afriqt.PAYMENTS;

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

require("./routes")(app, db, ussd, payment)
app.get("/", (req, res) => {
    console.log("stage 1")
    // if (req.user != null)
    // 	res.render("main", {
    // 		user: req.user
    // 	});
    // else
    res.sendFile(path.join(__dirname+'/www/index.html'));
});

app.use(express.static(__dirname + '/www'));
app.listen(process.env.PORT || port, () => console.log(` lynxe is listening on port ${port}!`))
