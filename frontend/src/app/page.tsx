import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import CredentialsVault from "@/components/CredentialsVault";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="relative">
        {/* Abstract Background Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-teal-500/10 blur-[100px] rounded-full" />
        </div>

        <Hero />
        
        <div className="relative z-10 space-y-24 pb-20">
          <ProjectShowcase />
          
          <section id="analytics" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Resumen de <span className="text-gradient">Impacto Pro</span></h2>
              <div className="h-px flex-1 bg-white/10 hidden md:block ml-8" />
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Dashboard />
              </div>
              
              <div className="space-y-6">
                <div className="glass-card p-6 border-l-4 border-emerald-500">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Crecimiento Anual</p>
                  <h3 className="text-3xl font-extrabold text-white">+85.2%</h3>
                  <p className="text-sm text-emerald-400 mt-2 font-semibold">Eficiencia Optimizada</p>
                </div>
                
                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold mb-4 italic text-emerald-500">Misión de Ingeniería</h3>
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    "Orquestando arquitecturas de datos de alto rendimiento para impulsar la visión estratégica de organizaciones nivel pro."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <CredentialsVault />
        </div>
      </main>

      <Footer />
    </>
  );
}