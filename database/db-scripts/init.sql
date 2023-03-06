CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name CHARACTER(50),
    image TEXT
);

INSERT INTO users (
    name,
    image
) VALUES (
    'Mona Lisa',
    'octocat.jpg'
) ON CONFLICT DO NOTHING;
