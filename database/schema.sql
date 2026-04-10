-- Updated Schema for Portfolio Analytics

CREATE TABLE IF NOT EXISTS sales (
    id SERIAL PRIMARY KEY,
    month VARCHAR(10) NOT NULL,
    amount INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Legacy metrics table for other components
CREATE TABLE IF NOT EXISTS portfolio_metrics (
    id SERIAL PRIMARY KEY,
    metric_name VARCHAR(100) NOT NULL,
    value INTEGER NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Seed Initial Sales Data
INSERT INTO sales (month, amount) VALUES 
('Jan', 400),
('Feb', 800),
('Mar', 600),
('Apr', 1200)
ON CONFLICT DO NOTHING;
