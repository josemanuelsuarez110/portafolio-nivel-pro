"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Globe } from "lucide-react";

const projects = [
  {
    title: "Sales Analytics DR",
    category: "Data Engineering / BI",
    description: "Plataforma de análisis de ventas con visualización de datos y toma de decisiones en tiempo real basada en casos reales de mercados LATAM.",
    image: "/sales_analytics_thumbnail_1775847597895.png",
    demo: "https://sales-analytics-dr.vercel.app",
    github: "https://github.com/josemanuelsuarez110/sales-analytics-dr",
    tags: ["Python", "Vercel", "Data Viz", "KPIs"]
  },
  {
    title: "SmartSales Global Insights",
    category: "Cloud Architecture",
    description: "Sistema inteligente de análisis de ventas con arquitectura escalable, diseñado para integraciones empresariales de alto rendimiento.",
    image: "/smartsales_thumbnail_1775847615611.png",
    demo: "https://smart-sales-analytics-platform.vercel.app",
    github: "https://github.com/josemanuelsuarez110/portafolio-nivel-pro",
    tags: ["TypeScript", "Next.js", "Scalable", "API"]
  },
  {
    title: "Nexus Data Platform",
    category: "Data Infrastructure",
    description: "Pipeline de datos end-to-end completo, desde la ingesta de datos brutos hasta la orquestación y visualización final para inteligencia de negocios.",
    image: "/nexus_platform.png",
    demo: "#",
    github: "https://github.com/josemanuelsuarez110/nexus-data-platform-end-to-end",
    tags: ["Pipelines", "Orchestration", "End-to-End"]
  },
  {
    title: "SQL Performance Optimization",
    category: "Database Engineering",
    description: "Optimización avanzada de consultas SQL y reestructuración de índices para mejorar drásticamente el rendimiento en bases de datos empresariales.",
    image: "/sql_performance.png",
    demo: "#",
    github: "https://github.com/josemanuelsuarez110/mysql-sql-optimization-project",
    tags: ["MySQL", "Query Tuning", "Indexing"]
  },
  {
    title: "Enterprise Data Lake",
    category: "Advanced Data Architecture",
    description: "Implementación de arquitectura de Data Lake para el almacenamiento masivo y procesamiento escalable de grandes volúmenes de datos.",
    image: "/data_lake_arch.png",
    demo: "#",
    github: "https://github.com/josemanuelsuarez110/data-lake-portfolio",
    tags: ["Data Lake", "Cloud Storage", "S3"]
  },
  {
    title: "Workflow Orchestration",
    category: "Data Operations",
    description: "Automatización y orquestación de flujos de trabajo de datos complejos mediante Apache Airflow, garantizando la integridad de los pipelines.",
    image: "/airflow_orchestration.png",
    demo: "#",
    github: "https://github.com/josemanuelsuarez110/airflow-orchestration-portfolio",
    tags: ["Airflow", "Automation", "DAGs"]
  }
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Proyectos <span className="text-gradient">Destacados</span></h2>
        <div className="h-px flex-1 bg-white/10 hidden md:block ml-8" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group glass-card overflow-hidden flex flex-col h-full"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex gap-3">
                  {project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      className="p-2 rounded-full bg-emerald-500 text-black hover:bg-emerald-400 transition-colors"
                    >
                      <Globe size={18} />
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank"
                    className="p-2 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                {project.title}
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <div key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400">
                    <Code2 size={10} className="text-emerald-500/50" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
