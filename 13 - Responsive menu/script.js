const iconMenu = document.querySelector('#icon')
const menu = document.querySelector('.menu')

iconMenu.addEventListener('click', () => {
  menu.classList.toggle('show')
})
