-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE usuario (
id INTEGER PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
telefone VARCHAR(15),
email VARCHAR(50),
senha VARCHAR(16),
categoria VARCHAR(100),
escola VARCHAR(100)
);

