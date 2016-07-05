var db = require('../config');
var UserUrl = require('./userUrl.js');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

  link: function() {
    return this.hasMany(Link, 'link_id');
  },

  userUrl: function() {
    return this.hasMany(UserUrl);
  }
});

module.exports = User;