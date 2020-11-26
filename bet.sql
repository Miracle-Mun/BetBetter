/*
SQLyog Community v13.1.1 (64 bit)
MySQL - 10.3.15-MariaDB : Database - bet
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bet` /*!40100 DEFAULT CHARACTER SET utf32 */;

USE `bet`;

/*Table structure for table `bookmark` */

DROP TABLE IF EXISTS `bookmark`;

CREATE TABLE `bookmark` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8;

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

/*Table structure for table `client` */

DROP TABLE IF EXISTS `client`;

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `client_id` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

/*Data for the table `client` */

insert  into `client`(`id`,`client_id`,`password`) values 
(0,'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM','123213213213213213');

/*Table structure for table `filter` */

DROP TABLE IF EXISTS `filter`;

CREATE TABLE `filter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filter_name` varchar(255) DEFAULT NULL,
  `filter_id` varchar(255) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf32;

/*Data for the table `filter` */

insert  into `filter`(`id`,`filter_name`,`filter_id`) values 
(1,'bet','412898'),
(46,'bet365','11111'),
(47,'1xbet','222222');

/*Table structure for table `membership` */

DROP TABLE IF EXISTS `membership`;

CREATE TABLE `membership` (
  `id` int(11) NOT NULL,
  `price` varchar(255) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

/*Data for the table `membership` */

insert  into `membership`(`id`,`price`) values 
(0,'123');

/*Table structure for table `payment` */

DROP TABLE IF EXISTS `payment`;

CREATE TABLE `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `account_time` timestamp NOT NULL DEFAULT current_timestamp(),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `payment` */

insert  into `payment`(`id`,`email`,`price`,`account_time`) values 
(1,'22',333,'2020-11-18 16:34:28'),
(2,'2',11,'2020-11-22 21:18:20');

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
  `Role` tinyint(1) DEFAULT 0,
  `From` timestamp NULL DEFAULT current_timestamp(),
  `To_date` timestamp NULL DEFAULT current_timestamp(),
  `freeze` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`name`,`username`,`email`,`password`,`Role`,`From`,`To_date`,`freeze`) values 
(0,'Alex K','admin','admin@dev.com','$2a$10$xrcnzu/.DeEKdvXe3g333ez.7EZdKIIhL5g25TVVwQUcmGo1uKyCG',1,NULL,'0000-00-00 00:00:00',0),
(67,'Jhon M','User1','user1@dev.com','$2a$10$0vkSM62pmaEdi2wGBUSZeeIZe/Yeq8gwYljZLmLZ6Br2f6dPEsqqa',0,'2020-11-20 15:32:11','2021-05-28 12:55:31',0),
(68,'Smith K','user2','user2@dev.com','$2a$10$Bg7uBAMywsBN.obe8lJwJ.AuPF0TqT4ytKL.vdMtz2.t.XpbdPLLG',0,'2020-11-20 15:32:16','2020-11-23 18:32:16',0),
(71,'Beil M','user3','user3@dev.com','$2a$10$tJRGY2Ed8Pm9D7ByhL957.rKzbfT.aZ4yRhYDN48My7u6Rs/uipgG',0,'2020-11-24 06:27:57','2020-11-23 21:27:57',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
