import 'emoji-picker-element'

let text = ''

document
  .querySelector('emoji-picker')
  .addEventListener('emoji-click', event => {
    text = event.detail.emoji.unicode
    navigator.clipboard.writeText(text)
  })
