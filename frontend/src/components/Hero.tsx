"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 tracking-wider uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Disponible para Proyectos de Ingeniería
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Data Engineer / <br />
          <span className="text-gradient">Analytics Engineer</span>
        </h1>
        
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto md:mx-0">
          <strong className="text-emerald-400 font-semibold">Doble Titulación:</strong> Ingeniero en Sistemas y Licenciado en Contabilidad. 
          Especialista en arquitectura de datos, analítica financiera y automatización con un profundo enfoque en negocio y toma de decisiones.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <button className="btn-primary flex items-center gap-2 group">
            Ver Proyectos
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2">
            <Download size={18} />
            CV
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-gray-500">
          <a href="mailto:josemanuelsuarez110@gmail.com" className="hover:text-emerald-400 transition-colors" title="Email"><Mail size={24} /></a>
          <a href="https://wa.me/18294613778" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" title="WhatsApp 829-461-3778">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          <a href="https://github.com/josemanuelsuarez110" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" title="GitHub"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/josemanuelsuarez110" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" title="LinkedIn"><Linkedin size={24} /></a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 relative"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
          {/* Decorative Rings */}
          <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-4 border border-teal-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          
          <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl shadow-emerald-500/40">
            <img 
              src="/jose_suarez_profile_new.jpg" 
              alt="JOSE MANUEL SUAREZ" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Badge */}
          <div className="absolute -bottom-4 -right-12 glass-card p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold">JMS</div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Ingeniero</p>
              <p className="text-sm font-bold">JOSE MANUEL SUAREZ</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
