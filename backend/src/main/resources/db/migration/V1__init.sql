CREATE TABLE contracts (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    risk_score INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);