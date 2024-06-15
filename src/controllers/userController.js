const userModel = require('../models/userModel');

// Função para registrar um novo usuário
const registerUser = (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    console.error('Username, password, and email are required');
    return res.status(400).json({ error: 'Username, password, and email are required' });
  }

  userModel.registerUser(username, password, email, (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      return res.status(500).json({ error: 'Error registering user' });
    }

    res.status(201).json({ message: 'Você foi cadastrado com sucesso!' });
  });
};

// Função para autenticar um usuário
const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.error('Email and password are required');
    return res.status(400).json({ error: 'Email and password are required' });
  }

  userModel.authenticateUser(email, password, (err, user) => {
    if (err) {
      console.error('Error authenticating user:', err);
      return res.status(500).json({ error: 'Error authenticating user' });
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'User authenticated successfully', user });
  });
};

module.exports = {
  registerUser,
  loginUser,
};
