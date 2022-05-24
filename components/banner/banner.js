

class Banner extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        
        <section class="sp--banner">
            <div class="sp--container-banner">
                <div class="sp--banner-classificacao">
                    <img src="./img/classificacao.png" alt="" class="sp--classificacao-img">
                </div>
                <div class="sp--banner-botoes">
                    <button class="sp--banner-btn-play">Assistir</button>
                    <button class="sp--banner-btn-info">i</button>
                </div>
            </div>
        </section>
        `
      // browser calls this method when the element is added to the document
      // (can be called many times if an element is repeatedly added/removed)
    }
  
    disconnectedCallback() {
      // browser calls this method when the element is removed from the document
      // (can be called many times if an element is repeatedly added/removed)
    }
  
  }

  customElements.define('sp-banner', Banner);