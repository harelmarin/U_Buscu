document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('menu-burger');
    const sideMenu = document.getElementById('side-menu');
    const closeBtn = document.getElementById('close-btn');

    function closeMenu() {
        sideMenu.style.width = '0';
        burgerMenu.classList.remove('change');
    }

    if (burgerMenu && sideMenu && closeBtn) {
        burgerMenu.addEventListener('click', function(event) {
            event.stopPropagation();
            if (sideMenu.style.width === '35vw') {
                closeMenu();
            } else {
                sideMenu.style.width = '35vw';
                burgerMenu.classList.add('change');
            }
        });

        closeBtn.addEventListener('click', function(event) {
            event.stopPropagation(); 
            closeMenu();
        });

        document.addEventListener('click', function(event) {
            if (sideMenu.style.width === '35vw' && !sideMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
                closeMenu();
            }
        });

        sideMenu.addEventListener('click', function(event) {
            event.stopPropagation(); 
        });
    } else {
        console.error('One or more elements not found: burgerMenu, sideMenu, or closeBtn');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('body');
    container.classList.add('loaded');
});
