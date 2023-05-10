-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema OnlineCourses
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema OnlineCourses
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `OnlineCourses` DEFAULT CHARACTER SET utf8 ;
USE `OnlineCourses` ;

-- -----------------------------------------------------
-- Table `OnlineCourses`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OnlineCourses`.`users` (
  `user-id` INT NOT NULL AUTO_INCREMENT,
  `userFullName` VARCHAR(255) NOT NULL,
  `userEmail` VARCHAR(255) NOT NULL,
  `userPassword` VARCHAR(255) NOT NULL,
  `userRole` ENUM('teacher', 'student') NOT NULL,
  `userSection` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user-id`),
  UNIQUE INDEX `userEmail_UNIQUE` (`userEmail` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OnlineCourses`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OnlineCourses`.`courses` (
  `idcourses` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `section` VARCHAR(255) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `users_user-id` INT NOT NULL,
  PRIMARY KEY (`idcourses`, `users_user-id`),
  INDEX `fk_courses_users_idx` (`users_user-id` ASC) VISIBLE,
  CONSTRAINT `fk_courses_users`
    FOREIGN KEY (`users_user-id`)
    REFERENCES `OnlineCourses`.`users` (`user-id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OnlineCourses`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OnlineCourses`.`comments` (
  `idcomments` INT NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(255) NOT NULL,
  `users_user-id` INT NOT NULL,
  `courses_idcourses` INT NOT NULL,
  `courses_users_user-id` INT NOT NULL,
  PRIMARY KEY (`idcomments`, `users_user-id`, `courses_idcourses`, `courses_users_user-id`),
  INDEX `fk_comments_courses1_idx` (`courses_idcourses` ASC, `courses_users_user-id` ASC) VISIBLE,
  CONSTRAINT `fk_comments_users1`
    FOREIGN KEY (`users_user-id`)
    REFERENCES `OnlineCourses`.`users` (`user-id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_courses1`
    FOREIGN KEY (`courses_idcourses` , `courses_users_user-id`)
    REFERENCES `OnlineCourses`.`courses` (`idcourses` , `users_user-id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
