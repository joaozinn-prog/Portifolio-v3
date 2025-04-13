const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.add('active')
})

closeIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('active')
})

const menuLinks = document.querySelectorAll('a')
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
  })
})