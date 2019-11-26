-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 26 Lis 2019, 16:48
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
(6, 'PL', 'Chelm', 'Kolejowa 18/8', '18/8', '22-100'),
(7, 'PL', 'Chelm', 'Kolejowa', '18/8', '22-100');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `basket`
--

CREATE TABLE `basket` (
  `basket_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `valid` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `basket`
--

INSERT INTO `basket` (`basket_id`, `user_id`, `valid`) VALUES
(1, 4, b'1');

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

--
-- Zrzut danych tabeli `basket_products`
--

INSERT INTO `basket_products` (`basket_products_id`, `basket_id`, `product_id`, `quantity`) VALUES
(1, 1, 1, 1),
(2, 1, 22, 5),
(4, 1, 18, 1);

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
(9, 1, 1, 'MAIN', 'asdfadf', '/photo/download/7.png', b'1'),
(26, NULL, 1, 'MAIN', 'asdf', '/photo/download/26.png', b'1'),
(36, NULL, 26, 'MAIN', 'Lotus', '/photo/download/36.png', b'1'),
(37, NULL, 26, 'MAIN', 'Lotus', '/photo/download/37.png', b'1'),
(38, NULL, 26, 'MAIN', 'Lotus', '/photo/download/38.png', b'1'),
(40, NULL, 27, 'MAIN', 'asdf', '/photo/download/40.png', b'1'),
(41, NULL, 27, 'MAIN', 'asdf', '/photo/download/41.png', b'1'),
(42, NULL, 27, 'MAIN', 'asdf', '/photo/download/42.png', b'1'),
(43, NULL, 27, 'MAIN', 'asdf', '/photo/download/43.png', b'1'),
(68, NULL, 1, 'MAIN', 'asdf', '/photo/download/68.png', b'1'),
(69, 1, NULL, 'MAIN', 'asdf', '/photo/download/69.png', b'1'),
(72, 17, NULL, 'MAIN', 'asdf', '/photo/download/72.png', b'1'),
(73, 17, NULL, 'MAIN', 'asdf', '/photo/download/73.png', b'1'),
(75, 18, NULL, 'MAIN', 'asdf', '/photo/download/75.png', b'1'),
(76, 18, NULL, 'MAIN', 'asd', '/photo/download/76.png', b'1'),
(77, NULL, 40, 'MAIN', 'asdf', '/photo/download/77.png', b'1'),
(78, NULL, 40, 'MAIN', 'asdf', '/photo/download/78.png', b'1'),
(79, NULL, 41, 'MAIN', 'asdf', '/photo/download/79.png', b'1'),
(82, 21, NULL, 'MAIN', 'asdf', '/photo/download/82.png', b'1'),
(83, 18, NULL, 'MAIN', 'dfghdfghdfghdfgh', '/photo/download/83.png', b'1'),
(84, 18, NULL, 'MAIN', 'asdf', '/photo/download/84.png', b'1'),
(85, 4, NULL, 'MAIN', '', '/photo/download/85.png', b'1'),
(86, 4, NULL, 'MAIN', 'wer', '/photo/download/86.png', b'1'),
(87, 4, NULL, 'MAIN', 'wer', '/photo/download/87.png', b'1'),
(88, 22, NULL, 'MAIN', 'ribbon', '/photo/download/88.png', b'1'),
(89, NULL, NULL, 'MAIN', 'Rhghgg', '/photo/download/89.png', b'1'),
(90, NULL, NULL, 'MAIN', '', '/photo/download/90.png', b'1'),
(91, NULL, NULL, 'MAIN', '', '/photo/download/91.png', b'1');

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
(1, 5.1, 'Rose', 'Rosa', 'A rose is a woody perennial flowering plant of the genus Rosa', 'SINGLE', 'tag', b'1', 1),
(4, 20, 'asdfasdf', 'Dendranthema Des Moul', 'rodzaj bylin lub pó?krzewów nale??cy do rodziny astrowatych', 'SINGLE', 'SINGLE', b'1', NULL),
(17, 7.4, 'Hibiscus', 'Hibiscus syriacus', 'Hibiscus syriacus is a hardy deciduous shrub. It is upright and vase-shaped, reaching 2–4 m (7–13 ft) in height, bearing large trumpet-shaped flowers with prominent yellow-tipped white stamens.', 'SINGLE', 'tag', b'1', 40),
(18, 20, 'liliy', 'liliy', 'liliy', 'SINGLE', 'liliyrytutyu', b'1', 27),
(21, 1, 'asdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdf', 'asdfasd fa', 'asdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdfasdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdf', 'BOUQUET', 'asdfasd fasdfasdfasd fasdfasd fasdfasdfasdf asdfasd fasdfasdf asdfas fasdfasd asdfasdf', b'1', NULL),
(22, 1, 'Ribbon', 'Ribbon', 'Red ribbon', 'OTHER', '', b'1', NULL);

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
(3, 1, 30, b'1'),
(4, 18, 30, b'0'),
(12, 17, 220, b'1'),
(13, 21, 200, b'1'),
(14, 22, 20, b'0');

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
(3, 'Karol', 'Masluch', 'nie335@gmail.com', '123', 'USER', b'1', 7, '882713663', b'0'),
(4, 'JANUSZ', 'Kappa', 'janusz@janusz.com', 'janusz', 'USER', b'1', 6, '882713663', b'0'),
(5, 'JANUSZ', 'Kappa', 'janusz123@janusz.com', 'janusz', 'USER', b'1', 7, '882713663', b'0'),
(6, 'JANUSZ', 'Kappa', 'janusz123123@janusz.com', 'janusz', 'USER', b'1', 7, '882713663', b'0'),
(7, 'Karol', 'masluch', 'admin', 'admin', 'ADMIN', b'1', 7, '882712663', b'0');

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
(26, ' Indian lotus', 'Nelumbo nucifera', ' One of two extant species of aquatic plant in the family Nelumbonaceae.', 'Nelumbo nucifera, also known as Indian lotus, sacred lotus, bean of India, Egyptian bean or simply lotus, is one of two extant species of aquatic plant in the family Nelumbonaceae. It is often colloquially called a water lily. Under favorable circumstances the seeds of this aquatic perennial may remain viable for many years, with the oldest recorded lotus germination being from that of seeds 1,300 years old recovered from a dry lakebed in northeastern China.\n\nIt has a very wide native distribution, ranging from central and northern India (at altitudes up to 1,400 m or 4,600 ft in the southern Himalayas), through northern Indochina and East Asia (north to the Amur region; the Russian populations have sometimes been referred to as \"Nelumbo komarovii\"), with isolated locations at the Caspian Sea. Today the species also occurs in southern India, Sri Lanka, virtually all of Southeast Asia, New Guinea and northern and eastern Australia, but this is probably the result of human translocations. It has a very long history (c. 3,000 years) of being cultivated for its edible seeds, and it is commonly cultivated in water gardens. It is the national flower of India and Vietnam.', 'The Sacred Lotus grows in water up to 2.5 m (8 ft). The minimum water depth should not be less than 30 cm (12 in). In colder climates such a low water level, which heats up more quickly, is helpful for better growth and flowering. Lotus germinates at temperatures above 13 °C (55 °F). Most varieties are not cold-hardy.[16] In the growing season from April to September (northern hemisphere), the average daytime temperature needed is 23 to 27 °C (73 to 81 °F). In regions with low light levels in winter, the sacred lotus has a period of dormancy. The tubers are not cold resistant, but can resist temperatures below 0 °C (32 °F) if they are covered with an insulating cover of water or soil. During winter time, the roots have to be stored at a frost free place', 'Lotus seeds can be processed into moon cake;Young lotus stems are used as a salad ingredient in Vietnamese cuisine.;In China and Korea, lotus leaf tea', ''),
(27, 'Lily of the valley', 'Convallaria majalis', 'Is a highly poisonous[3] woodland flowering plant with sweetly scented, pendent, bell-shaped white flowers', 'Convallaria majalis is an herbaceous perennial plant that forms extensive colonies by spreading underground stems called rhizomes. New upright shoots are formed at the ends of stolons in summer, these upright dormant stems are often called pips. These grow in the spring into new leafy shoots that still remain connected to the other shoots under ground, often forming extensive colonies. The stems grow to 15–30 cm (6–12 in) tall, with one or two leaves 10–25 cm (4–10 in) long; flowering stems have two leaves and a raceme of five to fifteen flowers on the stem apex.\n\nThe flowers have six white tepals (rarely pink), fused at the base to form a bell-shape, 5–10 mm (0.2–0.4 in) diameter, and sweetly scented; flowering is in late spring, in mild winters in the Northern Hemisphere it is in early March. The fruit is a small orange-red berry 5–7 mm (0.2–0.3 in) diameter that contains a few large whitish to brownish colored seeds that dry to a clear translucent round bead 1–3 mm (0.04–0.12 in) wide. Plants are self-sterile, and colonies consisting of a single clone do not set seed.', 'Convallaria majalis is widely grown in gardens for its scented flowers and ground-covering abilities in shady locations. It has gained the Royal Horticultural Society\'s Award of Garden Merit. (confirmed 2017). In favorable conditions it can form large colonies.\n\nVarious kinds and cultivars are grown, including those with double flowers, rose-colored flowers, variegated foliage and ones that grow larger than the typical species.\n\nC. majalis \'Albostriata\' has white-striped leaves\nC. majalis \'Green Tapestry\', \'Haldon Grange\', \'Hardwick Hall\', \'Hofheim\', \'Marcel\', \'Variegata\' and \'Vic Pawlowski\'s Gold\' are other variegated cultivars\nC. majalis \'Berlin Giant\' and C. majalis \'Géant de Fortin\' (syn. \'Fortin\'s Giant\') are larger-growing cultivars\nC. majalis \'Flore Pleno\' has double flowers.\nC. majalis \'Rosea\' sometimes found under the name C. majalis var. rosea, has pink flowers.\nTraditionally Convallaria majalis has been grown in pots and winter forced to provide flowers during the winter months, both for as potted plants and as cut flowers.', 'In 1956, the French firm Dior produced a fragrance simulating lily of the valley;Lily of the valley has been used in weddings;Lily of the valley was the floral emblem of Yugoslavia;Two of the flower\'s alternative names — Our Lady\'s tears and Mary\'s tears — derive from Christian legends that it sprang from the weeping of the Virgin Mary during the crucifixion of Jesus. ', ''),
(40, 'Hibiscus', 'Hibiscus syriacus', 'Hibiscus syriacus is a species of flowering plant in the mallow family, Malvaceae.', 'Hibiscus syriacus is a hardy deciduous shrub. It is upright and vase-shaped, reaching 2–4 m (7–13 ft) in height, bearing large trumpet-shaped flowers with prominent yellow-tipped white stamens.[9] The flowers are often pink in color, but can also be dark pink (almost purple), light pink or white. Individual flowers are short-lived, lasting only a day. However, numerous buds produced on the shrub\'s new growth provide prolific flowering over a long summer blooming period. The soil in which the Hibiscus thrives on is a moist, but well-drained, mixture of sand, clay, chalk, and loam, maintaining an alkaline, neutral pH (5.5 – 7.0) level. Hibiscus syriacus is highly tolerant of air pollution, heat, humidity, poor soil and drought.[10] The species has naturalized very well in many suburban areas, and might even be termed slightly invasive, so frequently it does seed around.[citation needed]', 'The branches are thin and gray, white-lenticeled, with raised leaf scars and small buds. Stems and branches do not branch very much unless pruned, resulting in many long, straight stems that originate from about 0.5–1.5\" above the ground, giving rise to the shrub\'s overall vase shape.[11] The leaves appear unusually late in the season, in May.[12] They are usually green or yellowish green, alternate, broadly ovate, palmately veined, and 3 in (7.6 cm) long. They have three distinct lobes with coarsely-toothed margins.H. syriacus has 5-petaled flowers (to 3? diameter) in solid colors of white, red, purple, mauve, violet, or blue, or bicolors with a different colored throat, depending upon the cultivar. Extending from the base of these five petals is the pistil at the center, with the stamen around it. These basic characteristics give the H. syriacus flower and its many variants their distinctive form. The plant can bloom continuously from July through September, usually at night. The 4 in (10 cm) wide, single- or double-flowering, large-petaled, very showy flowers adorn the plant throughout the summer. With maturity, flexible plant stems become weighted under the load of prolific summer flowers, and bend over halfway to the ground.', 'Most modern cultivars are virtually fruitless.;The fruits of those that have them are green or brown, ornamentally unattractive 5-valved dehiscent capsules, which persist throughout much of the winter on older cultivars.;They will eventually shatter over the course of the dormant season and spread their easily germinating seeds around the base of the parent plant, forming colonies with time', ''),
(41, 'werer', 'wer', 'g', 'ghk', 'ghjk', 'ghjk', 'ghjk');

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
  MODIFY `adress_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT dla tabeli `basket`
--
ALTER TABLE `basket`
  MODIFY `basket_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `basket_products`
--
ALTER TABLE `basket_products`
  MODIFY `basket_products_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `photo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT dla tabeli `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT dla tabeli `storage`
--
ALTER TABLE `storage`
  MODIFY `storage_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT dla tabeli `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT dla tabeli `wiki_entry`
--
ALTER TABLE `wiki_entry`
  MODIFY `wiki_entry_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

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
