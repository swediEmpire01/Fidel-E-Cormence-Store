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

// The following code is for the hero section
const heroBox = document.querySelector('.hero');
const toggle = document.querySelector('.toggle-change');
toggle.addEventListener('click', (e) =>{
    console.log(toggle.childNodes);
    if(e.target.id === "blue"){
        heroBox.childNodes[1].scrollIntoView({behavior: "smooth"});
        toggle.childNodes[1].style.backgroundColor = "#0083BB";
        toggle.childNodes[3].style.backgroundColor = "#F0F0F0";
    }
    else if(e.target.id === "grey"){
        heroBox.childNodes[3].scrollIntoView({behavior: "smooth"});
        toggle.childNodes[3].style.backgroundColor = "#0083BB";
        toggle.childNodes[1].style.backgroundColor = "#F0F0F0";
    }
});
heroBox.addEventListener('scroll', (e) =>{
    // Calculate the scroll depth as a percentage
    const scrollDepth = (heroBox.scrollLeft / (heroBox.scrollWidth - heroBox.clientWidth)) * 100;
    if(scrollDepth < 50){
        toggle.childNodes[1].style.backgroundColor = "#0083BB";
        toggle.childNodes[3].style.backgroundColor = "#F0F0F0";
    }
    else{
        toggle.childNodes[3].style.backgroundColor = "#0083BB";
        toggle.childNodes[1].style.backgroundColor = "#F0F0F0";
    }
});
