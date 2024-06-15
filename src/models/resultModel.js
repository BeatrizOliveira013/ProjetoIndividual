// Importa o módulo mysql2 para interagir com o banco de dados MySQL
const mysql = require('mysql2');

// Cria uma conexão com o banco de dados MySQL usando as variáveis de ambiente para a configuração
const db = mysql.createConnection({
  host: process.env.DB_HOST,        // Endereço do servidor do banco de dados
  user: process.env.DB_USER,        // Usuário para autenticação
  password: process.env.DB_PASSWORD, // Senha para autenticação
  database: process.env.DB_DATABASE, // Nome do banco de dados
  port: process.env.DB_PORT         // Porta do servidor do banco de dados
});

// Conecta ao banco de dados
db.connect((err) => {
  // Verifica se houve um erro ao conectar
  if (err) {
    // Loga o erro no console se a conexão falhar
    console.error('Erro ao conectar ao  Banco de dados:', err);
    return; // Sai da função em caso de erro
  }
  
  console.log('Conectado ao banco de dados');
});

// Função para salvar um novo resultado no banco de dados
const saveResult = (house, callback) => {
  // Define a consulta SQL para inserir um novo registro na tabela 'results'
  const query = 'INSERT INTO results (house) VALUES (?)';
  console.log('Executando consulta:', query, [house]); // Loga a consulta e os valores no console

  // Executa a consulta no banco de dados
  db.query(query, [house], (err, result) => {
    // Verifica se houve um erro ao executar a consulta
    if (err) {
      console.error('Erro ao executar consulta:', err); // Loga o erro no console
      return callback(err, null); // Passa o erro para o callback
    }
    console.log('Resultado da consulta:', result); // Loga o resultado da consulta no console
    callback(null, result); // Passa o resultado da consulta para o callback
  });
};

// Função para obter todos os resultados do banco de dados
const getResults = (callback) => {
  // Define a consulta SQL para selecionar todos os registros da tabela 'results'
  const query = 'SELECT * FROM results';
  console.log('Executando consulta:', query); 

  // Executa a consulta no banco de dados
  db.query(query, (err, results) => {
    // Verifica se houve um erro ao executar a consulta
    if (err) {
      console.error('Erro ao executar consulta:', err); // Loga o erro no console
      return callback(err, null); 
    }
    console.log('Reultado da consulta:', results); 
    callback(null, results); // Passa o resultado da consulta para o callback
  });
};

// Exporta as funções saveResult e getResults para que possam ser usadas em outras partes da aplicação
module.exports = {
  saveResult,
  getResults
};
