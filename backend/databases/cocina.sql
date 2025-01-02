-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-01-2025 a las 00:00:09
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cocina`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `receta_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `favoritos`
--

INSERT INTO `favoritos` (`id`, `usuario_id`, `receta_id`) VALUES
(10, 3, 10),
(13, 3, 6),
(16, 3, 9),
(18, 3, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas`
--

CREATE TABLE `recetas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `ingredientes` text DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `tiempo_preparacion` int(11) DEFAULT NULL,
  `pasos` text DEFAULT NULL,
  `imagen_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recetas`
--

INSERT INTO `recetas` (`id`, `titulo`, `categoria`, `ingredientes`, `descripcion`, `tiempo_preparacion`, `pasos`, `imagen_url`) VALUES
(1, 'Ensalada César', 'Ensaladas', 'Lechuga romana, crutones, queso parmesano, pechuga de pollo, aderezo César', 'Clásica ensalada César con pollo asado y aderezo cremoso.', 20, '1. Lava y corta la lechuga romana.\r\n2. Asa la pechuga de pollo y córtala en tiras.\r\n3. Prepara el aderezo mezclando mayonesa, ajo, mostaza y jugo de limón.\r\n4. Añade crutones a la lechuga.\r\n5. Agrega el pollo encima.\r\n6. Espolvorea queso parmesano rallado.\r\n7. Vierte el aderezo César sobre la ensalada.\r\n8. Mezcla suavemente.\r\n9. Sirve en un plato amplio.\r\n10. Decora con más parmesano y crutones.', 'https://i-ticketing.iwos.com/256x256-th/products/158/products_158_73.jpg'),
(2, 'Spaghetti a la Boloñesa', 'Pastas', 'Spaghetti, carne molida, tomate triturado, cebolla, ajo, zanahoria, apio, vino tinto, especias italianas', 'Pasta italiana clásica con una rica salsa de carne.', 45, '1. Cocina el spaghetti al dente.\n2. Sofríe cebolla, ajo, zanahoria y apio en aceite de oliva.\n3. Añade la carne molida y cocina hasta dorar.\n4. Agrega el vino tinto y deja reducir.\n5. Incorpora el tomate triturado y especias italianas.\n6. Cocina a fuego lento por 30 minutos.\n7. Escurre el spaghetti.\n8. Mezcla la pasta con la salsa.\n9. Sirve caliente en un plato hondo.\n10. Decora con queso parmesano rallado.', 'https://i.pinimg.com/originals/f2/20/5e/f2205e8fc17341e2aa479d09082ee885.jpg'),
(3, 'Tacos al Pastor', 'Mexicana', 'Tortillas de maíz, carne de cerdo adobada, piña, cebolla, cilantro, limón', 'Tacos tradicionales mexicanos con cerdo adobado y piña.', 30, '1. Marina la carne de cerdo con achiote, naranja, vinagre y especias.\n2. Cocina la carne marinada en una plancha caliente.\n3. Asa rodajas de piña junto con la carne.\n4. Calienta las tortillas de maíz.\n5. Corta la carne en tiras delgadas.\n6. Coloca la carne sobre las tortillas.\n7. Añade trozos de piña.\n8. Agrega cebolla y cilantro picados.\n9. Sirve con rodajas de limón.\n10. Acompaña con salsa al gusto.', 'https://images.stockcake.com/public/5/e/3/5e3aa859-cc58-44b7-bcd7-5ed1061e5332_medium/tasty-taco-spread-stockcake.jpg'),
(4, 'Sushi Roll', 'Comida Japonesa', 'Arroz para sushi, alga nori, salmón, aguacate, pepino, vinagre de arroz, salsa de soya', 'Rollos de sushi frescos y deliciosos.', 40, '1. Cocina el arroz para sushi.\n2. Mezcla el arroz cocido con vinagre de arroz.\n3. Coloca una hoja de alga nori sobre una esterilla.\n4. Extiende el arroz uniformemente sobre el alga.\n5. Añade tiras de salmón, aguacate y pepino.\n6. Enrolla firmemente el sushi con la esterilla.\n7. Corta el rollo en porciones iguales.\n8. Sirve en un plato.\n9. Acompaña con salsa de soya y wasabi.\n10. Decora con semillas de sésamo.', 'https://images.stockcake.com/public/0/b/0/0b08a631-e512-4ce3-b988-775c53ad2038_medium/savory-sushi-platter-stockcake.jpg'),
(5, 'Panqueques de Avena', 'Desayunos', 'Avena, plátano, huevo, leche, polvo para hornear, miel', 'Panqueques saludables y deliciosos para el desayuno.', 20, '1. Tritura la avena en una licuadora.\n2. Añade el plátano, huevo, leche y polvo para hornear.\n3. Licúa hasta obtener una mezcla homogénea.\n4. Calienta una sartén antiadherente.\n5. Vierte un poco de la mezcla en la sartén.\n6. Cocina hasta que se formen burbujas.\n7. Voltea el panqueque y cocina por el otro lado.\n8. Repite con el resto de la mezcla.\n9. Sirve con miel o frutas frescas.\n10. Decora con almendras o nueces.', 'https://i.pinimg.com/originals/af/23/90/af239090ca56621dbd3287026d9e247b.jpg'),
(6, 'Pollo al Curry', 'Comida India', 'Pechugas de pollo, cebolla, ajo, jengibre, leche de coco, curry en polvo, arroz', 'Pollo jugoso en una cremosa salsa de curry.', 50, '1. Corta el pollo en trozos pequeños.\n2. Sofríe cebolla, ajo y jengibre en aceite caliente.\n3. Añade el curry en polvo y mezcla.\n4. Incorpora el pollo y cocina hasta dorar.\n5. Agrega la leche de coco.\n6. Cocina a fuego lento durante 30 minutos.\n7. Cocina el arroz como acompañamiento.\n8. Sirve el pollo sobre el arroz.\n9. Decora con cilantro fresco.\n10. Acompaña con pan naan.', 'https://bigoven-res.cloudinary.com/image/upload/f_auto,q_auto/t_recipe-256/pollo-tajine-de-pollo-con-limn-78fd2d.jpg'),
(7, 'Brownies de Chocolate', 'Postres', 'Chocolate, mantequilla, azúcar, harina, huevos, vainilla, nueces', 'Brownies húmedos y chocolatosos.', 35, '1. Derrite el chocolate y la mantequilla juntos.\n2. Mezcla el azúcar con los huevos.\n3. Incorpora el chocolate derretido.\n4. Añade la harina y mezcla suavemente.\n5. Agrega esencia de vainilla.\n6. Incorpora las nueces picadas.\n7. Vierte la mezcla en un molde engrasado.\n8. Hornea a 180°C por 25 minutos.\n9. Deja enfriar y corta en cuadrados.\n10. Sirve y disfruta.', 'https://photos.bigoven.com/recipe/hero/brownies-34.jpg?h=300&w=300'),
(8, 'Pizza Margarita', 'Comida Italiana', 'Masa de pizza, salsa de tomate, queso mozzarella, albahaca fresca, aceite de oliva', 'Pizza clásica italiana con albahaca y queso.', 25, '1. Extiende la masa de pizza sobre una superficie plana.\n2. Unta la salsa de tomate uniformemente.\n3. Añade rodajas de queso mozzarella.\n4. Coloca hojas de albahaca fresca.\n5. Rocía con un poco de aceite de oliva.\n6. Precalienta el horno a 220°C.\n7. Hornea la pizza durante 15 minutos.\n8. Retira del horno y deja reposar.\n9. Corta en porciones.\n10. Sirve caliente.', 'https://images.stockcake.com/public/8/b/0/8b05d254-ea8a-4d7d-af7a-b596ea5fc64a_medium/delicious-margherita-pizza-stockcake.jpg'),
(9, 'Sopa de Verduras', 'Sopas', 'Zanahoria, papa, apio, cebolla, ajo, tomate, caldo de pollo', 'Sopa ligera y nutritiva con vegetales frescos.', 30, '1. Pela y corta las verduras en trozos pequeños.\n2. Sofríe la cebolla y el ajo en una olla.\n3. Añade las verduras y revuelve.\n4. Vierte el caldo de pollo caliente.\n5. Cocina a fuego medio por 20 minutos.\n6. Licúa una parte de la sopa para espesar.\n7. Regresa a la olla y mezcla.\n8. Sirve caliente en un plato hondo.\n9. Decora con perejil picado.\n10. Acompaña con pan tostado.', 'https://www.ynsadiet.com/wp-content/uploads/2017/06/sopa-de-verduras-y-tofu-256x256.jpg'),
(10, 'Hamburguesa Clásica', 'Comida Rápida', 'Pan de hamburguesa, carne molida, queso, lechuga, tomate, cebolla, mayonesa', 'Hamburguesa clásica con ingredientes frescos.', 20, '1. Forma las hamburguesas con la carne molida.\n2. Cocina las hamburguesas en una parrilla.\n3. Tosta ligeramente los panes.\n4. Unta mayonesa en la base del pan.\n5. Coloca la carne cocida.\n6. Añade una rodaja de queso encima.\n7. Agrega lechuga, tomate y cebolla.\n8. Cubre con la parte superior del pan.\n9. Sirve con papas fritas.\n10. Acompaña con tu bebida favorita.', 'https://www.toque.com.ar/sistema/uploads/571/articulos/693527009844.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `contrasenia` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `contrasenia`) VALUES
(3, 'Admin', 'a@gmail.com', '$2a$10$pWkUfH5J6N4EPzE92TTPaOaFXkxKM5iS8.07hXEyUjnf9kCpEtvKG');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `receta_id` (`receta_id`);

--
-- Indices de la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `recetas`
--
ALTER TABLE `recetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `favoritos_ibfk_2` FOREIGN KEY (`receta_id`) REFERENCES `recetas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
