const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');

// Rota para salvar um novo resultado do quiz
router.post('/save', resultController.saveResult);

// Rota para obter todos(ALL) os resultados
router.get('/all', resultController.getResults);

module.exports = router;
