var db = require('../config');
var Link = require('./link.js');
var User = require('./user.js');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var UserUrl = db.Model.extend({
  tableName: 'users_urls',
  hasTimestamps: true,

  link: function() {
    return this.belongsTo(Link, 'link_id');
  },

  user: function() {
    return this.belongsTo(User, 'user_id');
  }
});

module.exports = UserUrl;