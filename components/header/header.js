

class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <head>
        <link rel="stylesheet" href="./components/header/header.css">
        </head>
        
        <header class="sp--header">
            <div class="sp--header-container-master">
                <div class="sp--header-container-menu">
                    <img src="./img/logo.png" alt="logo" class="sp--header-logo">
                    <ul class="sp--header-menu-list">
                        <a href="#" class="sp--menu-link">
                            <li class="sp--menu-item"> Inicio </li>
                        </a>
                        <a href="#" class="sp--menu-link">
                            <li class="sp--menu-item"> Séries </li>
                        </a>
                        <a href="#" class="sp--menu-link">
                            <li class="sp--menu-item"> Filmes </li>
                        </a>
                        <a href="#" class="sp--menu-link">
                            <li class="sp--menu-item"> Ao Vivo </li>
                        </a>
                    </ul>
                </div>
                <div class="sp--header-container-pesquisa">
                    <input type="text" class="sp--header-pesquisar" placeholder="Pesquisar...">
                    <img src="./img/user.svg" alt="logo" class="sp--header-user">
                </div>
            </div>
        </header>
        `
      // browser calls this method when the element is added to the document
      // (can be called many times if an element is repeatedly added/removed)
    }
  
    disconnectedCallback() {
      // browser calls this method when the element is removed from the document
      // (can be called many times if an element is repeatedly added/removed)
    }
  
  }

  customElements.define('sp-header', Header);