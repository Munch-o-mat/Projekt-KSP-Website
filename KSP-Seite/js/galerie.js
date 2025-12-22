// Gallery Items Data
const galleryItems = [
    { id: 1, title: "Startbahn bei Nacht", color: "from-blue-900 to-slate-900" },
    { id: 2, title: "Orbit um Kerbin", color: "from-blue-400 to-blue-600" },
    { id: 3, title: "Landung auf dem Mün", color: "from-gray-300 to-gray-500" },
    { id: 4, title: "Duna Horizont", color: "from-red-400 to-orange-500" },
    { id: 5, title: "Jool Aufgang", color: "from-green-400 to-green-600" },
    { id: 6, title: "Rover Einsatz", color: "from-yellow-600 to-orange-700" },
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    const modal = document.getElementById('gallery-modal');
    const closeModal = document.getElementById('close-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalTitleBottom = document.getElementById('modal-title-bottom');

    // Create gallery items
    galleryItems.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'group relative aspect-video bg-card rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-primary/50 transition-all';
        div.setAttribute('data-item-id', item.id);

        const gradientDiv = document.createElement('div');
        gradientDiv.className = `absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`;

        const overlayDiv = document.createElement('div');
        overlayDiv.className = 'absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]';

        const icon = document.createElement('i');
        icon.className = 'fas fa-search-plus w-8 h-8 text-white mb-2';

        const span = document.createElement('span');
        span.className = 'text-white font-medium';
        span.textContent = item.title;

        overlayDiv.appendChild(icon);
        overlayDiv.appendChild(span);

        div.appendChild(gradientDiv);
        div.appendChild(overlayDiv);

        div.addEventListener('click', () => {
            openModal(item);
        });

        galleryGrid.appendChild(div);
    });

    // Function to open modal
    function openModal(item) {
        modalImage.className = `w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center`;
        modalTitle.textContent = item.title;
        modalTitleBottom.textContent = item.title;
        modal.style.opacity = '0';
        modal.classList.remove('hidden');
        
        // Trigger reflow to ensure the element is rendered
        void modal.offsetHeight;
        
        // Add fade-in animation
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
            modal.style.transition = 'opacity 0.2s ease-in-out';
        });
    }

    // Function to close modal
    function closeModalFunc() {
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.2s ease-in-out';
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 200);
    }

    // Event listeners
    closeModal.addEventListener('click', closeModalFunc);
    modalBackdrop.addEventListener('click', closeModalFunc);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModalFunc();
        }
    });
});

