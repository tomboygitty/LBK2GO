-- This seed file is used to create the table for storing the Songs with their information
USE lbk2go_db;

INSERT INTO songs (song, artist, genre, music_key, created_at, updated_at)
VALUES ('1999','Prince','eighties','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('867-5309 Jenny','Tommy Tutone','eighties','F#',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('9 to 5','Dolly Parton','country','F#',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('99 Luftballoons','Nena','new wave','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('99 Problems','Jay-Z','rap','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('99 Red Balloons','Nena','new wave','E',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('A Hard Day''s Night','The Beatles','oldies','C',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);