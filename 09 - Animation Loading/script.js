const button = document.querySelector('#button')
const textMain = document.querySelector('.text')
const textLoading = document.querySelector('.loading')

function playIntro() {
  const loading = new KeyframeEffect(
    button,
    [
      { width: '0%', backgroundColor: '#000' },
      { width: '100%' },
      { width: '100%', backgroundColor: '#fff' }
    ],
    { duration: 5000, fill: 'forwards' }
  )
  const loadingAnimation = new Animation(loading, document.timeline)

  loadingAnimation.play()
  textLoading.classList.remove('hide')
}

function playSecondAnimation() {
  textMain.classList.remove('hide')
  const loading = new KeyframeEffect(
    button,
    [
      { width: '0%', backgroundColor: '#fff' },
      { width: '100%', backgroundColor: '#fff' }
    ],
    { duration: 3000, fill: 'forwards' }
  )
  const loadingAnimation = new Animation(loading, document.timeline)

  loadingAnimation.play()
  textLoading.classList.add('hide')
  button.classList.remove('black')
}

let processAnimation

button.addEventListener('click', () => {
  textMain.classList.add('hide')
  button.classList.add('black')
  playIntro()
  processAnimation = setTimeout(playSecondAnimation, 5000)
})
