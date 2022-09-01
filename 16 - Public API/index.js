class GithubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`

    return fetch(endpoint)
      .then(data => data.json())
      .then(data => ({
        login: data.login,
        name: data.name,
        public_repos: data.public_repos,
        followers: data.followers,
        avatar_url: data.avatar_url
      }))
  }
}

const DOM = {
  InfoContainer: document.querySelector('.profile'),

  searchUser(user) {
    const divUser = document.createElement('div')
    divUser.classList.add('profile')

    divUser.innerHTML = DOM.innerHTMLUser(user)

    DOM.InfoContainer.appendChild(divUser)
  },

  innerHTMLUser(user) {
    const html = `
      <div class="pic">
        <img src=${user.avatar_url} alt= ${user.name}/>
      </div>
      <div class="info">
        <div class="login">
          <strong>Login:</strong><span> ${user.login}</span>
        </div>
        <div class="name">
          <strong>Name:</strong><span> ${user.name}</span>
        </div>
        <div class="repositories">
          <strong>Repositories:</strong><span> ${user.public_repos} </span>
        </div>
        <div class="followers">
          <strong>Followers:</strong><span> ${user.followers}</span>
        </div>
      </div>
      
    `

    return html
  },

  clearSearch() {
    DOM.InfoContainer.innerHTML = ''
  }
}

const App = {
  init() {
    DOM.clearSearch()
  }
}

App.init()

const button = document.querySelector('#button')

button.addEventListener('click', () => {
  DOM.clearSearch()

  if (document.querySelector('#search').value != '') {
    GithubUser.search(document.querySelector('#search').value).then(user =>
      DOM.searchUser(user)
    )
  }
})
