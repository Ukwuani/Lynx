const express = require('express')
const app = express()
const port = 5000
const db = require('./models')
const bodyParser = require('body-parser')
const afriqt = require("africastalking")({
    apiKey: "8ff55ad801b9597b6dadd376049c7bdd97da04dd1c873c3f6f3e0feb0d012f58",
    username: "sandbox"})
const path 	= require("path");


const atAPI = {
  sms: afriqt.SMS,
  ussd:  afriqt.USSD ,
  payment: afriqt.PAYMENTS
}



app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

require("./routes")(app, db, atAPI)

//set the landing page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+'/../www/index.html'));
});

app.use(express.static(__dirname + '/www'));
app.listen(process.env.PORT || port, () => console.log(` lynxe is listening on port ${port}!`))
