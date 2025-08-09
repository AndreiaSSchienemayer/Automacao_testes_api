const userModel = require('../model/userModel');

function findUserByUsername(username) {
  return userModel.findUserByUsername(username);
}

function addUser(user) {
  userModel.addUser(user);
}

module.exports = {
  findUserByUsername,
  addUser
};
