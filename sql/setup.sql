-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists cats;

CREATE TABLE cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    age INT NOT NULL
)

INSERT INTO cats (name, age) VALUES
('James Corden', 43),
('Taylor Swift', 32),
('Dame Judi Dench', 87),
('Rebel Wilson', 42),
('Idris Elba', 49),
('Jennifer Hudson', 40);