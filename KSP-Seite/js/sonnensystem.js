// Planet Data
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

let selectedPlanet = planets[0];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const planetSelector = document.getElementById('planet-selector');
    const planetDetail = document.getElementById('planet-detail');
    const planetCircle = document.getElementById('planet-circle');
    const planetName = document.getElementById('planet-name');
    const planetDesc = document.getElementById('planet-desc');

    // Create planet buttons
    planets.forEach((planet) => {
        const button = document.createElement('button');
        button.className = `group flex flex-col items-center space-y-2 transition-all duration-300 ${
            selectedPlanet.id === planet.id ? 'scale-110 opacity-100' : 'opacity-50 hover:opac-80'
        }`;
        button.setAttribute('data-planet-id', planet.id);

        const circle = document.createElement('div');
        circle.className = `rounded-full shadow-lg ${planet.color} ${planet.size} g-h:sh-prim/50 trans-shadow`;

        const span = document.createElement('span');
        span.className = 'text-sm font-medium text-gray-300 g-h:text-white';
        span.textContent = planet.name;

        button.appendChild(circle);
        button.appendChild(span);

        button.addEventListener('click', () => {
            selectPlanet(planet);
        });

        planetSelector.appendChild(button);
    });

    // Function to select a planet
    function selectPlanet(planet) {
        selectedPlanet = planet;

        // Update detail view with animation
        planetCircle.className = `mx-auto rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] ${planet.color} ${planet.size} scale-150 transition-all duration-500`;
        planetName.textContent = planet.name;
        planetDesc.textContent = planet.desc;

        // Update button states
        const buttons = planetSelector.querySelectorAll('button');
        buttons.forEach((btn) => {
            const planetId = btn.getAttribute('data-planet-id');
            if (planetId === planet.id) {
                btn.className = btn.className.replace('opacity-50', 'opacity-100').replace('opacity-80', 'opacity-100');
                if (!btn.className.includes('scale-110')) {
                    btn.className += ' scale-110';
                }
            } else {
                btn.className = btn.className.replace('opacity-100', 'opacity-50').replace('scale-110', '');
            }
        });

        // Add fade-in animation
        planetDetail.style.opacity = '0';
        setTimeout(() => {
            planetDetail.style.opacity = '1';
            planetDetail.style.transition = 'opacity 0.5s';
        }, 50);
    }

    // Initialize with first planet
    selectPlanet(planets[0]);
});

