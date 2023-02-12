DROP DATABASE IF EXISTS `MSC_DB`;

CREATE DATABASE `MSC_DB`;

CREATE TABLE `MSC_DB`.`offices` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `MSC_DB`.`employess` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `office` INT NOT NULL,
  FOREIGN KEY (`office`) REFERENCES `offices`(`id`),
  PRIMARY KEY (`id`)
);

INSERT INTO  `MSC_DB`.`offices`
(`id`, `name`)
VALUES
(1, 'La vida Loka Company'),
(2, 'TDs Company');

INSERT INTO `MSC_DB`.`employess`
(`id`, `first_name`, `last_name`, `office`)
VALUES
(1, 'Thiago', 'Durante', 1);
