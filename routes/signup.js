const bcrypt = require('bcrypt');

module.exports = {

  getSignup: function(req, res) {
    res.render('auth', {title: "Create an Account", signup: true});
  },

  postSignup: function(req, res) {

    // Do some basic validation.  Seriously, basic
    if (req.body.password != req.body.passconfirm) {
      res.render('auth', {title: "Create an Account", signup: true,
        error: "Passwords Didn't Match"});
      return;
    }

    if (req.body.username == "") {
      res.render('auth', {title: "Create an Account", signup: true,
        error: "No Username Provided"});
      return;
    }

    if (req.body.email == "") {
      res.render('auth', {title: "Create an Account", signup: true,
        error: "No Email Provided"});
      return;
    }

    // Hash the password
    bcrypt.hash(req.body.password, null, null, function(err, hash) {

      // Save the user
      models.User.create({
        username: req.body.username,
        email: req.body.email,
        passhash: hash
      }).then(function() {

        res.render('auth', {title: "Login", signup: false, created: true});

      }, function() {

        // Couldn't save user, throw up a generic error
        res.render('auth', {title: "Create an Account", signup: true,
          error: "Couldn't create user at this time.  Try again later"});
        return;

      });

    })

  }
}
