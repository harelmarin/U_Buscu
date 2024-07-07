document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('menu-burger');
    const sideMenu = document.getElementById('side-menu');
    const closeBtn = document.getElementById('close-btn');

    if (burgerMenu && sideMenu && closeBtn) {
        burgerMenu.addEventListener('click', function() {
            if (sideMenu.style.width === '30vw') {
                sideMenu.style.width = '0';
                burgerMenu.classList.remove('change');
            } else {
                sideMenu.style.width = '30vw';
                burgerMenu.classList.add('change');
            }
        });

        closeBtn.addEventListener('click', function() {
            sideMenu.style.width = '0';
            burgerMenu.classList.remove('change');
        });
    } else {
        console.error('One or more elements not found: burgerMenu, sideMenu, or closeBtn');
    }
});
