const header = document.querySelector('header');
header.addEventListener('click', (e) => {
    const menu= document.querySelector('.menu');
    const menuOpen = document.querySelector('#menu-open');
    if (e.target.id === 'menu-open') {
        menu.style.right = '0';
        menu.style.transition = '0.5s';
        menuOpen.style.display = 'none';
    }
    else if (e.target.id === 'menu-close') {
        menu.style.right = '-100%';
        menu.style.transition = '0.5s';
        menuOpen.style.display = '';
    }
});
