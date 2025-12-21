"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
    { id: 1, title: "Startbahn bei Nacht", color: "from-blue-900 to-slate-900" },
    { id: 2, title: "Orbit um Kerbin", color: "from-blue-400 to-blue-600" },
    { id: 3, title: "Landung auf dem Mün", color: "from-gray-300 to-gray-500" },
    { id: 4, title: "Duna Horizont", color: "from-red-400 to-orange-500" },
    { id: 5, title: "Jool Aufgang", color: "from-green-400 to-green-600" },
    { id: 6, title: "Rover Einsatz", color: "from-yellow-600 to-orange-700" },
];

export default function GalleryPage() {
    const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Galerie</h1>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className="group relative aspect-video bg-card rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-primary/50 transition-all"
                    >
                        {/* Image Placeholder */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                            <ZoomIn className="w-8 h-8 text-white mb-2" />
                            <span className="text-white font-medium">{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative bg-card w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Large Image Placeholder */}
                        <div className={`w-full h-full bg-gradient-to-br ${selectedItem.color} flex items-center justify-center`}>
                            <h2 className="text-4xl font-bold text-white/90 drop-shadow-lg">{selectedItem.title}</h2>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
                        </div>
                    </div>

                    {/* Close on background click */}
                    <div className="absolute inset-0 -z-10" onClick={() => setSelectedItem(null)} />
                </div>
            )}
        </div>
    );
}
