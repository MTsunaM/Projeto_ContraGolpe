-- Cria o banco principal
CREATE DATABASE IF NOT EXISTS empresas_db
  DEFAULT CHARACTER SET = utf8mb4;
USE empresas_db;

-- Tabela de empresas
CREATE TABLE IF NOT EXISTS empresas (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(80) NOT NULL,
  cnpj CHAR(14) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  ativo TINYINT(1) NOT NULL DEFAULT 1,
  role ENUM('EMPRESA','ADMIN') NOT NULL DEFAULT 'EMPRESA',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY ux_empresas_cnpj (cnpj),
  UNIQUE KEY ux_empresas_usuario (usuario),
  CHECK (cnpj REGEXP '^[0-9]{14}$')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabela de golpes vinculada às empresas
CREATE TABLE IF NOT EXISTS golpes (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  cidade VARCHAR(120) NOT NULL,
  meio_contato ENUM('Telefone','WhatsApp','Email','SMS','Outros') NOT NULL,
  cpf VARCHAR(14) NOT NULL,
  descricao TEXT NOT NULL,
  empresa_id INT UNSIGNED NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_golpes_empresas FOREIGN KEY (empresa_id) REFERENCES empresas(id),
  INDEX idx_golpes_empresa_id (empresa_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE golpes DROP FOREIGN KEY fk_golpes_empresas;
ALTER TABLE golpes DROP COLUMN empresa_id;
ALTER TABLE golpes ADD COLUMN empresa VARCHAR(120) NOT NULL;

SHOW COLUMNS FROM golpes;

DESCRIBE empresas;

ALTER TABLE empresas DROP COLUMN empresa_nome;

select * from empresas