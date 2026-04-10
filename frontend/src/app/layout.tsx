import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jose Suarez | Ingeniero en Sistemas de Información',
  description: 'Portafolio profesional de Jose Suarez, con analytics en tiempo real y arquitectura de datos avanzada.',
  keywords: ['Ingeniero en Sistemas', 'Data Analytics', 'Portfolio', 'Full Stack Developer', 'Supabase', 'Next.js'],
  authors: [{ name: 'Jose Suarez' }],
  openGraph: {
    title: 'Jose Suarez | Portfolio Pro',
    description: 'Analytics, Data Engineering & Full Stack Development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-emerald-500/30`}>
        {/* Abstract Background Decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full" />
          <div className="absolute top-[40%] -right-[10%] w-[35%] h-[35%] bg-teal-900/10 blur-[100px] rounded-full" />
        </div>
        
        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}