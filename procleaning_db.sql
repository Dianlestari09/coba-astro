-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2026 at 09:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `procleaning_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `body` longtext NOT NULL,
  `pubDate` datetime DEFAULT current_timestamp(),
  `updatedDate` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `thumbnail` varchar(255) DEFAULT NULL,
  `author_slug` varchar(255) NOT NULL,
  `author_name` varchar(255) NOT NULL,
  `category_slug` varchar(255) NOT NULL,
  `category_title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `slug`, `title`, `description`, `body`, `pubDate`, `updatedDate`, `thumbnail`, `author_slug`, `author_name`, `category_slug`, `category_title`) VALUES
(1, 'eco-friendly-cleaning', 'Eco-Friendly Cleaning: How We Keep Your Home Green', 'Learn about our commitment to eco-friendly practices. We share the eco-conscious products...', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam adipiscing.</p><p>Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus.</p>', '2022-07-08 00:00:00', NULL, '/news/b1.jpg', 'john-helton', 'John Helton', 'cleaning', 'Cleaning'),
(2, 'maintain-clean-home', 'How to Maintain a Clean Home Between Professional Visits', 'Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...', '<p>Here is a sample of some basic HTML syntax that can be used when writing content.</p><p>Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non blandit massa.</p>', '2022-07-08 00:00:00', NULL, '/news/b2.jpg', 'john-helton', 'John Helton', 'cat-1', 'Category1'),
(3, 'benefits-of-regular-cleaning', 'The Benefits of Regular Professional Cleaning', 'Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium.</p>', '2022-07-08 00:00:00', NULL, '/news/b3.jpg', 'john-helton', 'John Helton', 'cat-2', 'Category2'),
(4, 'third-post', 'Third post', 'Lorem ipsum dolor sit amet', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>', '2022-07-01 00:00:00', NULL, '/news/b1.jpg', 'john-helton', 'John Helton', 'cleaning', 'Cleaning');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `body` longtext NOT NULL,
  `pubDate` datetime DEFAULT current_timestamp(),
  `updatedDate` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `thumbnail` varchar(255) DEFAULT NULL,
  `featured` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `slug`, `title`, `description`, `body`, `pubDate`, `updatedDate`, `thumbnail`, `featured`) VALUES
(1, 'office-cleaning', 'Office Cleaning', 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium.</p>', '2022-07-08 00:00:00', NULL, '/services/s1.jpg', 1),
(2, 'house-cleaning', 'House Cleaning', 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer whitespace template.</p>', '2022-07-08 00:00:00', NULL, '/services/s2.jpg', 1),
(3, 'kitchen-cleaning', 'Kitchen Cleaning', 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra.</p>', '2022-07-08 00:00:00', NULL, '/services/s3.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `body` longtext NOT NULL,
  `pubDate` datetime DEFAULT current_timestamp(),
  `updatedDate` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `thumbnail` varchar(255) DEFAULT NULL,
  `featured` tinyint(1) DEFAULT 0,
  `rating` int(11) DEFAULT 5
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `slug`, `title`, `description`, `body`, `pubDate`, `updatedDate`, `thumbnail`, `featured`, `rating`) VALUES
(1, 'erick-reynolds', 'Erick Reynolds', 'He is an expert cleaning staff member who provides thorough cleaning with precision,', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra.</p>', '2022-07-08 00:00:00', NULL, '/team/team1.jpg', 1, 5),
(2, 'bruce-williams', 'Bruce Williams', 'He is an expert cleaning staff member who provides thorough cleaning with precision,', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>', '2022-07-08 00:00:00', NULL, '/team/team2.jpg', 1, 4),
(3, 'clara-mose', 'Clara Mose', 'She is an expert cleaning staff member who provides thorough cleaning with precision,', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>', '2022-07-08 00:00:00', NULL, '/team/team3.jpg', 0, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
