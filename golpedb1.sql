CREATE DATABASE IF NOT EXISTS golpe_db_simple
  DEFAULT CHARACTER SET utf8mb4;
USE golpe_db_simple;

CREATE TABLE IF NOT EXISTS golpes (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,

  nome VARCHAR(120) NOT NULL, 
  cidade VARCHAR(120) NOT NULL, 

  meio_contato ENUM(
    'Telefone',
    'WhatsApp',
    'Email',
    'SMS',
    'Outros'
  ) NOT NULL,

  empresa VARCHAR(160) NULL,   

  cpf VARCHAR(14) NOT NULL,

  descricao TEXT NOT NULL,   

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  
) 

ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
