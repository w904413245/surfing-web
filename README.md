# surfing-web

-- DROP Tables to clean up all of them
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Tips;

-- CREATE new tables
CREATE TABLE Users(
 ID BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
 username VARCHAR(30) NOT NULL,
 password  VARCHAR(255) NOT NULL,
 email VARCHAR(50) NOT NULL,
 location VARCHAR(255) NOT NULL,
 level VARCHAR(50),
 phoneNUmber INT(20),
 subsciption BOOLEAN,
 course BOOLEAN,
 waveCount INT(10),
 sessionState  VARCHAR(255),
 conditions VARCHAR(20)
);

CREATE TABLE Tips(
 tips_id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
 title VARCHAR(50) NOT NULL,
 tags  VARCHAR(255) NOT NULL,
 image BLOB,
 comments VARCHAR(255),
 notification VARCHAR(255) NOT NULL,
 FOREIGN KEY (tips_id) REFERENCES Users(ID)
);

