import { LitElement, html, css } from "lit";

class CardComponent extends LitElement {
    // 1. Define propiedades reactivas. Lit las observa automáticamente como atributos.
    //    Los atributos como 'product-title' se mapearán a la propiedad 'productTitle'.
    static properties = {
        brand: { type: String },
        img: { type: String },
        productTitle: { type: String },
        productCollection: { type: String },
        productDescription: { type: String },
        price: { type: String }, // Considera Number si quieres hacer cálculos
    };

    // 2. Define tus estilos usando la propiedad static styles de Lit
    static styles = css`
        /* Usa :host para aplicar estilos al elemento personalizado en sí */
        :host {
            margin: 0;
            padding: 0;
            font-size: 62.5%; /* Base para rem */
            box-sizing: border-box; /* Asegura que el padding y el border se incluyan en el ancho y alto total */
            display: inline-block; /* Los elementos personalizados son inline por defecto */
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            // max-width: 300px;
            margin: 1rem;
            font-family: sans-serif;
        }

        article.card-component {
            // display: flex;
            // flex-direction: column;
            // height: 100%;
            display: grid;
            grid-template-rows: 14rem 20rem;
            max-width: 500px; 
        }

        .card-component--brand-container { /* Contenedor para marca e imagen */
            position: relative;
            text-align: center;
            padding-bottom: 10px; /* Espacio para la marca */
            background-color: #5a6cb2;
        }

        .brand-container--brand { /* Nombre de la marca */
            position: absolute;
            left: 10px;
            border-radius: 4px;
            font-size: 100px;
            font-weight: 800;
            color: #5161a0;
            z-index: 1;
        }

        .brand-container--image-container {
            position: absolute;
            top: 5rem;
            width: 100%;
            margin: 0 auto;
            overflow: hidden;
        }

        .brand-container--image-container img {
            width: 100%;
            max-width: 20rem;
            max-height: 100%;
            margin: 0 auto;
            object-fit: contain; /* Asegura que la imagen se ajuste sin recortar */
        }

        .card-component--details-container { /* Contenedor para los detalles del texto */
            padding: 1rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1; /* Permite que esta sección ocupe el espacio restante */
            justify-content: space-around;
            background-color: #f9f9f9;
        }

        .details-container--text-info {
            margin-top: 1rem;
        }

        .text-info--product-title {
            display: inline;
            padding: 0;
            margin: 0;
            margin-right: 1rem;
            font-size: 1.8rem;
            color: #444444;
        }

        .text-info--product-collection {
            display: inline;
            padding: 0;
            margin: 0;
            font-size: 1.2rem;
            font-weight: 300;
            color: #a69999;
            letter-spacing: 0.1rem;
        }

        .details-container--product-description {
            margin: 0;
            font-size: 0.8rem;
            color: #444444;
        }

        .details-container--price-info { /* Contenedor de precio y botón */
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px; /* Espacio encima del precio/botón */
        }

        .price-info--price {
            font-size: 1.6rem;
            font-weight: bold;
            color: #a69999;
        }

        .price-info--price-button {
            background-color: #5a6cb2;
            color: white;
            padding: 8px 15px;
            border-radius: 2rem;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.2s ease;
        }

        .price-info--price-button:hover {
            background-color: #0056b3;
        }
    `;

    // 3. El método render de LitElement crea y actualiza automáticamente el Shadow DOM
    render() {
        return html`
            <article class="card-component">
                <div class="card-component--brand-container">
                    <span class="brand-container--brand">${this.brand}</span>
                    <figure class="brand-container--image-container">
                        <img src=${this.img || ''} alt="product image"/>
                    </figure>
                </div>

                <div class="card-component--details-container">
                    <div class="details-container--text-info">
                        <h1 class="text-info--product-title">${this.productTitle}</h1>
                        <h2 class="text-info--product-collection">${this.productCollection}</h2>
                    </div>
                    <p class="details-container--product-description">${this.productDescription}</p>
                    <div class="details-container--price-info">
                        <span class="price-info--price">${this.price}</span>
                        <button class="price-info--price-button" @click=${this.#handleClick}>Comprar</button>
                    </div>
                </div>
            </article>
        `;
    }

    #handleClick() {
        console.log(`Has hecho click en el botón de ${this.productTitle}`);
    };

    // connectedCallback, disconnectedCallback y attributeChangedCallback
    // son manejados automáticamente por el sistema de propiedades de LitElement.
    // Solo necesitas implementarlos si tienes efectos secundarios no relacionados con la renderización.

    // Ejemplo de uso de connectedCallback si es necesario para efectos secundarios no relacionados con la renderización
    connectedCallback() {
        super.connectedCallback(); // Siempre llama a super.connectedCallback()
        // console.log('CardComponent conectado al DOM!');
        // Aquí podrías añadir escuchadores de eventos que no estén manejados por la plantilla de Lit
    }

    // Ejemplo de uso de attributeChangedCallback si es necesario para efectos secundarios no relacionados con la renderización
    // Nota: Por lo general, no necesitas esto si estás usando propiedades estáticas
    // attributeChangedCallback(name, oldValue, newValue) {
    //     super.attributeChangedCallback(name, oldValue, newValue); // Siempre llama a super
    // }
}

customElements.define("card-component", CardComponent);