const firstOption = document.querySelector('#firstOption')
const secondOption = document.querySelector('#secondOption')
const thirdOption = document.querySelector('#thirdOption')

firstOption.addEventListener('click', () => {
  wrong(firstOption)
})

secondOption.addEventListener('click', () => {
  correct()
})

thirdOption.addEventListener('click', () => {
  wrong(thirdOption)
})

function correct() {
  secondOption.style.animation = 'correctAnswer 3s'
}

function wrong(element) {
  element.style.animation = 'wrongAnswer 3s'
}
