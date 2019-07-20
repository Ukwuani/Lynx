const app = require('express')()
const port = 5000,
db = require('./models'),
bodyParser = require('body-parser'),
afriqt = require("africastalking")({
    apiKey: "8ff55ad801b9597b6dadd376049c7bdd97da04dd1c873c3f6f3e0feb0d012f58",
    username: "sandbox"}),
ussd = afriqt.USSD ;

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

require("./routes")(app, db, ussd)
app.get("/", (req, res) => {
    // if (req.user != null)
    // 	res.render("main", {
    // 		user: req.user
    // 	});
    // else
        // res.render("index");
});

app.listen(port, () => console.log(` listening on port ${port}!`))
