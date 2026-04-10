import os
from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        # We don't need a complex header for ATS, just simple flow
        pass
    def footer(self):
        # Minimal footer
        self.set_y(-15)
        self.set_font('helvetica', 'I', 8)
        self.cell(0, 10, f'Jose Manuel Suarez - Pagina {self.page_no()}', align='C')

pdf = PDF(format='Letter')
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)

# Add built-in compatible unicode fonts if needed, but standard helvetica is perfectly fine using utf-8 replacement or latin-1 mapping.
# FPDF built-in fonts only support latin-1 directly, so we need to encode text carefully or strip weird chars.

# Title
pdf.set_font('helvetica', 'B', 18)
pdf.cell(0, 10, 'JOSE MANUEL SUAREZ', ln=1, align='C')

pdf.set_font('helvetica', '', 11)
pdf.cell(0, 6, 'Ingeniero en Sistemas de Informacion | Licenciado en Contabilidad', ln=1, align='C')
pdf.cell(0, 6, 'Data Engineer & Especialista en Ciberseguridad', ln=1, align='C')

pdf.ln(2)
pdf.set_font('helvetica', '', 10)
contact_info = '+1-829-461-3778 | josemanuelsuarez110@gmail.com | Santo Domingo, Rep. Dominicana'
pdf.cell(0, 6, contact_info, ln=1, align='C')
links = 'Portafolio: frontend-swart-iota-77.vercel.app | GitHub: github.com/josemanuelsuarez110'
pdf.cell(0, 6, links, ln=1, align='C')

pdf.ln(6)

def section_title(title):
    pdf.set_font('helvetica', 'B', 12)
    pdf.set_text_color(0, 51, 102) # Dark blue for ATS headers is fine
    pdf.cell(0, 8, title, ln=1)
    # Line
    pdf.line(10, pdf.get_y(), 205, pdf.get_y())
    pdf.ln(3)
    pdf.set_text_color(0, 0, 0)

# Perfil
section_title('PERFIL PROFESIONAL')
pdf.set_font('helvetica', '', 10)
perfil = ("Profesional ejecutivo con mas de 20 anos de experiencia estrategica fusionando la gestion publica, "
          "la administracion financiera y las tecnologias de la informacion (TI). Poseo una doble titulacion "
          "universitaria en Ingenieria en Sistemas de Informacion y Contabilidad, potenciada por una especializacion "
          "activa en Ingenieria de Datos, Ciberseguridad, Hacking Etico e ISO 27001.\n\n"
          "Destaco por mi trayectoria comprobada en la modernizacion de infraestructuras criticas, control "
          "presupuestario, proteccion de activos digitales y transformacion digital institucional. Mi enfoque orientado "
          "al negocio me impulsa hacia roles directivos en Seguridad Informatica, Arquitectura de Datos y Consultoria IT.")
pdf.multi_cell(0, 5, perfil)
pdf.ln(5)

# Experiencia
section_title('EXPERIENCIA PROFESIONAL')

def add_job(title, company, dates, bullets):
    pdf.set_font('helvetica', 'B', 10)
    pdf.cell(140, 6, title, ln=0)
    pdf.set_font('helvetica', '', 10)
    pdf.cell(0, 6, dates, ln=1, align='R')
    
    pdf.set_font('helvetica', 'I', 10)
    pdf.cell(0, 6, company, ln=1)
    
    pdf.set_font('helvetica', '', 10)
    pdf.set_x(15) # Small indentation for bullets
    for bullet in bullets:
        pdf.multi_cell(0, 5, '- ' + bullet)
        pdf.set_x(15)
    pdf.ln(3)

add_job('Director de Operaciones / Consultor IT', 'Suarez Servicios y Asesoria | Santo Domingo, RD', '2018 - Presente', [
    'Direccion integral de proyectos de transformacion digital e implementacion de normativas ISO 27001.',
    'Consultoria tecnica especializada en Hacking Etico, pentesting y fortalecimiento de infraestructuras.',
    'Supervision directa de operaciones administrativas, operativas y financieras.'
])

add_job('Tesorero Institucional', 'Gobierno Local | Santo Domingo, RD', '2020 - 2025', [
    'Direccion, planificacion y control del presupuesto institucional garantizando transparencia de recursos.',
    'Manejo de flujo de caja, estados financieros estructurados y presentacion de reportes regulatorios.',
    'Supervision de auditorias financieras y operativas, y procesos de control de inventario.'
])

add_job('Oficial de Sistemas de Informacion / Funcionario Administrativo', 'Direccion General de Migracion | Santo Domingo, RD', '2009 - 2019', [
    'Administracion, mantenimiento y aseguramiento tecnologico de bases de datos criticas gubernamentales.',
    'Automatizacion y digitalizacion profunda de procesos administrativos tradicionales hacia plataformas eficientes.',
    'Elaboracion de reportes de datos complejos para la toma de decisiones estrategicas de alta gerencia.'
])

add_job('Gerente Administrativo', 'P&B Company | Santo Domingo, RD', '2003 - 2008', [
    'Supervision exhaustiva de operaciones administrativas e informes financieros.',
    'Procesamiento de datos internos para elaboracion de cuadros de mando y proyecciones.'
])

# Proyectos
section_title('PROYECTOS DESTACADOS (Portafolio Nivel Pro)')
pdf.set_font('helvetica', '', 10)
pdf.set_x(15)
pdf.multi_cell(0, 5, '- Nexus Data Platform: Pipeline End-to-End para ingesta de datos y orquestacion con Apache Airflow.')
pdf.set_x(15)
pdf.multi_cell(0, 5, '- Sales Analytics DR & SmartSales: Plataformas analiticas en tiempo real (Next.js, FastAPI, PostgreSQL).')
pdf.set_x(15)
pdf.multi_cell(0, 5, '- SQL Performance Optimization: Optimizacion avanzada de consultas y arquitecturas de Data Lakes.')
pdf.ln(3)

# Certificaciones
section_title('CERTIFICACIONES PROFESIONALES (Credentials Vault)')
def add_cert(category, certs):
    pdf.set_font('helvetica', 'B', 10)
    pdf.cell(0, 6, category, ln=1)
    pdf.set_font('helvetica', '', 10)
    pdf.set_x(15)
    for c in certs:
        pdf.multi_cell(0, 5, '- ' + c)
        pdf.set_x(15)
    pdf.ln(2)

add_cert('Ciberseguridad y Auditoria TI:', [
    'Hacker Etico / Ethical Hacking, Pentesting & Red Team - Cisco Networking Academy / Udemy (2026)',
    'CC Domain 1: Security Principles & CC Course Pre-assessment - ISC2 (2026)',
    'ISO 27001: Implementacion y Auditoria - Udemy (2026)',
    'Endpoint Security & Introduction to Cybersecurity - Cisco Networking Academy (2026)',
    'Seguridad de la Informacion / Camino a la Certificacion ISO 27001 - Seguridad Cero (2021-2025)'
])

add_cert('Gestion de Datos y Programacion:', [
    'Fundamentos de Python 1 & 2 / Master Data Engineering - Cisco / Cloud Academy (2026)',
    'Linux Essentials - Cisco / NDG Networking Academy (2026)'
])

add_cert('Infraestructura, Redes, Finanzas y Operaciones:', [
    'Networking Basics & IT Customer Support Basics - Cisco Networking Academy (2026)',
    'Administracion del Inventario | Aspectos Basicos de Finanzas | Flujo de Caja - HP LIFE Foundation (2026)'
])

# Educacion
section_title('EDUCACION')
add_job('Ingeniero en Sistemas de Informacion', 'Universidad APEC (UNAPEC) | Santo Domingo, RD', 'Graduado', [])
add_job('Licenciado en Contabilidad', 'Universidad Federico Henriquez y Carvajal (UFHEC) | Santo Domingo, RD', 'Graduado', [])

# Competencias
section_title('COMPETENCIAS TECNICAS')
pdf.set_font('helvetica', '', 10)
pdf.set_x(15)
pdf.multi_cell(0, 5, '- Ciberseguridad & Redes: Ethical Hacking, Pentesting, Endpoint Security, ISO 27001, Linux.')
pdf.set_x(15)
pdf.multi_cell(0, 5, '- Ingenieria de Datos & Software: Python, Config. de Data Pipelines, SQL Tuning, Frontend (React).')
pdf.set_x(15)
pdf.multi_cell(0, 5, '- Finanzas y Estrategia: Control Presupuestario, Flujo de Caja, Auditorias, Business Intelligence.')
pdf.set_x(15)
pdf.multi_cell(0, 5, '- Gestion Directiva: Liderazgo de Operaciones, Planificacion Estrategica, Cumplimiento Normativo.')


pdf.output('frontend/public/cv_jose_manuel_suarez.pdf')
print("PDF generado con exito en frontend/public/cv_jose_manuel_suarez.pdf")
