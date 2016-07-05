var db = require('../config');
var UserUrl = require('./userUrl.js');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

  initialize: function() {
    this.on('creating', function(user) {
      var password = user.attributes.password; 
      var hash = bcrypt.hashSync(password);
      user.attributes.password = hash; 
      console.log(user.attributes);
    });
  },

  link: function() {
    return this.hasMany(Link, 'link_id');
  },

  userUrl: function() {
    return this.hasMany(UserUrl);
  }
});

module.exports = User;