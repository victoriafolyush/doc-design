DROP DATABASE IF EXISTS InstagramDB;
CREATE DATABASE IF NOT EXISTS InstagramDB;
USE InstagramDB;

# DROP TABLE IF EXISTS photos;
# DROP TABLE IF EXISTS videos;
DROP TABLE IF EXISTS texts;
# DROP TABLE IF EXISTS fastReaction;
# DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS stories;
DROP TABLE IF EXISTS users;

# CREATE TABLE IF NOT EXISTS `photos` (
#   id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
#   format varchar(255) NULL DEFAULT 'default',
#   size varchar(255) NULL DEFAULT 'default'
# ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#
# CREATE TABLE IF NOT EXISTS `videos` (
#   id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
#   format varchar(255) NULL DEFAULT 'default',
#   size varchar(255) NULL DEFAULT 'default'
# ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `texts` (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  value varchar(255) NULL DEFAULT 'default',
  font varchar(255) NULL DEFAULT 'TimesNewRoman'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# CREATE TABLE IF NOT EXISTS `fastReaction` (
#   id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
#   emoji varchar(255) NULL DEFAULT 'default',
#   dateCreation DATETIME NULL
# ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#
# CREATE TABLE IF NOT EXISTS `comments` (
#   id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
#   text varchar(255) NULL DEFAULT 'default',
#   dateCreation DATETIME NULL
# ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `stories` (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  isSponsored BOOLEAN NULL DEFAULT false,
  isCloseFriends BOOLEAN NULL DEFAULT false,
#   photo_id int NULL,
#   video_id int NULL,
  text_id int NULL,
#   comment_id int NULL,
#   fast_rec_id int NULL,
#   INDEX photo_indx (photo_id),
#   INDEX video_indx (video_id),
  INDEX text_indx (text_id),
#   INDEX comment_indx (comment_id),
#   INDEX fast_rec_indx (fast_rec_id),
#   FOREIGN KEY (photo_id) REFERENCES photos(id),
#   FOREIGN KEY (video_id) REFERENCES videos(id),
  FOREIGN KEY (text_id) REFERENCES texts(id)
#   FOREIGN KEY (comment_id) REFERENCES comments(id),
#   FOREIGN KEY (fast_rec_id) REFERENCES fastReaction(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `users` (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  story_id int NULL,
  INDEX story_indx (story_id),
  FOREIGN KEY (story_id) REFERENCES stories(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
