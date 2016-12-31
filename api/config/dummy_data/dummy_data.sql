-- how to run this file
-- use the following command with your computer's absolute path
-- mysql -u root -p < INSERT\PATH\TO\Glimpse\api\config\dummy_data\dummy_data.sql
-- database glimpse must already exist
-- table names must already exist
-- this file will delete your old data and repopulate your already made tables

use glimpse;

DELETE FROM emoji;
ALTER TABLE emoji AUTO_INCREMENT = 1;
DELETE FROM follow;
ALTER TABLE follow AUTO_INCREMENT = 1;
DELETE FROM notification;
ALTER TABLE notification AUTO_INCREMENT = 1;
DELETE FROM post;
ALTER TABLE post AUTO_INCREMENT = 1;
DELETE FROM post_tags;
ALTER TABLE post_tags AUTO_INCREMENT = 1;
DELETE FROM tag;
ALTER TABLE tag AUTO_INCREMENT = 1;
DELETE FROM user;
ALTER TABLE user AUTO_INCREMENT = 1;
DELETE FROM user_emoji_post;
ALTER TABLE user_emoji_post AUTO_INCREMENT = 1;
DELETE FROM user_tags;
ALTER TABLE user_tags AUTO_INCREMENT = 1;

INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
  VALUES('Test User 1','https://randomuser.me/api/portraits/med/men/83.jpg','test-auth-1',
         'test@test.com','I was born in an igloo','1989-02-17','male',0,NOW(),NOW());
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
  VALUES('Test User 2','https://randomuser.me/api/portraits/med/women/83.jpg','test-auth-2',
         'test@test.com','I gave birth in an igloo','1958-03-17','female',0,NOW(),NOW());
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
  VALUES('Test User 3','https://randomuser.me/api/portraits/med/men/26.jpg','test-auth-3',
         'test@test.com','I had sex in an igloo','1946-04-20','male',1,NOW(),NOW());
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
  VALUES('Test User 4','https://randomuser.me/api/portraits/med/women/13.jpg','test-auth-4',
         'test@test.com','I was not born in an igloo','1997-10-10','female',0,NOW(),NOW());
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
  VALUES('Test User 5','https://randomuser.me/api/portraits/med/men/19.jpg','test-auth-5',
         'test@test.com','I fucking love igloos','1982-05-17','apache helicopter',0,NOW(),NOW());

INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 1, 2);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 1, 3);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 1, 4);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 1, 5);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 2, 3);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 2, 5);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 3, 5);

INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Meditation', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Trippy', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Extreme', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Chill', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Sports', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Horror', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Travel', NOW(), NOW());

INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 1, 1);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 1, 4);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 1, 7);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 2, 6);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 3, 3);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 3, 6);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 4, 3);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 4, 6);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 4, 7);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 5, 2);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 5, 4);

INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
  VALUES('[{"primitive":"Text","components":{"text":"YOOOOO","color":"#02665c","position":"-1.75 1 -3"},"children":null}]',
         'some text that says YOOOOO','3D Text', 0, NOW(), NOW(), 1);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
  VALUES('[{"primitive":"Text","components":{"text":"AAAAAYY","color":"#ee42f4","position":"-1.75 1 -3"},"children":null}]',
         'some text that says AAAAAYY','3D Text', 1, NOW(), NOW(), 2);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
  VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)"},"children":null}]',
         'beachy night scene','PhotoSphere', 0, NOW(), NOW(), 2);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
  VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c6.staticflickr.com/3/2936/14749427013_c8fdbc4c76_z.jpg)"},"children":null}]',
         'some geometry bullshit','PhotoSphere', 1, NOW(), NOW(), 3);

INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 1, 1);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 1, 4);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 1, 7);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 2, 2);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 2, 3);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 2, 4);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 2, 5);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 3, 1);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 3, 6);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 3, 7);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 4, 2);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 4, 4);

INSERT into `emoji` (`name`,`json`,`createdAt`,`updatedAt`) VALUES('Smiley-Face','json-string',NOW(),NOW());
INSERT into `emoji` (`name`,`json`,`createdAt`,`updatedAt`) VALUES('Frowny-Face','json-string',NOW(),NOW());
INSERT into `emoji` (`name`,`json`,`createdAt`,`updatedAt`) VALUES('Poopy-Face','json-string',NOW(),NOW());
INSERT into `emoji` (`name`,`json`,`createdAt`,`updatedAt`) VALUES('Lolz-Face','json-string',NOW(),NOW());
INSERT into `emoji` (`name`,`json`,`createdAt`,`updatedAt`) VALUES('Heart-Face','json-string',NOW(),NOW());
INSERT into `emoji` (`name`,`json`,`createdAt`,`updatedAt`) VALUES('Whoah-Face','json-string',NOW(),NOW());

INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 1, 1);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 1, 1);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 2, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 3, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 3, 3);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 3, 3);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 4, 4);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 5, 5);

INSERT into `notification` (`notificationType`,`createdAt`,`updatedAt`,`PostId`,`SenderId`,`RecipientId`)
  VALUES('user', NOW(), NOW(), null, 4, 2);
INSERT into `notification` (`notificationType`,`createdAt`,`updatedAt`,`PostId`,`SenderId`,`RecipientId`)
  VALUES('user', NOW(), NOW(), null, 3, 1);
INSERT into `notification` (`notificationType`,`createdAt`,`updatedAt`,`PostId`,`SenderId`,`RecipientId`)
  VALUES('user', NOW(), NOW(), null, 1, 5);
INSERT into `notification` (`notificationType`,`createdAt`,`updatedAt`,`PostId`,`SenderId`,`RecipientId`)
  VALUES('post', NOW(), NOW(), 3, 1, 2);
INSERT into `notification` (`notificationType`,`createdAt`,`updatedAt`,`PostId`,`SenderId`,`RecipientId`)
  VALUES('post', NOW(), NOW(), 2, 5, 2);
INSERT into `notification` (`notificationType`,`createdAt`,`updatedAt`,`PostId`,`SenderId`,`RecipientId`)
  VALUES('post', NOW(), NOW(), 1, 2, 1);



-- to fetch usernames for all users associated with the 'horror' tag:
-- mysql> select u.username
--     -> from user u
--     -> inner join user_tags ut on u.id=ut.userId
--     -> inner join tag t on ut.tagid = t.id
--     -> where t.name='horror';
