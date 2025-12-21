"use client";

import { useState } from "react";

// Mock Data (placeholder for DB)
const planets = [
    { id: "kerbol", name: "Kerbol", color: "bg-yellow-500", size: "w-32 h-32", desc: "Der Stern im Zentrum des Systems." },
    { id: "moho", name: "Moho", color: "bg-stone-400", size: "w-12 h-12", desc: "Ein kleiner, heißer Planet ohne Atmosphäre." },
    { id: "eve", name: "Eve", color: "bg-purple-600", size: "w-20 h-20", desc: "Dichte lila Atmosphäre und hohe Schwerkraft." },
    { id: "kerbin", name: "Kerbin", color: "bg-blue-500", size: "w-16 h-16", desc: "Die Heimat der Kerbals. Hat einen Mond: Mün." },
    { id: "duna", name: "Duna", color: "bg-red-500", size: "w-14 h-14", desc: "Der rote Planet mit Eiskappen und dünner Atmosphäre." },
    { id: "dres", name: "Dres", color: "bg-gray-300", size: "w-10 h-10", desc: "Ein zwergplanetenartiger Asteroid im Gürtel." },
    { id: "jool", name: "Jool", color: "bg-green-500", size: "w-28 h-28", desc: "Ein riesiger Gasgigant mit vielen Monden." },
    { id: "eeloo", name: "Eeloo", color: "bg-white", size: "w-12 h-12", desc: "Ein entfernter, eisiger Zwergplanet." },
];

export default function SolarSystemPage() {
    const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);

    return (
        <div className="flex flex-col h-full space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">KSP Sonnensystem</h1>
                    <p className="text-gray-400">Wähle einen Himmelskörper für Details</p>
                </div>
            </div>

            {/* Visualization Area */}
            <div className="relative w-full h-96 bg-black/20 rounded-2xl border border-white/5 overflow-hidden flex flex-col items-center justify-center p-8 backdrop-blur-sm">

                {/* Planet Detail View (Center) */}
                <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500 key={selectedPlanet.id}">
                    <div className={`mx-auto rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] ${selectedPlanet.color} ${selectedPlanet.size} scale-150 transition-all duration-500`} />
                    <h2 className="text-4xl font-bold text-white">{selectedPlanet.name}</h2>
                    <p className="text-gray-300 max-w-md mx-auto">{selectedPlanet.desc}</p>
                </div>

            </div>

            {/* Planet Selector (Horizontal Scroll) */}
            <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex items-center space-x-8 px-4 min-w-max">
                    {planets.map((planet) => (
                        <button
                            key={planet.id}
                            onClick={() => setSelectedPlanet(planet)}
                            className={`group flex flex-col items-center space-y-2 transition-all duration-300 ${selectedPlanet.id === planet.id ? 'scale-110 opacity-100' : 'opacity-50 hover:opacity-80'}`}
                        >
                            <div className={`rounded-full shadow-lg ${planet.color} ${planet.size} group-hover:shadow-primary/50 transition-shadow`} />
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white">{planet.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
