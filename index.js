// Imports go up here
const express = require('express');
const exphbs = require('express-handlebars');
const Sequelize = require('sequelize');

// This import is a little different.  You're going to want to read the docs
// at https://github.com/motdotla/dotenv
// Basically, using this to hide certain sensitive things
require('dotenv').config();

// Init express
const app = express();

// Setup view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Setup sequelize  We can get away with just using the simplest constructor
// for now
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS
);

app.get('/', function(req, res) {
  res.render('generic', {title: "Home Page", message: "Hello World"});
});

app.get('/about', function(req, res) {
  res.render('generic', {title: "About", message: "This is the about page"});
})

app.listen(3000, function() {
  console.log("listening on port 3000");
});
