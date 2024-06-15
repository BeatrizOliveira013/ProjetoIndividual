// Importa o módulo mysql2 para interagir com o MySQL
const mysql = require("mysql2");

// Configuração da conexão com o banco de dados MySQL
const mySqlConfig = {
    host: process.env.DB_HOST,        // Endereço do servidor do banco de dados
    database: process.env.DB_DATABASE, // Nome do banco de dados
    user: process.env.DB_USER,        // Usuário para autenticação
    password: process.env.DB_PASSWORD, // Senha para autenticação
    port: process.env.DB_PORT         // Porta do servidor do banco de dados
};

// Função para executar uma instrução SQL
function executar(instrucao) {
    // Verifica se o ambiente está definido como 'produção' ou 'desenvolvimento'
    if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
        // Retorna uma Promise rejeitada se o ambiente não estiver configurado
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    // Retorna uma Promise para execução da instrução SQL
    return new Promise((resolve, reject) => {
        // Cria uma conexão com o banco de dados usando a configuração definida
        const conexao = mysql.createConnection(mySqlConfig);
        // Conecta ao banco de dados
        conexao.connect((erro) => {
            if (erro) {
                // Rejeita a Promise em caso de erro na conexão
                reject(erro);
                return;
            }
            // Executa a instrução SQL
            conexao.query(instrucao, (erro, resultados) => {
                // Fecha a conexão após a execução da instrução
                conexao.end();
                if (erro) {
                    // Rejeita a Promise em caso de erro na execução da instrução
                    reject(erro);
                } else {
                    // Resolve a Promise com os resultados da execução
                    resolve(resultados);
                }
            });
        });
        // Trata erros que ocorram durante a conexão ou execução
        conexao.on('error', (erro) => {
            console.error("ERRO NO MySQL SERVER: ", erro.sqlMessage);
        });
    });
}

// Exporta a função executar para que possa ser utilizada em outros módulos
module.exports = {
    executar
};
