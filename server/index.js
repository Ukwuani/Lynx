const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser')
const path 	= require("path");






app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

const router = require("./routes")

//set the landing page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+'/www/index.html'));
});
app.use(router)
app.use(express.static(__dirname + '/www'));
app.listen(process.env.PORT || port, () => console.log(` lynxe is listening on port ${port}!`))
