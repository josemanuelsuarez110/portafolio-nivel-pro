"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Globe } from "lucide-react";

const projects = [
  {
    title: "Master Sales Analytics Platform",
    category: "Data Engineering / BI",
    description: "Plataforma integral de analítica predictiva que procesa flujos masivos de datos para optimizar ciclos de venta en mercados LATAM.",
    image: "/sales_analytics_thumbnail_1775847597895.png",
    demo: "https://sales-analytics-dr.vercel.app",
    tags: ["Supabase", "Next.js", "Python ETL", "Recharts"]
  },
  {
    title: "SmartSales Global Insights",
    category: "Cloud Architecture",
    description: "Arquitectura escalable en la nube para la gestión de fuerza de ventas y detección de fraudes mediante modelos de streaming en tiempo real.",
    image: "/smartsales_thumbnail_1775847615611.png",
    demo: "https://smart-sales-analytics-platform.vercel.app",
    tags: ["Kafka", "Spark", "Vercel", "TailwindCSS"]
  }
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
        <div className="h-px flex-1 bg-white/10 hidden md:block ml-8" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/5 shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div className="flex gap-4">
                  <a href={project.demo} target="_blank" className="p-3 rounded-full bg-emerald-500 text-black hover:bg-emerald-400 transition-colors">
                    <Globe size={20} />
                  </a>
                  <a href="#" className="p-3 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
              {project.title}
              <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <div key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  <Code2 size={12} className="text-emerald-500/50" />
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
