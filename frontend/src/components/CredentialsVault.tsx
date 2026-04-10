"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ShieldCheck, Cpu } from "lucide-react";

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

      <div className="grid md:grid-cols-3 gap-8">
        {credentials.map((cred, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 group relative overflow-hidden"
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
