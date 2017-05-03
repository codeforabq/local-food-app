/**
 * All the models used by sequelize
 * * * * */

const Sequelize = require('sequelize');

export default {

  sync: function(db) {

    return new Promise(function(resolve, reject) {

      this.User = db.define('user', userModel)
      db.sync().then(function(result) {
        return result;
      }, function(err) {
        return err;
      });

    });

  }

}

var userModel = {
  username: Sequelize.STRING
  email: Sequelize.STRING,
  passhash: Sequelize.STRING,
}
