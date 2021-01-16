-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2021 at 11:01 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pawcare`
--

-- --------------------------------------------------------

--
-- Table structure for table `sitter`
--

CREATE TABLE `sitter` (
  `sitter_id` int(11) NOT NULL,
  `sittername` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` int(10) NOT NULL,
  `services` varchar(500) NOT NULL,
  `price range` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` int(10) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `email`, `mobile`, `password`) VALUES
(1, 'senuri', 'senuri@gmail.com', 711234123, 'senuri123'),
(2, 'ravidu', 'ravidu@gmail.com', 711234123, 'ravidu123'),
(3, 'chanuka', 'chanuka@gmail.com', 711234123, 'chanuka123'),
(4, 'dilki', 'sasi@gmail.com', 711234123, 'sasi123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sitter`
--
ALTER TABLE `sitter`
  ADD PRIMARY KEY (`sitter_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sitter`
--
ALTER TABLE `sitter`
  MODIFY `sitter_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
