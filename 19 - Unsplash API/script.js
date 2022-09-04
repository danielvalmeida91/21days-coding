let imageElement = document.querySelector('#unsplashImage')
let imageLink = document.querySelector('#imageLink')
let button = document.querySelector('button')
let accessKey = 't7tSiko4BfT8iYJ1uV_u3Bym3C68ekvTSSWTHCuBGus'

// let endpoint = `https://api.unsplash.com/photos/?client_id=${accessKey}`
let endpoint = 'https://source.unsplash.com/random'

fetch(endpoint).then(response => {
  console.log(response)
  imageElement.src = response.url
})

button.addEventListener('click', () => {
  document.location.reload()
})
