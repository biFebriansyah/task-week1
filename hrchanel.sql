-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Waktu pembuatan: 07 Des 2019 pada 00.37
-- Versi server: 5.7.26
-- Versi PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrchanel`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `company`
--

DROP TABLE IF EXISTS `company`;
CREATE TABLE IF NOT EXISTS `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `name` varchar(250) NOT NULL,
  `telp` varchar(50) NOT NULL,
  `logo` varchar(250) NOT NULL,
  `location` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `company`
--

INSERT INTO `company` (`id`, `username`, `name`, `telp`, `logo`, `location`) VALUES
(7, 'tokopedia', 'toko pedia', '0812 123 123', 'http://res.cloudinary.com/cloudinara/image/upload/v1575671939/engineer/picture/Photo-1575671933702_lcvvlj.jpg', 'jakarta'),
(8, 'telkom', 'Telkom Indo', '0812 1212', 'http://res.cloudinary.com/cloudinara/image/upload/v1575675324/engineer/picture/Photo-1575675318795_copwmx.png', 'bogor'),
(9, 'bukalapak', 'bukalapak', '0821 21 21 21', 'http://res.cloudinary.com/cloudinara/image/upload/v1575675930/engineer/picture/Photo-1575675926819_i3tsqw.jpg', 'jakarta');

-- --------------------------------------------------------

--
-- Struktur dari tabel `engginer_skill`
--

DROP TABLE IF EXISTS `engginer_skill`;
CREATE TABLE IF NOT EXISTS `engginer_skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_engineer` int(11) NOT NULL,
  `idSkill` int(11) NOT NULL,
  `level` int(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_engineer` (`id_engineer`),
  KEY `idSkill` (`idSkill`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `engginer_skill`
--

INSERT INTO `engginer_skill` (`id`, `id_engineer`, `idSkill`, `level`) VALUES
(1, 18, 1, 60),
(2, 19, 2, 80),
(3, 20, 3, 90),
(4, 21, 4, 70),
(5, 22, 5, 70),
(6, 23, 6, 60),
(7, 24, 7, 50);

-- --------------------------------------------------------

--
-- Struktur dari tabel `engineer`
--

DROP TABLE IF EXISTS `engineer`;
CREATE TABLE IF NOT EXISTS `engineer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `name` varchar(250) NOT NULL,
  `dob` date NOT NULL,
  `skill` varchar(200) NOT NULL,
  `location` varchar(200) NOT NULL,
  `photo` varchar(250) NOT NULL,
  `git_url` varchar(250) NOT NULL,
  `description` text,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `engineer`
--

INSERT INTO `engineer` (`id`, `username`, `name`, `dob`, `skill`, `location`, `photo`, `git_url`, `description`, `create_at`, `update_at`) VALUES
(28, 'edozel28', 'edozel', '2019-11-29', 'python, php, css', 'bogor', 'http://res.cloudinary.com/cloudinara/image/upload/v1575052958/euzhronsm5ulw8bjwpk4.jpg', '', '', '2019-11-29 11:42:39', '2019-11-29 11:42:39'),
(29, 'miyako29', 'miyako', '2019-11-29', 'php,javascript, css', 'sukarsari', 'http://res.cloudinary.com/cloudinara/image/upload/v1575053218/li3rjjsfkubirurzwijz.jpg', '', '', '2019-11-29 11:46:59', '2019-11-29 11:46:59'),
(30, 'surya30', 'surya', '2019-11-29', 'ruby, python, html', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575053612/oiw4shhf4b0s0eckqcsv.jpg', '', '', '2019-11-29 11:53:33', '2019-11-29 11:53:33'),
(31, 'Aqua31', 'Aqua', '2019-11-29', 'html, css, javascript', 'mata air asli', 'http://res.cloudinary.com/cloudinara/image/upload/v1575053659/nrl6w9feltodzawdlvjm.jpg', '', '', '2019-11-29 11:54:20', '2019-11-29 11:54:20'),
(32, 'lenovo32', 'lenovo', '2019-11-29', 'C#, java, C++', 'bogor timur', 'http://res.cloudinary.com/cloudinara/image/upload/v1575053718/tn7mmvheftvcq5uqud23.jpg', '', '', '2019-11-29 11:55:19', '2019-11-29 11:55:19'),
(33, 'ayu33', 'ayu', '2019-11-29', 'swift, delpi, C', 'bintaro', 'http://res.cloudinary.com/cloudinara/image/upload/v1575053762/t6u0bvs7xmhwuj0pqp9w.jpg', '', '', '2019-11-29 11:56:03', '2019-11-29 11:56:03'),
(34, 'wendira34', 'wendira', '2019-11-29', 'mysql, php, html', 'otista', 'http://res.cloudinary.com/cloudinara/image/upload/v1575053820/eonpc4x7rdyzbogi3onl.jpg', '', '', '2019-11-29 11:57:01', '2019-11-29 11:57:01'),
(35, 'cici35', 'cici', '2019-11-29', 'mysql, php, javascript', 'otista', 'http://res.cloudinary.com/cloudinara/image/upload/v1575053847/tsozlla9srgsx1s09yky.jpg', '', '', '2019-11-29 11:57:27', '2019-11-29 11:57:27'),
(36, 'wulandari36', 'wulandari', '2019-11-29', 'objective-C,Perl', 'otista', 'http://res.cloudinary.com/cloudinara/image/upload/v1575053869/mreuitw2n8fxiqwsibwl.jpg', '', '', '2019-11-29 11:57:50', '2019-11-29 11:57:50'),
(37, 'andi37', 'andi', '2019-11-29', 'Vb, pascal', 'setia budi', 'http://res.cloudinary.com/cloudinara/image/upload/v1575053902/dfn4aouicd6hdgiy64xe.jpg', '', '', '2019-11-29 11:58:23', '2019-11-29 11:58:23'),
(38, 'putri38', 'putri', '2019-11-29', 'matlab, R', 'warung nyanyu', 'http://res.cloudinary.com/cloudinara/image/upload/v1575053942/r6yzdacut7e0aadsc7sa.jpg', '', '', '2019-11-29 11:59:03', '2019-11-29 11:59:03'),
(39, 'raisa39', 'raisa', '2019-11-29', 'algol, java, swift', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575054778/zic8z1oxmhbqzd1wf0tf.jpg', '', '', '2019-11-29 12:12:58', '2019-11-29 12:12:58'),
(40, 'andriana40', 'andriana', '2019-11-29', 'php, pyhon, mysql', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575054808/viys9ubepqrxxzx21ddm.jpg', '', '', '2019-11-29 12:13:29', '2019-11-29 12:13:29'),
(41, 'isyana41', 'isyana', '2019-11-29', 'C#, C++, objective-C', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575054832/smlpmid7d23ulp7u7rja.jpg', '', '', '2019-11-29 12:13:53', '2019-11-29 12:13:53'),
(42, 'sarasvati42', 'sarasvati', '2019-11-29', 'C++, C#, Java', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575054851/tcoovxban0mjb7awahbe.jpg', '', '', '2019-11-29 12:14:12', '2019-11-29 12:14:12'),
(43, 'chelsea43', 'chelsea', '2019-11-29', 'react-native', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575054913/vnvldsxlkb5cvxzhegnc.jpg', '', '', '2019-11-29 12:15:13', '2019-11-29 12:15:13'),
(44, 'yukikato44', 'yuki kato', '2019-11-29', 'mysql, php, python', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575054930/ogcjmfgrzn2dez74ll9d.jpg', '', '', '2019-11-29 12:15:31', '2019-11-29 12:15:31'),
(45, 'pevita45', 'pevita', '2019-11-29', 'nodejs, myslq, php', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575054957/oc5i2hlywqtpbtwrnjuk.png', '', '', '2019-11-29 12:15:58', '2019-11-29 12:15:58'),
(46, 'ima46', 'ima', '2019-11-29', 'python, ruby', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575054974/w8i42ijsd4bcnxfkbwux.jpg', '', '', '2019-11-29 12:16:14', '2019-11-29 12:16:14'),
(47, 'silviaangraini47', 'silvia angraini', '2019-11-29', 'javaSe, android-sut', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575055005/sfhcxggbftvh7gw7k0vk.jpg', '', '', '2019-11-29 12:16:46', '2019-11-29 12:16:46'),
(48, 'binary48', 'binary', '2019-11-29', 'assembly language', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575055020/bva52tewbkn55jbjh6zn.jpg', '', '', '2019-11-29 12:17:01', '2019-11-29 12:17:01'),
(49, 'bukanebi', 'ebifebriansyah', '2019-12-10', 'java script ', 'asasas', 'http://res.cloudinary.com/cloudinara/image/upload/v1575339869/gtgyr342pbeyktyz2gz6.jpg', 'asasas', 'asas', '2019-12-02 19:24:27', '2019-12-02 19:24:27'),
(50, 'alaska', 'alaska', '2019-12-11', 'java script ', 'bogor', 'http://res.cloudinary.com/cloudinara/image/upload/v1575525949/engineer/picture/Photo-1575525926826_hiti4q.jpg', 'https://github.com/cloudinary/', 'alaska', '2019-12-04 23:05:49', '2019-12-04 23:05:49'),
(51, 'alexa', 'alexa alaska', '2019-12-10', 'css, php  ', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575526465/engineer/picture/Photo-1575526463880_bc9ghg.jpg', 'https://github.com/cloudinary/', 'just a newbe guys', '2019-12-04 23:14:26', '2019-12-04 23:14:26'),
(52, 'hijab', 'hijabers', '2019-12-17', 'php, css', 'jakarta', 'http://res.cloudinary.com/cloudinara/image/upload/v1575571338/engineer/picture/Photo-1575571335283_h3hhln.jpg', 'github.com/hijabers', 'im hijaber guys', '2019-12-05 11:42:18', '2019-12-05 11:42:18'),
(53, 'erik', 'erikson', '1985-12-04', 'css, php, java script, ', 'jaksel', 'http://res.cloudinary.com/cloudinara/image/upload/v1575571675/engineer/picture/Photo-1575571672080_qyyoqt.jpg', 'github.com/erikson', 'test regiter', '2019-12-05 11:47:55', '2019-12-05 11:47:55');

-- --------------------------------------------------------

--
-- Struktur dari tabel `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `company` varchar(200) NOT NULL,
  `engineer` varchar(200) DEFAULT NULL,
  `name` varchar(200) NOT NULL,
  `time` varchar(200) NOT NULL,
  `salary` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `project`
--

INSERT INTO `project` (`id`, `company`, `engineer`, `name`, `time`, `salary`, `description`) VALUES
(1, 'telkom', 'febriansyah', 'website e learning', '2 bulan', '10.000.000', 'website untuk smk telkom'),
(2, 'indosat', NULL, 'create database', '2 bulan', '9.000.000', 'create and maintenance database'),
(3, 'PT XL Axiata Tbk', NULL, 'hiring patner', '2 bulan', '2 jt', 'membuat'),
(4, 'PT XL Axiata Tbk', NULL, 'rumah sakit', '2 bulan', '5 juta', 'membuat website rumah sakit'),
(5, 'PT XL Axiata Tbk', NULL, 'rumah sakit', '2 bulan', '5 juta', 'membuat website rumah sakit');

-- --------------------------------------------------------

--
-- Struktur dari tabel `showcase`
--

DROP TABLE IF EXISTS `showcase`;
CREATE TABLE IF NOT EXISTS `showcase` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_engineer` int(11) NOT NULL,
  `url` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `skill`
--

DROP TABLE IF EXISTS `skill`;
CREATE TABLE IF NOT EXISTS `skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nameSkill` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `skill`
--

INSERT INTO `skill` (`id`, `nameSkill`) VALUES
(1, 'php'),
(2, 'javascript'),
(3, 'python'),
(4, 'java'),
(5, 'C++'),
(6, 'Ruby'),
(7, 'css');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(50) NOT NULL,
  `create_at` timestamp NOT NULL,
  `updae_at` timestamp NOT NULL,
  `userToken` text,
  `role` int(2) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `create_at`, `updae_at`, `userToken`, `role`) VALUES
(1, 'bukanebi', '$2a$10$Xm8wJehfp5aFI7laWAHWKOQHcQuVPhUf1RGJpSSogNNNt82Ye94/W', 'ebifebriansyah28@gmail.com', '2019-11-20 15:46:02', '2019-11-20 15:46:02', NULL, 0),
(3, 'admin', '$2a$10$BUAIObg1d26PmZSFeMZKxO.SqtTHrzBvv7I407ITquv.BHceOxCDq', 'superuser@gmail.com', '2019-11-23 04:18:45', '2019-11-23 04:18:45', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiJhZG1pbiIsImlhdCI6MTU3NDQ4MjgwNn0.k8O1E8CztSTlmheZjR9rNVhiw5akRDhRoAq3JU3hJ48', 0),
(2, 'admin', '$2a$10$WahAuvn2UozZWz7R9h11Cu6JYTtvXARpZs.7a95IE7ZzdMo2EJLlO', 'superuser@gmail.com', '2019-11-22 15:07:21', '2019-11-22 15:07:21', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiJhZG1pbiIsImlhdCI6MTU3NDQ4MjgwNn0.k8O1E8CztSTlmheZjR9rNVhiw5akRDhRoAq3JU3hJ48', 0),
(4, 'asas', '$2a$10$RlBFF26WiMkkpHLOf2k9hOLXMVxlO2fMwP6S8iFp6xvryv0RjTtdi', 'superuser@gmail.com', '2019-11-25 02:30:51', '2019-11-25 02:30:51', NULL, 0),
(5, 'baru ini', '$2a$10$zUEx6dlVX7o.wsu2Mf43perQ1UB0yQEhDZCihRiWj1b8r2IVawJKu', 'superuser@gmail.com', '2019-11-25 02:32:00', '2019-11-25 02:32:00', NULL, 0),
(6, 'baru inia', '$2a$10$YrnLbvgdoBenuOk0x0aKt.JSwNsQ/3PQSYPsSD.j6omos13Mugee6', 'superuser@gmail.com', '2019-11-25 02:32:21', '2019-11-25 02:32:21', NULL, 0),
(7, 'testsss', '$2a$10$GdX5tKKeDfDRNq/XV2CEou7azBn4vFMBGISECVoqZhkIgKT3TTsxe', 'superuser@gmail.com', '2019-11-25 02:36:00', '2019-11-25 02:36:00', NULL, 0),
(8, 'testsssasas', '$2a$10$eotU0yq9n8EHWfKeI1j7Z.pXmUDRz2CXNbXnbIggABvuVti5zboLW', 'superuser@gmail.com', '2019-11-25 02:46:35', '2019-11-25 02:46:35', NULL, 0),
(9, 'testsssasasasas', '$2a$10$66DGXCPTbxBd6HBPbguVZOOygzCcx6PYRPng0XsugsArU/D79KbMa', 'superuser@gmail.com', '2019-11-25 02:47:40', '2019-11-25 02:47:40', NULL, 0),
(10, 'syifa', '$2a$10$Ia79Jl.2CCbkWX4ESUZbPucbmOctboh2o1QIb0ePQBVyCHSQGAxQa', 'superuser@gmail.com', '2019-11-25 02:48:10', '2019-11-25 02:48:10', NULL, 0),
(11, 'nofal', '$2a$10$jk5RlWVhf7XE5m7JvfKcxeGbHB0Uz.B8uFK52xzIFRFE.PGZeRr0u', 'superuser@gmail.com', '2019-11-25 02:48:48', '2019-11-25 02:48:48', NULL, 0),
(12, 'bukanebias', '$2a$10$gBolHPmv/iDwHsM1tumoyO8f6j1J7uZWV.xe453gAU2ByDE9C2zj2', 'superasauser@gmail.com', '2019-11-28 06:19:14', '2019-11-28 06:19:14', NULL, 0),
(13, 'bukanebi@gmail.com', '$2a$10$8q4HCuNCrREp2w/U.qGd9ufO/YA2YfCegi4LJmvsKB2x39z42rhwu', 'assasa@gmail.com', '2019-11-28 09:24:20', '2019-11-28 09:24:20', NULL, 0),
(14, 'noval', '$2a$10$5VmDrQXzUs87i0CFQItyduwb8C/zTusUhR5xR1XyiCYPUPrH8Ny/q', 'superuser1@gmail.com', '2019-11-28 10:54:01', '2019-11-28 10:54:01', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5vdmFsIiwidXVpZCI6ImUxZDgyNzFkLTgwZjMtNGQ3YS1iM2U0LWJjZjgzMWQ0YzU2MyIsImlhdCI6MTU3NDk0MTA5NSwiZXhwIjoxNTc0OTQ0Njk1fQ.vKhRkPR5Ekf5uz3HsH9OKFyShJOLNdqFzIt8qdnEEmg', 1),
(15, 'bukanebi28', '$2a$10$AgwSCBTMmpvlLRMQUffb.OH0tsMH39dAXTVCq8skx2Ii8iUJBFFL2', 'bukanebi28@gmail.com', '2019-11-29 01:46:51', '2019-11-29 01:46:51', NULL, 2),
(16, 'edozel', '$2a$10$u88a/hyEgzVgZH22cPdKeOxXxkhcfd2d756X4CWKCUb.01NPyi4xi', 'edozel@gmail.com', '2019-11-29 01:52:49', '2019-11-29 01:52:49', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVkb3plbCIsInV1aWQiOiIxZjlkMDFjMS1jNjRhLTRlOWItOTlkZS03MTMwMmYwZjNhMTMiLCJpYXQiOjE1NzU2NjQ0NzMsImV4cCI6MTU3NTY2ODA3M30.kpseRg349C-rs6OZC5CTItpWiIsx9CiDQbjGIu3XbnQ', 2),
(26, 'tokopedia', '$2a$10$7XNqcXmlGkm0bFFnN.uS4uOI6qeVzw3PeupDG/5KNTc0jGX0nxRjC', 'tokopedia@yaho.com', '2019-12-06 22:38:22', '2019-12-06 22:38:22', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRva29wZWRpYSIsInV1aWQiOiI5ZTY1ZWE4OC1hODY3LTQ0YzgtOGMwZC0wYmIxODFjMGRlYTMiLCJpYXQiOjE1NzU2NzcxMTUsImV4cCI6MTU3NTY4MDcxNX0.6GEdzyteY_jbxN-ygC8ntwL85S-WBmiiljHRGSyhpoo', 1),
(18, 'ardincool', '$2a$10$HfAXDFQWzQLKm5SASW15GuGktyx9RO166YfknXQ3txIxoE7F/F2RW', 'ardincool@gmail.com', '2019-11-30 02:55:10', '2019-11-30 02:55:10', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFyZGluY29vbCIsInV1aWQiOiJlNTdhNWY5YS02NzE0LTQ2OWUtODJkZi00MmNiZWEwYzdkNWUiLCJpYXQiOjE1NzUwODI1MTksImV4cCI6MTU3NTA4NjExOX0.BwI8q6ldk2UuF8OLG2ztrLlnMSNvrcYY2zeXky6MfzQ', 1),
(19, 'edo2', '$2a$10$kdV0O/zz.CixC8YyH90R3uT7QNieKxv4o8lEBD.WroU5gUFz2V1EK', 'edo2@gmail.com', '2019-11-30 03:07:50', '2019-11-30 03:07:50', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVkbzIiLCJ1dWlkIjoiYTFmNmRhZGYtYjljNS00Yjc2LTk3ZjEtNDgwNzA3MGE4NDE1IiwiaWF0IjoxNTc1MDg0MzcyLCJleHAiOjE1NzUwODc5NzJ9.xkvLH1M6c0fF5TwIGPg9HayyXD3UyCuZmF3R2Fmck3E', 2),
(20, 'user', '$2a$10$12Gx4zj4qR.U7JV6geltSOWS4ZSBoP2w95oW7DMWhiOJPTtvoZnnC', 'user@yahoo.com', '2019-12-04 03:13:33', '2019-12-04 03:13:33', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJ1dWlkIjoiZDg0YzNlNWItNDU1My00ZWY5LWIxZTktOWZiMzdlYzQyOGRjIiwiaWF0IjoxNTc1NDI5MjM1LCJleHAiOjE1NzU0MzI4MzV9.hUYVk4CHGFC779ShAHluCynwDGiIvBbEmu9Zal2oANg', 1),
(21, 'alexa', '$2a$10$4uSX6g103cdxc0/Flb8Bcei5qxxV0Xi64s9dydZSbWZ4Ah8iMMvnu', 'alaskaalexa@gmail.com', '2019-12-05 06:10:04', '2019-12-05 06:10:04', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsZXhhIiwidXVpZCI6ImFiMTNmNDlkLTUyNTAtNDNiZS1iYTZkLTUwNDYyOGIxYjM1ZCIsImlhdCI6MTU3NTY3ODU2MiwiZXhwIjoxNTc1NjgyMTYyfQ.yJa3tsi_8f96H6Q8Wyu08Hk1RiypfcAgvr_LJ5OjaQc', 2),
(23, 'hijab', '$2a$10$hIIEVgIIP0v2jzDEDqa9pOq4gQAlCnyFAFugNwLIdf4vVj2tF7Cve', 'hijab@gmail.com', '2019-12-05 18:41:38', '2019-12-05 18:41:38', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpamFiIiwidXVpZCI6ImUyODM4NmUwLTEwZTAtNDYzMi1iYjVlLThhMWU3N2Q5MzY5NiIsImlhdCI6MTU3NTU3MTQxOCwiZXhwIjoxNTc1NTc1MDE4fQ.PDbb2aHYfCTKDLOJ84uVJ6jvl4EKHW4uoNKFpNbkWwc', 2),
(24, 'erik', '$2a$10$P2E3oYfsMlHYmNjPx5MfDOL0L6076s0keKj..4OS104J6lMWUy8PW', 'erik@gmail.com', '2019-12-05 18:46:48', '2019-12-05 18:46:48', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVyaWsiLCJ1dWlkIjoiZjY4NmNkNTItOTk4Yi00ZmEyLWJlNzUtMWRjMGUzZjFjODY2IiwiaWF0IjoxNTc1NTcxNjg0LCJleHAiOjE1NzU1NzUyODR9.yVSUnOt-ZRCkQpsEl_GQEMpBIYjjotXGDWjzuvpXLsk', 2),
(27, 'telkom', '$2a$10$GCOeXgG2vT0QA9cVb7DvIOZJeuqvE89b8GSg3QsnqbYAuHy6m/AIm', 'telkomId@gmail.com', '2019-12-06 23:34:48', '2019-12-06 23:34:48', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlbGtvbSIsInV1aWQiOiIwZDhkN2E1Yy1jMDEwLTQ5MmMtOWIyMi1lMDQyZWNlNjdmMTAiLCJpYXQiOjE1NzU2NzUzMzAsImV4cCI6MTU3NTY3ODkzMH0.KzE96fWIGFX72lhPOxxtwb8eqznFKK7ipWh8Wlvh_KM', 1),
(28, 'bukalapak', '$2a$10$hxsfrzAPAfMIW/fkSKZBP.fU93E9bpMTqeKeReqWQiXypQtw3QqRi', 'bukalapak@yahoo.com', '2019-12-06 23:45:08', '2019-12-06 23:45:08', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJ1a2FsYXBhayIsInV1aWQiOiIzNWE4NjI5ZS0zYjE0LTRjOWItODdmNC1jYmYyNTY3ZGNlZTYiLCJpYXQiOjE1NzU2Nzg2MjcsImV4cCI6MTU3NTY4MjIyN30.kyoMZeQ5NgYqgicf8QmD644nIuvl8C1I4ScVeu0jcaQ', 1);

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `vengineer`
-- (Lihat di bawah untuk tampilan aktual)
--
DROP VIEW IF EXISTS `vengineer`;
CREATE TABLE IF NOT EXISTS `vengineer` (
`id` int(11)
,`name` varchar(250)
,`DOB` date
,`location` varchar(200)
,`photo` varchar(250)
,`create_at` timestamp
,`update_at` timestamp
,`nameSkill` varchar(250)
,`level` int(50)
,`url` varchar(250)
,`description` varchar(250)
);

-- --------------------------------------------------------

--
-- Struktur untuk view `vengineer`
--
DROP TABLE IF EXISTS `vengineer`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vengineer`  AS  select `enggi`.`id` AS `id`,`enggi`.`name` AS `name`,`enggi`.`dob` AS `DOB`,`enggi`.`location` AS `location`,`enggi`.`photo` AS `photo`,`enggi`.`create_at` AS `create_at`,`enggi`.`update_at` AS `update_at`,`sk`.`nameSkill` AS `nameSkill`,`enggiskill`.`level` AS `level`,`showc`.`url` AS `url`,`showc`.`description` AS `description` from (((`engineer` `enggi` left join `engginer_skill` `enggiskill` on((`enggi`.`id` = `enggiskill`.`id_engineer`))) left join `skill` `sk` on((`enggiskill`.`idSkill` = `sk`.`id`))) left join `showcase` `showc` on((`enggi`.`id` = `showc`.`id_engineer`))) ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
