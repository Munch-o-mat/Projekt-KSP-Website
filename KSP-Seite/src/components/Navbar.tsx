import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-card/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 sticky top-0 z-50">
      {/* Brand / Logo */}
      <div className="text-xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
        <Link href="/">KSP Explorer</Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-foreground/80">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/sonnensystem" className="hover:text-primary transition-colors">
          Sonnensystem
        </Link>
        <Link href="/galerie" className="hover:text-primary transition-colors">
          Galerie
        </Link>
        <Link href="/extras" className="hover:text-primary transition-colors">
          Extras
        </Link>
      </div>

      {/* Search Bar Placeholder */}
      <div className="flex items-center bg-secondary/50 rounded-full px-3 py-1.5 border border-white/5">
        <Search className="w-4 h-4 text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Suche..." 
          className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-32 focus:w-48 transition-all"
        />
      </div>
    </nav>
  );
}
