
module.exports = {

  getLogin: function(req, res) {
    res.render('auth', {title: "Login", signup: false});
  }

}
