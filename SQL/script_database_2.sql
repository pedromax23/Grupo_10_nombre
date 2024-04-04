-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cerveceria
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (16,'PURA VOLADA',1050,'imagenCerveza-1712193559421.jpg','Clásica cerveza con miel, elaborada con miel pura de abejas. De bajo amargor y cuerpo medio. ',4,6,4),(17,'HONEY CLASICA',995,'imagenCerveza-1712193480007.jpg','De color dorado, cuerpo medio, con un intenso aroma y sabor a miel. Se caracteriza por ser muy fresca, agradable, de gusto dulce. Ideal para calmar la sed o acompañar ensaladas, platos de sabores neutros o afrutados.',8,6,4),(18,'LIBRE',850,'imagenCerveza-1712193605350.jpg','Cerveza suave, con alta concentración de miel. SIN ALCOHOL. Para disfrutar en todo momento.\r\n',6,0,4),(19,'ALTA IPA',1500,'imagenCerveza-1712193725721.jpg','Intensa y espumosa, con una alta concentración de de alcohol y de lúpulos',6,7,5),(20,'IPA CLASICA',1350,'imagenCerveza-1712193909214.jpg','Es una cerveza elaborada a base de maltas pálidas y un toque de maltas caramelo, con fuerte sabor y aroma a lúpulos americanos, espuma blanca persistente, de cuerpo medio y con gran carácter. Ideal para maridar con quesos fuertes y picante.',8,7,5),(21,'BLACK IPA',1390,'imagenCerveza-1712193996772.jpg','Cerveza elaborada con maltas mas oscuras y una alta concentración de amargor y alcohol',6,8,5),(22,'AMBER CLASICA',1250,'imagenCerveza-1712194041205.jpg','Conocidas simplemente como Red Ales en algunas regiones. Con cuerpo, rica en caramelos y un balance equilibrado entre la malta y los lúpulos. Ideal para acompañar carnes, quesos y hamburguesas.',9,5,7),(23,'CANDY',1250,'imagenCerveza-1712194103206.jpg','Color ambar, lupulada, de intensidad moderada, con un sabor maltoso a caramelo.',4,5,7),(24,'STOUT CLASICA',1240,'imagenCerveza-1712194144252.jpg',' Es una cerveza que se potencia en una guarda prolongada, tiene toques a ahumado, café, chocolate, cacao, frutos oscuros, alcohol y un final relativamente seco, cuerpo sedoso y espeso y un amargor muy bien integrado, el peso pesado de las cervezas negras.',3,5,6),(25,'MILK STOUT',1350,'imagenCerveza-1712194229496.jpg','De cuerpo pleno y cremoso, levemente dulce y sedosa, pero con el lúpulo justo para balancear el gusto.',6,5,6),(26,'GOLDEN CLASICA',1230,'imagenCerveza-1712194267329.jpg','Tiene un agradable color dorado, amargor liviano, carbonatación media-alta, un suave sabor a cereal hace el soporte dulce para la combinación de lúpulos alemanes y americanos que entregan frescas notas cítricas y florales, cuerpo medio y agradable espuma. Fácil de hacer y de beber.',6,4,3),(27,'BISQUICK',990,'imagenCerveza-1712194367300.jpg','Carácter de malta medio bajo, con sabor a bizcocho. Pálida, orientada al lúpulo',6,4,3),(28,'DORADA',1010,'imagenCerveza-1712194419559.jpg','La más dorada de nuestras cervezas, orientada al sabor y muy refrescante.',6,4,3);
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

-- Dump completed on 2024-04-03 22:36:48
