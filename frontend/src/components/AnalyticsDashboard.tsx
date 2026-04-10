"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid } from "recharts";
import { TrendingUp, Users, Activity, Zap } from "lucide-react";

const chartData = [
  { name: "Ene", performance: 45, volume: 300 },
  { name: "Feb", performance: 52, volume: 450 },
  { name: "Mar", performance: 48, volume: 400 },
  { name: "Abr", performance: 70, volume: 800 },
  { name: "May", performance: 85, volume: 1100 },
  { name: "Jun", performance: 95, volume: 1400 },
];

const metrics = [
  { label: "Proyectos Activos", value: "24", icon: <Activity size={20} />, trend: "+12%" },
  { label: "Pipeline Efficiency", value: "98.4%", icon: <Zap size={20} />, trend: "+4.2%" },
  { label: "Stakeholders Satisfied", value: "150+", icon: <Users size={20} />, trend: "100%" },
  { label: "Data Volume (TB)", value: "1.2", icon: <TrendingUp size={20} />, trend: "+25%" },
];

export default function AnalyticsDashboard() {
  return (
    <section id="analytics" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics <span className="text-gradient">Real-Time</span></h2>
          <p className="text-gray-400 max-w-xl">
            Visualizando el impacto de mis soluciones de datos a través de métricas de rendimiento y eficiencia en tiempo real.
          </p>
        </div>
        <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-emerald-400 text-sm font-bold animate-pulse">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          Live Connection: Supabase DB
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 border-l-4 border-l-emerald-500"
          >
            <div className="text-emerald-500 mb-3">{m.icon}</div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">{m.label}</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">{m.value}</h3>
              <span className="text-[10px] text-emerald-400 font-bold">{m.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8">
          <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
            <Activity size={18} className="text-emerald-500" />
            Performance Growth (System Efficiency)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#10b981' }}
                />
                <Area type="monotone" dataKey="performance" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorPerf)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-8">
          <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
            <TrendingUp size={18} className="text-teal-500" />
            Data Processed Volume (Monthly)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#2dd4bf' }}
                />
                <Bar dataKey="volume" fill="#14b8a6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
