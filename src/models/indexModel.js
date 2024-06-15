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
    console.error('Erro ao conectar no database:', err);
    return; // Sai da função em caso de erro
  }
  // Loga uma mensagem no console indicando que a conexão foi bem-sucedida
  console.log('Conectado ao banco de dados');
});

// Função para obter todos os usuários do banco de dados
const getUsers = (callback) => {
  // Define a consulta SQL para selecionar todos os registros da tabela 'users'
  const query = 'SELECT * FROM users';
  
  // Executa a consulta no banco de dados
  db.query(query, (err, results) => {
    // Verifica se houve um erro ao executar a consulta
    if (err) {
      // Passa o erro para o callback
      return callback(err, null);
    }
    // Passa os resultados da consulta para o callback
    callback(null, results);
  });
};

// Exporta a função getUsers para que possa ser usada em outras partes da aplicação
module.exports = {
  getUsers
};
