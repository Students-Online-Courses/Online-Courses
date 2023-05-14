-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema onlinecourses
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema onlinecourses
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `onlinecourses` DEFAULT CHARACTER SET utf8mb3 ;
USE `onlinecourses` ;

-- -----------------------------------------------------
-- Table `onlinecourses`.`users`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `onlinecourses`.`users` (

  `idUser` INT NOT NULL AUTO_INCREMENT,
  `userFullName` VARCHAR(255) NOT NULL,
  `userEmail` VARCHAR(255) NOT NULL,
  `userPassword` VARCHAR(255) NOT NULL,
  `userRole` ENUM('teacher', 'student') NOT NULL,
  `userSection` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `userEmail_UNIQUE` (`userEmail` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `onlinecourses`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onlinecourses`.`courses` (
  `idcourses` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `section` VARCHAR(255) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `users_idUser` INT NOT NULL,
  PRIMARY KEY (`idcourses`),
  INDEX `fk_courses_users_idx` (`users_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_courses_users`
    FOREIGN KEY (`users_idUser`)
    REFERENCES `onlinecourses`.`users` (`idUser`))
ENGINE = InnoDB
AUTO_INCREMENT = 100
DEFAULT CHARACTER SET = utf8mb3;



-- -----------------------------------------------------
-- Table `onlinecourses`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onlinecourses`.`comments` (
  `idcomments` INT NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(255) NOT NULL,
  `courses_idcourses` INT NOT NULL,
  `users_idUser` INT NOT NULL,
  PRIMARY KEY (`idcomments`),
  INDEX `fk_comments_courses1_idx` (`courses_idcourses` ASC) VISIBLE,

  INDEX `fk_comments_users1_idx` (`users_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_comments_courses1`
    FOREIGN KEY (`courses_idcourses`)
    REFERENCES `onlinecourses`.`courses` (`idcourses`),
  CONSTRAINT `fk_comments_users1`
    FOREIGN KEY (`users_idUser`)
    REFERENCES `onlinecourses`.`users` (`idUser`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
