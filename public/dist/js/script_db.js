// Humburger Db 
const hamburgerds = document.querySelector('#menu-dashboard');
const navdashboard = document.querySelector('#nav-menu-db');

hamburgerds.addEventListener('click', function() {

    hamburgerds.classList.toggle('hamburger_active');
    navdashboard.classList.toggle('-translate-x-[100%]');
})