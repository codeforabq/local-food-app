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

    });
  }

};
