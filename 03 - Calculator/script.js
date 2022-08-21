import Elements from './js/elements.js'

const el = Elements

el.results.textContent = ''
let previousValue = 0
let value = 0
let result = 0
let operator = ''

function clearNumbers() {
  value = 0
  result = 0
  previousValue = 0
  el.results.textContent = ''
  el.history.textContent = ''
}

function pressNumber(number) {
  if (
    (el.results.textContent !== 0 && result !== 0) ||
    value == 0 ||
    previousValue == 0
  ) {
    el.results.textContent = parseFloat(
      el.results.textContent + number.textContent
    )
  } else if (
    el.results.textContent !== 0 &&
    result == 0 &&
    value == 0 &&
    previousValue == 0
  ) {
    el.results.textContent = parseFloat(number.textContent)
  } else {
    el.results.textContent = parseFloat(number.textContent)
  }
}

const operators = {
  add: '+',
  multiply: '*',
  split: '/',
  subtract: '-',
  percent: '%'
}

function operations(operator) {
  if (!el.results.textContent && previousValue != 0) {
    console.log(previousValue)
    el.results.textContent = 'Digite algo'
  } else {
    if (value != 0 && previousValue != 0) {
      previousValue = parseFloat(value) + parseFloat(previousValue)
    } else {
      previousValue = parseFloat(el.results.textContent)
      el.results.textContent = ''
      el.history.textContent = `${previousValue} ${operator}`
    }
  }
}

document.addEventListener('click', btnClicked => {
  switch (btnClicked.target) {
    case el.subtract:
      operator = operators.subtract
      break
    case el.add:
      operator = operators.add
      break
    case el.split:
      operator = operators.split
      break
    case el.multiply:
      operator = operators.multiply
      break
    case el.percent:
      operator = operators.percent
      break

    default:
      break
  }
})

el.clear.addEventListener('click', () => {
  clearNumbers()
})

el.zero.addEventListener('click', () => {
  pressNumber(el.zero)
})
el.one.addEventListener('click', () => {
  pressNumber(el.one)
})
el.two.addEventListener('click', () => {
  pressNumber(el.two)
})
el.three.addEventListener('click', () => {
  pressNumber(el.three)
})
el.four.addEventListener('click', () => {
  pressNumber(el.four)
})
el.five.addEventListener('click', () => {
  pressNumber(el.five)
})
el.six.addEventListener('click', () => {
  pressNumber(el.six)
})
el.seven.addEventListener('click', () => {
  pressNumber(el.seven)
})
el.eight.addEventListener('click', () => {
  pressNumber(el.eight)
})
el.nine.addEventListener('click', () => {
  pressNumber(el.nine)
})

el.add.addEventListener('click', () => {
  operations(operators.add)
})

el.subtract.addEventListener('click', () => {
  operations(operators.subtract)
})

el.multiply.addEventListener('click', () => {
  operations(operators.multiply)
})

el.split.addEventListener('click', () => {
  operations(operators.split)
})

el.percent.addEventListener('click', () => {
  operations(operators.percent)
})

el.equals.onclick = () => {
  value = parseFloat(el.results.textContent)
  if (operator === '+') {
    result = previousValue + value
  } else if (operator === '-') {
    result = previousValue - value
  } else if (operator === '/') {
    result = previousValue / value
  } else if (operator === '*') {
    result = previousValue * value
  } else if (operator === '%') {
    result = previousValue * (value / 100)
  }
  el.results.textContent = ''
  el.history.textContent = `${el.history.textContent} ${value} = ${result}`

  value = 0
  result = 0
  previousValue = 0
}
