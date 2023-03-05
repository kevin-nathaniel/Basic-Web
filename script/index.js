// Toggle When Active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {navbarNav.classList.toggle('active');};

// When Click Outside Sidebar To Deactivate Sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
})

// Tu Open Sub Menu
let subMenu = document.getElementById("subMenu");

function toggleMenu(){
  subMenu.classList.toggle('open-menu')
}