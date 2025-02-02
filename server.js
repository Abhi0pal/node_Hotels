const express = require("express");
const app = express();
const db = require("./db");

//body-parser middleware to convert data in json format

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body


const MenuItem = require("./MenuItems");
const Person = require("./models/person");

// app.get('/',function(){})
app.get("/", function (req, res) {
  res.send("Welcome to My Hotel... How can i help You.");
});
//post Method of menuItems






//router of Menu
const menuRouter=require('./routes/menuRoutes')
app.use('/MenuItems',menuRouter)







//import the router files
const personRouter=require('./routes/personRoutes')
//use the router
app.use('/person',personRouter)




app.listen(3000, function (req, res) {
  console.log("Server is listen on 3000 ");
});
