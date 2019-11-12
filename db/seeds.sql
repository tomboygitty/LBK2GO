-- This seed file is used to create the table for storing the Songs with their information
USE lbk2go_db;

INSERT INTO songs (song, artist, genre, music_key, created_at, updated_at)
VALUES ('1999','Prince','eighties','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('867-5309 Jenny','Tommy Tutone','eighties','F#',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('9 to 5','Dolly Parton','country','F#',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('99 Luftballoons','Nena','new wave','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('99 Problems','Jay-Z','rap','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('A Hard Days Night','The Beatles','oldies','C',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('A Thousand Years','Christina Perri','pop','C',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Achey Breaky Heart','Billy Ray Cyrus','country','A',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Addicted To Love','Robert Palmer','rock','A',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Africa','Toto','rock','Eb',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Aint No Rest For The Wicked','Cage The Elephant','rock','G',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Aint No Sunshine','Bill Withers','funk','A',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Aint Talkin Bout Love','Van Halen','rock','A',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Alcohol','Brad Paisley','country','B',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('All About That Bass','Meghan Trainor','female lead','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('All About Tonight','Blake Shelton','country','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('All Of Me','John Legend','pop','F#',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('All Shook Up','Elvis Presley','oldies','A',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Alone','Heart','female lead','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Always On My Mind','Willie Nelson','country','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Amarillo by Morning','George Strait','country','A',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('American Girl','Tom Petty','rock','D',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('American Idiot','Green Day','punk','A',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('American Pie','Don McLean','oldies','D',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Another One Bites The Dust','Queen','rock','A',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Mmm Mmm Mmm Mmm','Crash Test Dummies','alternative','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Cupid Shuffle','Cupid','dance','G',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Get Lucky','Daft Punk','dance','F#',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Back In Black','ACDC','rock','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Communication Breakdown','Led Zeppelin','classic rock','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);


INSERT INTO queues (name, song_id, created_at, updated_at)
VALUES ('joe', 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('peter', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('mary', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('toto', 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('david', 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('wendy', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

UPDATE queues SET queue_state="Completed" WHERE id='1';
UPDATE queues SET queue_state="Active" WHERE id='2';