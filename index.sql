CREATE TABLE "user" (
  "id" serial PRIMARY KEY,
  "firstName" varchar(255),
  "lastName" varchar(255),
  "email" varchar(255),
  "cultureID" int,
  "deleted" boolean,
  "country" varchar(255),
  "isRevokeAccess" boolean,
  "created" timestamp default current_timestamp
);

INSERT INTO "user" ("id", "firstName", "lastName", "email", "cultureID", "deleted", "country", "isRevokeAccess", "created")
VALUES
(1, 'Victor', 'Shevchenko', 'vs@gmail.com', 1033, false, 'US', false, '2011-04-05'),
(2, 'Oleksandr', 'Petrenko', 'op@gmail.com', 1034, false, 'UA', false, '2014-05-01'),
(3, 'Victor', 'Tarasenko', 'vt@gmail.com', 1033, true, 'US', true, '2015-07-03'),
(4, 'Sergiy', 'Ivanenko', 'sergiy@gmail.com', 1046, false, 'UA', true, '2010-02-02'),
(5, 'Vitalii', 'Danilchenko', 'shumko@gmail.com', 1031, false, 'UA', true, '2014-05-01'),
(6, 'Joe', 'Dou', 'joe@gmail.com', 1032, false, 'US', true, '2009-01-01');


CREATE TABLE "group" (
  "id" serial PRIMARY KEY,
  "name" varchar(255),
  "created" timestamp default current_timestamp
);



INSERT INTO "group" ("id", "name", "created")
VALUES
(10, 'Support', '2010-02-02'),
(12, 'Dev team', '2010-02-03'),
(13, 'Apps team', '2011-05-06'),
(14, 'TEST - dev team', '2013-05-06'),
(15, 'Guest', '2014-02-02'),
(16, 'TEST-QA-team', '2014-02-02'),
(17, 'TEST-team', '2011-01-07');



CREATE TABLE "groupMembership" (
  "id" serial PRIMARY KEY,
  "userID" int,
  "groupID" int,
  "created" timestamp default current_timestamp
);

INSERT INTO "groupMembership" ("id", "userID", "groupID", "created")
VALUES
(110, 2, 10, '2010-02-02'),
(112, 3, 15, '2010-02-03'),
(114, 1, 10, '2014-02-02'),
(115, 1, 17, '2011-05-02'),
(117, 4, 12, '2014-07-13'),
(120, 5, 15, '2014-06-15');

--3.2
select * from "group" where name like 'TEST-%';

--3.3
select "user"."firstName","user"."lastName"  from "user"
left join "groupMembership" on "user"."id" = "groupMembership"."userID"
left join "group" on "group"."id" = "groupMembership"."groupID"
where "user"."firstName" = 'Victor' and "group"."name" not like 'TEST-%';

--3.4
select "user".*,"group".* from "user"
left join "groupMembership" on "user"."id" = "groupMembership"."userID"
left join "group" on "group"."id" = "groupMembership"."groupID"
where "user"."created"<"group"."created";







