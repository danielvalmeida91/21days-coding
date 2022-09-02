const button = document.querySelector('#button')
const passwordGenerated = document.querySelector('.password')

let randomString

button.addEventListener('click', () => {
  generatePassword()
  passwordGenerated.textContent = randomString
})

function generatePassword() {
  randomString = Math.random().toString(36).slice(-10)
}
