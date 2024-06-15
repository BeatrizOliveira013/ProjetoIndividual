// Importa o módulo express para criar o roteador
const express = require('express');

// Importa o módulo path para trabalhar com diretórios e caminhos de arquivos
const path = require('path');

// Cria uma instância do rot do Express
const router = express.Router();

// Definindo uma rota simples para a página inicial (indexxxx)
router.get('/', (req, res) => {
  // Envia o arquivo index.html localizado no diretório 'public'
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Exporta o roteador para que possa ser usado em outras partes da aplicação
module.exports = router;
