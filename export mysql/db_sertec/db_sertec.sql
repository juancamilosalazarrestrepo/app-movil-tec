CREATE DATABASE  IF NOT EXISTS `db_sertec` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_sertec`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: db_sertec
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `tb_clientes`
--

DROP TABLE IF EXISTS `tb_clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_clientes` (
  `id_clientes` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `cedula` decimal(10,0) DEFAULT NULL,
  `telefono` decimal(10,0) DEFAULT NULL,
  `correo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_clientes`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_clientes`
--

LOCK TABLES `tb_clientes` WRITE;
/*!40000 ALTER TABLE `tb_clientes` DISABLE KEYS */;
INSERT INTO `tb_clientes` VALUES (1,'Camilo Salazar',1067909972,3022093951,'camilo@gmail.com'),(2,'Juan Restrepo',1201232112,3022095957,'juan@gmail.com'),(3,'Luisa Jimenez',1067909972,3042093951,'lu@gmail.com'),(4,'Biviana Restrepo',42877987,3114039333,'biviana@gmail.com'),(5,'Luis Salazar',1067909987,3045215654,'luis@gmail.com'),(6,'Martha Diaz',1067892898,3022562523,'martha@gmail.com');
/*!40000 ALTER TABLE `tb_clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_movil`
--

DROP TABLE IF EXISTS `tb_movil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_movil` (
  `id_movil` int NOT NULL AUTO_INCREMENT,
  `id_clientes` int NOT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `modelo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_movil`),
  KEY `fk_movil_cliente_id_idx` (`id_clientes`),
  CONSTRAINT `fk_movil_cliente_id` FOREIGN KEY (`id_clientes`) REFERENCES `tb_clientes` (`id_clientes`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_movil`
--

LOCK TABLES `tb_movil` WRITE;
/*!40000 ALTER TABLE `tb_movil` DISABLE KEYS */;
INSERT INTO `tb_movil` VALUES (1,1,'Samsung','galaxy s7'),(2,2,'Xiaomi','Redmi note 8'),(3,2,'Motorola','Moto G31'),(4,3,'Samsung','Galaxy S21FE'),(5,4,'Apple','Iphone 11'),(6,5,'Samsung','Galaxy S20'),(7,6,'Motorola','Moto G60S');
/*!40000 ALTER TABLE `tb_movil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_reparaciones`
--

DROP TABLE IF EXISTS `tb_reparaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_reparaciones` (
  `id_reparaciones` int NOT NULL AUTO_INCREMENT,
  `id_movil` int DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_reparaciones`),
  KEY `fk_reparaciones_movil_idx` (`id_movil`),
  CONSTRAINT `fk_reparaciones_movil` FOREIGN KEY (`id_movil`) REFERENCES `tb_movil` (`id_movil`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_reparaciones`
--

LOCK TABLES `tb_reparaciones` WRITE;
/*!40000 ALTER TABLE `tb_reparaciones` DISABLE KEYS */;
INSERT INTO `tb_reparaciones` VALUES (1,1,'reparacion de display'),(2,1,'reparacion de pin de carga'),(3,2,'reparacion de cinta'),(4,3,'reparacion de pin de carga'),(5,4,'reparacion de camara'),(6,5,'reparacion de display'),(7,6,'reparacion de pin de carga'),(8,7,'reparacion de cinta'),(9,7,'reparacion de camara');
/*!40000 ALTER TABLE `tb_reparaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_usuarios`
--

DROP TABLE IF EXISTS `tb_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_usuarios` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password_user` varchar(200) DEFAULT NULL,
  `correo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuarios`
--

LOCK TABLES `tb_usuarios` WRITE;
/*!40000 ALTER TABLE `tb_usuarios` DISABLE KEYS */;
INSERT INTO `tb_usuarios` VALUES (1,'sergiolopez','9876','sergio@gmail.com'),(2,'fernandodiaz','1245','fernando@gmail.com'),(3,'luisdiaz','2356','luis@gmail.com'),(4,'hugosanchez','8789','hugo@gmail.com'),(5,'robertogomez','5456','roberto@gmail.com');
/*!40000 ALTER TABLE `tb_usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-04  9:52:22
