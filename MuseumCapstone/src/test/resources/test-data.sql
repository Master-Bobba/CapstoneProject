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

INSERT INTO art (art_type, id, name, artist_id, medium, museum_id, year_completed, back_story, style) VALUES ('Painting', 10, 'Mona Lisa', 10, 'OIL', 10, 1503, 'Mona Lisa story.....', 'RENAISSANCE');
INSERT INTO art (art_type, id, name, artist_id, medium, museum_id, year_completed, back_story, style) VALUES ('Sculpture', 11, 'Dying Slave', 11, 'MARBLE', 10, 1516, 'Dying Slave story....', 'RENAISSANCE');
INSERT INTO art (art_type, id, name, artist_id, medium, museum_id, year_completed, back_story, style) VALUES ('Sculpture', 12, 'David', 11, 'MARBLE', 11, 1504, 'David....', 'RENAISSANCE');
INSERT INTO art (art_type, id, name, artist_id, medium, museum_id, year_completed, back_story, style) VALUES ('Painting', 13, 'Self-Portrait as a Painter', 12, 'OIL', 12, 1888, 'story....', 'IMPRESSIONIST');
INSERT INTO art (art_type, id, name, artist_id, medium, museum_id, year_completed, back_story, style) VALUES ('Painting', 14, 'The Yellow House', 12, 'OIL', 12, 1888, 'yellow house....', 'IMPRESSIONIST');
INSERT INTO art (art_type, id, name, artist_id, medium, museum_id, year_completed, back_story, style) VALUES ('Painting', 15, 'Liberty Leading the People', 13, 'OIL', 10, 1830, 'Liberty Leading the People.....', 'ROMANTICISM');

