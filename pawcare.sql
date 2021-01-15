-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2021 at 02:32 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

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
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `comment` text NOT NULL,
  `comment_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `parent_id`, `firstname`, `lastname`, `comment`, `comment_date`) VALUES
(12, 0, 'asdasd', 'asdas asd', '                asdasd sda', '2021-01-15 13:37:15'),
(13, 0, 'aaaa', 'bbbbb', 'aaaa bbbbbcccc', '2021-01-15 13:40:09'),
(14, 0, 'ccc', 'cccc', '              cccc ddd  ', '2021-01-15 13:40:40'),
(15, 0, 'sdfdfdf', 'dsfsdf', '                sdfsdfsdfd', '2021-01-15 14:01:20');

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
-- Table structure for table `tbl_like_unlike`
--

CREATE TABLE `tbl_like_unlike` (
  `id` int(11) NOT NULL,
  `comment_id` int(11) NOT NULL,
  `like_unlike` int(2) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
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
  `password` varchar(255) NOT NULL,
  `favoutites` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `email`, `mobile`, `password`, `favoutites`) VALUES
(1, 'senuri', 'senuri@gmail.com', 711234123, 'senuri123', 'Anne'),
(2, 'ravidu', 'ravidu@gmail.com', 711234123, 'ravidu123', 'Anne'),
(3, 'chanuka', 'chanuka@gmail.com', 711234123, 'chanuka123', 'Anne'),
(4, 'dilki', 'sasi@gmail.com', 711234123, 'sasi123', 'Anne');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sitter`
--
ALTER TABLE `sitter`
  ADD PRIMARY KEY (`sitter_id`);

--
-- Indexes for table `tbl_like_unlike`
--
ALTER TABLE `tbl_like_unlike`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
