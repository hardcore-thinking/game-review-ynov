-- Jeux de test pour USERS
INSERT IGNORE INTO Users (username, email, password, role) VALUES ('user1', 'user1@example.com', 'password1', 1);
INSERT IGNORE INTO Users (username, email, password, role) VALUES ('user2', 'user2@example.com', 'password2', 1);
INSERT IGNORE INTO Users (username, email, password, role) VALUES ('user3', 'user3@example.com', 'password3', 1);
INSERT IGNORE INTO Users (username, email, password, role) VALUES ('user4', 'user4@example.com', 'password4', 1);
INSERT IGNORE INTO Users (username, email, password, role) VALUES ('user5', 'user5@example.com', 'password5', 1);


-- Jeux de tests pour PLATFORMS
INSERT IGNORE INTO Platforms (name) VALUES ('PlayStation 5');
INSERT IGNORE INTO Platforms (name) VALUES ('Xbox Series X');
INSERT IGNORE INTO Platforms (name) VALUES ('Nintendo Switch');
INSERT IGNORE INTO Platforms (name) VALUES ('PC');
INSERT IGNORE INTO Platforms (name) VALUES ('PlayStation 4');
INSERT IGNORE INTO Platforms (name) VALUES ('Xbox One');
INSERT IGNORE INTO Platforms (name) VALUES ('Nintendo 3DS');
INSERT IGNORE INTO Platforms (name) VALUES ('iOS');
INSERT IGNORE INTO Platforms (name) VALUES ('Android');


-- Jeux de tests pour GENRES
INSERT IGNORE INTO Genres (name) VALUES ('Action');
INSERT IGNORE INTO Genres (name) VALUES ('Adventure');
INSERT IGNORE INTO Genres (name) VALUES ('Role-playing (RPG)');
INSERT IGNORE INTO Genres (name) VALUES ('Simulation');
INSERT IGNORE INTO Genres (name) VALUES ('Strategy');
INSERT IGNORE INTO Genres (name) VALUES ('Sports');
INSERT IGNORE INTO Genres (name) VALUES ('Shooter');
INSERT IGNORE INTO Genres (name) VALUES ('Fighting');
INSERT IGNORE INTO Genres (name) VALUES ('Racing');
INSERT IGNORE INTO Genres (name) VALUES ('Horror');
INSERT IGNORE INTO Genres (name) VALUES ('Survival');
INSERT IGNORE INTO Genres (name) VALUES ('Sandbox');


-- Jeux de tests pour GAMES
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (1, 'The Legend of Zelda: Breath of the Wild', 'Nintendo', '2017-03-03', 1, 1);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (2, 'The Witcher 3: Wild Hunt', 'CD Projekt Red', '2015-05-19', 2, 2);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (3, 'FIFA 21', 'EA Sports', '2020-10-09', 3, 3);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (4, 'Minecraft', 'Mojang', '2011-11-18', 4, 4);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (5, 'Super Mario Odyssey', 'Nintendo', '2017-10-27', 5, 1);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (6, 'Grand Theft Auto V', 'Rockstar Games', '2013-09-17', 6, 2);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (7, 'Call of Duty: Modern Warfare', 'Infinity Ward', '2019-10-25', 7, 3);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (8, 'Dark Souls III', 'FromSoftware', '2016-03-24', 8, 2);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (9, 'Hades', 'Supergiant Games', '2020-09-17', 9, 3);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (10, 'Stardew Valley', 'ConcernedApe', '2016-02-26', 10, 1);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (11, 'Cyberpunk 2077', 'CD Projekt Red', '2020-12-10', 11, 2);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (12, 'Animal Crossing: New Horizons', 'Nintendo', '2020-03-20', 10, 1);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (13, 'Overwatch', 'Blizzard Entertainment', '2016-05-24', 7, 3);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (14, 'Fortnite', 'Epic Games', '2017-07-21', 7, 2);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (15, 'Resident Evil Village', 'Capcom', '2021-05-07', 12, 3);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (16, 'Anthem', 'BioWare', '2019-02-22', 6, 2);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (17, 'Fallout 76', 'Bethesda Game Studios', '2018-11-14', 2, 2);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (18, 'Mass Effect: Andromeda', 'BioWare', '2017-03-21', 2, 2);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (19, 'No Man''s Sky', 'Hello Games', '2016-08-09', 13, 3);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (20, 'Aliens: Colonial Marines', 'Gearbox Software', '2013-02-12', 7, 2);
INSERT IGNORE INTO Games (game_id, name, developers, release_date, genre_id, platform_id) VALUES (21, 'Marvel''s Avengers', 'Crystal Dynamics', '2020-08-14', 7, 3);


-- Jeux de tests pour REVIEWS
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (1, 1, 20, 'Un chef-d’œuvre absolu. Un monde ouvert magnifique avec une jouabilité fluide.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (2, 2, 19, 'Un RPG exceptionnel avec une histoire captivante et des quêtes secondaires intéressantes.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (3, 3, 18, 'FIFA 21 offre une expérience de football réaliste et divertissante.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (4, 4, 17, 'Minecraft est incroyablement addictif avec une liberté créative immense.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (5, 5, 20, 'Super Mario Odyssey est une pure merveille de plateforme avec des niveaux ingénieux.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (1, 6, 18, 'GTA V offre une expérience de jeu inégalée avec une histoire captivante.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (2, 7, 17, 'Modern Warfare redéfinit le genre FPS avec des graphismes stupéfiants.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (3, 8, 19, 'Dark Souls III est un défi gratifiant pour les amateurs de jeux difficiles.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (4, 9, 18, 'Hades combine une action intense avec une narration immersive.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (5, 10, 20, 'Stardew Valley est un jeu de simulation charmant et apaisant.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (1, 11, 15, 'Cyberpunk 2077 a des moments brillants malgré quelques bugs.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (2, 12, 20, 'Animal Crossing: New Horizons est une évasion parfaite de la réalité.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (3, 13, 16, 'Overwatch reste un jeu compétitif et amusant malgré les années.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (4, 14, 17, 'Fortnite est toujours aussi fun avec ses mises à jour régulières.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (5, 15, 18, 'Resident Evil Village est une expérience terrifiante et mémorable.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (1, 16, 4, 'Anthem est une énorme déception avec un gameplay répétitif.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (2, 17, 5, 'Fallout 76 est plein de bugs et manque de contenu intéressant.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (3, 18, 6, 'Mass Effect: Andromeda n’atteint pas les attentes avec ses nombreux problèmes.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (4, 19, 7, 'No Man''s Sky était décevant à sa sortie, mais s’est amélioré avec le temps.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (5, 20, 3, 'Aliens: Colonial Marines est tout simplement un mauvais jeu.');
INSERT IGNORE INTO Reviews (user_id, game_id, rating, description) VALUES (1, 21, 6, 'Marvel''s Avengers manque de profondeur et devient rapidement ennuyeux.');