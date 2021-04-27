BEGIN TRANSACTION;

CREATE TABLE characters (
    name TEXT PRIMARY KEY,
    height TEXT NOT NULL,
    weight TEXT NOT NULL,
    style TEXT NOT NULL,
    firstAppearance TEXT NOT NULL,
    occupation TEXT NOT NULL,
    rival TEXT NOT NULL
);

INSERT INTO characters (name, height, weight, style, firstAppearance, occupation, rival) VALUES
('Akuma', '178cm', '90kg', 'Satsui no Hadou', 'Super Street Fighter II Turbo', 'Martial Artist', 'Ryu'),
('Cammy', '155cm', '61kg', 'Delta Red', 'Super Street Fighter II: The New Challengers', 'MI6 Delta Red Operative', 'M.Bison'),
('Chun-Li', '165cm', 'Secret', 'Chinese martial arts', 'Street Fighter II: The World Warrior', 'Interpol Officer', 'Vega'),
('Dee Jay', '184cm', '92kg', 'Kickboxer', 'Super Street Fighter II: The New Challengers', 'Kickboxing', 'Zangief'),
('Ken', '180cm', '77kg', 'Ansatsuken', 'Street Fighter', 'Martial Artist', 'Ryu'),
('M.Bison', '180cm', '96kg', 'Psycho Power', 'Street Fighter II: The World Warrior', 'Shadaloo King', 'Chun-Li'),
('Ryu', '180cm', '76kg', 'Ansatsuken', 'Street Fighter', 'Martial Artist', 'Ken'),
('Vega', '186cm', '84kg', 'Spanish ninjutsu', 'Street Fighter II: The World Warrior', 'Shadaloo King', 'Chun-Li'),
('Zangief', '214cm', '115kg', 'Russian and American pro wrestling', 'Street Fighter II: The World Warrior', 'Wrestler', 'Ken');

COMMIT;