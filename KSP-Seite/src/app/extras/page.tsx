import { ExternalLink } from "lucide-react";

export default function ExtrasPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-white border-b border-white/10 pb-4">Extras & Informationen</h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Willkommen im Informationsbereich. Hier finden Sie Details zum Projekt, Quellen und weiterführende Links zum Kerbal Space Program.
                </p>
            </div>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary">Über dieses Projekt</h2>
                <div className="bg-card p-6 rounded-xl border border-white/5 space-y-4">
                    <p className="text-gray-300">
                        Diese interaktive Webseite wurde erstellt, um die Faszination des Kerbol-Systems darzustellen.
                        Sie nutzt modernste Web-Technologien wie <strong>Next.js</strong> und <strong>Tailwind CSS</strong>, um ein immersives Erlebnis zu bieten.
                    </p>
                    <p className="text-gray-300">
                        Das Design orientiert sich an einem dunklen &quot;Space-Theme&quot;, das die Leere des Weltraums und die leuchtenden Farben der Himmelskörper einfängt.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary">Nützliche Links</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://www.kerbalspaceprogram.com/" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-primary/10 hover:text-primary transition-all group">
                        <span className="font-medium">Offizielle KSP Webseite</span>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    </a>
                    <a href="https://wiki.kerbalspaceprogram.com/wiki/Main_Page" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-primary/10 hover:text-primary transition-all group">
                        <span className="font-medium">KSP Wiki</span>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    </a>
                </div>
            </section>
        </div>
    );
}
