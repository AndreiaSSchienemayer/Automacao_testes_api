const userService = require('../service/userService');

exports.register = (req, res) => {
  const { username, password, favored } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }
  if (userService.findUserByUsername(username)) {
    return res.status(409).json({ error: 'Usuário já existe.' });
  }
  userService.addUser({ username, password, favored: !!favored, balance: 10000 });
  res.status(201).json({ message: 'Usuário registrado com sucesso.' });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }
  const user = userService.findUserByUsername(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
  }
  res.json({ message: 'Login realizado com sucesso.' });
};

exports.list = (req, res) => {
  const userModel = require('../model/userModel');
  const users = userModel.getAllUsers().map(u => ({ username: u.username, favored: u.favored, balance: u.balance }));
  res.json(users);
};
