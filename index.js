// Imports go up here
const express = require('express');
const exphbs = require('express-handlebars');
const Sequelize = require('sequelize');

// This import is a little different.  You're going to want to read the docs
// at https://github.com/motdotla/dotenv
// Basically, using this to hide certain sensitive things
require('dotenv').config();

// Custom imports
const Models = require('./models');

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

// Setup our models
var models;
Models(sequelize).then(function(result) {

  // We'll store a reference to all the models inside the models var
  models = result;

  /*
   * If you want to make sure that sequelize is working properly, you can
   * uncomment this block and run the create function
   * return models.User.create({
   *   username: "test",
   *   email: "test@gmail.com",
   *   passhash: ""
   * });
   * * */

}, function(err) {
  console.log(err);
});

app.get('/', function(req, res) {
  res.render('generic', {title: "Home Page", message: "Hello World"});
});

app.get('/signup', function(req, res) {
  res.render('auth', {title: "Create an Account"});
});

app.post('/signup', function(req, res) {
  // TODO: Create a user
})

app.listen(3000, function() {
  console.log("listening on port 3000");
});
