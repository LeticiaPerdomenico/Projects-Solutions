/*#1*/
CREATE TABLE films (
  name TEXT,
  release_year INTEGER
);
/*#2*/
INSERT INTO films (name, release_year)
VALUES ('Legally blonde', 2001);
INSERT INTO films (name, release_year)
VALUES ('Legally blonde 2', 2003);
INSERT INTO films (name, release_year)
VALUES ('Pretty Woman', 1990);
INSERT INTO films (name, release_year)
VALUES ('Miss Congeniality', 2000);
INSERT INTO films (name, release_year)
VALUES ('Miss Congeniality 2: Armed & Fabulous', 2005);
INSERT INTO films (name, release_year)
VALUES ('Titanic', 1997);
/*#3*/
SELECT * FROM films WHERE release_year <= 1999;
/*#4*/
ALTER TABLE films ADD COLUMN runtime INTEGER;
ALTER TABLE films ADD COLUMN category TEXT;
ALTER TABLE films ADD COLUMN rating REAL;
ALTER TABLE films ADD COLUMN box_office BIGINT;
/*#5*/
UPDATE films
SET runtime = 96,
    category = 'comedy - romance',
    rating = 6.4,
    box_office = 141774679   
WHERE name = 'Legally blonde';
UPDATE films
SET runtime = 95,
    category = 'comedy',
    rating = 4.8,
    box_office = 124914842   
WHERE name = 'Legally blonde 2';
UPDATE films
SET runtime = 119,
    category = 'comedy - romance',
    rating = 7.1,
    box_office = 463406268  
WHERE name = 'Pretty Woman';
UPDATE films
SET runtime = 194,
    category = 'drama - romance',
    rating = 7.9,
    box_office = 2264743305   
WHERE name = 'Titanic';
UPDATE films
SET runtime = 109,
    category = 'action - comedy - crime',
    rating = 6.3,
    box_office = 212742720   
WHERE name = 'Miss Congeniality';
UPDATE films
SET runtime = 115,
    category = 'action - comedy - crime',
    rating = 5.1,
    box_office = 101393569  
WHERE name = 'Miss Congeniality 2: Armed & Fabulous';
/*#6*/
ALTER TABLE films
ADD CONSTRAINT unique_name UNIQUE (name);