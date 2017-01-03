-- how to run this file
-- use the following command with your computer's absolute path
-- mysql -u root -p < INSERT\PATH\TOGlimpse\api\config\dummy_data\dummy_data.sql
-- mysql -u root -p < /Users/jimmygonzalez/Documents/CODE/Thesis/Glimpse/api/config/dummy_data/dummy_data.sql
-- database glimpse must already exist
-- table names must already exist
-- this file will delete your old data and repopulate your already made tables

USE glimpse;
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
VALUES('Zophie','https://randomuser.me/api/portraits/med/women/49.jpg','dummy|1','GlimpseTest1@mailinator.com',
'urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et',
'1997-02-13','women',1,'2016-10-13 11:11:11','2016-10-13 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Acronymph','https://randomuser.me/api/portraits/med/women/17.jpg','dummy|2','GlimpseTest2@mailinator.com',
'Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl',
'2001-02-26','women',0,'2016-10-29 11:11:11','2016-10-29 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Lord Chuby Cheeks','https://randomuser.me/api/portraits/med/men/68.jpg','dummy|3','GlimpseTest3@mailinator.com',
'faucibus leo, in lobortis tellus justo sit amet nulla. Donec non',
'2003-04-25','men',1,'2016-10-19 11:11:11','2016-10-19 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Digimirror','https://randomuser.me/api/portraits/med/women/91.jpg','dummy|4','GlimpseTest4@mailinator.com',
'Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede',
'2001-06-21','women',0,'2016-10-26 11:11:11','2016-10-26 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('The Ripper','https://randomuser.me/api/portraits/med/women/96.jpg','dummy|5','GlimpseTest5@mailinator.com',
'sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
'2004-03-23','women',0,'2016-10-11 11:11:11','2016-10-11 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Aces UPp','https://randomuser.me/api/portraits/med/women/42.jpg','dummy|6','GlimpseTest6@mailinator.com',
'ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed',
'1996-02-19','women',0,'2016-10-26 11:11:11','2016-10-26 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Illustrioso','https://randomuser.me/api/portraits/med/women/52.jpg','dummy|7','GlimpseTest7@mailinator.com',
'lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in',
'1995-04-20','women',0,'2016-10-21 11:11:11','2016-10-21 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Acacian Spring','https://randomuser.me/api/portraits/med/women/20.jpg','dummy|8','GlimpseTest8@mailinator.com',
'pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer,',
'2009-06-10','women',0,'2016-10-29 11:11:11','2016-10-29 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Buddha Pets','https://randomuser.me/api/portraits/med/men/75.jpg','dummy|9','GlimpseTest9@mailinator.com',
'rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac',
'1998-04-13','men',0,'2016-10-15 11:11:11','2016-10-15 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Dada Dwiddle','https://randomuser.me/api/portraits/med/women/97.jpg','dummy|10','GlimpseTest10@mailinator.com',
'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a',
'2008-07-15','women',1,'2016-10-13 11:11:11','2016-10-13 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Crotch Opera','https://randomuser.me/api/portraits/med/women/52.jpg','dummy|11','GlimpseTest11@mailinator.com',
'urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et',
'1988-03-11','women',1,'2016-10-25 11:11:11','2016-10-25 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Jam Chops','https://randomuser.me/api/portraits/med/men/49.jpg','dummy|12','GlimpseTest12@mailinator.com',
'placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna',
'1995-01-19','men',1,'2016-10-29 11:11:11','2016-10-29 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Flambo','https://randomuser.me/api/portraits/med/women/43.jpg','dummy|13','GlimpseTest13@mailinator.com',
'eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante.',
'1984-09-11','women',0,'2016-10-16 11:11:11','2016-10-16 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Darwin 911','https://randomuser.me/api/portraits/med/men/73.jpg','dummy|14','GlimpseTest14@mailinator.com',
'sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut',
'2002-06-20','men',0,'2016-10-25 11:11:11','2016-10-25 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Zizzle','https://randomuser.me/api/portraits/med/women/87.jpg','dummy|15','GlimpseTest15@mailinator.com',
'dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum',
'1983-08-16','women',0,'2016-10-20 11:11:11','2016-10-20 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('The Plutarch','https://randomuser.me/api/portraits/med/men/12.jpg','dummy|16','GlimpseTest16@mailinator.com',
'nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel,',
'2006-01-12','men',0,'2016-10-18 11:11:11','2016-10-18 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Sunbit','https://randomuser.me/api/portraits/med/men/44.jpg','dummy|17','GlimpseTest17@mailinator.com',
'hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio,',
'2004-02-24','men',0,'2016-10-30 11:11:11','2016-10-30 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Rutabaga Princess','https://randomuser.me/api/portraits/med/women/53.jpg','dummy|18','GlimpseTest18@mailinator.com',
'hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris',
'1997-01-15','women',0,'2016-10-30 11:11:11','2016-10-30 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Beauty Call','https://randomuser.me/api/portraits/med/men/74.jpg','dummy|19','GlimpseTest19@mailinator.com',
'et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum',
'1997-07-25','men',0,'2016-10-20 11:11:11','2016-10-20 11:11:11');
INSERT into `user` (`username`, `profpic`, `authId`,`email`,`bio`,`dob`,`gender`,`private`,`createdAt`,`updatedAt`)
VALUES('Rodeo Jones','https://randomuser.me/api/portraits/med/women/46.jpg','dummy|20','GlimpseTest20@mailinator.com',
'faucibus leo, in lobortis tellus justo sit amet nulla. Donec non',
'2001-02-20','women',0,'2016-10-24 11:11:11','2016-10-24 11:11:11');

INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 1, 15);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 1, 13);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 1, 9);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 1, 4);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 1, 14);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 1, 11);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 1, 2);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 1, 3);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 1, 6);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 2, 8);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 2, 13);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 2, 1);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 2, 14);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 3, 9);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 3, 2);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 3, 15);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 3, 18);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 3, 4);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 3, 10);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 3, 11);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 4, 17);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 4, 18);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 5, 3);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 5, 1);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 5, 13);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 5, 14);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 6, 14);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 6, 5);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 6, 9);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 6, 16);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 6, 11);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 7, 10);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 7, 11);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 8, 15);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 8, 13);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 8, 6);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 8, 3);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 8, 14);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 8, 5);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 8, 12);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 8, 11);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 9, 18);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 9, 5);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 9, 10);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 9, 19);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 10, 17);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 10, 3);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 11, 17);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 11, 6);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 11, 5);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 11, 20);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 11, 16);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 11, 9);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 11, 3);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 11, 13);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 12, 17);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 12, 9);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 12, 6);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 12, 18);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 12, 20);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 12, 13);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 13, 14);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 13, 1);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 13, 9);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 13, 15);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 13, 2);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 13, 6);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 13, 8);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 13, 19);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 14, 8);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 14, 16);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 15, 14);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 15, 7);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 15, 19);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 15, 3);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 15, 5);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 15, 13);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 15, 6);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 15, 16);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 16, 2);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 16, 15);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 16, 20);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 16, 7);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 16, 6);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 17, 7);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 17, 10);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 17, 16);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 18, 7);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 18, 16);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 18, 6);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 18, 13);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 18, 17);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 19, 4);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 19, 1);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 20, 13);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 20, 14);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 20, 11);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('pending', NOW(), NOW(), 20, 1);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 20, 18);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 20, 9);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 20, 4);
INSERT into `follow` (`status`, `createdAt`,`updatedAt`,`UserId`,`FollowId`) VALUES('accepted', NOW(), NOW(), 20, 6);

INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Mauris', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('semper', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('mollis', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Quisque', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('sapien.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Mauris', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('penatibus', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Mauris', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Aliquam', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('ridiculus', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('pellentesque,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('at', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Nulla', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('vel', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('egestas.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('eget', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Nulla', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('massa.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('ultrices,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Praesent', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('feugiat', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('aliquam,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('nec,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('lectus', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('volutpat.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('faucibus.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('arcu.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('in', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('nec', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('mi,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('ultrices.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Fusce', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('arcu.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('consectetuer', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('risus.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('dictum', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('lectus,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('varius', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('placerat,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('sociosqu', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Proin', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('augue', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('vehicula', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('risus.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('euismod', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('ornare,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Vestibulum', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('nec,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('amet', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Cum', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('ultricies', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('tristique', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Praesent', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('nibh', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('lobortis', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('blandit', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('lobortis', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('tincidunt', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('ut', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('mi', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('a', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('facilisis,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Aliquam', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('ac', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('semper', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('rutrum', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('tellus', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('iaculis,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('magna.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('ut,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('scelerisque,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('turpis', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('arcu', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('et', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('dui.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('nulla', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('amet,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('malesuada', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('magnis', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('vel', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Pellentesque', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Proin', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('purus,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('amet', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('sed,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('dapibus', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('posuere', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('Morbi', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('natoque', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('ullamcorper', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('libero', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('velit', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('vehicula.', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('euismod', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('eget', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('arcu', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('primis', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('feugiat', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('orci,', NOW(), NOW());
INSERT into `tag` (`name`,`createdAt`,`updatedAt`) VALUES('adipiscing', NOW(), NOW());

INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 1, 6);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 1, 24);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 1, 34);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 1, 88);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 2, 83);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 2, 1);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 2, 78);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 2, 98);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 2, 92);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 2, 43);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 3, 100);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 3, 3);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 3, 4);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 3, 19);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 3, 53);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 3, 33);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 4, 53);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 4, 23);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 4, 51);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 5, 16);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 5, 9);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 5, 11);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 5, 26);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 5, 4);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 5, 73);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 6, 61);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 6, 53);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 6, 19);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 7, 96);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 7, 7);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 7, 98);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 8, 72);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 8, 57);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 8, 74);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 8, 30);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 8, 88);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 9, 38);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 9, 36);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 9, 29);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 9, 84);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 9, 33);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 9, 45);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 10, 18);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 10, 97);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 10, 47);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 10, 11);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 10, 90);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 10, 96);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 11, 88);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 11, 89);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 11, 16);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 11, 60);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 11, 18);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 12, 9);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 12, 4);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 12, 69);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 12, 53);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 12, 68);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 13, 6);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 13, 69);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 13, 86);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 13, 74);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 13, 35);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 14, 36);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 14, 1);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 14, 44);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 14, 35);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 15, 52);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 15, 47);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 15, 21);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 15, 55);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 16, 77);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 16, 43);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 16, 95);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 16, 7);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 16, 97);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 16, 39);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 17, 26);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 17, 43);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 17, 78);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 17, 58);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 18, 93);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 18, 98);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 18, 78);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 18, 49);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 19, 12);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 19, 13);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 19, 90);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 19, 70);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 19, 53);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 19, 97);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 20, 5);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 20, 35);
INSERT into `user_tags` (`createdAt`,`updatedAt`,`UserId`,`TagId`) VALUES(NOW(), NOW(), 20, 74);

INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/9/8047/8437821167_ab25401d98_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"vitae dolor.","color":"#F4A900","position":"-1.75 1 -3"}}]',
'sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum',
'PhotoSphere', 0, '2016-11-16 11:11:11','2016-11-16 11:11:11', 1);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/2/1534/24322384224_e878fc6b77_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"lorem, sit","color":"#8F8B66","position":"-1.75 1 -3"}}]',
'risus varius orci, in consequat',
'PhotoSphere', 0, '2016-12-18 11:11:11','2016-12-18 11:11:11', 1);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/2/1534/24322384224_e878fc6b77_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"sapien. Cras dolor","color":"#B32428","position":"-1.75 1 -3"}}]',
'volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla',
'PhotoSphere', 0, '2016-11-15 11:11:11','2016-11-15 11:11:11', 2);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c2.staticflickr.com/2/1519/24649255286_03bb5ab0e3_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"odio.","color":"#F4F4F4","position":"-1.75 1 -3"}}]',
'interdum ligula eu enim. Etiam',
'PhotoSphere', 0, '2016-12-22 11:11:11','2016-12-22 11:11:11', 2);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c2.staticflickr.com/2/1519/24649255286_03bb5ab0e3_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"cursus purus.","color":"#A52019","position":"-1.75 1 -3"}}]',
'volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla',
'PhotoSphere', 0, '2016-12-10 11:11:11','2016-12-10 11:11:11', 2);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/9/8047/8437821167_ab25401d98_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"Donec est","color":"#0A0A0A","position":"-1.75 1 -3"}}]',
'Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet',
'PhotoSphere', 0, '2016-11-12 11:11:11','2016-11-12 11:11:11', 3);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c6.staticflickr.com/3/2936/14749427013_c8fdbc4c76_z.jpg)"},"children":null},{"primitive":"Text","components":{"text":"sapien. Cras dolor","color":"#6C6960","position":"-1.75 1 -3"}}]',
'Cum sociis natoque penatibus et magnis',
'PhotoSphere', 1, '2016-10-11 11:11:11','2016-10-11 11:11:11', 3);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/9/8047/8437821167_ab25401d98_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"leo. Morbi","color":"#00BB2D","position":"-1.75 1 -3"}}]',
'lacinia. Sed congue, elit sed consequat auctor, nunc',
'PhotoSphere', 0, '2016-11-28 11:11:11','2016-11-28 11:11:11', 4);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://pbs.twimg.com/media/CnrFVXqW8AA4TO_.jpg)"},"children":null},{"primitive":"Text","components":{"text":"a, facilisis","color":"#F3A505","position":"-1.75 1 -3"}}]',
'tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi.',
'PhotoSphere', 0, '2016-10-25 11:11:11','2016-10-25 11:11:11', 4);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c6.staticflickr.com/3/2936/14749427013_c8fdbc4c76_z.jpg)"},"children":null},{"primitive":"Text","components":{"text":"mauris eu","color":"#8F8B66","position":"-1.75 1 -3"}}]',
'pede ac urna. Ut tincidunt vehicula',
'PhotoSphere', 0, '2016-11-20 11:11:11','2016-11-20 11:11:11', 5);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/2/1534/24322384224_e878fc6b77_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"Quisque","color":"#828282","position":"-1.75 1 -3"}}]',
'libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit',
'PhotoSphere', 0, '2016-11-27 11:11:11','2016-11-27 11:11:11', 5);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(http://petapixel.com/assets/uploads/2013/07/full360.jpg)"},"children":null},{"primitive":"Text","components":{"text":"vitae aliquam","color":"#F5D033","position":"-1.75 1 -3"}}]',
'Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a,',
'PhotoSphere', 0, '2016-12-29 11:11:11','2016-12-29 11:11:11', 5);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/9/8047/8437821167_ab25401d98_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"ac,","color":"#592321","position":"-1.75 1 -3"}}]',
'erat. Etiam vestibulum massa rutrum magna. Cras convallis',
'PhotoSphere', 0, '2016-11-19 11:11:11','2016-11-19 11:11:11', 5);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://farm4.staticflickr.com/3917/14646855999_d59e5ce9c5_c.jpg)"},"children":null},{"primitive":"Text","components":{"text":"tristique aliquet. Phasellus","color":"#F75E25","position":"-1.75 1 -3"}}]',
'nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse',
'PhotoSphere', 0, '2016-11-28 11:11:11','2016-11-28 11:11:11', 6);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c2.staticflickr.com/2/1519/24649255286_03bb5ab0e3_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"nisl.","color":"#6D6552","position":"-1.75 1 -3"}}]',
'arcu. Sed et libero. Proin mi. Aliquam gravida mauris',
'PhotoSphere', 1, '2016-12-19 11:11:11','2016-12-19 11:11:11', 6);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2DoRmP6QnHJahLazzRAUzDQkCIe3QpbTDLIECSrw03dyGHndK)"},"children":null},{"primitive":"Text","components":{"text":"mauris sapien, cursus","color":"#464531","position":"-1.75 1 -3"}}]',
'tempor bibendum. Donec felis orci, adipiscing',
'PhotoSphere', 0, '2016-12-21 11:11:11','2016-12-21 11:11:11', 6);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c2.staticflickr.com/2/1519/24649255286_03bb5ab0e3_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"ac","color":"#D36E70","position":"-1.75 1 -3"}}]',
'et malesuada fames ac turpis egestas. Aliquam fringilla cursus',
'PhotoSphere', 0, '2016-11-22 11:11:11','2016-11-22 11:11:11', 6);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://pbs.twimg.com/media/CnrFVXqW8AA4TO_.jpg)"},"children":null},{"primitive":"Text","components":{"text":"ut, sem.","color":"#755C48","position":"-1.75 1 -3"}}]',
'Cum sociis natoque penatibus et magnis',
'PhotoSphere', 0, '2016-11-29 11:11:11','2016-11-29 11:11:11', 7);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(http://petapixel.com/assets/uploads/2013/07/full360.jpg)"},"children":null},{"primitive":"Text","components":{"text":"augue eu tellus.","color":"#1C542D","position":"-1.75 1 -3"}}]',
'in aliquet lobortis, nisi nibh lacinia',
'PhotoSphere', 0, '2016-11-12 11:11:11','2016-11-12 11:11:11', 7);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c6.staticflickr.com/3/2936/14749427013_c8fdbc4c76_z.jpg)"},"children":null},{"primitive":"Text","components":{"text":"et,","color":"#47402E","position":"-1.75 1 -3"}}]',
'Aliquam ultrices iaculis odio. Nam interdum enim non nisi.',
'PhotoSphere', 1, '2016-11-26 11:11:11','2016-11-26 11:11:11', 8);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c6.staticflickr.com/6/5640/23693430901_4045fa2c73_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"tortor. Integer","color":"#FFA420","position":"-1.75 1 -3"}}]',
'feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum',
'PhotoSphere', 0, '2016-11-15 11:11:11','2016-11-15 11:11:11', 8);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2DoRmP6QnHJahLazzRAUzDQkCIe3QpbTDLIECSrw03dyGHndK)"},"children":null},{"primitive":"Text","components":{"text":"faucibus.","color":"#587246","position":"-1.75 1 -3"}}]',
'ornare lectus justo eu arcu. Morbi sit amet',
'PhotoSphere', 0, '2016-12-17 11:11:11','2016-12-17 11:11:11', 9);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c6.staticflickr.com/3/2936/14749427013_c8fdbc4c76_z.jpg)"},"children":null},{"primitive":"Text","components":{"text":"lorem, auctor","color":"#025669","position":"-1.75 1 -3"}}]',
'eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin',
'PhotoSphere', 0, '2016-12-17 11:11:11','2016-12-17 11:11:11', 9);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://farm8.staticflickr.com/7426/12233323463_2fe29374ce_c.jpg)"},"children":null},{"primitive":"Text","components":{"text":"Maecenas mi","color":"#8A6642","position":"-1.75 1 -3"}}]',
'nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse',
'PhotoSphere', 0, '2016-11-15 11:11:11','2016-11-15 11:11:11', 10);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://pbs.twimg.com/media/CnrFVXqW8AA4TO_.jpg)"},"children":null},{"primitive":"Text","components":{"text":"aliquet","color":"#474B4E","position":"-1.75 1 -3"}}]',
'nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse',
'PhotoSphere', 0, '2016-12-13 11:11:11','2016-12-13 11:11:11', 10);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c6.staticflickr.com/3/2936/14749427013_c8fdbc4c76_z.jpg)"},"children":null},{"primitive":"Text","components":{"text":"ligula. Nullam enim.","color":"#354D73","position":"-1.75 1 -3"}}]',
'venenatis vel, faucibus id, libero. Donec consectetuer',
'PhotoSphere', 1, '2016-12-23 11:11:11','2016-12-23 11:11:11', 11);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2DoRmP6QnHJahLazzRAUzDQkCIe3QpbTDLIECSrw03dyGHndK)"},"children":null},{"primitive":"Text","components":{"text":"Maecenas mi","color":"#256D7B","position":"-1.75 1 -3"}}]',
'elementum sem, vitae aliquam eros turpis',
'PhotoSphere', 0, '2016-11-21 11:11:11','2016-11-21 11:11:11', 11);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/2/1534/24322384224_e878fc6b77_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"velit. Cras lorem","color":"#F75E25","position":"-1.75 1 -3"}}]',
'erat semper rutrum. Fusce dolor quam,',
'PhotoSphere', 0, '2016-11-16 11:11:11','2016-11-16 11:11:11', 12);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)"},"children":null},{"primitive":"Text","components":{"text":"Donec est","color":"#CDA434","position":"-1.75 1 -3"}}]',
'dictum augue malesuada malesuada. Integer id magna et ipsum',
'PhotoSphere', 0, '2016-12-24 11:11:11','2016-12-24 11:11:11', 12);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/9/8047/8437821167_ab25401d98_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"Donec est","color":"#6C7156","position":"-1.75 1 -3"}}]',
'varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla',
'PhotoSphere', 1, '2016-11-27 11:11:11','2016-11-27 11:11:11', 12);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c2.staticflickr.com/2/1519/24649255286_03bb5ab0e3_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"Quisque","color":"#587246","position":"-1.75 1 -3"}}]',
'est. Mauris eu turpis. Nulla aliquet. Proin velit.',
'PhotoSphere', 0, '2016-11-15 11:11:11','2016-11-15 11:11:11', 12);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://farm4.staticflickr.com/3917/14646855999_d59e5ce9c5_c.jpg)"},"children":null},{"primitive":"Text","components":{"text":"amet massa.","color":"#7E7B52","position":"-1.75 1 -3"}}]',
'porttitor tellus non magna. Nam ligula elit, pretium et, rutrum',
'PhotoSphere', 0, '2016-10-23 11:11:11','2016-10-23 11:11:11', 13);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c6.staticflickr.com/6/5640/23693430901_4045fa2c73_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"enim. Nunc ut","color":"#5E2129","position":"-1.75 1 -3"}}]',
'Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet',
'PhotoSphere', 0, '2016-11-22 11:11:11','2016-11-22 11:11:11', 13);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/2/1489/25373592304_a6e3054a4c_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"nec","color":"#308446","position":"-1.75 1 -3"}}]',
'pede. Cum sociis natoque penatibus et magnis dis parturient montes,',
'PhotoSphere', 0, '2016-11-14 11:11:11','2016-11-14 11:11:11', 13);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://farm1.staticflickr.com/661/21230969582_5c642e4b0e_c.jpg)"},"children":null},{"primitive":"Text","components":{"text":"lorem, sit","color":"#18171C","position":"-1.75 1 -3"}}]',
'Aenean egestas hendrerit neque. In',
'PhotoSphere', 1, '2016-11-19 11:11:11','2016-11-19 11:11:11', 14);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://farm8.staticflickr.com/7426/12233323463_2fe29374ce_c.jpg)"},"children":null},{"primitive":"Text","components":{"text":"vel,","color":"#6C4675","position":"-1.75 1 -3"}}]',
'non, dapibus rutrum, justo. Praesent luctus.',
'PhotoSphere', 0, '2016-11-29 11:11:11','2016-11-29 11:11:11', 14);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)"},"children":null},{"primitive":"Text","components":{"text":"lacus.","color":"#F5D033","position":"-1.75 1 -3"}}]',
'pede. Cras vulputate velit eu sem. Pellentesque ut ipsum',
'PhotoSphere', 0, '2016-12-10 11:11:11','2016-12-10 11:11:11', 14);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2DoRmP6QnHJahLazzRAUzDQkCIe3QpbTDLIECSrw03dyGHndK)"},"children":null},{"primitive":"Text","components":{"text":"Curabitur dictum. Phasellus","color":"#FFFF00","position":"-1.75 1 -3"}}]',
'tincidunt. Donec vitae erat vel pede blandit',
'PhotoSphere', 0, '2016-12-26 11:11:11','2016-12-26 11:11:11', 14);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c7.staticflickr.com/2/1480/24038441374_b51735c601_f.jpg)"},"children":null},{"primitive":"Text","components":{"text":"auctor odio","color":"#474B4E","position":"-1.75 1 -3"}}]',
'arcu et pede. Nunc sed',
'PhotoSphere', 0, '2016-11-25 11:11:11','2016-11-25 11:11:11', 15);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://pbs.twimg.com/media/CnrFVXqW8AA4TO_.jpg)"},"children":null},{"primitive":"Text","components":{"text":"et","color":"#308446","position":"-1.75 1 -3"}}]',
'mauris ipsum porta elit, a feugiat tellus',
'PhotoSphere', 0, '2016-12-17 11:11:11','2016-12-17 11:11:11', 15);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c6.staticflickr.com/3/2936/14749427013_c8fdbc4c76_z.jpg)"},"children":null},{"primitive":"Text","components":{"text":"nec","color":"#781F19","position":"-1.75 1 -3"}}]',
'Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus',
'PhotoSphere', 0, '2016-12-19 11:11:11','2016-12-19 11:11:11', 15);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/1/54/177633687_4e37d80aa0_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"a, facilisis","color":"#4C9141","position":"-1.75 1 -3"}}]',
'Cum sociis natoque penatibus et magnis',
'PhotoSphere', 1, '2016-11-17 11:11:11','2016-11-17 11:11:11', 15);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c2.staticflickr.com/2/1519/24649255286_03bb5ab0e3_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"lobortis quis, pede.","color":"#F4F4F4","position":"-1.75 1 -3"}}]',
'venenatis vel, faucibus id, libero. Donec consectetuer',
'PhotoSphere', 0, '2016-12-29 11:11:11','2016-12-29 11:11:11', 16);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c6.staticflickr.com/6/5640/23693430901_4045fa2c73_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"consectetuer adipiscing elit.","color":"#26252D","position":"-1.75 1 -3"}}]',
'nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse',
'PhotoSphere', 1, '2016-12-25 11:11:11','2016-12-25 11:11:11', 16);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/1/54/177633687_4e37d80aa0_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"a","color":"#E55137","position":"-1.75 1 -3"}}]',
'molestie. Sed id risus quis diam',
'PhotoSphere', 0, '2016-11-27 11:11:11','2016-11-27 11:11:11', 16);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/2/1489/25373592304_a6e3054a4c_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"metus. Aliquam erat","color":"#9C9C9C","position":"-1.75 1 -3"}}]',
'lectus convallis est, vitae sodales nisi',
'PhotoSphere', 0, '2016-11-11 11:11:11','2016-11-11 11:11:11', 16);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://farm1.staticflickr.com/661/21230969582_5c642e4b0e_c.jpg)"},"children":null},{"primitive":"Text","components":{"text":"odio.","color":"#7E7B52","position":"-1.75 1 -3"}}]',
'nibh. Aliquam ornare, libero at auctor ullamcorper, nisl',
'PhotoSphere', 0, '2016-12-16 11:11:11','2016-12-16 11:11:11', 17);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/3/2906/14616245588_f3be141409_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"Maecenas mi","color":"#9C9C9C","position":"-1.75 1 -3"}}]',
'molestie. Sed id risus quis diam',
'PhotoSphere', 1, '2016-12-19 11:11:11','2016-12-19 11:11:11', 17);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c7.staticflickr.com/2/1480/24038441374_b51735c601_f.jpg)"},"children":null},{"primitive":"Text","components":{"text":"Curabitur dictum. Phasellus","color":"#922B3E","position":"-1.75 1 -3"}}]',
'eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin',
'PhotoSphere', 0, '2016-11-12 11:11:11','2016-11-12 11:11:11', 18);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://pbs.twimg.com/media/CnrFVXqW8AA4TO_.jpg)"},"children":null},{"primitive":"Text","components":{"text":"odio.","color":"#6C3B2A","position":"-1.75 1 -3"}}]',
'malesuada malesuada. Integer id magna et ipsum',
'PhotoSphere', 0, '2016-12-16 11:11:11','2016-12-16 11:11:11', 18);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)"},"children":null},{"primitive":"Text","components":{"text":"et","color":"#A65E2E","position":"-1.75 1 -3"}}]',
'Cum sociis natoque penatibus et magnis',
'PhotoSphere', 1, '2016-10-21 11:11:11','2016-10-21 11:11:11', 19);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2DoRmP6QnHJahLazzRAUzDQkCIe3QpbTDLIECSrw03dyGHndK)"},"children":null},{"primitive":"Text","components":{"text":"ligula. Nullam enim.","color":"#39352A","position":"-1.75 1 -3"}}]',
'dictum augue malesuada malesuada. Integer id magna et ipsum',
'PhotoSphere', 0, '2016-11-15 11:11:11','2016-11-15 11:11:11', 19);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://farm1.staticflickr.com/591/22665222766_244f36dfc0_c.jpg)"},"children":null},{"primitive":"Text","components":{"text":"risus, at fringilla","color":"#1B5583","position":"-1.75 1 -3"}}]',
'eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci',
'PhotoSphere', 0, '2016-11-26 11:11:11','2016-11-26 11:11:11', 19);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c1.staticflickr.com/1/54/177633687_4e37d80aa0_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"enim. Nunc ut","color":"#D36E70","position":"-1.75 1 -3"}}]',
'libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus',
'PhotoSphere', 0, '2016-11-21 11:11:11','2016-11-21 11:11:11', 19);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2DoRmP6QnHJahLazzRAUzDQkCIe3QpbTDLIECSrw03dyGHndK)"},"children":null},{"primitive":"Text","components":{"text":"Sed","color":"#2A6478","position":"-1.75 1 -3"}}]',
'aliquet odio. Etiam ligula tortor, dictum',
'PhotoSphere', 0, '2016-11-25 11:11:11','2016-11-25 11:11:11', 20);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c2.staticflickr.com/2/1519/24649255286_03bb5ab0e3_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"Maecenas mi","color":"#F5D033","position":"-1.75 1 -3"}}]',
'odio tristique pharetra. Quisque ac',
'PhotoSphere', 0, '2016-11-25 11:11:11','2016-11-25 11:11:11', 20);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c2.staticflickr.com/2/1519/24649255286_03bb5ab0e3_b.jpg)"},"children":null},{"primitive":"Text","components":{"text":"magna. Suspendisse tristique","color":"#DE4C8A","position":"-1.75 1 -3"}}]',
'eget nisi dictum augue malesuada malesuada.',
'PhotoSphere', 0, '2016-12-22 11:11:11','2016-12-22 11:11:11', 20);
INSERT into `post` (`content`,`description`,`format`,`private`,`createdAt`,`updatedAt`,`UserId`)
VALUES('[{"primitive":"PhotoSphere","components":{"src":"url(https://c7.staticflickr.com/2/1480/24038441374_b51735c601_f.jpg)"},"children":null},{"primitive":"Text","components":{"text":"velit. Sed malesuada","color":"#8B8C7A","position":"-1.75 1 -3"}}]',
'non, dapibus rutrum, justo. Praesent luctus.',
'PhotoSphere', 0, '2016-12-16 11:11:11','2016-12-16 11:11:11', 20);

INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 34, 1);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 9, 1);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 58, 1);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 21, 2);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 58, 2);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 25, 2);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 62, 2);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 75, 3);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 82, 3);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 2, 4);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 60, 4);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 76, 4);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 15, 4);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 55, 5);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 87, 6);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 88, 6);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 44, 7);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 95, 7);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 1, 7);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 90, 8);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 79, 8);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 72, 8);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 50, 9);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 83, 9);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 46, 9);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 47, 10);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 37, 10);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 22, 11);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 10, 11);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 17, 12);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 57, 13);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 83, 13);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 76, 14);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 90, 15);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 67, 15);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 78, 15);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 51, 15);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 72, 16);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 22, 16);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 34, 16);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 43, 17);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 16, 17);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 63, 17);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 52, 18);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 97, 18);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 74, 18);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 86, 18);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 80, 19);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 96, 19);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 97, 19);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 79, 19);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 30, 20);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 24, 21);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 42, 21);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 52, 21);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 66, 22);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 25, 22);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 67, 22);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 99, 23);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 39, 23);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 73, 23);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 52, 23);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 77, 24);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 42, 24);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 79, 25);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 74, 25);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 6, 26);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 96, 26);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 75, 26);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 88, 26);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 37, 27);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 41, 28);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 56, 28);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 49, 29);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 60, 29);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 87, 30);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 56, 30);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 27, 30);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 59, 31);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 9, 31);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 84, 32);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 78, 32);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 53, 32);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 35, 32);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 21, 33);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 55, 33);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 81, 33);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 20, 33);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 16, 34);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 47, 34);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 90, 34);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 4, 34);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 8, 35);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 85, 35);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 45, 35);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 100, 36);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 93, 36);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 51, 36);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 62, 36);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 1, 37);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 11, 37);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 10, 38);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 97, 38);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 67, 38);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 70, 38);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 35, 39);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 94, 39);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 47, 40);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 94, 40);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 58, 40);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 77, 40);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 82, 41);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 84, 41);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 40, 42);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 57, 43);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 88, 43);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 100, 44);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 99, 44);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 47, 44);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 14, 45);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 28, 45);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 89, 45);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 85, 46);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 56, 47);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 76, 48);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 24, 48);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 98, 48);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 36, 48);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 57, 49);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 34, 49);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 97, 50);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 8, 50);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 21, 50);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 2, 50);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 39, 51);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 42, 52);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 47, 53);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 51, 53);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 72, 53);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 68, 53);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 96, 54);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 55, 54);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 7, 55);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 24, 56);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 50, 56);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 48, 57);
INSERT into `post_tags` (`createdAt`,`updatedAt`,`TagId`,`PostId`) VALUES(NOW(), NOW(), 21, 58);

INSERT into `emoji` (`name`,`json`,`createdAt`,`updatedAt`) VALUES('0','json-string',NOW(),NOW());
INSERT into `emoji` (`name`,`json`,`createdAt`,`updatedAt`) VALUES('1','json-string',NOW(),NOW());
INSERT into `emoji` (`name`,`json`,`createdAt`,`updatedAt`) VALUES('2','json-string',NOW(),NOW());
INSERT into `emoji` (`name`,`json`,`createdAt`,`updatedAt`) VALUES('3','json-string',NOW(),NOW());
INSERT into `emoji` (`name`,`json`,`createdAt`,`updatedAt`) VALUES('4','json-string',NOW(),NOW());
INSERT into `emoji` (`name`,`json`,`createdAt`,`updatedAt`) VALUES('5','json-string',NOW(),NOW());

INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 1, 19);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 1, 4);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 1, 17);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 2, 1);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 2, 4);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 2, 16);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 3, 9);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 3, 12);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 3, 11);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 4, 8);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 4, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 4, 16);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 5, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 5, 7);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 6, 12);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 6, 4);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 6, 11);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 7, 14);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 7, 3);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 7, 19);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 8, 18);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 8, 14);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 8, 16);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 8, 17);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 9, 7);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 9, 10);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 9, 20);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 10, 1);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 10, 7);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 10, 17);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 11, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 11, 15);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 11, 1);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 12, 12);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 12, 5);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 12, 4);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 13, 13);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 13, 11);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 13, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 13, 8);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 14, 8);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 14, 12);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 14, 14);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 14, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 15, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 15, 7);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 16, 10);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 16, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 17, 12);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 17, 14);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 18, 9);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 18, 12);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 18, 10);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 19, 20);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 19, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 19, 10);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 20, 15);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 20, 13);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 21, 14);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 21, 9);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 22, 17);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 22, 19);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 23, 4);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 23, 8);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 24, 18);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 24, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 24, 13);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 24, 14);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 25, 18);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 25, 5);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 26, 17);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 26, 10);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 26, 1);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 26, 8);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 27, 8);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 27, 9);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 27, 7);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 27, 1);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 28, 4);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 28, 12);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 28, 13);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 28, 17);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 29, 7);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 29, 10);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 29, 9);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 30, 9);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 30, 12);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 30, 17);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 30, 11);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 31, 10);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 31, 9);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 31, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 31, 19);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 32, 1);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 32, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 32, 16);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 33, 20);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 33, 3);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 34, 16);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 34, 13);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 34, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 34, 8);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 35, 13);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 35, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 36, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 36, 8);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 36, 3);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 37, 17);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 37, 4);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 37, 11);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 38, 7);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 38, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 38, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 38, 16);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 39, 15);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 39, 4);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 39, 18);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 39, 11);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 40, 5);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 40, 18);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 41, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 41, 13);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 41, 20);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 41, 17);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 42, 15);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 42, 12);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 42, 16);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 42, 13);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 43, 4);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 43, 11);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 43, 5);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 43, 15);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 44, 3);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 44, 8);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 45, 11);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 45, 8);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 45, 18);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 45, 2);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 46, 16);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 46, 7);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 47, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 47, 10);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 47, 20);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 48, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 48, 5);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 48, 12);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 48, 3);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 49, 13);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 49, 1);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 49, 7);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 50, 10);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 50, 19);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 50, 13);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 51, 15);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 51, 14);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 52, 13);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 52, 14);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 52, 18);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 53, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 53, 10);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 3, 54, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 54, 7);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 54, 20);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 54, 9);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 55, 4);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 55, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 6, 55, 15);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 56, 13);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 56, 15);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 56, 6);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 57, 16);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 2, 57, 5);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 57, 1);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 1, 57, 11);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 5, 58, 10);
INSERT into `user_emoji_post` (`createdAt`,`updatedAt`,`EmojiId`,`PostId`,`UserId`) VALUES (NOW(), NOW(), 4, 58, 1);



-- to fetch usernames for all users associated with the 'horror' tag:
-- mysql> select u.username
--     -> from user u
--     -> inner join user_tags ut on u.id=ut.userId
--     -> inner join tag t on ut.tagid = t.id
--     -> where t.name='horror';
