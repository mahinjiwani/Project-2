-- User seed
INSERT INTO users(pass, first_name, last_name) VALUES('1234', 'Test', 'Dummy');

INSERT INTO users(pass, first_name, last_name) VALUES('1234', 'Demo', 'Dummy');

-- Exercise see
INSERT INTO exercises(name, description, type) VALUES('Push-ups', 'Calisthenic exercise focusing on the upper body.', 'pectoral,triceps');

INSERT INTO exercises(name, description, type) VALUES('Sit-ups', 'Calisthenic exercise focusing on the core.', 'abdomen');

INSERT INTO exercises(name, description, type) VALUES('Squats', 'Calisthenic exercise focusing on the lower body.', 'quadriceps,glutes');
