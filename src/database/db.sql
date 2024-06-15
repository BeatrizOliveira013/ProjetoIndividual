-- Cria o banco de dados
CREATE DATABASE IF NOT EXISTS quizDashboard;
USE quizDashboard;

-- Cria a tabela users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cria a tabela results com relacionamento opcional
CREATE TABLE results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    house VARCHAR(255) NOT NULL,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
