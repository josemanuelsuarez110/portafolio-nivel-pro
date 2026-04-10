import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Portafolio <span className="text-gradient">Profesional</span>
          </h1>
          <div className="h-px flex-1 bg-white/10 hidden md:block ml-8" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard Area */}
          <div className="lg:col-span-2 space-y-8">
            <Dashboard />
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Total Impact</p>
                <h3 className="text-2xl font-extrabold text-emerald-400">$128.5k</h3>
              </div>
              <div className="glass-card p-6">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Efficiencies</p>
                <h3 className="text-2xl font-extrabold text-teal-400">+45%</h3>
              </div>
            </div>
          </div>

          {/* Side Info Panel */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4 italic text-emerald-500">Filosofía Pro</h3>
              <p className="text-gray-400 text-sm leading-relaxed italic">
                "La ingeniería de sistemas no se trata solo de escribir código, sino de orquestar datos para crear valor tangible y escalabilidad infinita."
              </p>
            </div>
            
            <button className="w-full btn-primary !rounded-2xl py-6 text-lg tracking-widest uppercase font-black">
              Iniciar Consultoría Pro
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}