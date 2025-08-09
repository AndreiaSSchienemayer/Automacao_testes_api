const { users } = require('./database');

function addUser(user) {
  users.push(user);
}

function findUserByUsername(username) {
  return users.find(u => u.username === username);
}

function getAllUsers() {
  return users;
}

module.exports = {
  addUser,
  findUserByUsername,
  getAllUsers
};
