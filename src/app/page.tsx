"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Home() {
    const [metrics, setMetrics] = useState<any>(null);
    const [chartData, setChartData] = useState<any[]>([]);
    const [supabase, setSupabase] = useState<any>(null);

    useEffect(() => {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        if (url && key && url.startsWith('http')) {
            try {
                const client = createClient(url, key);
                setSupabase(client);
                fetchData(client);
            } catch (error) {
                console.error('Error creating Supabase client:', error);
                // Fall back to dummy data
                setMetrics({
                    records: 25,
                    dashboards: 150,
                    pipelines: 5
                });
                setChartData([
                    { name: "Ene", ventas: 400 },
                    { name: "Feb", ventas: 700 },
                    { name: "Mar", ventas: 1200 },
                    { name: "Abr", ventas: 900 },
                ]);
            }
        } else {
            // Use dummy data if Supabase not configured or invalid
            setMetrics({
                records: 25,
                dashboards: 150,
                pipelines: 5
            });
            setChartData([
                { name: "Ene", ventas: 400 },
                { name: "Feb", ventas: 700 },
                { name: "Mar", ventas: 1200 },
                { name: "Abr", ventas: 900 },
            ]);
        }
    }, []);

    const fetchData = async (client: any) => {
        try {
            const { data } = await client
                .from("portfolio_metrics")
                .select("*");

            if (data) {
                const metricsObj: any = {};
                data.forEach((item: any) => {
                    if (item.metric_name === "Proyectos Completados") metricsObj.records = item.value;
                    if (item.metric_name === "Clientes Satisfechos") metricsObj.dashboards = item.value;
                    if (item.metric_name === "Años de Experiencia") metricsObj.pipelines = item.value;
                });
                setMetrics(metricsObj);
            }
        } catch (error) {
            console.error('Error fetching data from Supabase:', error);
            // Keep dummy data
        }

        // fake dynamic chart data (can replace with real table)
        setChartData([
            { name: "Ene", ventas: 400 },
            { name: "Feb", ventas: 700 },
            { name: "Mar", ventas: 1200 },
            { name: "Abr", ventas: 900 },
        ]);
    };

    return (
        <main className="min-h-screen bg-black text-white p-6" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            {/* HERO */}
            <section className="text-center py-16 bg-black bg-opacity-70">
                <h1 className="text-5xl font-bold">Portafolio Jose Suarez</h1>
                <p className="text-gray-400 mt-3">
                    Dashboard de analytics en tiempo real powered by Supabase
                </p>
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Coding" className="mx-auto mt-6 rounded-full w-32 h-32 object-cover" />
            </section>

            {/* METRICS */}
            <section className="grid md:grid-cols-3 gap-6 mb-10">
                {metrics && (
                    <>
                        <Card title="Proyectos Completados" value={metrics.records} />
                        <Card title="Clientes Satisfechos" value={metrics.dashboards} />
                        <Card title="Años de Experiencia" value={metrics.pipelines} />
                    </>
                )}
            </section>

            {/* REAL CHART */}
            <section className="bg-gray-900 p-6 rounded-xl mb-10">
                <h2 className="text-xl mb-4">Analytics de Ventas</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="ventas" />
                    </BarChart>
                </ResponsiveContainer>
            </section>

            {/* PROJECTS */}
            <section className="grid md:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                    <div key={i} className="bg-gray-900 p-4 rounded-xl">
                        <img src={p.image} alt={p.title} className="w-full h-32 object-cover rounded mb-4" />
                        <h2 className="text-xl mb-2">{p.title}</h2>
                        <p className="text-gray-400 text-sm">{p.desc}</p>
                        {p.demo && (
                            <a href={p.demo} target="_blank" className="text-blue-400 mt-2 inline-block">Ver Demo</a>
                        )}
                    </div>
                ))}
            </section>
        </main>
    );
}

function Card({ title, value }: any) {
    return (
        <div className="bg-gray-900 p-6 rounded-xl text-center">
            <p className="text-gray-400">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
        </div>
    );
}

const projects = [
    {
        title: "Sales Analytics DR",
        desc: "Live analytics dashboard",
        demo: "https://sales-analytics-dr.vercel.app",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "SmartSales Platform",
        desc: "Scalable analytics system",
        demo: "https://smart-sales-analytics-platform.vercel.app",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
];