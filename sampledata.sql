
-- First, drop the table if it exists
DROP TABLE IF EXISTS dbo.GameMaster;


-- Create the table in the specified database
CREATE TABLE dbo.GameMaster ( ID INTEGER PRIMARY KEY, GameName VARCHAR(255) NOT NULL, Platform VARCHAR(255) NOT NULL, ReleaseYear DATE NOT NULL, Metacritic FLOAT );

-- Insert data into the table
INSERT INTO dbo.GameMaster 
VALUES
    (1, 'Persona 4 Golden', 'Playstation 2', '2008-01-01', 9.9),
    (2, 'Persona 3 Royal', 'Playstation 3', '2017-01-01', 9.67);

-- Select all records from the table
SELECT * FROM dbo.GameMaster;