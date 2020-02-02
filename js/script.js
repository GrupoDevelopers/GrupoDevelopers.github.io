/* Developers Site v.1.0 */

// MENU MOBILE

const toggleNavList = document.getElementById('toggle-menu');
toggleNavList.addEventListener('click', toggleMenu);

const navBrand = document.querySelector('.nav-brand');

const navList = document.querySelector('.nav-list');

function toggleMenu() {
    navList.classList.toggle('toggle-list')
    navBrand.classList.toggle('d-none')  
}