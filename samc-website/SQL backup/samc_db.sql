-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 08 fév. 2026 à 04:02
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `samc_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(10) NOT NULL,
  `patient_name` varchar(255) NOT NULL,
  `patient_phone` varchar(50) NOT NULL,
  `reason` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `appointments`
--

INSERT INTO `appointments` (`id`, `doctor_id`, `date`, `time`, `patient_name`, `patient_phone`, `reason`) VALUES
(5, 4, '2026-02-08', '18:00', 'jhjk', 'hjkhk', '[CHIRURGIE] hkjhk');

-- --------------------------------------------------------

--
-- Structure de la table `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `job` varchar(255) NOT NULL,
  `dept` text NOT NULL,
  `color` varchar(50) NOT NULL,
  `rating` varchar(10) DEFAULT '5.0',
  `location` varchar(255) NOT NULL,
  `doc_data` longtext DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `doctors`
--

INSERT INTO `doctors` (`id`, `name`, `job`, `dept`, `color`, `rating`, `location`, `doc_data`, `avatar`) VALUES
(3, 'Dr. Candice Park', 'Fire & Health Chief', '[\"CHIRURGIE\",\"PSYCHOLOGIE\",\"MATERNITÉ\",\"A.M.S\",\"S.A.R\"]', 'cyan', '5.0', 'Hôpital PillBox Hill Medical Center', '{\"id\":0,\"name\":\"Dr. Candice Park\",\"job\":\"Fire & Health Chief\",\"dept\":\"CHIRURGIE\",\"color\":\"cyan\",\"location\":\"Hôpital PillBox Hill Medical Center\"}', 'http://localhost/uploads/6987a087cfb74_image_2026-02-07_212854222.png'),
(4, 'Dr. Ezekiel \"Pacco\" Eiden', 'Division Commander', '[\"CHIRURGIE\",\"PSYCHOLOGIE\",\"MATERNITÉ\",\"A.M.S\",\"CONSULTATION GÉNÉRALE\"]', 'cyan', '5.0', 'Hôpital PillBox Hill Medical Center', '{\"id\":0,\"name\":\"Dr. Ezekiel \\\"Pacco\\\" Eiden\",\"job\":\"Division Commander\",\"dept\":\"CHIRURGIE\",\"color\":\"cyan\",\"location\":\"Hôpital PillBox Hill Medical Center\"}', 'http://localhost/uploads/6987a0a6c66de_image_2026-02-07_212924484.png'),
(5, 'Dr. Jimmy Red', 'Medical Lieutenant', '[\"CONSULTATION GÉNÉRALE\",\"A.M.S\"]', 'gray', '5.0', 'Hôpital PillBox Hill Medical Center', '{\"id\":0,\"name\":\"Dr. Jimmy Red\",\"job\":\"Medical Lieutenant\",\"dept\":\"CONSULTATION GÉNÉRALE\",\"color\":\"gray\",\"location\":\"Hôpital PillBox Hill Medical Center\"}', NULL),
(6, 'Dr. Rallen Piercen', 'Doctor', '[\"CONSULTATION GÉNÉRALE\",\"PSYCHOLOGIE\",\"MATERNITÉ\"]', 'gray', '5.0', 'Hôpital PillBox Hill Medical Center', '{\"id\":0,\"name\":\"Dr. Rallen Piercen\",\"job\":\"Doctor\",\"dept\":\"CONSULTATION GÉNÉRALE\",\"color\":\"gray\",\"location\":\"Hôpital PillBox Hill Medical Center\"}', NULL),
(7, 'Offaïna Macgualenda', 'EMT Specialiste', '[\"CONSULTATION GÉNÉRALE\",\"PSYCHOLOGIE\"]', 'gray', '5.0', 'Hôpital PillBox Hill Medical Center', '{\"id\":0,\"name\":\"Offaïna Macgualenda\",\"job\":\"EMT Specialiste\",\"dept\":\"CONSULTATION GÉNÉRALE\",\"color\":\"gray\",\"location\":\"Hôpital PillBox Hill Medical Center\"}', NULL),
(8, 'Saskia Von Sternberg', 'EMT Specialist', '[\"CONSULTATION GÉNÉRALE\",\"MATERNITÉ\",\"A.M.S\"]', 'gray', '5.0', 'Hôpital PillBox Hill Medical Center', '{\"id\":0,\"name\":\"Saskia Von Sternberg\",\"job\":\"EMT Specialist\",\"dept\":\"CONSULTATION GÉNÉRALE\",\"color\":\"gray\",\"location\":\"Hôpital PillBox Hill Medical Center\"}', NULL),
(9, 'Dr. Arthur Devon', 'Dorctor', '[\"CONSULTATION GÉNÉRALE\",\"A.M.S\"]', 'gray', '5.0', 'Hôpital PillBox Hill Medical Center', '{\"id\":0,\"name\":\"Dr. Arthur Devon\",\"job\":\"Dorctor\",\"dept\":\"CONSULTATION GÉNÉRALE\",\"color\":\"gray\",\"location\":\"Hôpital PillBox Hill Medical Center\"}', NULL),
(10, 'Dr. Ayden Blackwell', 'EMT', '[\"CONSULTATION GÉNÉRALE\",\"PSYCHOLOGIE\",\"MATERNITÉ\"]', 'gray', '5.0', 'Hôpital PillBox Hill Medical Center', '{\"id\":0,\"name\":\"Dr. Ayden Blackwell\",\"job\":\"EMT\",\"dept\":\"CONSULTATION GÉNÉRALE\",\"color\":\"gray\",\"location\":\"Hôpital PillBox Hill Medical Center\"}', NULL),
(11, ' Heaven O\'Connor', 'EMT', '[\"CONSULTATION GÉNÉRALE\",\"MATERNITÉ\",\"A.M.S\"]', 'gray', '5.0', 'Hôpital PillBox Hill Medical Center', '{\"id\":0,\"name\":\" Heaven O\'Connor\",\"job\":\"EMT\",\"dept\":\"CONSULTATION GÉNÉRALE\",\"color\":\"gray\",\"location\":\"Hôpital PillBox Hill Medical Center\"}', NULL),
(12, 'James Dahon', 'EMT', '[\"CONSULTATION GÉNÉRALE\"]', 'gray', '5.0', 'Hôpital PillBox Hill Medical Center', '{\"id\":0,\"name\":\"James Dahon\",\"job\":\"EMT\",\"dept\":\"CONSULTATION GÉNÉRALE\",\"color\":\"gray\",\"location\":\"Hôpital PillBox Hill Medical Center\"}', NULL),
(13, ' Henry Lapierre', 'EMT', '[\"CONSULTATION GÉNÉRALE\",\"PSYCHOLOGIE\",\"MATERNITÉ\"]', 'gray', '5.0', 'Hôpital PillBox Hill Medical Center', '{\"id\":0,\"name\":\" Henry Lapierre\",\"job\":\"EMT\",\"dept\":\"CONSULTATION GÉNÉRALE\",\"color\":\"gray\",\"location\":\"Hôpital PillBox Hill Medical Center\"}', NULL),
(14, ' Lux Marianne Blackbird', 'Masteer Paramedic', '[\"CONSULTATION GÉNÉRALE\",\"PSYCHOLOGIE\",\"A.M.S\",\"MATERNITÉ\"]', 'gray', '5.0', 'Hôpital PillBox Hill Medical Center', '{\"id\":0,\"name\":\" Lux Marianne Blackbird\",\"job\":\"Masteer Paramedic\",\"dept\":\"CONSULTATION GÉNÉRALE\",\"color\":\"gray\",\"location\":\"Hôpital PillBox Hill Medical Center\"}', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Index pour la table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
