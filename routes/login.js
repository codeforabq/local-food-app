const bcrypt = require('bcrypt');

const Models = require('../models');

module.exports = {

  getLogin: function(req, res) {
    res.render('auth', {title: "Login", signup: false});
  },

  postLogin: function(req, res) {

    // Try and retrieve user by username
    User.findOne({where: {
      username: req.body.username
    }}).then(function(user) {

      // Check passwords
      bcrypt.compare(req.body.password, user.passhash, function(err, res) {

        if (res == true) {

          // Password correct, give them a session token
        } else {

          // Password not true, throw back an error, render an error?
          res.render('auth', {
            title: "Login",
            signup: false,
            formError: { title: "Incorrect Username or Password"}
          });

        }
      });
      
    });
  }

};
