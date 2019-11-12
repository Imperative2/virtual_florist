-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 11 Lis 2019, 20:43
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
(3, 'Poland', 'Wrocław', 'Olch', '99 m 3', '51-110'),
(4, 'Poland', 'Wroclaw', 'Barbakańska', '44 m 3', '51-419');

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
(1, 'Szybka', 'Szybka dostawa 1-3 dni', 9),
(2, 'Odbiór na miejscu', 'Paczka będzie na ciebie czekała w placówce', 0),
(3, 'Priorytetowa', 'Dostawa w tym samym dniu co zamówienie', 25);

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
  `product_id` int(11) DEFAULT '-1',
  `wiki_entry_id` int(11) DEFAULT '-1',
  `type` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `description` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `path` mediumtext COLLATE utf8_polish_ci NOT NULL,
  `enabled` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `photo`
--

INSERT INTO `photo` (`photo_id`, `product_id`, `wiki_entry_id`, `type`, `description`, `path`, `enabled`) VALUES
(7, 4, 0, 'MAIN', 'asdfadf', 'http://localhost:8080/photo/download/8.png', b'1'),
(8, 4, 0, 'SIDE', 'asdfadf', 'http://localhost:8080/photo/download/9.png\r\n', b'1'),
(9, 1, 1, 'MAIN', 'asdfadf', 'http://localhost:8080/photo/download/7.png', b'1'),
(10, NULL, 3, 'SIDE', 'asdfadf', 'http://localhost:8080/photo/download/10.png', b'1'),
(11, NULL, 0, 'MAIN', 'asdfadf', 'http://localhost:8080/photo/download/11.png', b'1'),
(12, NULL, 0, 'MAIN', 'ppazur', 'http://localhost:8080/photo/download/12.png', b'1'),
(13, 3, 0, 'MAIN', 'ppazur', 'http://localhost:8080/photo/download/13.png', b'1'),
(14, 2, 0, 'MAIN', 'ppazur', 'http://localhost:8080/photo/download/14.png', b'1'),
(15, NULL, 0, 'MAIN', 'ppazur', 'http://localhost:8080/photo/download/15.png', b'1'),
(16, NULL, 0, 'MAIN', 'TY NO NIE AIEM JAK TAM TWOJA SZMACIURA ZROGOWACIALA NIEDZWIEDZICA CO SI? KURWI POD MOSTEM ZA WOJAKA i SIADA NA BUTL? OD WANISHA I KURWE PIJANA W TACZCE WOZILI PO OSIEDLU WIESZ O CO CHODZI MNIE NIE PRZEGADASZ BO MI SPERME Z PALY ZJADASZ FRAJERZE ZEOGOWACIALY FRAJERSKA CHMURO', 'http://localhost:8080/photo/download/16.png', b'1'),
(17, NULL, NULL, 'MAIN', 'ppazur', 'http://localhost:8080/photo/download/17.png', b'1'),
(18, NULL, NULL, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/18.png', b'1'),
(19, NULL, NULL, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/19.png', b'1'),
(20, NULL, NULL, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/20.png', b'1'),
(21, NULL, 0, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/21.png', b'1'),
(22, NULL, 0, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/22.png', b'1'),
(23, NULL, 0, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/23.png', b'1'),
(24, NULL, 0, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/24.png', b'1'),
(25, NULL, 0, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/25.png', b'1'),
(26, NULL, 1, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/26.png', b'1'),
(27, NULL, 0, 'MAIN', 'asdfasdf', 'http://localhost:8080/photo/download/27.png', b'1'),
(28, NULL, 0, 'MAIN', 'rrrrr', 'http://localhost:8080/photo/download/28.png', b'1'),
(29, NULL, 0, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/29.png', b'1'),
(30, NULL, 0, 'MAIN', 'asdfasdf', 'http://localhost:8080/photo/download/30.png', b'1'),
(31, NULL, NULL, 'MAIN', 'asdfasdf', 'http://localhost:8080/photo/download/31.png', b'1'),
(32, NULL, NULL, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/32.png', b'1'),
(33, NULL, NULL, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/33.png', b'1'),
(34, NULL, 0, 'MAIN', 'wer', 'http://localhost:8080/photo/download/34.png', b'1'),
(35, NULL, 0, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/35.png', b'1'),
(36, NULL, 26, 'MAIN', 'Lotus', 'http://localhost:8080/photo/download/36.png', b'1'),
(37, NULL, 26, 'MAIN', 'Lotus', 'http://localhost:8080/photo/download/37.png', b'1'),
(38, NULL, 26, 'MAIN', 'Lotus', 'http://localhost:8080/photo/download/38.png', b'1'),
(39, NULL, 27, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/39.png', b'1'),
(40, NULL, 27, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/40.png', b'1'),
(41, NULL, 27, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/41.png', b'1'),
(42, NULL, 27, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/42.png', b'1'),
(43, NULL, 27, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/43.png', b'1'),
(44, NULL, 3, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/44.png', b'1'),
(45, NULL, 28, 'MAIN', 'wer', 'http://localhost:8080/photo/download/45.png', b'1'),
(46, NULL, NULL, 'MAIN', 'wer', 'http://localhost:8080/photo/download/46.png', b'1'),
(47, NULL, NULL, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/47.png', b'1'),
(48, NULL, NULL, 'MAIN', 'wer', 'http://localhost:8080/photo/download/48.png', b'1'),
(49, NULL, 2, 'MAIN', 'wer', 'http://localhost:8080/photo/download/49.png', b'1'),
(50, 2, NULL, 'MAIN', 'asdf', 'http://localhost:8080/photo/download/50.png', b'1');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `price` double NOT NULL DEFAULT '0',
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

INSERT INTO `product` (`product_id`, `price`, `name`, `latin_name`, `description`, `type`, `tags`, `available`, `wiki_entry_id`) VALUES
(1, 0, 'Róża ', 'BIggus diccus', 'roża pospolita polska', 'SINGLE', 'single;dupa', b'1', 1),
(2, 0, 'Roza ', 'BIggus diccus', 'ro?a pospolita polska', 'SINGLE', 'single;dupa', b'1', NULL),
(3, 0, 'Chryzantema', 'Chryzantemus maximus', 'Chryzantama zwykła', 'SINGLE', 'SINGLE;', b'1', NULL),
(4, 20, 'Chryzantema', 'Dendranthema Des Moul', 'rodzaj bylin lub pó?krzewów nale??cy do rodziny astrowatych', 'SINGLE', 'SINGLE', b'1', NULL),
(7, 0, 'qwe', 'qwe', 'qwe', 'qwe', 'qwe', b'1', NULL),
(8, 2.54, 'alaska', 'alaska', 'alaska', '', 'alaska', b'1', NULL),
(9, 3.17, 'dog', 'dog', 'dog', '', 'dog', b'0', NULL),
(10, 2.22, 'ddd', 'ddd', 'ddd', 'BOUQUET', 'ddd', b'0', NULL),
(11, 1, 'wwewr', 'wer', 'wer', 'SINGLE', 'wer', b'1', NULL),
(12, 22, 'kk', 'kk', 'kk', 'SINGLE', 'kk', b'1', NULL),
(13, 22, 'rrr', 'rrr', 'rrr', 'SINGLE', 'rrr', b'1', 3),
(14, 2, 'lll', 'lll', 'lll', 'SINGLE', 'lll', b'1', NULL);

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

--
-- Zrzut danych tabeli `storage`
--

INSERT INTO `storage` (`storage_id`, `product_id`, `quantity`, `enabled`) VALUES
(1, 3, 250, b'1'),
(2, 1, 150, b'1');

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
  `business_client` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `user`
--

INSERT INTO `user` (`user_id`, `name`, `surname`, `email`, `password`, `role`, `enabled`, `adress_id`, `phone_number`, `business_client`) VALUES
(1, 'Karol', 'Maśluch', 'kar@mar.com', 'ala123', 'ROLE_USER', b'1', 2, '123456789', b'0'),
(2, 'Piotr', 'Mazurek', 'pio@maz.com', 'pass', 'ROLE_ADMIN', b'1', 3, '123456789', b'1');

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
-- Zrzut danych tabeli `wiki_entry`
--

INSERT INTO `wiki_entry` (`wiki_entry_id`, `name`, `latin_name`, `short_description`, `long_description`, `treatment`, `tips`, `tags`) VALUES
(1, 'Róża', 'Rosa', 'Rodzaj krzewów należących do rodziny różowatych (Rosaceae)', 'rodzaj krzewów należących do rodziny różowatych (Rosaceae). Znanych jest 150–200 gatunków występujących na półkuli północnej, czasem podaje się nawet dwukrotnie większą liczbę, co wynika z różnego traktowania taksonów. Większość ozdobnych odmian róży rozmnaża się przez okulizację na podkładkach z dzikich róż.', 'Sadzenie\r\nWymaga stanowiska ciepłego, słonecznego i przewiewnego. Ma trochę większe potrzeby wobec gleby. Wierzchnia jej warstwa powinna być lekka i przepuszczalna. Natomiast warstwa głębsza (poniżej korzeni), najlepiej, aby miała charakter gliniasty - tak, aby utrzymać wilgoć. Róże należy wsadzić w dołek na tyle głęboki, aby nie zawijać korzeni rośliny. Następnie zasypujemy go żyzną ziemią i obficie podlewamy. Przed posadzeniem wskazane jest także skrócenie górnych pędów do poziomu ok. 30 cm. W czasie podlewania staramy się uniknąć zalania liści i kwiatów, gdyż takie zalania mogą przyczynić się do rozwoju chorób grzybowych.\r\n\r\n\r\nNawożenie\r\nRóże potrzebują przede wszystkim fosforu i potasu, które oddziałują na zawiązywanie pąków i późniejsze kwitnienie. Nawożenie powinniśmy zastosować jak najwcześniej - od wczesnej wiosny. Nawozem interwencyjnym dolistnym trzeba zasilać różę co dwa tygodnie. Zwykłym nawozem granulowanym: 3-4 razy, aby zapewnić nawożenie przez cały sezon. Wystarczy raz zastosować nawóz długodziałający, a róża będzie dokarmiana przez cały sezon. Róż nie powinno się już dodatkowo nawozić gdyż pędy powinny zdrewnieć przed zimą.\r\n\r\nPrzycinanie\r\nWażną czynnością przy hodowli tego rodzaju krzewów jest ich przycinanie, które wpływa na zdrowie krzewu oraz późniejszy wygląd. Najlepszy czas przypada na przełom marca i kwietnia, kiedy to większość pąków jest nabrzmiała. Najpilniej przycinamy pędy przemarznięte i chore, używając do tego ostrego sekatora. Tniemy na skos powyżej oczka skierowanego na zewnątrz od 20 do 40 cm powyżej ziemi.', 'Krzewy zakupione w doniczkach nie wymagają dodatkowych zabiegów;Dołek, w który sadzimy roślinę, powinien być odpowiednio duży', 'rosa'),
(3, 'kola', 'asdfasdf', 'asdfasdf', 'asdfasfd', 'asdfasdf', 'asdfasdf', 'asdfasdf'),
(26, ' Indian lotus', 'Nelumbo nucifera', ' One of two extant species of aquatic plant in the family Nelumbonaceae.', 'Nelumbo nucifera, also known as Indian lotus, sacred lotus, bean of India, Egyptian bean or simply lotus, is one of two extant species of aquatic plant in the family Nelumbonaceae. It is often colloquially called a water lily. Under favorable circumstances the seeds of this aquatic perennial may remain viable for many years, with the oldest recorded lotus germination being from that of seeds 1,300 years old recovered from a dry lakebed in northeastern China.\n\nIt has a very wide native distribution, ranging from central and northern India (at altitudes up to 1,400 m or 4,600 ft in the southern Himalayas), through northern Indochina and East Asia (north to the Amur region; the Russian populations have sometimes been referred to as \"Nelumbo komarovii\"), with isolated locations at the Caspian Sea. Today the species also occurs in southern India, Sri Lanka, virtually all of Southeast Asia, New Guinea and northern and eastern Australia, but this is probably the result of human translocations. It has a very long history (c. 3,000 years) of being cultivated for its edible seeds, and it is commonly cultivated in water gardens. It is the national flower of India and Vietnam.', 'The Sacred Lotus grows in water up to 2.5 m (8 ft). The minimum water depth should not be less than 30 cm (12 in). In colder climates such a low water level, which heats up more quickly, is helpful for better growth and flowering. Lotus germinates at temperatures above 13 °C (55 °F). Most varieties are not cold-hardy.[16] In the growing season from April to September (northern hemisphere), the average daytime temperature needed is 23 to 27 °C (73 to 81 °F). In regions with low light levels in winter, the sacred lotus has a period of dormancy. The tubers are not cold resistant, but can resist temperatures below 0 °C (32 °F) if they are covered with an insulating cover of water or soil. During winter time, the roots have to be stored at a frost free place', 'Lotus seeds can be processed into moon cake;Young lotus stems are used as a salad ingredient in Vietnamese cuisine.;In China and Korea, lotus leaf tea', ''),
(27, 'Lily of the valley', 'Convallaria majalis', 'Is a highly poisonous[3] woodland flowering plant with sweetly scented, pendent, bell-shaped white flowers', 'Convallaria majalis is an herbaceous perennial plant that forms extensive colonies by spreading underground stems called rhizomes. New upright shoots are formed at the ends of stolons in summer, these upright dormant stems are often called pips. These grow in the spring into new leafy shoots that still remain connected to the other shoots under ground, often forming extensive colonies. The stems grow to 15–30 cm (6–12 in) tall, with one or two leaves 10–25 cm (4–10 in) long; flowering stems have two leaves and a raceme of five to fifteen flowers on the stem apex.\n\nThe flowers have six white tepals (rarely pink), fused at the base to form a bell-shape, 5–10 mm (0.2–0.4 in) diameter, and sweetly scented; flowering is in late spring, in mild winters in the Northern Hemisphere it is in early March. The fruit is a small orange-red berry 5–7 mm (0.2–0.3 in) diameter that contains a few large whitish to brownish colored seeds that dry to a clear translucent round bead 1–3 mm (0.04–0.12 in) wide. Plants are self-sterile, and colonies consisting of a single clone do not set seed.', 'Convallaria majalis is widely grown in gardens for its scented flowers and ground-covering abilities in shady locations. It has gained the Royal Horticultural Society\'s Award of Garden Merit. (confirmed 2017). In favorable conditions it can form large colonies.\n\nVarious kinds and cultivars are grown, including those with double flowers, rose-colored flowers, variegated foliage and ones that grow larger than the typical species.\n\nC. majalis \'Albostriata\' has white-striped leaves\nC. majalis \'Green Tapestry\', \'Haldon Grange\', \'Hardwick Hall\', \'Hofheim\', \'Marcel\', \'Variegata\' and \'Vic Pawlowski\'s Gold\' are other variegated cultivars\nC. majalis \'Berlin Giant\' and C. majalis \'Géant de Fortin\' (syn. \'Fortin\'s Giant\') are larger-growing cultivars\nC. majalis \'Flore Pleno\' has double flowers.\nC. majalis \'Rosea\' sometimes found under the name C. majalis var. rosea, has pink flowers.\nTraditionally Convallaria majalis has been grown in pots and winter forced to provide flowers during the winter months, both for as potted plants and as cut flowers.', 'In 1956, the French firm Dior produced a fragrance simulating lily of the valley;Lily of the valley has been used in weddings;Lily of the valley was the floral emblem of Yugoslavia;Two of the flower\'s alternative names — Our Lady\'s tears and Mary\'s tears — derive from Christian legends that it sprang from the weeping of the Virgin Mary during the crucifixion of Jesus. ', ''),
(28, 'dfgh', 'dfgh', 'dfghdf', 'fdgh', 'dfghdfgh', 'dfghdfgh', 'dfghdfgh');

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
  MODIFY `adress_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `delivery_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `photo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT dla tabeli `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT dla tabeli `storage`
--
ALTER TABLE `storage`
  MODIFY `storage_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `wiki_entry`
--
ALTER TABLE `wiki_entry`
  MODIFY `wiki_entry_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

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
