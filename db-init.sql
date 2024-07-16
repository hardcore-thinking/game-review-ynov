-- CREATE SCHEMA IF NOT EXISTS GameReviews;
-- USE GameReviews;

-- CREATE TABLE IF NOT EXISTS Users(
--    user_id BIGINT NOT NULL AUTO_INCREMENT,
--    username VARCHAR(50) NOT NULL,
--    email VARCHAR(100) NOT NULL,
--    password VARCHAR(400) NOT NULL,
--    role INT NOT NULL,
--    PRIMARY KEY(user_id),
--    UNIQUE(username),
--    UNIQUE(email)
-- );

-- CREATE TABLE IF NOT EXISTS Platforms(
--    platform_id BIGINT NOT NULL AUTO_INCREMENT,
--    name VARCHAR(100),
--    PRIMARY KEY(platform_id),
--    UNIQUE(name)
-- );

-- CREATE TABLE IF NOT EXISTS Genres(
--    genre_id BIGINT NOT NULL AUTO_INCREMENT,
--    name VARCHAR(100) NOT NULL,
--    PRIMARY KEY(genre_id),
--    UNIQUE(name)
-- );

-- CREATE TABLE IF NOT EXISTS Games(
--    game_id BIGINT ,
--    name VARCHAR(250) NOT NULL,
--    developers VARCHAR(150) NOT NULL,
--    release_date DATE NOT NULL,
--    genre_id BIGINT NOT NULL,
--    platform_id BIGINT NOT NULL,
--    PRIMARY KEY(game_id),
--    FOREIGN KEY(genre_id) REFERENCES Genres(genre_id),
--    FOREIGN KEY(platform_id) REFERENCES Platforms(platform_id)
-- );

-- CREATE TABLE IF NOT EXISTS Reviews(
--    user_id BIGINT NOT NULL AUTO_INCREMENT,
--    game_id BIGINT,
--    rating INT NOT NULL,
--    description TEXT,
--    PRIMARY KEY(user_id, game_id),
--    FOREIGN KEY(user_id) REFERENCES Users(user_id),
--    FOREIGN KEY(game_id) REFERENCES Games(game_id)
-- );

-- INSERT INTO Users (username, email, password, role) VALUES (
-- 	"ajvp", "ajvp@ynov.com", sha2("bruh", 256), 0
-- );

SELECT * FROM Users;