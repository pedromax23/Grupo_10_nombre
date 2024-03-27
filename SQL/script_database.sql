-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: cerveceria
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `img` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `stock` int(11) DEFAULT NULL,
  `alcohol_content` float NOT NULL,
  `variety_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'STOUT',1050,'imagenCerveza-1711480282371.jpg',' Es una cerveza que se potencia en una guarda prolongada, tiene toques a ahumado, café, chocolate, cacao, frutos oscuros, alcohol y un final relativamente seco, cuerpo sedoso y espeso y un amargor muy bien integrado, el peso pesado de las cervezas negras.',15,5,6),(4,'HONEY',1010,'imagenCerveza-1711480356125.jpg','De color dorado, cuerpo medio, con un intenso aroma y sabor a miel. Se caracteriza por ser muy fresca, agradable, de gusto dulce. Ideal para calmar la sed o acompañar ensaladas, platos de sabores neutros o afrutados.',15,6,4),(5,'IPA INTENSA',1130,'imagenCerveza-1711480428337.jpg','Es una cerveza elaborada a base de maltas pálidas y un toque de maltas caramelo, con fuerte sabor y aroma a lúpulos americanos, espuma blanca persistente, de cuerpo medio y con gran carácter. Ideal para maridar con quesos fuertes y picante.',12,7,5),(6,'AMBER',950,'imagenCerveza-1711480480513.jpg','Conocidas simplemente como Red Ales en algunas regiones. Con cuerpo, rica en caramelos y un balance equilibrado entre la malta y los lúpulos. Ideal para acompañar carnes, quesos y hamburguesas.',14,5,7),(7,'GOLDEN',1095,'imagenCerveza-1711480554005.jpg','Tiene un agradable color dorado, amargor liviano, carbonatación media-alta, un suave sabor a cereal hace el soporte dulce para la combinación de lúpulos alemanes y americanos que entregan frescas notas cítricas y florales, cuerpo medio y agradable espuma. Fácil de hacer y de beber..',16,4,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_category`
--

DROP TABLE IF EXISTS `user_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permission` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_category`
--

LOCK TABLES `user_category` WRITE;
/*!40000 ALTER TABLE `user_category` DISABLE KEYS */;
INSERT INTO `user_category` VALUES (1,'Admin'),(2,'Usuario');
/*!40000 ALTER TABLE `user_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT 'no-image-user.jpg',
  `category_id` int(11) DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'Usuario','Admin','usuarioAdmin','usuarioadmin@gmail.com','$2a$10$9W9b6y0a3/JkeJpARrls2uMfSZ4aIRevv74CYdBSzywYZpeAu.Nx2','0000-00-00','','','img-1711502070048.jpeg',1),(8,'vanesa','paschetta','vanesa','vanesa@gmail.com','$2a$10$QYqXfwpWdVB/pxJQYe3ZeudpRRyyxtzo09MBRFi67FjdUcQDLpLga','0000-00-00','','','img-1711502509351.jpeg',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variety`
--

DROP TABLE IF EXISTS `variety`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variety` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `ibu` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variety`
--

LOCK TABLES `variety` WRITE;
/*!40000 ALTER TABLE `variety` DISABLE KEYS */;
INSERT INTO `variety` VALUES (3,'Golden','Tiene un agradable color dorado, amargor liviano, carbonatación media-alta, un suave sabor a cereal hace el soporte dulce para la combinación de lúpulos alemanes y americanos que entregan frescas notas cítricas y florales, cuerpo medio y agradable espuma.',15),(4,'Honey',' De color dorado, cuerpo medio, con un intenso aroma y sabor a miel. Se caracteriza por ser muy fresca, agradable, de gusto dulce. Ideal para calmar la sed o acompañar ensaladas, platos de sabores neutros o afrutados.',22),(5,'Ipa','Es una cerveza elaborada a base de maltas pálidas y un toque de maltas caramelo, con fuerte sabor y aroma a lúpulos americanos, espuma blanca persistente, de cuerpo medio y con gran carácter. Ideal para maridar con quesos fuertes y picante.',40),(6,'Stout','Es una cerveza que se potencia en una guarda prolongada, tiene toques a ahumado, café, chocolate, cacao, frutos oscuros, alcohol y un final relativamente seco, cuerpo sedoso y espeso y un amargor muy bien integrado, el peso pesado de las cervezas negras.',70),(7,'Amber Ale','Conocidas simplemente como Red Ales en algunas regiones. Con cuerpo, rica en caramelos y un balance equilibrado entre la malta y los lúpulos. Ideal para acompañar carnes, quesos y hamburguesas.',22);
/*!40000 ALTER TABLE `variety` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-26 23:13:24
