function toggleMenu(){
  const menu = document.querySelector('.menu-links')
  const icon = document.querySelector('.hamburger-icon')
  menu.classList.toggle('open')
  icon.classList.toggle('open')
}

const year = document.getElementById('current-year');
year.innerHTML = new Date().getFullYear()