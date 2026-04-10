export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-slate-950/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-black text-sm">JS</div>
            <span className="font-bold tracking-tight">JOSE SUAREZ</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            Ingeniero en Sistemas de Información especializado en arquitectura de datos y soluciones empresariales de alto impacto.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2 text-sm">
          <p className="text-gray-300 font-medium">© {new Date().getFullYear()} Jose Suarez. <span className="text-emerald-500">Todos los derechos reservados.</span></p>
          <p className="text-gray-600 text-xs tracking-widest uppercase">Ingeniería de Sistemas de Información</p>
        </div>
      </div>
    </footer>
  );
}
