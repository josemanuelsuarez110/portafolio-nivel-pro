-- Crear tabla portfolio_metrics
CREATE TABLE portfolio_metrics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  metric_name TEXT NOT NULL,
  value NUMERIC NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insertar datos de ejemplo
INSERT INTO portfolio_metrics (metric_name, value) VALUES
('Proyectos Completados', 25),
('Clientes Satisfechos', 150),
('Años de Experiencia', 5),
('Tecnologías Dominadas', 12);