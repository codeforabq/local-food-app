/**
 * All the models used by sequelize
 * * * * */

const Sequelize = require('sequelize');

module.exports = {

  User: {},

  sync: function() {

    return new Promise(function(resolve, reject) {

      this.User = db.define('user', userModel);

      db.sync().then(function(result) {
        resolve(this);
      }, function(err) {
        reject(Error("Couldn't sync DB"));
      });

    });

  }

}

var userModel = {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  passhash: Sequelize.STRING,
}
