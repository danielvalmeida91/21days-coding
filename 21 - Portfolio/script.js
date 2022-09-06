const projects = [
  {
    name: 'Hello World',
    image: './images/2.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/02%20-%20hello%20world'
  },
  {
    name: 'Botão animado',
    image: './images/3.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/03%20-%20Button'
  },
  {
    name: 'Calculadora',
    image: './images/4.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/04%20-%20Calculator'
  },
  {
    name: 'Página 404',
    image: './images/5.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/05%20-%20Page%20Error%20404'
  },
  {
    name: 'Efeito Glassmorphism',
    image: './images/6.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/06%20-%20Glassmorphism'
  },
  {
    name: 'Contador',
    image: './images/7.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/07%20-%20Counter'
  },
  {
    name: 'Botão toggle',
    image: './images/8.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/08%20-%20Toggle%20Button'
  },
  {
    name: 'Animação loading',
    image: './images/9.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/09%20-%20Animation%20Loading'
  },
  {
    name: 'Lib Particle.js',
    image: './images/10.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/10%20-%20Particle.js'
  },
  {
    name: 'Form login',
    image: './images/11.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/11%20-%20Form%20login'
  },
  {
    name: 'Carrossel de imagens',
    image: './images/12.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/12%20-%20Carroussel'
  },
  {
    name: 'Menu responsivo',
    image: './images/13.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/13%20-%20Responsive%20menu'
  },
  {
    name: 'Form quiz',
    image: './images/14.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/14%20-%20Form%20quiz'
  },
  {
    name: 'Fake E-commerce',
    image: './images/15.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/15%20-%20Shopping%20cart'
  },
  {
    name: 'API Pública',
    image: './images/16.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/16%20-%20Public%20API'
  },
  {
    name: 'Captura de caracteres',
    image: './images/17.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/17%20-%20Capture%20key'
  },
  {
    name: 'Gerador de senhas',
    image: './images/18.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/18%20-%20Password%20generator'
  },
  {
    name: 'API Unsplash',
    image: './images/19.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/19%20-%20Unsplash%20API'
  },
  {
    name: 'Seletor de emojis',
    image: './images/20.png',
    address:
      'https://github.com/danielvalmeida91/21days-coding/tree/main/20%20-%20Emoji%20picker'
  }
]

const DOM = {
  InformationContainer: document.querySelector('#cards-projects'),

  addProject(project) {
    const card = document.createElement('div')
    card.classList.add('card-project')
    card.innerHTML = DOM.innerHTMLProduct(project)

    DOM.InformationContainer.appendChild(card)
  },

  innerHTMLProduct(project) {
    const html = `
      <img src="${project.image}" alt="" class="thumbnail do projeto ${project.name}" />
      <a href="${project.address}" target="_blank">${project.name}</a>
    `

    return html
  }
}

const App = {
  init() {
    projects.forEach(DOM.addProject)
  }
}

App.init()
