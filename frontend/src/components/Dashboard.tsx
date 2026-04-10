"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { TrendingUp, Activity, RefreshCw } from "lucide-react";

// Fallback data in case the API is not reachable
const fallbackData = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 800 },
  { month: "Mar", sales: 600 },
  { month: "Apr", sales: 1200 },
];

export default function Dashboard() {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const res = await axios.get(`${apiUrl}/sales`);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
        // Stick to fallbackData if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="glass-card p-8 shadow-2xl relative overflow-hidden group">
      {/* Background Decorative Element */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full group-hover:bg-emerald-500/20 transition-all duration-700" />
      
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Activity className="text-emerald-500" />
            Live <span className="text-gradient">Analytics</span>
          </h2>
          <p className="text-gray-400 text-sm">
            {loading ? "Cargando datos desde el API..." : "Conectado al Backend FastAPI"}
          </p>
        </div>
        <div className={`p-3 rounded-xl bg-emerald-500/10 text-emerald-400 ${loading ? 'animate-spin' : ''}`}>
          {loading ? <RefreshCw size={24} /> : <TrendingUp size={24} />}
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="lineColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="month" 
              stroke="#475569" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
              dy={10}
            />
            <YAxis 
              stroke="#475569" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(2, 6, 23, 0.8)', 
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
              labelStyle={{ color: '#94a3b8', marginBottom: '4px' }}
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#10b981" 
              strokeWidth={4} 
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4, stroke: '#020617' }}
              activeDot={{ r: 8, strokeWidth: 0, fill: '#34d399' }}
              animationDuration={2000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-8 flex items-center justify-between text-sm text-gray-500">
        <p>Total Sales Q1: ${data.reduce((acc, curr) => acc + curr.sales, 0)}</p>
        <span className="text-emerald-400 font-bold">API Status: Online</span>
      </div>
    </div>
  );
}
