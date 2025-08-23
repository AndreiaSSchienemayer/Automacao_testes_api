const express = require('express');
const transferController = require('../controller/transferController');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET = process.env.JWT_SECRET || 'segredo_super_secreto';

function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (!token) return res.status(401).json({ error: 'Token não fornecido.' });
	jwt.verify(token, SECRET, (err, user) => {
		if (err) return res.status(403).json({ error: 'Token inválido.' });
		req.user = user;
		next();
	});
}

router.post('/', authenticateToken, transferController.transfer);

module.exports = router;
