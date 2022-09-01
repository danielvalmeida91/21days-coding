const products = [
  {
    name: 'Adidas Grand Court',
    price: 249.9,
    picture: './adidas01.png'
  },
  {
    name: 'Adidas Superstar White',
    price: 299.9,
    picture: './adidas02.png'
  },
  {
    name: 'Nike Air Zoom Pegasus',
    price: 999.9,
    picture: './nike01.png'
  },
  {
    name: 'Under Armour Hombre Victory',
    price: 299.9,
    picture: './under01.png'
  }
]

const iconSearch = document.querySelector('#icon-search')
const inputSearch = document.querySelector('#input-search')

iconSearch.addEventListener('click', () => {
  inputSearch.classList.toggle('sr-only')
})

const DOM = {
  InformationContainer: document.querySelector('.cards'),

  addProduct(transaction) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = DOM.innerHTMLProduct(transaction)

    DOM.InformationContainer.appendChild(card)
  },

  innerHTMLProduct(transaction) {
    const html = `
        <div class="header">
          <h2>${transaction.name}</h2>
        </div>
        <div class="content">
          <img src=${transaction.picture} alt="${transaction.name}" />
        </div>
        <div class="footer">
          <div class="price">
            <span>${(transaction.price + 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}</span>
            <strong>${transaction.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}</strong>
          </div>
          <div class="info">
            <p>Frete Grátis</p>
          </div>
        </div>
        <div class="buttons">
          <button>Comprar agora</button>
        </div>
    `

    return html
  }
}

const App = {
  init() {
    products.forEach(DOM.addProduct)
  }
}

App.init()
