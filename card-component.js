class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.img = this.getAttribute("img");
        this.productTitle = this.getAttribute("productTitle");
        this.productCollection = this.getAttribute("productCollection");
        this.productDescription = this.getAttribute("productDescription");
        this.price = this.getAttribute("price");
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <article>
                <div>
                    <h1>Nike</h1>
                    <figure>
                        <img src=${this.img} alt="product image"/>
                    </figure>
                </div>

                <div>
                    <h1 class="product-title">${this.productTitle}</h1>
                    <h2 class="product-collection">${this.productCollection}</h2>
                    <p class="product-description">${this.productDescription}</p>
                    <div>
                        <span class="price">${this.price}</span>
                        <button>Comprar</button>
                    </div>
                </div>
            </article>
        `;
        return template;
    }

    getStyles() {
        const style = document.createElement("style");
        style.textContent = `

        `;
    }

    static get observedAttributes() {
        return ["img", "title", "collection", "description", "price"];
    }

    attibuteChangedCallback(attribute, oldValue, newValue) {
        if (oldValue === newValue) {
            return; // Avoid unnecessary updates if the value hasn't actually changed
        }

        if (attribute === "img") {
            const img = this.shadowRoot.querySelector("img");
            if(img) {
                img.src = newValue;
            }
        }

        if(attribute === "productTitle") {
            const productTitle = this.shadowRoot.querySelector(".product-title");
            if(productTitle) {
                productTitle.textContent = newValue;
            }
        }

        if(attribute === "productCollection") {
            const productCollection = this.shadowRoot.querySelector(".product-collection");
            if(productCollection) {
                productCollection.textContent = newValue;
            }
        }

        if(attribute === "productDescription") {
            const productDescription = this.shadowRoot.querySelector(".product-description");
            if(productDescription) {
                productDescription.textContent = newValue;
            }
        }

        if(attribute === "price") {
            const price = this.shadowRoot.querySelector(".price");
            if(price) {
                price.textContent = newValue;
            }
        }
    }

    render() {
        const template = this.getTemplate();
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("card-component", CardComponent);