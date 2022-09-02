const app = document.querySelector('.app')
const divHistory = document.querySelector('.history')
const divEvent = document.querySelector('.event')

let history = []

document.addEventListener('keydown', event => {
  let keyPressed = event.key
  history.push(keyPressed.toUpperCase())
  divEvent.textContent = event.type
  app.textContent = event.key.toUpperCase()
  divHistory.textContent = history
})
