

class Banner extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        
        <section class="sp--banner">
            <div class="sp--container-banner">
                
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