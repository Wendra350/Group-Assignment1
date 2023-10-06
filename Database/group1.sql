-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 06, 2023 at 05:08 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `group1`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `productID` varchar(300) DEFAULT NULL,
  `productName` varchar(300) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `supplier` varchar(300) NOT NULL,
  `supplierEmail` varchar(300) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productID`, `productName`, `price`, `quantity`, `supplier`, `supplierEmail`) VALUES
('PDCoffeeKFC', 'Coffee', 1000, 13, 'KFC', 'KFC@gmail.com'),
('PDTeaTea', 'Tea', 300, 13, 'Tea', 'bit20-amakaula@poly.ac.mw'),
('PDComputershp', 'Computers', 1200, 3, 'hp', 'hp@inf.com'),
('PDSugarIllovo', 'Sugar', 1300, 17, 'Illovo', 'Illovo@gmail.com'),
('PDFirstChoiceVega', 'First Choice', 1500, 33, 'Vega', 'vega@gmail.com'),
('PDCookiesUniversal', 'Cookies', 1000, 8, 'Universal', 'universal@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(300) DEFAULT NULL,
  `password` varchar(300) DEFAULT NULL,
  `firstName` varchar(300) DEFAULT NULL,
  `surname` varchar(300) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `password`, `firstName`, `surname`) VALUES
('andrew', 'makaula', 'Wendrah', 'Makaula'),
('melinda', 'makonde', 'Melinda', 'Makonde'),
('thokozire', 'zimba', 'Thokozire', 'Zimba'),
('andrew', 'andrew', 'Andrew', 'Makaula'),
('israel', 'mbewe123@MM', 'Israel', 'Mbewe');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
