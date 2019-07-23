const express = require('express')
app = express(),
port = 5000,
db = require('./models'),
bodyParser = require('body-parser'),
afriqt = require("africastalking")({
    apiKey: "8ff55ad801b9597b6dadd376049c7bdd97da04dd1c873c3f6f3e0feb0d012f58",
    username: "sandbox"}),
path 	= require("path");


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

app.use(express.static(__dirname + '/www'));
app.listen(process.env.PORT || port, () => console.log(` lynxe is listening on port ${port}!`))
