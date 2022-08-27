import Elements from './js/elements.js'

const element = Elements

element.firstImage.classList.add('left')
element.secondImage.classList.add('center')
element.thirdImage.classList.add('right')

let randomFirst = 1
let oldRandomFirst = 1
let randomSecond = 4
let oldRandomSecond = 4
let randomThird = 6
let oldRandomThird = 6

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

function changeImageRight() {
  randomFirst = getRandomInt(1, 8)
  element.firstImage.src = `./images/photo${randomFirst}.jpg`

  randomSecond = getRandomInt(4, 10)
  element.secondImage.src = `./images/photo${randomSecond}.jpg`

  randomThird = getRandomInt(3, 9)
  element.thirdImage.src = `./images/photo${randomThird}.jpg`
}

function changeImageLeft() {
  randomFirst = getRandomInt(4, 10)
  element.firstImage.src = `./images/photo${randomFirst}.jpg`

  randomSecond = getRandomInt(1, 9)
  element.secondImage.src = `./images/photo${randomSecond}.jpg`

  randomThird = getRandomInt(3, 10)
  element.thirdImage.src = `./images/photo${randomThird}.jpg`
}

element.toRight.addEventListener('click', () => {
  animationChangeRight()
  changeImageRight()
})

element.toLeft.addEventListener('click', () => {
  animationChangeLeft()
  changeImageLeft()
})

function animationChangeRight() {
  const loadingRightFirstImage = new KeyframeEffect(
    element.firstImage,
    [
      {
        marginLeft: '-5rem',
        transform: 'rotatey(0deg)'
      },
      {
        marginLeft: '5rem',
        transform: 'rotateY(360deg)'
      }
    ],
    {
      duration: 1500,
      fill: 'forwards'
    }
  )

  const loadingRightSecondImage = new KeyframeEffect(
    element.secondImage,
    [
      {
        transform: 'rotatey(0deg)'
      },
      {
        transform: 'rotateY(360deg)'
      }
    ],
    {
      duration: 1500,
      fill: 'forwards'
    }
  )

  const loadingRightThirdImage = new KeyframeEffect(
    element.thirdImage,
    [
      {
        transform: 'rotatey(0deg)'
      },
      {
        transform: 'rotateY(360deg)'
      }
    ],
    {
      duration: 1500,
      fill: 'forwards'
    }
  )

  const loadingAnimationRightFirstImage = new Animation(
    loadingRightFirstImage,
    document.timeline
  )

  const loadingAnimationRightSecondImage = new Animation(
    loadingRightSecondImage,
    document.timeline
  )

  const loadingAnimationRightThirdImage = new Animation(
    loadingRightThirdImage,
    document.timeline
  )

  loadingAnimationRightFirstImage.play()
  loadingAnimationRightSecondImage.play()
  loadingAnimationRightThirdImage.play()
}

function animationChangeLeft() {
  const loadingLeftFirstImage = new KeyframeEffect(
    element.firstImage,
    [
      {
        transform: 'rotatey(0deg)'
      },
      {
        transform: 'rotateY(-360deg)'
      }
    ],
    {
      duration: 1500,
      fill: 'forwards'
    }
  )

  const loadingLeftSecondImage = new KeyframeEffect(
    element.secondImage,
    [
      {
        transform: 'rotatey(0deg)'
      },
      {
        transform: 'rotateY(-360deg)'
      }
    ],
    {
      duration: 1500,
      fill: 'forwards'
    }
  )

  const loadingLeftThirdImage = new KeyframeEffect(
    element.thirdImage,
    [
      {
        transform: 'rotatey(0deg)'
      },
      {
        transform: 'rotateY(-360deg)'
      }
    ],
    {
      duration: 1500,
      fill: 'forwards'
    }
  )

  const loadingAnimationLeftFirstImage = new Animation(
    loadingLeftFirstImage,
    document.timeline
  )

  const loadingAnimationLeftSecondImage = new Animation(
    loadingLeftSecondImage,
    document.timeline
  )

  const loadingAnimationLeftThirdImage = new Animation(
    loadingLeftThirdImage,
    document.timeline
  )

  loadingAnimationLeftFirstImage.play()
  loadingAnimationLeftSecondImage.play()
  loadingAnimationLeftThirdImage.play()
}
