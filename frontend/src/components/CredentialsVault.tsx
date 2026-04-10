"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ShieldCheck, Cpu, Briefcase, PieChart, ShieldAlert, Lock, Headset, Code, Network, Laptop, Package, Key } from "lucide-react";

const credentials = [
  {
    title: "Grado en Ingeniería en Sistemas de Información",
    institution: "Universidad APEC (UNAPEC)",
    date: "Grado Académico",
    icon: <GraduationCap size={24} />,
    color: "from-emerald-500 to-teal-500",
    tags: ["Arquitectura de Software", "Sistemas Distribuidos", "Gestión de TI"]
  },
  {
    title: "Master Data Engineering Professional",
    institution: "Cloud Analytics & Big Data Academy",
    date: "Certificación Pro",
    icon: <Cpu size={24} />,
    color: "from-blue-500 to-indigo-500",
    tags: ["Spark", "Kafka", "Data Lakes"]
  },
  {
    title: "Advanced Data Science & Analytics",
    institution: "Elite Technical Training",
    date: "Senior Certificate",
    icon: <Award size={24} />,
    color: "from-purple-500 to-pink-500",
    tags: ["Machine Learning", "Python", "Predictive Analytics"]
  },
  {
    title: "Licenciatura en Contabilidad",
    institution: "Universidad UFHEC",
    date: "Grado Académico",
    icon: <Briefcase size={24} />,
    color: "from-amber-500 to-orange-500",
    tags: ["Análisis Financiero", "Estrategia de Costos", "Business Intelligence"]
  },
  {
    title: "Junior Cybersecurity Analyst",
    institution: "Cisco Networking Academy",
    date: "Verified Career Path",
    icon: <ShieldCheck size={24} />,
    color: "from-cyan-500 to-blue-500",
    tags: ["Cybersecurity", "Network Defense", "Threat Intelligence"]
  },
  {
    title: "Flujo de Caja (Cash Flow)",
    institution: "HP LIFE Foundation",
    date: "Certificación de Negocios",
    icon: <PieChart size={24} />,
    color: "from-blue-500 to-indigo-600",
    tags: ["Gestión Financiera", "Toma de Decisiones", "Finanzas"]
  },
  {
    title: "Introduction to Cybersecurity",
    institution: "Cisco Networking Academy",
    date: "Verified Certification",
    icon: <ShieldAlert size={24} />,
    color: "from-green-500 to-emerald-600",
    tags: ["Cyber Threats", "Data Protection", "Security Basics"]
  },
  {
    title: "ISO 27001: Implementación y Auditoría",
    institution: "Udemy",
    date: "Certificación de Experto",
    icon: <Lock size={24} />,
    color: "from-violet-500 to-purple-700",
    tags: ["ISO 27001", "Compliance", "Auditoría TI"]
  },
  {
    title: "IT Customer Support Basics",
    institution: "Cisco Networking Academy",
    date: "Verified Certification",
    icon: <Headset size={24} />,
    color: "from-sky-400 to-blue-600",
  },
  {
    title: "Python Essentials 1",
    institution: "Cisco Networking Academy / Python Institute",
    date: "Verified Certification",
    icon: <Code size={24} />,
    color: "from-yellow-400 to-orange-500",
    tags: ["Python", "Fundamentals", "Logic"]
  },
  {
    title: "Python Essentials 2",
    institution: "Cisco Networking Academy / Python Institute",
    date: "Verified Certification",
    icon: <Code size={24} />,
    color: "from-amber-500 to-orange-700",
    tags: ["Advanced Python", "Algorithms", "Data Structures"]
  },
  {
    title: "Networking Basics",
    institution: "Cisco Networking Academy",
    date: "Verified Certification",
    icon: <Network size={24} />,
    color: "from-blue-500 to-cyan-600",
    tags: ["Networks", "Protocols", "Infrastructure"]
  },
  {
    title: "Cyber Threat Management",
    institution: "Cisco Networking Academy",
    date: "Verified Certification",
    icon: <ShieldAlert size={24} />,
    color: "from-red-500 to-rose-700",
    tags: ["Threat Intelligence", "Incident Response", "Cyber Defense"]
  },
  {
    title: "Endpoint Security",
    institution: "Cisco Networking Academy",
    date: "Verified Certification",
    icon: <Laptop size={24} />,
    color: "from-slate-500 to-stone-700",
    tags: ["Endpoint Protection", "Malware Analysis", "SecOps"]
  },
  {
    title: "Administración del Inventario",
    institution: "HP LIFE Foundation",
    date: "Certificación Ejecutiva",
    icon: <Package size={24} />,
    color: "from-indigo-400 to-blue-600",
    tags: ["Supply Chain", "Operations", "Management"]
  },
  {
    title: "Camino a la Certificación ISO 27001",
    institution: "Seguridad Cero",
    date: "Certificación en Ciberseguridad",
    icon: <Lock size={24} />,
    color: "from-violet-600 to-fuchsia-700",
    tags: ["ISO 27001", "Compliance", "Gestión de Riesgos"]
  },
  {
    title: "ISC2 CC Pre-assessment",
    institution: "ISC2",
    date: "Cybersecurity Certification",
    icon: <Key size={24} />,
    color: "from-emerald-500 to-teal-700",
    tags: ["Security Concepts", "Risk Management", "Security Operations"]
  }
];

export default function CredentialsVault() {
  return (
    <section id="credentials" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Credentials <span className="text-gradient">Vault</span></h2>
        <p className="text-gray-400 max-w-2xl">
          Respaldando la experiencia técnica con certificaciones de alto nivel y una sólida formación académica en ingeniería.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-6xl mx-auto">
        {credentials.map((cred, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 group relative overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] min-w-[280px]"
          >
            {/* Background Glow */}
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${cred.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
            
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cred.color} flex items-center justify-center text-black mb-6 shadow-lg shadow-emerald-500/10`}>
              {cred.icon}
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{cred.title}</h3>
            <p className="text-gray-400 text-sm mb-1">{cred.institution}</p>
            <p className="text-emerald-500/80 text-xs font-bold uppercase tracking-widest mb-6">{cred.date}</p>

            <div className="flex flex-wrap gap-2">
              {cred.tags.map(tag => (
                <span key={tag} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-300 uppercase font-semibold">
                  {tag}
                </span>
              ))}
            </div>

            <div className="absolute top-2 right-2 text-white/5 group-hover:text-white/10 transition-colors">
              <ShieldCheck size={64} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
