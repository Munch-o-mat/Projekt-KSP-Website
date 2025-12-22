// Main JavaScript file for common functionality
// Currently empty, can be used for shared utilities if needed

document.addEventListener('DOMContentLoaded', () => {
    initBrandMenuToggle();
});

function initBrandMenuToggle() {
    const toggles = Array.from(document.querySelectorAll('[data-nav-toggle]'));

    if (!toggles.length) return;

    const closeAll = () => {
        toggles.forEach((toggle) => {
            const menu = document.getElementById(toggle.getAttribute('aria-controls'));
            if (!menu) return;
            toggle.setAttribute('aria-expanded', 'false');
            menu.classList.remove('is-open');
            menu.hidden = true;
        });
    };

    toggles.forEach((toggle) => {
        const menu = document.getElementById(toggle.getAttribute('aria-controls'));
        if (!menu) return;

        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';

            closeAll();

            if (!isOpen) {
                toggle.setAttribute('aria-expanded', 'true');
                menu.hidden = false;
                requestAnimationFrame(() => menu.classList.add('is-open'));
            }
        });
    });

    document.addEventListener('click', (event) => {
        const clickInside = toggles.some((toggle) => {
            const menu = document.getElementById(toggle.getAttribute('aria-controls'));
            return toggle.contains(event.target) || (menu && menu.contains(event.target));
        });

        if (!clickInside) {
            closeAll();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeAll();
        }
    });
}

