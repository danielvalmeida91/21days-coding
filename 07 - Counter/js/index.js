import { minutesDisplay, secondsDisplay } from './elements.js'

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

let newMinutes = 0

function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
  timerTimeOut = setTimeout(() => {
    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)

    let isFinished = minutes <= 0 && seconds <= 0
    updateDisplay(minutes, 0)

    if (isFinished) {
      hold()
      reset()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }
    updateDisplay(minutes, String(seconds - 1))
    countdown()
  }, 1000)
}

function hold() {
  clearTimeout(timerTimeOut)
}

const play = document.querySelector('#play')
const stop = document.querySelector('#stop')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')

play.addEventListener('click', () => {
  countdown()
})

stop.addEventListener('click', () => {
  hold(timerTimeOut)
})

plus.addEventListener('click', () => {
  newMinutes = Number(minutesDisplay.textContent) + 1
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
})

plus.addEventListener('dblclick', () => {
  newMinutes = Number(minutesDisplay.textContent) + 3
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
})

minus.addEventListener('click', () => {
  newMinutes = Number(minutesDisplay.textContent) - 1
  if (newMinutes <= 0) {
    minutesDisplay.textContent = String(0).padStart(2, '0')
  } else {
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
  }
})

minus.addEventListener('dblclick', () => {
  newMinutes = Number(minutesDisplay.textContent) - 3
  if (newMinutes <= 0) {
    minutesDisplay.textContent = String(0).padStart(2, '0')
  } else {
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
  }
})
