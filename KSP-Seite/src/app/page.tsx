import Link from "next/link";
import { ArrowRight, Globe, Images, Info } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent pb-2">
          KSP Stock Sonnensystem
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Entdecke die Planeten, Monde und Geheimnisse des Kerbal Space Program Universums.
        </p>
      </section>

      {/* Navigation Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
        {/* Card 1: Sonnensystem */}
        <Link
          href="/sonnensystem"
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-card p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col items-start space-y-4">
            <div className="p-3 bg-secondary rounded-lg group-hover:scale-110 transition-transform">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
              Sonnensystem
            </h2>
            <p className="text-gray-400 text-sm">
              Erkwinge das Kerbal-System. Alle Planeten und ihre Monde im Detail.
            </p>
            <div className="flex items-center text-primary text-sm font-medium mt-2">
              Erkunden <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Card 2: Galerie */}
        <Link
          href="/galerie"
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-card p-8 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col items-start space-y-4">
            <div className="p-3 bg-secondary rounded-lg group-hover:scale-110 transition-transform">
              <Images className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
              Galerie
            </h2>
            <p className="text-gray-400 text-sm">
              Visuelle Eindrücke und Screenshots aus dem Spiel.
            </p>
            <div className="flex items-center text-blue-400 text-sm font-medium mt-2">
              Ansehen <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Card 3: Extras */}
        <Link
          href="/extras"
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-card p-8 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col items-start space-y-4">
            <div className="p-3 bg-secondary rounded-lg group-hover:scale-110 transition-transform">
              <Info className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
              Extras & Infos
            </h2>
            <p className="text-gray-400 text-sm">
              Hintergrundinformationen, Quellen und weitere Details.
            </p>
            <div className="flex items-center text-green-400 text-sm font-medium mt-2">
              Mehr Infos <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
