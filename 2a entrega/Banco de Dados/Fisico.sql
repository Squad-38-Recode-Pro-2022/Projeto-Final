-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE DATABASE inteligenciaescolar;

USE inteligenciaescolar;

CREATE TABLE usuario (
id INTEGER PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
telefone VARCHAR(20),
email VARCHAR(50),
senha VARCHAR(50),
Atributo1 VARCHAR(50),
Atributo2 VARCHAR(50)
);

