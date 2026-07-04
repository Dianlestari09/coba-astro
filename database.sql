-- SQL Setup script for ProCleaning Database (XAMPP MySQL)

CREATE DATABASE IF NOT EXISTS procleaning_db;
USE procleaning_db;

-- 1. Table for Blogs
CREATE TABLE IF NOT EXISTS blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  body LONGTEXT NOT NULL,
  pubDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedDate DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  thumbnail VARCHAR(255) DEFAULT NULL,
  author_slug VARCHAR(255) NOT NULL,
  author_name VARCHAR(255) NOT NULL,
  category_slug VARCHAR(255) NOT NULL,
  category_title VARCHAR(255) NOT NULL
);

-- Seed Blogs
INSERT INTO blogs (slug, title, description, body, pubDate, thumbnail, author_slug, author_name, category_slug, category_title) VALUES
('eco-friendly-cleaning', 'Eco-Friendly Cleaning: How We Keep Your Home Green', 'Learn about our commitment to eco-friendly practices. We share the eco-conscious products...', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam adipiscing.</p><p>Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus.</p>', '2022-07-08 00:00:00', '/news/b1.jpg', 'john-helton', 'John Helton', 'cleaning', 'Cleaning'),
('maintain-clean-home', 'How to Maintain a Clean Home Between Professional Visits', 'Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...', '<p>Here is a sample of some basic HTML syntax that can be used when writing content.</p><p>Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non blandit massa.</p>', '2022-07-08 00:00:00', '/news/b2.jpg', 'john-helton', 'John Helton', 'cat-1', 'Category1'),
('benefits-of-regular-cleaning', 'The Benefits of Regular Professional Cleaning', 'Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium.</p>', '2022-07-08 00:00:00', '/news/b3.jpg', 'john-helton', 'John Helton', 'cat-2', 'Category2'),
('third-post', 'Third post', 'Lorem ipsum dolor sit amet', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>', '2022-07-01 00:00:00', '/news/b1.jpg', 'john-helton', 'John Helton', 'cleaning', 'Cleaning');


-- 2. Table for Services
CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  body LONGTEXT NOT NULL,
  pubDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedDate DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  thumbnail VARCHAR(255) DEFAULT NULL,
  featured BOOLEAN DEFAULT FALSE
);

-- Seed Services
INSERT INTO services (slug, title, description, body, pubDate, thumbnail, featured) VALUES
('office-cleaning', 'Office Cleaning', 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium.</p>', '2022-07-08 00:00:00', '/services/s1.jpg', 1),
('house-cleaning', 'House Cleaning', 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer whitespace template.</p>', '2022-07-08 00:00:00', '/services/s2.jpg', 1),
('kitchen-cleaning', 'Kitchen Cleaning', 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra.</p>', '2022-07-08 00:00:00', '/services/s3.jpg', 0);


-- 3. Table for Teams
CREATE TABLE IF NOT EXISTS teams (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  body LONGTEXT NOT NULL,
  pubDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedDate DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  thumbnail VARCHAR(255) DEFAULT NULL,
  featured BOOLEAN DEFAULT FALSE,
  rating INT DEFAULT 5
);

-- Seed Teams
INSERT INTO teams (slug, title, description, body, pubDate, thumbnail, featured, rating) VALUES
('erick-reynolds', 'Erick Reynolds', 'He is an expert cleaning staff member who provides thorough cleaning with precision,', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra.</p>', '2022-07-08 00:00:00', '/team/team1.jpg', 1, 5),
('bruce-williams', 'Bruce Williams', 'He is an expert cleaning staff member who provides thorough cleaning with precision,', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>', '2022-07-08 00:00:00', '/team/team2.jpg', 1, 4),
('clara-mose', 'Clara Mose', 'She is an expert cleaning staff member who provides thorough cleaning with precision,', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>', '2022-07-08 00:00:00', '/team/team3.jpg', 0, 5);
