// Imports go up here
const bcrypt = require('bcrypt-nodejs');
const express = require('express');
const exphbs = require('express-handlebars');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

// This import is a little different.  You're going to want to read the docs
// at https://github.com/motdotla/dotenv
// Basically, using this to hide certain sensitive things
require('dotenv').config();

// Custom imports
const Models = require('./models');
const Login = require('./routes/login');
const Signup = require('./routes/signup');

// Init express
const app = express();

// Setup view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Tell express about our static folder
app.use(express.static('public'));

// Tell express about body-parser
app.use(bodyParser.urlencoded({extended: false}));

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

app.get('/signup', Signup.getSignup);

app.post('/signup', Signup.postSignup);

app.get('/login', Login.getLogin);

app.listen(3000, function() {
  console.log("listening on port 3000");
});
