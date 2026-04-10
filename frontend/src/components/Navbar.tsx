"use client";

import { Home, FolderOpen, Award, BarChart3, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Inicio", icon: <Home size={18} />, href: "#" },
  { name: "Proyectos", icon: <FolderOpen size={18} />, href: "#projects" },
  { name: "Credenciales", icon: <Award size={18} />, href: "#credentials" },
  { name: "Analytics", icon: <BarChart3 size={18} />, href: "#analytics" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'w-[95%] max-w-2xl' : 'w-[90%] max-w-xl'}`}>
      <div className="glass-card px-4 py-3 flex items-center justify-between shadow-2xl shadow-emerald-950/20">
        <div className="flex items-center gap-2 px-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-black text-sm">JS</div>
          <span className="font-bold text-sm hidden sm:inline-block tracking-tight">JOSE SUAREZ</span>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all text-sm font-medium"
            >
              {item.icon}
              <span className="hidden md:inline-block">{item.name}</span>
            </a>
          ))}
        </div>

        <button className="bg-emerald-500 hover:bg-emerald-400 text-black p-2 rounded-full transition-colors hidden sm:block">
          <Mail size={18} />
        </button>
      </div>
    </nav>
  );
}
