-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 04 Lis 2019, 14:46
-- Wersja serwera: 10.1.38-MariaDB
-- Wersja PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `virtual_florist`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `adress`
--

CREATE TABLE `adress` (
  `adress_id` int(11) NOT NULL,
  `country` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `city` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `street` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `local_number` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `zip_code` mediumtext COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `adress`
--

INSERT INTO `adress` (`adress_id`, `country`, `city`, `street`, `local_number`, `zip_code`) VALUES
(1, 'Poland', 'Wroclaw', 'Kuropatwia', '5', '51-419'),
(2, 'Poland', 'Chełm', 'Kol', '18', '22-100'),
(3, 'Poland', 'Wrocław', 'Olch', '99 m 3', '51-110');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `basket`
--

CREATE TABLE `basket` (
  `basket_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `valid` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `basket_products`
--

CREATE TABLE `basket_products` (
  `basket_products_id` int(11) NOT NULL,
  `basket_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `delivery_type`
--

CREATE TABLE `delivery_type` (
  `delivery_type_id` int(11) NOT NULL,
  `name` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `description` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `cost` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `delivery_type`
--

INSERT INTO `delivery_type` (`delivery_type_id`, `name`, `description`, `cost`) VALUES
(1, 'FAST', 'Szybka dostawa 1-3 dni', 9);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `monthly_status`
--

CREATE TABLE `monthly_status` (
  `monthly_status_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `income` double NOT NULL,
  `products_sold` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `buyer_adress_id` int(11) NOT NULL,
  `delivery_adress_id` int(11) NOT NULL,
  `delivery_type_id` int(11) NOT NULL,
  `delivery_date` date NOT NULL,
  `comment` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `date` date NOT NULL,
  `status` mediumtext COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `order_products`
--

CREATE TABLE `order_products` (
  `order_products_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `type` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `photo`
--

CREATE TABLE `photo` (
  `photo_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `wiki_entry_id` int(11) DEFAULT NULL,
  `type` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `description` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `path` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `enabled` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `photo`
--

INSERT INTO `photo` (`photo_id`, `product_id`, `wiki_entry_id`, `type`, `description`, `path`, `enabled`) VALUES
(2, 1, NULL, 'asdf', 'asdf', 'asdf', b'0');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `name` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `latin_name` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `description` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `type` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `tags` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `available` bit(1) NOT NULL,
  `wiki_entry_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `product`
--

INSERT INTO `product` (`product_id`, `name`, `latin_name`, `description`, `type`, `tags`, `available`, `wiki_entry_id`) VALUES
(1, 'Róża ', 'BIggus diccus', 'roża pospolita polska', 'SINGLE', 'single;dupa', b'1', NULL),
(2, 'Roza ', 'BIggus diccus', 'ro?a pospolita polska', 'SINGLE', 'single;dupa', b'1', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `storage`
--

CREATE TABLE `storage` (
  `storage_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `enabled` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `surname` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `email` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `password` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `role` text COLLATE utf8_polish_ci NOT NULL,
  `enabled` bit(1) NOT NULL,
  `adress_id` int(11) NOT NULL,
  `phone_number` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `buisness_client` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `user`
--

INSERT INTO `user` (`user_id`, `name`, `surname`, `email`, `password`, `role`, `enabled`, `adress_id`, `phone_number`, `buisness_client`) VALUES
(1, 'Karol', 'Maśluch', 'kar@mar.com', 'ala123', 'ROLE_USER', b'1', 2, '123456789', b'0');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wiki_entry`
--

CREATE TABLE `wiki_entry` (
  `wiki_entry_id` int(11) NOT NULL,
  `name` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `latin_name` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `short_description` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `long_description` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `treatment` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `tips` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `tags` mediumtext COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `adress`
--
ALTER TABLE `adress`
  ADD PRIMARY KEY (`adress_id`);

--
-- Indeksy dla tabeli `basket`
--
ALTER TABLE `basket`
  ADD PRIMARY KEY (`basket_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `basket_products`
--
ALTER TABLE `basket_products`
  ADD PRIMARY KEY (`basket_products_id`),
  ADD KEY `basket_id` (`basket_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indeksy dla tabeli `delivery_type`
--
ALTER TABLE `delivery_type`
  ADD PRIMARY KEY (`delivery_type_id`);

--
-- Indeksy dla tabeli `monthly_status`
--
ALTER TABLE `monthly_status`
  ADD PRIMARY KEY (`monthly_status_id`);

--
-- Indeksy dla tabeli `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `buyer_adress_id` (`buyer_adress_id`),
  ADD KEY `delivery_adress_id` (`delivery_adress_id`),
  ADD KEY `delivery_type_id` (`delivery_type_id`);

--
-- Indeksy dla tabeli `order_products`
--
ALTER TABLE `order_products`
  ADD PRIMARY KEY (`order_products_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indeksy dla tabeli `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`photo_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `wiki_entry_id` (`wiki_entry_id`);

--
-- Indeksy dla tabeli `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `wiki_entry_id` (`wiki_entry_id`);

--
-- Indeksy dla tabeli `storage`
--
ALTER TABLE `storage`
  ADD PRIMARY KEY (`storage_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indeksy dla tabeli `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `adress_id` (`adress_id`);

--
-- Indeksy dla tabeli `wiki_entry`
--
ALTER TABLE `wiki_entry`
  ADD PRIMARY KEY (`wiki_entry_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `adress`
--
ALTER TABLE `adress`
  MODIFY `adress_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `basket`
--
ALTER TABLE `basket`
  MODIFY `basket_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `basket_products`
--
ALTER TABLE `basket_products`
  MODIFY `basket_products_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `delivery_type`
--
ALTER TABLE `delivery_type`
  MODIFY `delivery_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `monthly_status`
--
ALTER TABLE `monthly_status`
  MODIFY `monthly_status_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `order_products`
--
ALTER TABLE `order_products`
  MODIFY `order_products_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `photo`
--
ALTER TABLE `photo`
  MODIFY `photo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `storage`
--
ALTER TABLE `storage`
  MODIFY `storage_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `wiki_entry`
--
ALTER TABLE `wiki_entry`
  MODIFY `wiki_entry_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `basket`
--
ALTER TABLE `basket`
  ADD CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Ograniczenia dla tabeli `basket_products`
--
ALTER TABLE `basket_products`
  ADD CONSTRAINT `basket_products_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `basket_products_ibfk_2` FOREIGN KEY (`basket_id`) REFERENCES `basket` (`basket_id`);

--
-- Ograniczenia dla tabeli `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`delivery_type_id`) REFERENCES `delivery_type` (`delivery_type_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`buyer_adress_id`) REFERENCES `adress` (`adress_id`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`delivery_adress_id`) REFERENCES `adress` (`adress_id`);

--
-- Ograniczenia dla tabeli `order_products`
--
ALTER TABLE `order_products`
  ADD CONSTRAINT `order_products_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `order_products_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Ograniczenia dla tabeli `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`wiki_entry_id`) REFERENCES `wiki_entry` (`wiki_entry_id`),
  ADD CONSTRAINT `photo_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Ograniczenia dla tabeli `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`wiki_entry_id`) REFERENCES `wiki_entry` (`wiki_entry_id`);

--
-- Ograniczenia dla tabeli `storage`
--
ALTER TABLE `storage`
  ADD CONSTRAINT `storage_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Ograniczenia dla tabeli `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`adress_id`) REFERENCES `adress` (`adress_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
