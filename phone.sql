# Host: localhost  (Version: 5.5.53)
# Date: 2018-11-15 19:31:25
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "phone"
#

CREATE TABLE `phone` (
  `Phone_Mobile` varchar(20) NOT NULL DEFAULT '',
  `Phone_Password` varchar(30) NOT NULL DEFAULT '',
  `userId` int(8) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
