const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para cadastrar um novo usuário
router.post('/register', userController.registerUser);

// Rota para autenticar um usuário, q ja estao cadastrados
router.post('/login', userController.loginUser);

module.exports = router;
