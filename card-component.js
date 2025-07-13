class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        console.log("Hello World");
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <h1>Hello World</h1>
        `;
        return template;
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