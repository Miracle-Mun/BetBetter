/*
SQLyog Ultimate v12.5.1 (64 bit)
MySQL - 10.3.15-MariaDB : Database - bet
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bet` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `bet`;

/*Table structure for table `bookmark` */

DROP TABLE IF EXISTS `bookmark`;

CREATE TABLE `bookmark` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `bookmark` */

insert  into `bookmark`(`id`,`name`) values 
(1,'pinnacle'),
(3,'sbobet'),
(5,'10bet'),
(10,'bet365'),
(11,'betfair'),
(12,'labet'),
(21,'1xbet'),
(24,'188bet'),
(41,'Rivalo'),
(78,'betway');

/*Table structure for table `sports` */

DROP TABLE IF EXISTS `sports`;

CREATE TABLE `sports` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `sports` */

insert  into `sports`(`id`,`name`) values 
(1,'Baseball'),
(2,'Basketball'),
(4,'Futsal'),
(5,'Hand Ball'),
(6,'Hockey'),
(7,'Soccer'),
(8,'Tennis'),
(9,'Volleyball'),
(10,'AM. Football'),
(11,'Snooker'),
(12,'Darts'),
(13,'Table Tennis'),
(14,'Badminton'),
(15,'Rugby'),
(16,'Water Polo'),
(17,'Bandy'),
(18,'Martial Arts'),
(19,'Field Hockey'),
(20,'AFL'),
(21,'E-Sports'),
(22,'Chess'),
(23,'Gaelic Sports'),
(24,'Cricket'),
(25,'Formula 1'),
(26,'Athletics'),
(27,'Motorcycling'),
(28,'Cycling'),
(29,'Beach Volley'),
(30,'Horse racing'),
(31,'Biathlon'),
(32,'Curling'),
(33,'Squash'),
(34,'Netball'),
(35,'Beach Soccer'),
(36,'Floorball'),
(37,'Hurling'),
(38,'Kung Volleybaall'),
(39,'E-Soccer'),
(40,'E-Hockey'),
(41,'E-Basketball'),
(42,'E-Tennis');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `emailVerifed` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`name`,`username`,`email`,`password`,`emailVerifed`) values 
(1,'Alex K','admin','admin@dev.com','admin123',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
