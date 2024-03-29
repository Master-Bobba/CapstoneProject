INSERT INTO artist (id, name, year_born, year_dead) VALUES (10, 'Leonardo da Vinci', 1452, 1519);
INSERT INTO artist (id, name, year_born, year_dead) VALUES (11, 'Michelangelo', 1457, 1564);
INSERT INTO artist (id, name, year_born, year_dead) VALUES (12, 'Vincent van Gogh', 1853, 1890);
INSERT INTO artist (id, name, year_born, year_dead) VALUES (13, 'Eugène Delacroix', 1798, 1863);

INSERT INTO curator (id, name, year_born) VALUES (10, 'Marie-Laure de Rochebrune', 1960);
INSERT INTO curator (id, name, year_born) VALUES (11, 'Cecilie Hollberg', 1967);
INSERT INTO curator (id, name, year_born) VALUES (12, 'Marije Vellekoop', 1969);

INSERT INTO location (id, city, country) VALUES (10, 'Paris', 'France');
INSERT INTO location (id, city, country) VALUES (11, 'Florence', 'Italy');
INSERT INTO location (id, city, country) VALUES (12, 'Amsterdam', 'Netherlands');

INSERT INTO museum (id, name, curator_id, location_id) VALUES (10, 'Louvre Museum', 10, 10);
INSERT INTO museum (id, name, curator_id, location_id) VALUES (11, 'Accademia Gallery', 11, 11);
INSERT INTO museum (id, name, curator_id, location_id) VALUES (12, 'Van Gogh Museum', 12, 12);

INSERT INTO art (art_type, id, name, artist_id, medium, museum_id, year_completed, back_story, style, url) VALUES ('Painting', 10, 'Mona Lisa', 10, 'OIL', 10, 1503, 'Mona Lisa story.....', 'RENAISSANCE', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/396px-Mona_Lisa.jpg');
INSERT INTO art (art_type, id, name, artist_id, medium, museum_id, year_completed, back_story, style, url) VALUES ('Sculpture', 11, 'Dying Slave', 11, 'MARBLE', 10, 1516, 'Dying Slave story....', null, 'https://images.pexels.com/photos/10561162/pexels-photo-10561162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
INSERT INTO art (art_type, id, name, artist_id, medium, museum_id, year_completed, back_story, style, url) VALUES ('Sculpture', 12, 'David', 11, 'MARBLE', 11, 1504, 'David....', null, 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
INSERT INTO art (art_type, id, name, artist_id, medium, museum_id, year_completed, back_story, style, url) VALUES ('Painting', 13, 'Self-Portrait as a Painter', 12, 'OIL', 12, 1888, 'story....', 'IMPRESSIONIST', 'https://images.pexels.com/photos/1981468/pexels-photo-1981468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
INSERT INTO art (art_type, id, name, artist_id, medium, museum_id, year_completed, back_story, style, url) VALUES ('Painting', 14, 'The Yellow House', 12, 'OIL', 12, 1888, 'yellow house....', 'IMPRESSIONIST', 'https://images.pexels.com/photos/2983289/pexels-photo-2983289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
INSERT INTO art (art_type, id, name, artist_id, medium, museum_id, year_completed, back_story, style, url) VALUES ('Painting', 15, 'Liberty Leading the People', 13, 'OIL', 10, 1830, 'Liberty Leading the People.....', 'ROMANTICISM', 'https://images.pexels.com/photos/1478071/pexels-photo-1478071.jpeg');